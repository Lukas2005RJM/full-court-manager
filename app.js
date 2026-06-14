const teamData = [
  ['atl','Atlanta','Hawks','ATL','#e03a3e','East',78,['Jalen Johnson','CJ McCollum','Kristaps Porzingis','Dyson Daniels','Onyeka Okongwu']],
  ['bos','Boston','Celtics','BOS','#007a33','East',87,['Jayson Tatum','Jaylen Brown','Derrick White','Payton Pritchard','Neemias Queta']],
  ['bkn','Brooklyn','Nets','BKN','#111111','East',70,['Michael Porter Jr.','Nic Claxton','Cam Thomas','Terance Mann','Noah Clowney']],
  ['cha','Charlotte','Hornets','CHA','#1d1160','East',73,['LaMelo Ball','Brandon Miller','Miles Bridges','Kon Knueppel','Mark Williams']],
  ['chi','Chicago','Bulls','CHI','#ce1141','East',74,['Josh Giddey','Coby White','Matas Buzelis','Nikola Vucevic','Ayo Dosunmu']],
  ['cle','Cleveland','Cavaliers','CLE','#860038','East',91,['Donovan Mitchell','James Harden','Evan Mobley','Jarrett Allen','DeAndre Hunter']],
  ['dal','Dallas','Mavericks','DAL','#00538c','West',82,['Anthony Davis','Cooper Flagg','Kyrie Irving','Klay Thompson','Dereck Lively II']],
  ['den','Denver','Nuggets','DEN','#0e2240','West',91,['Nikola Jokic','Jamal Murray','Aaron Gordon','Cameron Johnson','Christian Braun']],
  ['det','Detroit','Pistons','DET','#c8102e','East',88,['Cade Cunningham','Jalen Duren','Ausar Thompson','Tobias Harris','Jaden Ivey']],
  ['gsw','Golden State','Warriors','GSW','#1d428a','West',84,['Stephen Curry','Jimmy Butler III','Draymond Green','Jonathan Kuminga','Brandin Podziemski']],
  ['hou','Houston','Rockets','HOU','#ce1141','West',90,['Kevin Durant','Alperen Sengun','Amen Thompson','Jabari Smith Jr.','Reed Sheppard']],
  ['ind','Indiana','Pacers','IND','#002d62','East',80,['Tyrese Haliburton','Pascal Siakam','Andrew Nembhard','Bennedict Mathurin','T.J. McConnell']],
  ['lac','LA','Clippers','LAC','#c8102e','West',82,['Kawhi Leonard','Darius Garland','Ivica Zubac','Bradley Beal','Bogdan Bogdanovic']],
  ['lal','Los Angeles','Lakers','LAL','#552583','West',88,['Luka Doncic','LeBron James','Austin Reaves','Deandre Ayton','Marcus Smart']],
  ['mem','Memphis','Grizzlies','MEM','#5d76a9','West',79,['Ja Morant','Jaren Jackson Jr.','Zach Edey','Santi Aldama','Vince Williams Jr.']],
  ['mia','Miami','Heat','MIA','#98002e','East',82,['Bam Adebayo','Norman Powell','Tyler Herro','Andrew Wiggins','Davion Mitchell']],
  ['mil','Milwaukee','Bucks','MIL','#00471b','East',84,['Giannis Antetokounmpo','Myles Turner','Kyle Kuzma','Bobby Portis','Kevin Porter Jr.']],
  ['min','Minnesota','Timberwolves','MIN','#0c2340','West',88,['Anthony Edwards','Julius Randle','Rudy Gobert','Jaden McDaniels','Naz Reid']],
  ['nop','New Orleans','Pelicans','NOP','#0c2340','West',72,['Zion Williamson','Trey Murphy III','Dejounte Murray','Jordan Poole','Herbert Jones']],
  ['nyk','New York','Knicks','NYK','#006bb6','East',89,['Jalen Brunson','Karl-Anthony Towns','Mikal Bridges','OG Anunoby','Josh Hart']],
  ['okc','Oklahoma City','Thunder','OKC','#007ac1','West',95,['Shai Gilgeous-Alexander','Chet Holmgren','Jalen Williams','Isaiah Hartenstein','Cason Wallace']],
  ['orl','Orlando','Magic','ORL','#0077c0','East',84,['Paolo Banchero','Franz Wagner','Desmond Bane','Jalen Suggs','Wendell Carter Jr.']],
  ['phi','Philadelphia','76ers','PHI','#006bb6','East',79,['Tyrese Maxey','Joel Embiid','Paul George','VJ Edgecombe','Jared McCain']],
  ['phx','Phoenix','Suns','PHX','#1d1160','West',76,['Devin Booker','Jalen Green','Dillon Brooks','Grayson Allen','Royce ONeale']],
  ['por','Portland','Trail Blazers','POR','#e03a3e','West',77,['Deni Avdija','Shaedon Sharpe','Jrue Holiday','Donovan Clingan','Scoot Henderson']],
  ['sac','Sacramento','Kings','SAC','#5a2d81','West',75,['Domantas Sabonis','DeMar DeRozan','Zach LaVine','Keegan Murray','Malik Monk']],
  ['sas','San Antonio','Spurs','SAS','#8a8d8f','West',89,['Victor Wembanyama','DeAaron Fox','Stephon Castle','Dylan Harper','Devin Vassell']],
  ['tor','Toronto','Raptors','TOR','#ce1141','East',81,['Scottie Barnes','Brandon Ingram','RJ Barrett','Immanuel Quickley','Jakob Poeltl']],
  ['uta','Utah','Jazz','UTA','#6a2c91','West',69,['Lauri Markkanen','Walker Kessler','Keyonte George','Ace Bailey','Isaiah Collier']],
  ['was','Washington','Wizards','WAS','#002b5c','East',68,['Trae Young','Alex Sarr','Tre Johnson','Bilal Coulibaly','Bub Carrington']]
];

const teams = teamData.map(([id,city,name,abbr,color,conference,strength,stars]) => ({id,city,name,abbr,color,conference,strength,stars:STATIC_ROSTERS[id]||stars}));
const firstNames = ['Andre','Marcus','Jaylen','Devin','Jordan','Cameron','Isaiah','Malik','Darius','Jamal','Tyler','Aaron','Miles','Jaden','Xavier'];
const lastNames = ['Williams','Johnson','Brown','Miller','Davis','Wilson','Moore','Taylor','Anderson','Thomas','Jackson','Martin','White','Harris','Walker'];
const positions = ['PG','SG','SF','PF','C'];
const positionByName = Object.fromEntries(Object.keys(STATIC_ROSTERS).flatMap(teamId=>STATIC_ROSTERS[teamId].map((name,i)=>[name,STATIC_POSITIONS[teamId][i]])));
const cap = 154.6;
let selection = null;
let slot = '1';
let save = null;
let currentView = 'overview';

const $ = selector => document.querySelector(selector);
const money = value => `$${Number(value).toFixed(1)}M`;
const teamById = id => teams.find(t => t.id === id);
const fullName = t => `${t.city} ${t.name}`;
const rand = (min,max) => Math.floor(Math.random()*(max-min+1))+min;
const clamp = (n,min,max) => Math.max(min,Math.min(max,n));
const saveKey = n => `fullCourtSaveV3_${n}`;

function renderTeamChoice() {
  $('#team-grid').innerHTML = teams.map(t => `<button class="team-card" style="--team-color:${t.color}" data-team="${t.id}"><span class="team-abbr">${t.abbr}</span><strong>${fullName(t)}</strong><small>${t.conference} · Stärke ${t.strength}</small><span class="check">✓</span></button>`).join('');
  renderExistingSaves();
}

function renderExistingSaves() {
  const items = [1,2,3].map(n => ({n,data:readSave(n)})).filter(x=>x.data);
  $('#existing-saves').innerHTML = items.length ? `<p class="eyebrow">KARRIEREN FORTSETZEN</p>${items.map(x=>`<button class="save-card" data-load-slot="${x.n}"><strong>Slot ${x.n} · ${x.data.manager}</strong><small>${fullName(teamById(x.data.activeTeam))} · ${x.data.seasonLabel} · ${x.data.phase}</small></button>`).join('')}` : '';
}

function setSelection(value) {
  selection=value;
  $('#all-teams').classList.toggle('selected',value==='all');
  document.querySelectorAll('.team-card').forEach(c=>c.classList.toggle('selected',c.dataset.team===value));
  $('#selection-count').textContent=value==='all'?'30 ausgewählt':value?'1 ausgewählt':'0 ausgewählt';
  $('#start-game').disabled=!value;
}

function makePlayer(name,i,team,index) {
  const star = i < 5;
  const rating = star ? clamp(team.strength+5-i*2,72,97) : clamp(team.strength-7-(i-5)+rand(-2,2),62,82);
  const age = star ? 21+((team.strength+i*4)%14) : rand(20,33);
  const rotation=[34,34,32,32,30,20,18,16,14,10,0,0,0,0,0];
  return {id:`${team.id}_${index}_${name.replace(/\W/g,'')}`,name,number:(index*7+team.strength)%56,position:positions[index%5],age,rating,potential:clamp(rating+(age<24?rand(4,10):rand(-2,3)),60,98),salary:Number((star?(rating-60)*0.9+4:rand(12,80)/10).toFixed(1)),years:rand(1,4),minutes:rotation[index]||0,fatigue:0,injury:0,training:'Ausgewogen',stats:{gp:0,pts:0,reb:0,ast:0,stl:0,blk:0}};
}

function resetStats(){return {gp:0,pts:0,reb:0,ast:0,stl:0,blk:0};}

function normalizePlayerPositions(rosters){
  Object.values(rosters||{}).forEach(roster=>{
    roster.forEach(p=>{if(positionByName[p.name])p.position=positionByName[p.name]});
    normalizeRotationSetup(roster);
  });
  return rosters;
}

const starterSlots=['PG','SG','SF','PF','C'];
const slotPositions={PG:['PG','G'],SG:['SG','G','GF'],SF:['SF','GF','F'],PF:['PF','F','FC'],C:['C','FC']};
const fitsSlot=(position,slot)=>slotPositions[slot].includes(position);

function chooseStartingFive(roster){
  const available=roster.filter(p=>!p.twoWay).sort((a,b)=>b.rating-a.rating||a.age-b.age),chosen=[];
  return starterSlots.map(slot=>{
    const player=available.find(p=>!chosen.includes(p)&&fitsSlot(p.position,slot))||available.find(p=>!chosen.includes(p));
    if(player)chosen.push(player);
    return player;
  });
}

function normalizeRotationSetup(roster){
  const validStarters=roster.filter(p=>starterSlots.includes(p.starterSlot));
  if(validStarters.length!==5||new Set(validStarters.map(p=>p.starterSlot)).size!==5){
    roster.forEach(p=>p.starterSlot=null);
    chooseStartingFive(roster).forEach((p,i)=>{if(p)p.starterSlot=starterSlots[i]});
  }
  roster.slice().sort((a,b)=>(a.rotationOrder??999)-(b.rotationOrder??999)||b.rating-a.rating).forEach((p,i)=>p.rotationOrder=i);
  return roster;
}

function buildDefaultRotation(roster) {
  roster.forEach(p=>{p.minutes=0;p.starterSlot=null});
  const starters=chooseStartingFive(roster);
  starters.forEach((p,i)=>{if(p)p.starterSlot=starterSlots[i]});
  const rotation=[...starters,...roster.filter(p=>!p.twoWay&&!starters.includes(p)).sort((a,b)=>b.rating-a.rating||a.age-b.age)].filter(Boolean).slice(0,10);
  const minutePlan=[36,34,32,30,28,22,19,16,13,10];
  rotation.forEach((p,i)=>{p.minutes=minutePlan[i];p.rotationOrder=i});
  roster.filter(p=>!rotation.includes(p)).forEach((p,i)=>p.rotationOrder=rotation.length+i);
  return roster;
}

function fallbackRoster(team) {
  const entered=typeof STATIC_PLAYER_DATA!=='undefined' ? STATIC_PLAYER_DATA[team.id] : null;
  if (!entered) return team.stars.map((n,i)=>makePlayer(n,i,team,i));
  const roster=entered.map((data,i)=>{
    const player=Object.assign(makePlayer(data.name,i,team,i),data);
    player.position=positionByName[data.name]||data.position||positions[i%5];
    player.salaries=[...(data.salaries||Array(data.years||1).fill(data.salary))];
    player.contractYear=0;
    player.stats=resetStats();
    return player;
  });
  return buildDefaultRotation(roster);
}

async function fetchRoster(team) {
  try {
    const response=await fetch(`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${team.id}/roster`);
    if(!response.ok) throw new Error('roster');
    const data=await response.json();
    const raw=data.athletes||[];
    const athletes=(raw.some(g=>g.items||g.athletes)?raw.flatMap(g=>g.items||g.athletes||[]):raw).slice(0,15);
    if(athletes.length<15) throw new Error('short roster');
    return athletes.map((a,i)=>{
      const p=makePlayer(a.fullName||a.displayName||`Spieler ${i+1}`,i,team,i);
      p.number=Number(a.jersey)||p.number;
      p.position=a.position?.abbreviation||p.position;
      p.age=Number(a.age)||p.age;
      return p;
    });
  } catch { return fallbackRoster(team); }
}

function generateSchedule() {
  const ids=teams.map(t=>t.id); const rounds=[]; let arr=[...ids];
  for(let r=0;r<29;r++) {
    const games=[];
    for(let i=0;i<15;i++) games.push({home:r%2?arr[29-i]:arr[i],away:r%2?arr[i]:arr[29-i],played:false});
    rounds.push(games); arr=[arr[0],arr[29],...arr.slice(1,29)];
  }
  const schedule=[];
  for(let day=0;day<82;day++) schedule.push(rounds[day%29].map((g,i)=>({...g,home:Math.floor(day/29)%2?g.away:g.home,away:Math.floor(day/29)%2?g.home:g.away,id:`g_${day}_${i}`})));
  return schedule;
}

function generateProspects(season=1) {
  return Array.from({length:30},(_,i)=>{const rating=clamp(79-Math.floor(i/4)+rand(-2,2),61,82);return{id:`prospect_${season}_${i}`,name:`${firstNames[(i+season)%15]} ${lastNames[(i*2+season)%15]}`,position:positions[i%5],age:19+rand(0,3),rating,potential:clamp(rating+rand(6,16),75,98),salary:5.5,years:4,minutes:0,fatigue:0,injury:0,training:'Ausgewogen',stats:{gp:0,pts:0,reb:0,ast:0,stl:0,blk:0}}});
}

function makeFreeAgents() { return Array.from({length:20},(_,i)=>makePlayer(`${firstNames[(i+7)%15]} ${lastNames[(i*5+4)%15]}`,8+i,teams[i%30],90+i)).map((p,i)=>({...p,id:`fa_${i}`,rating:clamp(76-i+rand(-2,3),62,79),salary:Number((2+Math.max(0,15-i)*.45).toFixed(1)),years:1,minutes:0})); }

function startCareer() {
  const button=$('#start-game'); button.disabled=true; button.firstChild.textContent='KADER WERDEN GELADEN... ';
  slot=$('#save-slot').value;
  const rosters={};
  const loaded=teams.map(fallbackRoster); teams.forEach((t,i)=>rosters[t.id]=loaded[i]);
  save={version:9,slot,manager:$('#manager-name').value.trim()||'Coach',controlAll:selection==='all',activeTeam:selection==='all'?'atl':selection,season:1,seasonLabel:'2025/26',phase:'Regular Season',day:0,rosters:normalizePlayerPositions(rosters),records:Object.fromEntries(teams.map(t=>[t.id,{wins:0,losses:0,pf:0,pa:0}])),schedule:generateSchedule(),freeAgents:makeFreeAgents(),prospects:generateProspects(),history:[],playoffs:null,lastGame:null,news:['Die neue NBA-Saison beginnt.'],trainingPoints:Object.fromEntries(teams.map(t=>[t.id,3]))};
  persist(); showDashboard();
}

function persist() { localStorage.setItem(saveKey(slot),JSON.stringify(save)); }
function readSave(n) { try { const d=JSON.parse(localStorage.getItem(saveKey(n)));if(!d||d.version<5)return null;d.rosters=normalizePlayerPositions(d.rosters);d.version=9;return d; } catch{return null;} }
function activeTeam(){return teamById(save.activeTeam);}
function payroll(id){return save.rosters[id].reduce((s,p)=>s+p.salary,0);}
function contractLabel(p){
  if(p.twoWay)return 'Two-Way';
  const years=(p.salaries||[p.salary]).map((x,i)=>`${2025+i}/${String(26+i).padStart(2,'0')}: ${money(x)}`).join(' · ');
  const option=p.option?` · ${p.option==='Player'?'Spieleroption':'Teamoption'}`:'';
  const guarantee=p.guaranteed===false?' · nicht garantiert':p.guaranteed!=null?` · garantiert ${money(p.guaranteed)}`:'';
  return years+option+guarantee;
}
function healthyRoster(id){return save.rosters[id].filter(p=>p.injury<=0);}
function activeGameRotation(id){
  const roster=save.rosters[id],healthy=healthyRoster(id),chosen=[];
  const bench=healthy.filter(p=>!p.starterSlot).sort((a,b)=>(a.rotationOrder??99)-(b.rotationOrder??99)||b.rating-a.rating);
  starterSlots.forEach(slot=>{
    const starter=healthy.find(p=>p.starterSlot===slot);
    if(starter)return chosen.push(starter);
    const replacement=bench.find(p=>!chosen.includes(p)&&fitsSlot(p.position,slot))||bench.find(p=>!chosen.includes(p));
    if(replacement)chosen.push(replacement);
  });
  bench.filter(p=>p.minutes>0&&!chosen.includes(p)).slice(0,10-chosen.length).forEach(p=>chosen.push(p));
  healthy.filter(p=>!chosen.includes(p)).sort((a,b)=>b.rating-a.rating).slice(0,10-chosen.length).forEach(p=>chosen.push(p));
  if(!chosen.length)return [];
  const weights=chosen.map(p=>Math.max(8,p.minutes||12)*(0.72+p.rating/260));
  const raw=weights.map(w=>240*w/weights.reduce((s,x)=>s+x,0));
  const mins=raw.map(Math.floor);let left=240-mins.reduce((s,x)=>s+x,0);
  raw.map((x,i)=>({i,f:x-mins[i]})).sort((a,b)=>b.f-a.f).slice(0,left).forEach(x=>mins[x.i]++);
  return chosen.map((p,i)=>({player:p,minutes:mins[i]}));
}
function teamPower(id){
  const rotation=activeGameRotation(id);if(!rotation.length)return 55;
  const weighted=rotation.reduce((s,x)=>s+x.player.rating*x.minutes*(1-x.player.fatigue/260),0)/240;
  const stars=rotation.slice().sort((a,b)=>b.player.rating-a.player.rating).slice(0,3).reduce((s,x)=>s+Math.max(0,x.player.rating-84),0)*.12;
  const hasGuard=rotation.some(x=>['PG','SG','G','GF'].includes(x.player.position)),hasBig=rotation.some(x=>['PF','C','F','FC'].includes(x.player.position));
  return weighted+stars-(hasGuard&&hasBig?0:2.5);
}

function showDashboard(){
  $('#setup-screen').classList.add('hidden'); $('#dashboard').classList.remove('hidden');
  const list=save.controlAll?teams:teams.filter(t=>t.id===save.activeTeam);
  $('#team-switcher').innerHTML=list.map(t=>`<option value="${t.id}" ${t.id===save.activeTeam?'selected':''}>${fullName(t)}</option>`).join('');
  $('#team-switcher').classList.toggle('hidden',!save.controlAll); renderView('overview');
}

function setHeader(){const t=activeTeam();$('#welcome-title').textContent=`${save.manager} · ${t.abbr}`;$('#season-status').textContent=`${save.seasonLabel} · ${save.phase} · ${save.phase==='Regular Season'?`Spieltag ${Math.min(82,save.day+1)}`:''}`;$('#active-team-mark').innerHTML=`${fullName(t)}<small>${save.controlAll?'Alle Teams steuerbar':`Slot ${slot}`} · ${money(payroll(t.id))} Payroll</small>`;}

function renderView(view=currentView){currentView=view;setHeader();document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.view===view));const fn={overview:renderOverview,roster:renderRoster,rotation:renderRotation,schedule:renderSchedule,standings:renderStandings,transactions:renderTransactions,draft:renderDraft,playoffs:renderPlayoffs}[view]||renderOverview;fn();}

function renderOverview(){
  const t=activeTeam(),r=save.records[t.id],next=findNextGame(t.id),rank=conferenceStandings(t.conference).findIndex(x=>x.id===t.id)+1;
  $('#view-content').innerHTML=`<div class="stats-grid"><div class="stat-box"><small>Bilanz</small><strong>${r.wins}-${r.losses}</strong></div><div class="stat-box"><small>Conference</small><strong>#${rank}</strong></div><div class="stat-box"><small>Kader</small><strong>${save.rosters[t.id].length}</strong><small>Spieler</small></div><div class="stat-box"><small>Teamstärke</small><strong>${teamPower(t.id).toFixed(0)}</strong></div></div>
  <div class="action-bar"><button class="primary-action" id="sim-next" ${save.phase!=='Regular Season'?'disabled':''}>NÄCHSTEN SPIELTAG SIMULIEREN</button><button class="secondary-action" id="sim-10" ${save.phase!=='Regular Season'?'disabled':''}>10 SPIELTAGE</button></div>
  <div class="dash-grid"><div class="content-card"><h3>Team-News</h3>${save.news.slice(-6).reverse().map(n=>`<p class="news-item">${n}</p>`).join('')}</div><div class="content-card"><h3>Nächstes Spiel</h3>${next?`<div class="next-game"><strong>${teamById(next.home).abbr}</strong><span class="versus">VS</span><strong>${teamById(next.away).abbr}</strong><p>Spieltag ${next.day+1}</p></div>`:`<p class="muted">Reguläre Saison beendet.</p>`}${save.lastGame?`<button class="text-button" id="last-boxscore">Letzten Boxscore öffnen</button>`:''}</div></div>`;
}

function renderRoster(){const t=activeTeam();$('#view-content').innerHTML=`<div class="content-card"><div class="card-head"><h3>Kader · ${fullName(t)}</h3><span>${save.rosters[t.id].length} Spieler · ${money(payroll(t.id))}</span></div><div class="table-wrap"><table><thead><tr><th>#</th><th>Spieler</th><th>Pos</th><th>Alter</th><th>OVR</th><th>POT</th><th>Vertrag</th><th>Status</th><th>Schnitt</th></tr></thead><tbody>${save.rosters[t.id].sort((a,b)=>b.rating-a.rating).map(p=>`<tr><td>${p.number}</td><td><strong>${p.name}</strong></td><td>${p.position}</td><td>${p.age}</td><td class="rating">${p.rating}</td><td>${p.potential}</td><td title="${contractLabel(p)}">${p.twoWay?'Two-Way':`${money(p.salary)} · ${p.years}J${p.option?` · ${p.option==='Player'?'PO':'TO'}`:''}`}</td><td>${p.injury>0?`<span class="bad">Verletzt (${p.injury})</span>`:`Fit · ${p.fatigue}%`}</td><td>${p.stats.gp?(p.stats.pts/p.stats.gp).toFixed(1):'0.0'} PPG</td></tr>`).join('')}</tbody></table></div><p class="muted">Fahre mit der Maus über einen Vertrag, um alle Jahresgehälter und Garantien zu sehen. PO = Spieleroption, TO = Teamoption.</p></div>`;}

function lineupWarnings(roster){
  const warnings=[];
  starterSlots.forEach(slot=>{const p=roster.find(x=>x.starterSlot===slot);if(p&&!fitsSlot(p.position,slot))warnings.push(`${slot}: ${p.name} (${p.position}) passt nicht ideal.`)});
  return warnings;
}

function renderRotation(){
  const t=activeTeam(),roster=normalizeRotationSetup(save.rosters[t.id]);
  const starters=starterSlots.map(slot=>({slot,player:roster.find(p=>p.starterSlot===slot)}));
  const bench=roster.filter(p=>!p.starterSlot).sort((a,b)=>a.rotationOrder-b.rotationOrder);
  const playerOptions=roster.filter(p=>!p.twoWay).map(p=>`<option value="${p.id}">${p.name} · ${p.position} · OVR ${p.rating}</option>`).join('');
  const warnings=lineupWarnings(roster);
  $('#view-content').innerHTML=`<div class="split-grid"><div class="content-card"><div class="card-head"><h3>Starting Five</h3><span>Manuelle Aufstellung</span></div><p class="muted">Wähle für jede Position einen Starter. Ungewöhnliche Aufstellungen sind möglich, werden aber markiert.</p><div class="starter-grid">${starters.map(({slot,player})=>`<label><span>${slot}</span><select class="starter-select" data-slot="${slot}">${playerOptions.replace(`value="${player?.id}"`,`value="${player?.id}" selected`)}</select></label>`).join('')}</div><div id="lineup-warning" class="lineup-warning ${warnings.length?'':'hidden'}">${warnings.join('<br>')}</div><button class="secondary-action full-button" id="auto-rotation">BESTE ROTATION AUTOMATISCH WÄHLEN</button><h3 class="section-title">Bankreihenfolge</h3><p class="muted">Bei Verletzungen rückt der oberste passende Bankspieler zuerst nach.</p><div class="bench-list">${bench.map((p,i)=>`<div class="bench-row" data-bench-player="${p.id}"><span class="bench-rank">${i+1}</span><strong>${p.name}<small>${p.position} · OVR ${p.rating}${p.twoWay?' · Two-Way':''}</small></strong><span class="bench-controls"><button data-bench-up="${p.id}" ${i===0?'disabled':''}>↑</button><button data-bench-down="${p.id}" ${i===bench.length-1?'disabled':''}>↓</button></span></div>`).join('')}</div></div><div><div class="content-card"><div class="card-head"><h3>Spielminuten</h3><span id="minute-total">${roster.reduce((s,p)=>s+p.minutes,0)} / 240 Min.</span></div>${roster.slice().sort((a,b)=>(a.starterSlot?starterSlots.indexOf(a.starterSlot):99)-(b.starterSlot?starterSlots.indexOf(b.starterSlot):99)||a.rotationOrder-b.rotationOrder).map(p=>`<div class="rotation-row"><span><strong>${p.name}</strong><small>${p.starterSlot?`Starter ${p.starterSlot}`:'Bank'} · ${p.position} · OVR ${p.rating}</small></span><input class="minute-input" data-player="${p.id}" type="number" min="0" max="42" value="${p.minutes}"></div>`).join('')}<button class="primary-action" id="save-rotation">AUFSTELLUNG SPEICHERN</button></div><div class="content-card training-card"><h3>Training · ${save.trainingPoints[t.id]} Punkte</h3>${roster.slice().sort((a,b)=>b.potential-b.rating-(a.potential-a.rating)).slice(0,8).map(p=>`<div class="training-row"><span><strong>${p.name}</strong><small>OVR ${p.rating} · POT ${p.potential}</small></span><select data-training="${p.id}"><option>Ausgewogen</option><option>Wurf</option><option>Defense</option><option>Athletik</option><option>Regeneration</option></select><button data-train="${p.id}">Trainieren</button></div>`).join('')}</div></div></div>`;
}

function moveBenchPlayer(id,direction){
  const row=document.querySelector(`[data-bench-player="${id}"]`);if(!row)return;
  const sibling=direction<0?row.previousElementSibling:row.nextElementSibling;if(!sibling)return;
  if(direction<0)row.parentElement.insertBefore(row,sibling);else row.parentElement.insertBefore(sibling,row);
  [...document.querySelectorAll('[data-bench-player]')].forEach((x,i)=>{x.querySelector('.bench-rank').textContent=i+1;const buttons=x.querySelectorAll('button');buttons[0].disabled=i===0;buttons[1].disabled=i===document.querySelectorAll('[data-bench-player]').length-1});
}

function saveRotationSetup(){
  const roster=save.rosters[save.activeTeam],selects=[...document.querySelectorAll('.starter-select')],ids=selects.map(x=>x.value);
  if(new Set(ids).size!==5)return alert('Jeder Starter darf nur einmal ausgewählt werden.');
  const inputs=[...document.querySelectorAll('.minute-input')],total=inputs.reduce((s,x)=>s+Number(x.value),0);
  if(total!==240)return alert(`Die Rotation muss genau 240 Minuten ergeben. Aktuell: ${total}.`);
  roster.forEach(p=>p.starterSlot=null);selects.forEach(x=>roster.find(p=>p.id===x.value).starterSlot=x.dataset.slot);
  inputs.forEach(x=>roster.find(p=>p.id===x.dataset.player).minutes=Number(x.value));
  [...document.querySelectorAll('[data-bench-player]')].forEach((x,i)=>{const p=roster.find(y=>y.id===x.dataset.benchPlayer);if(p&&!p.starterSlot)p.rotationOrder=5+i});
  normalizeRotationSetup(roster);persist();const warnings=lineupWarnings(roster);alert(warnings.length?`Aufstellung gespeichert. Hinweis:\n${warnings.join('\n')}`:'Aufstellung gespeichert.');renderView('rotation');
}

function updateLineupPreview(){
  const box=$('#lineup-warning');if(!box)return;
  const roster=save.rosters[save.activeTeam],selects=[...document.querySelectorAll('.starter-select')],ids=selects.map(x=>x.value),warnings=[];
  if(new Set(ids).size!==ids.length)warnings.push('Ein Spieler wurde mehrfach als Starter gewählt.');
  selects.forEach(x=>{const p=roster.find(y=>y.id===x.value);if(p&&!fitsSlot(p.position,x.dataset.slot))warnings.push(`${x.dataset.slot}: ${p.name} (${p.position}) passt nicht ideal.`)});
  box.innerHTML=warnings.join('<br>');box.classList.toggle('hidden',!warnings.length);
}

function gamesForTeam(id){return save.schedule.flatMap((day,di)=>day.filter(g=>g.home===id||g.away===id).map(g=>({...g,day:di})));}
function findNextGame(id){return gamesForTeam(id).find(g=>!g.played);}
function renderSchedule(){const games=gamesForTeam(save.activeTeam);const start=Math.max(0,save.day-5);$('#view-content').innerHTML=`<div class="content-card"><div class="card-head"><h3>82-Spiele-Spielplan</h3><span>${games.filter(g=>g.played).length}/82 gespielt</span></div>${games.slice(start,start+18).map(g=>{const opp=teamById(g.home===save.activeTeam?g.away:g.home);return`<div class="game-row"><span class="number">${g.day+1}</span><strong>${g.home===save.activeTeam?'vs.':'@'} ${fullName(opp)}<small>${g.played?'Beendet':'Noch offen'}</small></strong><span>${g.played?`${g.homeScore}-${g.awayScore}`:'-'}</span></div>`}).join('')}</div>`;}

function conferenceStandings(conf){return teams.filter(t=>t.conference===conf).sort((a,b)=>{const ar=save.records[a.id],br=save.records[b.id];return br.wins-ar.wins||(br.pf-br.pa)-(ar.pf-ar.pa)});}
function renderStandings(){const table=conf=>`<div class="content-card"><h3>${conf}ern Conference</h3>${conferenceStandings(conf).map((t,i)=>{const r=save.records[t.id];return`<div class="standing-row"><span class="number">${i+1}</span><strong>${fullName(t)}<small>${i<6?'Playoffs':i<10?'Play-in':'Lottery'}</small></strong><span>${r.wins}-${r.losses}</span></div>`}).join('')}</div>`;$('#view-content').innerHTML=`<div class="split-grid">${table('East')}${table('West')}</div>`;}

function renderTransactions(){const t=activeTeam();const others=teams.filter(x=>x.id!==t.id);$('#view-content').innerHTML=`<div class="split-grid"><div class="content-card"><h3>Trade Center</h3><label>Dein Spieler</label><select id="trade-mine">${save.rosters[t.id].map(p=>`<option value="${p.id}">${p.name} · ${p.rating} · ${money(p.salary)}</option>`)}</select><label>Partner</label><select id="trade-team">${others.map(x=>`<option value="${x.id}">${fullName(x)}</option>`)}</select><label>Spieler des Partners</label><select id="trade-theirs"></select><button class="primary-action" id="offer-trade">Trade anbieten</button><p id="trade-result" class="muted"></p></div><div class="content-card"><h3>Free Agency</h3><p class="muted">Cap Space: ${money(cap-payroll(t.id))} · ${standardRosterCount(save.rosters[t.id])}/15 Standardverträge</p>${save.freeAgents.slice(0,12).map(p=>`<div class="player-row"><span class="number">${p.position}</span><strong>${p.name}<small>OVR ${p.rating} · ${money(p.salary)}</small></strong><button data-sign="${p.id}" ${standardRosterCount(save.rosters[t.id])>=15?'disabled':''}>Verpflichten</button></div>`).join('')||'<p>Keine Free Agents verfügbar.</p>'}</div></div>`;updateTradePlayers();}

function renderDraft(){const order=draftOrder();$('#view-content').innerHTML=`<div class="split-grid"><div class="content-card"><h3>Draft Board</h3><p class="muted">Der Draft findet nach den Playoffs statt. Reihenfolge aktuell nach Bilanz.</p>${save.prospects.slice(0,15).map((p,i)=>`<div class="player-row"><span class="number">${i+1}</span><strong>${p.name}<small>${p.position} · ${p.age} Jahre · POT ${p.potential}</small></strong><span class="rating">${p.rating}</span></div>`).join('')}</div><div class="content-card"><h3>Aktuelle Draft-Reihenfolge</h3>${order.slice(0,15).map((t,i)=>`<div class="standing-row"><span class="number">${i+1}</span><strong>${fullName(t)}</strong><span>${save.records[t.id].wins} Siege</span></div>`).join('')}${save.phase==='Offseason'?'<button class="primary-action" id="run-draft">Draft durchführen</button>':''}</div></div>`;}

function renderPlayoffs(){if(!save.playoffs){$('#view-content').innerHTML=`<div class="content-card empty-state"><h3>NBA Playoffs</h3><p>Nach 82 Spieltagen starten zuerst die Play-in-Spiele und danach vier Best-of-Seven-Runden.</p><button class="primary-action" id="finish-season" ${save.phase!=='Regular Season'?'disabled':''}>REGULAR SEASON SIMULIEREN</button></div>`;return;} $('#view-content').innerHTML=`<div class="content-card"><h3>Playoff-Ergebnisse</h3>${save.playoffs.log.map(x=>`<p class="news-item">${x}</p>`).join('')} ${save.phase==='Playoffs'?'<button class="primary-action" id="sim-playoffs">PLAYOFFS SIMULIEREN</button>':''}${save.phase==='Offseason'?'<button class="primary-action" id="next-season">DRAFT & NÄCHSTE SAISON</button>':''}</div>`;}

function simulateGame(game,playoff=false){
  const hp=teamPower(game.home)+3,ap=teamPower(game.away);let hs=Math.round(105+(hp-78)*.75+rand(-12,12)),as=Math.round(105+(ap-78)*.75+rand(-12,12));while(hs===as){hs+=rand(0,6);as+=rand(0,6)}
  game.played=true;game.homeScore=hs;game.awayScore=as;game.box={home:playerBox(game.home,hs),away:playerBox(game.away,as)};
  if(!playoff){const hr=save.records[game.home],ar=save.records[game.away];hr.pf+=hs;hr.pa+=as;ar.pf+=as;ar.pa+=hs;if(hs>as){hr.wins++;ar.losses++}else{ar.wins++;hr.losses++}}
  return hs>as?game.home:game.away;
}

function playerBox(id,score){
  const rotation=activeGameRotation(id);
  const role={PG:{usage:1.08,reb:.65,ast:1.65,blk:.25},SG:{usage:1.12,reb:.75,ast:1.05,blk:.35},SF:{usage:1.02,reb:1,ast:.8,blk:.55},PF:{usage:.94,reb:1.35,ast:.55,blk:1},C:{usage:.9,reb:1.65,ast:.45,blk:1.55},G:{usage:1.1,reb:.7,ast:1.35,blk:.3},GF:{usage:1.07,reb:.88,ast:.92,blk:.45},F:{usage:.98,reb:1.18,ast:.68,blk:.78},FC:{usage:.92,reb:1.5,ast:.5,blk:1.28}};
  const weights=rotation.map(x=>Math.max(1,(x.player.rating-61)**1.55)*x.minutes*role[x.player.position].usage*(.88+Math.random()*.24));
  const total=weights.reduce((s,x)=>s+x,0)||1;
  const raw=weights.map(w=>score*w/total),points=raw.map(Math.floor);let left=score-points.reduce((s,x)=>s+x,0);
  raw.map((x,i)=>({i,f:x-points[i]})).sort((a,b)=>b.f-a.f).slice(0,left).forEach(x=>points[x.i]++);
  return rotation.map((x,i)=>{
    const p=x.player,r=role[p.position],minutes=x.minutes;
    const line={id:p.id,name:p.name,min:minutes,pts:points[i],reb:Math.max(0,Math.round(minutes/5.7*r.reb+rand(-2,2))),ast:Math.max(0,Math.round(minutes/8*r.ast+(p.rating-75)/14+rand(-2,2))),stl:Math.max(0,Math.round(minutes/28+(p.rating-75)/25+rand(-1,1))),blk:Math.max(0,Math.round(minutes/30*r.blk+(p.rating-75)/30+rand(-1,1)))};
    p.stats.gp++;p.stats.pts+=line.pts;p.stats.reb+=line.reb;p.stats.ast+=line.ast;p.stats.stl+=line.stl;p.stats.blk+=line.blk;
    p.fatigue=clamp(p.fatigue+Math.round(minutes/9),0,100);
    if(Math.random()<.003+p.fatigue/9000){p.injury=rand(1,10);save.news.push(`${p.name} fällt voraussichtlich ${p.injury} Spiele aus.`)}
    return line;
  });
}

function recoverPlayers(){teams.forEach(t=>save.rosters[t.id].forEach(p=>{p.fatigue=clamp(p.fatigue-3,0,100);if(p.injury>0)p.injury--}));}
function simulateDay(){if(save.day>=82){setupPostseason();return;}const games=save.schedule[save.day];games.forEach(g=>simulateGame(g));const mine=games.find(g=>g.home===save.activeTeam||g.away===save.activeTeam);save.lastGame=mine?.id||save.lastGame;save.day++;recoverPlayers();if(save.day%7===0)teams.forEach(t=>save.trainingPoints[t.id]+=3);if(mine)save.news.push(`${teamById(mine.home).abbr} ${mine.homeScore}:${mine.awayScore} ${teamById(mine.away).abbr}`);if(save.day>=82)setupPostseason();persist();}
function simulateDays(n){for(let i=0;i<n&&save.phase==='Regular Season';i++)simulateDay();renderView();}
function setupPostseason(){if(save.phase!=='Regular Season')return;save.phase='Playoffs';save.playoffs={log:[],champion:null};runPlayIn();}
function finishRegularSeason(render=true){while(save.day<82)simulateDay();setupPostseason();persist();if(render)renderView('playoffs');}

function series(a,b,label){let aw=0,bw=0;while(aw<4&&bw<4){const g={home:(aw+bw)%2?a:b,away:(aw+bw)%2?b:a};const w=simulateGame(g,true);w===a?aw++:bw++;}const winner=aw>bw?a:b;save.playoffs.log.push(`${label}: ${teamById(winner).abbr} gewinnt ${Math.max(aw,bw)}-${Math.min(aw,bw)} gegen ${teamById(winner===a?b:a).abbr}`);return winner;}
function singleGame(a,b,label){const g={home:a,away:b};const w=simulateGame(g,true);save.playoffs.log.push(`${label}: ${teamById(w).abbr} gewinnt ${g.homeScore}:${g.awayScore}`);return w;}
function runPlayIn(){['East','West'].forEach(c=>{const s=conferenceStandings(c),seven=singleGame(s[6].id,s[7].id,`${c} Play-in 7/8`),nine=singleGame(s[8].id,s[9].id,`${c} Play-in 9/10`),eight=singleGame(seven===s[6].id?s[7].id:s[6].id,nine,`${c} Play-in Finale`);save.playoffs[c]=[s[0].id,eight,s[3].id,s[4].id,s[2].id,s[5].id,s[1].id,seven];});}
function simulatePlayoffs(){const champs={};['East','West'].forEach(c=>{let b=save.playoffs[c];let r1=[series(b[0],b[1],`${c} Runde 1`),series(b[2],b[3],`${c} Runde 1`),series(b[4],b[5],`${c} Runde 1`),series(b[6],b[7],`${c} Runde 1`)];let r2=[series(r1[0],r1[1],`${c} Halbfinale`),series(r1[2],r1[3],`${c} Halbfinale`)];champs[c]=series(r2[0],r2[1],`${c} Finals`)});const champion=series(champs.East,champs.West,'NBA Finals');save.playoffs.champion=champion;save.phase='Offseason';save.history.push({season:save.seasonLabel,champion});save.news.push(`${fullName(teamById(champion))} sind NBA-Champion!`);persist();renderView('playoffs');}

function draftOrder(){return [...teams].sort((a,b)=>save.records[a.id].wins-save.records[b.id].wins);}
function standardRosterCount(roster){return roster.filter(p=>!p.twoWay).length;}
function runDraft(){draftOrder().forEach((t,i)=>{const p=save.prospects[i];if(!p)return;const roster=save.rosters[t.id];if(standardRosterCount(roster)>=15){const cut=roster.filter(x=>!x.twoWay).sort((a,b)=>a.rating-b.rating||b.age-a.age)[0];save.freeAgents.push(cut);roster.splice(roster.indexOf(cut),1)}roster.push({...p,id:`${t.id}_${p.id}`,salaries:Array(4).fill(p.salary),contractYear:0,stats:resetStats()});buildDefaultRotation(roster);});save.prospects=[];save.news.push('Der NBA Draft wurde durchgeführt.');persist();renderView('draft');}
function optionAccepted(p,nextSalary){const market=Math.max(2,(p.rating-68)*1.8+(p.potential-p.rating)*.5);return p.option==='Player'?nextSalary>=market*.72:market>=nextSalary*.72;}
function advanceSeason(){
  if(save.prospects.length)runDraft();
  teams.forEach(t=>{
    const returning=[];
    save.rosters[t.id].forEach(p=>{
      p.age++;const growth=p.age<25?Math.min(rand(0,2),p.potential-p.rating):p.age>32?-rand(0,2):p.rating<p.potential&&Math.random()<.25?1:0;
      p.rating=clamp(p.rating+growth,55,99);p.fatigue=0;p.injury=0;p.stats=resetStats();
      const salaries=p.salaries||Array(p.years||1).fill(p.salary),next=(p.contractYear||0)+1;
      const optionDeclined=p.option&&next===salaries.length-1&&!optionAccepted(p,salaries[next]);
      if(next>=salaries.length||optionDeclined){p.years=1;p.minutes=0;p.salary=Math.max(1,Number(((p.rating-68)*1.25+2).toFixed(1)));p.salaries=[p.salary];p.contractYear=0;p.option=null;save.freeAgents.push(p);}
      else{p.contractYear=next;p.salary=salaries[next];p.years=salaries.length-next;returning.push(p)}
    });
    save.rosters[t.id]=buildDefaultRotation(returning);
  });
  teams.forEach(t=>{
    const roster=save.rosters[t.id];
    while(standardRosterCount(roster)<15&&save.freeAgents.length){
      save.freeAgents.sort((a,b)=>b.rating-a.rating||a.age-b.age);
      const p=save.freeAgents.shift();
      p.twoWay=false;p.years=1;p.contractYear=0;p.salaries=[p.salary];p.minutes=0;p.stats=resetStats();roster.push(p);
    }
    buildDefaultRotation(roster);
  });
  save.season++;save.seasonLabel=`${2024+save.season}/${String(25+save.season).padStart(2,'0')}`;save.phase='Regular Season';save.day=0;save.records=Object.fromEntries(teams.map(t=>[t.id,{wins:0,losses:0,pf:0,pa:0}]));save.schedule=generateSchedule();save.prospects=generateProspects(save.season);save.playoffs=null;save.lastGame=null;persist();renderView('overview');
}

function showBoxscore(game){if(!game)return;const rows=(id,lines)=>`<h3>${fullName(teamById(id))}</h3><table><thead><tr><th>Spieler</th><th>MIN</th><th>PTS</th><th>REB</th><th>AST</th><th>STL</th><th>BLK</th></tr></thead><tbody>${lines.map(x=>`<tr><td>${x.name}</td><td>${x.min}</td><td>${x.pts}</td><td>${x.reb}</td><td>${x.ast}</td><td>${x.stl}</td><td>${x.blk}</td></tr>`).join('')}</tbody></table>`;$('#modal-content').innerHTML=`<h2>BOX SCORE · ${game.homeScore}:${game.awayScore}</h2><div class="table-wrap">${rows(game.home,game.box.home)}${rows(game.away,game.box.away)}</div>`;$('#game-modal').classList.remove('hidden');}
function findGameById(id){return save.schedule.flat().find(g=>g.id===id);}
function updateTradePlayers(){const el=$('#trade-team'),target=$('#trade-theirs');if(!el||!target)return;target.innerHTML=save.rosters[el.value].map(p=>`<option value="${p.id}">${p.name} · ${p.rating} · ${money(p.salary)}</option>`).join('');}
function offerTrade(){const mine=save.rosters[save.activeTeam].find(p=>p.id===$('#trade-mine').value),otherId=$('#trade-team').value,theirs=save.rosters[otherId].find(p=>p.id===$('#trade-theirs').value);const valueMine=mine.rating+(mine.potential-mine.rating)*.45-mine.age*.08,valueTheirs=theirs.rating+(theirs.potential-theirs.rating)*.45-theirs.age*.08;const salaryOk=Math.max(mine.salary,theirs.salary)<=Math.min(mine.salary,theirs.salary)*1.35+5;if(valueMine+rand(-3,3)>=valueTheirs&&salaryOk){save.rosters[save.activeTeam]=save.rosters[save.activeTeam].filter(p=>p.id!==mine.id);save.rosters[otherId]=save.rosters[otherId].filter(p=>p.id!==theirs.id);save.rosters[save.activeTeam].push(theirs);save.rosters[otherId].push(mine);save.news.push(`Trade: ${theirs.name} kommt für ${mine.name}.`);persist();renderView('transactions')}else $('#trade-result').textContent=salaryOk?'Das andere Team lehnt den sportlichen Gegenwert ab.':'Trade abgelehnt: Gehälter passen nicht zusammen.';}
function signPlayer(id){const p=save.freeAgents.find(x=>x.id===id);if(!p)return;const roster=save.rosters[save.activeTeam];if(standardRosterCount(roster)>=15||payroll(save.activeTeam)+p.salary>cap+10){alert('Kein Kaderplatz oder Cap Space verfügbar.');return}p.twoWay=false;p.salaries=[p.salary];p.contractYear=0;roster.push(p);buildDefaultRotation(roster);save.freeAgents=save.freeAgents.filter(x=>x.id!==id);save.news.push(`${p.name} unterschreibt für ${money(p.salary)}.`);persist();renderView('transactions');}

document.addEventListener('click',e=>{
  const nav=e.target.closest('.nav-item');if(nav)return renderView(nav.dataset.view);
  const team=e.target.closest('.team-card');if(team)return setSelection(team.dataset.team);
  const load=e.target.closest('[data-load-slot]');if(load){slot=load.dataset.loadSlot;save=readSave(slot);return showDashboard()}
  const sign=e.target.closest('[data-sign]');if(sign)return signPlayer(sign.dataset.sign);
  const benchUp=e.target.closest('[data-bench-up]');if(benchUp)return moveBenchPlayer(benchUp.dataset.benchUp,-1);
  const benchDown=e.target.closest('[data-bench-down]');if(benchDown)return moveBenchPlayer(benchDown.dataset.benchDown,1);
  const train=e.target.closest('[data-train]');if(train){const t=activeTeam();if(save.trainingPoints[t.id]<1)return alert('Keine Trainingspunkte verfügbar.');const p=save.rosters[t.id].find(x=>x.id===train.dataset.train);const type=document.querySelector(`[data-training="${p.id}"]`).value;if(type==='Regeneration')p.fatigue=clamp(p.fatigue-20,0,100);else if(p.rating<p.potential&&Math.random()<.55)p.rating++;p.training=type;save.trainingPoints[t.id]--;persist();return renderView('rotation')}
  if(e.target.id==='sim-next')simulateDays(1);if(e.target.id==='sim-10')simulateDays(10);if(e.target.id==='finish-season')finishRegularSeason();if(e.target.id==='sim-playoffs')simulatePlayoffs();if(e.target.id==='run-draft')runDraft();if(e.target.id==='next-season')advanceSeason();if(e.target.id==='offer-trade')offerTrade();if(e.target.id==='last-boxscore')showBoxscore(findGameById(save.lastGame));
  if(e.target.id==='auto-rotation'){buildDefaultRotation(save.rosters[save.activeTeam]);persist();return renderView('rotation')}
  if(e.target.id==='save-rotation')return saveRotationSetup();
});

$('#all-teams').addEventListener('click',()=>setSelection('all'));
$('#start-game').addEventListener('click',startCareer);
$('#team-switcher').addEventListener('change',e=>{save.activeTeam=e.target.value;persist();renderView(currentView)});
$('#trade-team')?.addEventListener('change',updateTradePlayers);
$('#view-content').addEventListener('change',e=>{if(e.target.id==='trade-team')updateTradePlayers();if(e.target.classList.contains('starter-select'))updateLineupPreview();if(e.target.classList.contains('minute-input'))$('#minute-total').textContent=`${[...document.querySelectorAll('.minute-input')].reduce((s,x)=>s+Number(x.value),0)} / 240 Min.`});
$('#save-game').addEventListener('click',()=>{persist();alert(`Karriere in Slot ${slot} gespeichert.`)});
$('#new-career').addEventListener('click',()=>{persist();location.reload()});
$('#close-modal').addEventListener('click',()=>$('#game-modal').classList.add('hidden'));
$('#game-modal').addEventListener('click',e=>{if(e.target.id==='game-modal')e.currentTarget.classList.add('hidden')});

renderTeamChoice();
