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
const taxLine = 187.9;
const firstApron = 195.9;
const secondApron = 207.8;
const defaultTactics=()=>({pace:'Normal',offense:'Ausgewogen',defense:'Mann',focus:'Ausgewogen',rotation:'Normal',paceValue:50,threeRate:50,ballMovement:55,offRebound:45,defPressure:50,system:'Motion',defSystem:'Mann',primary:'',secondary:'',tertiary:'',ballHandler:'',screenSetter:'',rimProtector:'',sixthMan:'',starterPlan:'Ausgewogen',benchPlan:'Ball bewegen',clutchPlan:'Star fokussieren',whenLeading:'Tempo kontrollieren',whenTrailing:'Dreier suchen',closeGame:'Beste Spieler',opponentFocus:'Star eindämmen'});
const injuryTypes=[['Knöchelverstauchung',2,7],['Rückenprobleme',3,9],['Oberschenkelzerrung',2,6],['Knieprellung',1,5],['Handverletzung',3,10],['Fußverletzung',5,14]];
let selection = null;
let slot = '1';
let save = null;
let currentView = 'overview';
let selectedRosterPlayer = null;
let rosterTab = 'simple';
let imageEditorTarget = null;
let rosterSearch = '';
let rosterPosition = 'ALL';
let rosterSort = 'rating-desc';
let rotationSection = 'rotation';
let activeRotationPreset = 0;
let rosterClickTimer = null;

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

function makePicks(){return Object.fromEntries(teams.map(t=>[t.id,[0,1,2].flatMap(y=>[1,2].map(round=>({id:`${t.id}_${2026+y}_${round}`,originalTeam:t.id,owner:t.id,year:2026+y,round}))) ]));}
function normalizeSaveData(d){
  d.tactics=d.tactics||{};teams.forEach(t=>{d.tactics[t.id]={...defaultTactics(),...(d.tactics[t.id]||{})}});
  d.picks=d.picks||makePicks();d.scouting=d.scouting||{};d.awards=d.awards||[];d.leagueNews=d.leagueNews||[];
  d.teamImages=d.teamImages||{};d.playerImages=d.playerImages||{};
  d.rotationPresets=d.rotationPresets||{};teams.forEach(t=>{d.rotationPresets[t.id]=d.rotationPresets[t.id]||Array(5).fill(null)});
  Object.values(d.rosters||{}).flat().forEach(p=>{p.form=p.form??0;p.morale=p.morale??75;p.injuryType=p.injuryType||'';p.tradeBlock=!!p.tradeBlock;p.ratingHistory=p.ratingHistory||[{season:d.seasonLabel||'2025/26',rating:p.rating}]});
  return d;
}

function safeImageUrl(value){const url=String(value||'').trim();return /^(https:\/\/|data:image\/(png|jpe?g|webp);base64,)/i.test(url)?url:'';}
function imageMarkup(url,className,alt,fallback){const safe=safeImageUrl(url);return safe?`<img class="${className}" src="${safe}" alt="${alt}">`:fallback;}
function openImageEditor(type,id,label){
  imageEditorTarget={type,id};const current=type==='team'?save.teamImages[id]:save.playerImages[id];
  $('#modal-content').innerHTML=`<div class="image-editor"><p class="eyebrow">BILDMANAGER</p><h2>${label}</h2><div id="image-preview" class="image-preview">${imageMarkup(current,'','Vorschau','KEIN BILD')}</div><label>Öffentliche Bild-URL</label><input id="image-url" type="url" placeholder="https://..." value="${safeImageUrl(current)?.startsWith('https://')?current:''}"><span class="image-or">ODER</span><label class="file-button">BILD AUSWÄHLEN<input id="image-file" type="file" accept="image/png,image/jpeg,image/webp"></label><p class="muted">Uploads werden verkleinert und nur in diesem Browser-Spielstand gespeichert. Öffentliche URLs sind auch auf anderen Geräten sichtbar.</p><div class="image-actions"><button class="secondary-action" id="remove-image">ZURÜCKSETZEN</button><button class="primary-action" id="save-image">BILD SPEICHERN</button></div></div>`;
  $('#game-modal').classList.remove('hidden');
}
function resizeImage(file){return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onerror=reject;reader.onload=()=>{const img=new Image();img.onerror=reject;img.onload=()=>{const size=360,scale=Math.min(1,size/Math.max(img.width,img.height)),canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(img.width*scale));canvas.height=Math.max(1,Math.round(img.height*scale));canvas.getContext('2d').drawImage(img,0,0,canvas.width,canvas.height);resolve(canvas.toDataURL('image/webp',.82))};img.src=reader.result};reader.readAsDataURL(file)});}
function saveEditedImage(){const map=imageEditorTarget.type==='team'?save.teamImages:save.playerImages,url=safeImageUrl($('#image-preview img')?.src||$('#image-url').value);if(!url)return alert('Bitte eine gültige HTTPS-Bildadresse oder Bilddatei wählen.');map[imageEditorTarget.id]=url;persist();$('#game-modal').classList.add('hidden');renderView('roster');}

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
  return Array.from({length:30},(_,i)=>{const rating=clamp(79-Math.floor(i/4)+rand(-2,2),61,82);return{id:`prospect_${season}_${i}`,name:`${firstNames[(i+season)%15]} ${lastNames[(i*2+season)%15]}`,position:positions[i%5],age:19+rand(0,3),rating,potential:clamp(rating+rand(6,16),75,98),scouted:false,salary:5.5,years:4,minutes:0,fatigue:0,injury:0,training:'Ausgewogen',stats:resetStats()}});
}

function makeFreeAgents() { return Array.from({length:20},(_,i)=>makePlayer(`${firstNames[(i+7)%15]} ${lastNames[(i*5+4)%15]}`,8+i,teams[i%30],90+i)).map((p,i)=>({...p,id:`fa_${i}`,rating:clamp(76-i+rand(-2,3),62,79),salary:Number((2+Math.max(0,15-i)*.45).toFixed(1)),years:1,minutes:0})); }

function startCareer() {
  const button=$('#start-game'); button.disabled=true; button.firstChild.textContent='KADER WERDEN GELADEN... ';
  slot=$('#save-slot').value;
  const rosters={};
  const loaded=teams.map(fallbackRoster); teams.forEach((t,i)=>rosters[t.id]=loaded[i]);
  save=normalizeSaveData({version:12,slot,manager:$('#manager-name').value.trim()||'Coach',controlAll:selection==='all',activeTeam:selection==='all'?'atl':selection,season:1,seasonLabel:'2025/26',phase:'Regular Season',day:0,rosters:normalizePlayerPositions(rosters),records:Object.fromEntries(teams.map(t=>[t.id,{wins:0,losses:0,pf:0,pa:0}])),schedule:generateSchedule(),freeAgents:makeFreeAgents(),prospects:generateProspects(),history:[],playoffs:null,lastGame:null,news:['Die neue NBA-Saison beginnt.'],trainingPoints:Object.fromEntries(teams.map(t=>[t.id,3]))});
  persist(); showDashboard();
}

function persist() { localStorage.setItem(saveKey(slot),JSON.stringify(save)); }
function readSave(n) { try { const d=JSON.parse(localStorage.getItem(saveKey(n)));if(!d||d.version<5)return null;d.rosters=normalizePlayerPositions(d.rosters);d.version=12;return normalizeSaveData(d); } catch{return null;} }
function activeTeam(){return teamById(save.activeTeam);}
function payroll(id){return save.rosters[id].reduce((s,p)=>s+p.salary,0);}
function financeStatus(id){const pay=payroll(id);return {pay,tax:Math.max(0,(pay-taxLine)*1.5),level:pay>secondApron?'Second Apron':pay>firstApron?'First Apron':pay>taxLine?'Luxury Tax':pay>cap?'Über dem Cap':'Cap Space'};}
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
  const tactics=save.tactics?.[id]||defaultTactics();
  const weighted=rotation.reduce((s,x)=>s+(x.player.rating+(x.player.form||0)*.35)*x.minutes*(1-x.player.fatigue/260),0)/240;
  const stars=rotation.slice().sort((a,b)=>b.player.rating-a.player.rating).slice(0,3).reduce((s,x)=>s+Math.max(0,x.player.rating-84),0)*.12;
  const hasGuard=rotation.some(x=>['PG','SG','G','GF'].includes(x.player.position)),hasBig=rotation.some(x=>['PF','C','F','FC'].includes(x.player.position));
  const perimeter=rotation.filter(x=>['PG','SG','G','GF'].includes(x.player.position)).length,bigs=rotation.filter(x=>['PF','C','FC'].includes(x.player.position)).length;
  const fit=(['Five-Out','Pace & Space'].includes(tactics.system)&&perimeter>=4?1.3:0)+(tactics.system==='Post Offense'&&bigs>=3?1.2:0)+(tactics.system==='Pick & Roll'&&perimeter>=2&&bigs>=2?1:0)+(tactics.defSystem==='Switching'&&rotation.filter(x=>['GF','F','FC'].includes(x.player.position)).length>=3?.8:0);
  return weighted+stars+fit-(hasGuard&&hasBig?0:2.5);
}

function showDashboard(){
  $('#setup-screen').classList.add('hidden'); $('#dashboard').classList.remove('hidden');
  const list=save.controlAll?teams:teams.filter(t=>t.id===save.activeTeam);
  $('#team-switcher').innerHTML=list.map(t=>`<option value="${t.id}" ${t.id===save.activeTeam?'selected':''}>${fullName(t)}</option>`).join('');
  $('#team-switcher').classList.toggle('hidden',!save.controlAll); renderView('overview');
}

function setHeader(){const t=activeTeam(),r=save.records[t.id],rank=conferenceStandings(t.conference).findIndex(x=>x.id===t.id)+1;document.documentElement.style.setProperty('--team-accent',t.color);$('#welcome-title').innerHTML=`${imageMarkup(save.teamImages?.[t.id],'dashboard-team-logo',fullName(t),`<span class="dashboard-team-abbr">${t.abbr}</span>`)}<span>${fullName(t)}<small>${save.manager} · ${t.conference} #${rank}</small></span>`;$('#season-status').innerHTML=`<b>${r.wins}-${r.losses}</b><span>${save.seasonLabel}</span><span>${save.phase}</span>${save.phase==='Regular Season'?`<span>Spieltag ${Math.min(82,save.day+1)}</span>`:''}`;$('#active-team-mark').innerHTML=`${imageMarkup(save.teamImages?.[t.id],'team-mark-image',fullName(t),`<span class="team-mark-badge">${t.abbr}</span>`)}<span>${fullName(t)}<small>${save.controlAll?'Alle Teams steuerbar':`Slot ${slot}`} · ${money(payroll(t.id))} Payroll</small></span>`;}

function renderView(view=currentView){currentView=view;setHeader();$('.dashboard-content').classList.toggle('rotation-view',view==='rotation');$('.dashboard-content').classList.toggle('tactics-view',view==='tactics');document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.view===view));const fn={overview:renderOverview,roster:renderRoster,rotation:renderRotation,tactics:renderTactics,schedule:renderSchedule,standings:renderStandings,transactions:renderTransactions,draft:renderDraft,league:renderLeague,playoffs:renderPlayoffs}[view]||renderOverview;fn();}

function renderOverview(){
  const t=activeTeam(),r=save.records[t.id],next=findNextGame(t.id),rank=conferenceStandings(t.conference).findIndex(x=>x.id===t.id)+1;
  const nextTeamCard=id=>{const team=teamById(id),record=save.records[id];return`<div class="next-team">${imageMarkup(save.teamImages?.[id],'next-team-logo',fullName(team),`<span class="next-team-abbr" style="--next-team-color:${team.color}">${team.abbr}</span>`)}<strong>${team.abbr}</strong><small>${fullName(team)}</small><b>${record.wins}-${record.losses}</b></div>`};
  const played=gamesForTeam(t.id).filter(g=>g.played).slice(-5).reverse();
  const recent=played.map(g=>{const home=g.home===t.id,opp=teamById(home?g.away:g.home),mine=home?g.homeScore:g.awayScore,theirs=home?g.awayScore:g.homeScore;return`<button class="recent-game" data-boxscore="${g.id}"><span class="result-badge ${mine>theirs?'win':'loss'}">${mine>theirs?'W':'L'}</span>${imageMarkup(save.teamImages?.[opp.id],'recent-logo',fullName(opp),`<span class="recent-abbr">${opp.abbr}</span>`)}<strong>${home?'vs.':'@'} ${opp.abbr}<small>${mine}-${theirs}</small></strong></button>`}).join('')||'<p class="empty-copy">Noch keine Spiele absolviert.</p>';
  const roster=save.rosters[t.id],leader=(key,label)=>{const sorted=roster.slice().sort((a,b)=>{const av=key==='min'?a.minutes:(a.stats.gp?a.stats[key]/a.stats.gp:0),bv=key==='min'?b.minutes:(b.stats.gp?b.stats[key]/b.stats.gp:0);return bv-av||b.rating-a.rating}),p=sorted[0],value=key==='min'?p.minutes:(p.stats.gp?p.stats[key]/p.stats.gp:0);return`<div class="team-leader">${imageMarkup(save.playerImages?.[p.id],'leader-photo',p.name,`<span class="leader-fallback">${p.number}</span>`)}<span><small>${label}</small><strong>${p.name}</strong><b>${value.toFixed(1)}</b></span></div>`};
  const leaders=[leader('pts','PUNKTE'),leader('reb','REBOUNDS'),leader('ast','ASSISTS'),leader('stl','STEALS'),leader('blk','BLOCKS'),leader('min','MINUTEN')].join('');
  const opponent=next?teamById(next.home===t.id?next.away:next.home):null,opponentRoster=opponent?save.rosters[opponent.id]:[],opponentStar=opponentRoster.slice().sort((a,b)=>b.rating-a.rating)[0],injured=opponentRoster.filter(p=>p.injury>0).slice(0,3);
  const confTop=conferenceStandings(t.conference).slice(0,6).map((team,i)=>`<div class="mini-standing"><span>${i+1}</span>${imageMarkup(save.teamImages?.[team.id],'mini-logo',fullName(team),`<i>${team.abbr}</i>`)}<strong>${team.abbr}</strong><b>${save.records[team.id].wins}-${save.records[team.id].losses}</b></div>`).join('');
  const today=(save.schedule[save.day]||[]).slice(0,5).map(g=>`<div class="today-game"><span>${teamById(g.away).abbr}</span><b>@</b><span>${teamById(g.home).abbr}</span></div>`).join('')||'<p class="empty-copy">Keine Spiele angesetzt.</p>';
  $('#view-content').innerHTML=`<div class="stats-grid"><div class="stat-box"><small>Bilanz</small><strong>${r.wins}-${r.losses}</strong></div><div class="stat-box"><small>Conference</small><strong>#${rank}</strong></div><div class="stat-box"><small>Kader</small><strong>${save.rosters[t.id].length}</strong><small>Spieler</small></div><div class="stat-box"><small>Teamstärke</small><strong>${teamPower(t.id).toFixed(0)}</strong></div></div>
  <div class="action-bar"><button class="primary-action" id="sim-next" ${save.phase!=='Regular Season'?'disabled':''}>NÄCHSTEN SPIELTAG SIMULIEREN</button><button class="secondary-action" id="sim-10" ${save.phase!=='Regular Season'?'disabled':''}>10 SPIELTAGE</button></div>
  <div class="overview-grid"><div class="content-card recent-card"><div class="card-head"><h3>Letzte Ergebnisse</h3><span>Letzte 5</span></div><div class="recent-results">${recent}</div></div><div class="content-card next-card"><h3>Nächstes Spiel</h3>${next?`<div class="next-game"><div class="next-matchup">${nextTeamCard(next.home)}<span class="versus">VS</span>${nextTeamCard(next.away)}</div><p>${next.home===t.id?'HEIMSPIEL':'AUSWÄRTSSPIEL'} · Spieltag ${next.day+1}</p></div><div class="opponent-scout"><span><small>GEGNERSTÄRKE</small><b>${teamPower(opponent.id).toFixed(0)}</b></span><span><small>TOPSPIELER</small><b>${opponentStar?.name||'-'} · ${opponentStar?.rating||'-'}</b></span><span><small>AUSFÄLLE</small><b>${injured.length?injured.map(p=>p.name).join(', '):'Keine'}</b></span></div>`:`<p class="muted">Reguläre Saison beendet.</p>`}</div></div>
  <div class="content-card leaders-card"><div class="card-head"><h3>Team-Leader</h3><span>Pro Spiel</span></div><div class="leader-grid">${leaders}</div></div>
  <div class="quick-actions"><button data-quick-view="rotation">ROTATION</button><button data-quick-view="tactics">TAKTIKEN</button><button data-quick-view="transactions">TRADE CENTER</button><button data-quick-view="schedule">SPIELPLAN</button><button data-quick-view="standings">TABELLE</button><button data-quick-view="league">LIGA & AWARDS</button></div>
  <div class="overview-bottom"><div class="content-card"><div class="card-head"><h3>${t.conference} Top 6</h3><button data-quick-view="standings">GANZE TABELLE</button></div><div class="mini-standings">${confTop}</div></div><div class="content-card"><div class="card-head"><h3>Heutige Spiele</h3><span>Spieltag ${Math.min(82,save.day+1)}</span></div>${today}</div><div class="content-card"><div class="card-head"><h3>News Center</h3><span>Team & Liga</span></div>${[...save.news.slice(-3),...save.leagueNews.slice(-2)].slice(-5).reverse().map((n,i)=>`<p class="news-item"><span class="news-tag">${i<2?'AKTUELL':'LIGA'}</span>${n}</p>`).join('')}</div></div>`;
}

function rosterTable(roster,featured){
  const perGame=(p,key)=>p.stats.gp?(p.stats[key]/p.stats.gp).toFixed(1):'0.0',status=p=>p.injury>0?`<span class="bad">${p.injuryType} · ${p.injury} Sp.</span>`:'FIT';
  const meter=(value,type)=>`<span class="roster-meter ${type}"><i style="width:${clamp(value,0,100)}%"></i><b>${Math.round(value)}</b></span>`,development=p=>{const start=p.ratingHistory?.[0]?.rating??p.rating,diff=p.rating-start;return`<span class="development ${diff>0?'up':diff<0?'down':''}">${diff>0?'+':''}${diff}</span>`},contract=p=>`<span class="contract-cell">${p.twoWay?'<i class="contract-badge two-way">2W</i>':''}${p.option?`<i class="contract-badge option" title="${p.option==='Player'?'Spieleroption':'Teamoption'}">${p.option==='Player'?'PO':'TO'}</i>`:''}${p.years<=1?'<i class="contract-badge expiring" title="Auslaufender Vertrag">EXP</i>':''}<span>${p.twoWay?'Two-Way':`${money(p.salary)} · ${p.years}J`}</span></span>`;
  const configs={
    list:{heads:['NAME','POS','OVR','ENTW.','ROLLE','STATUS','BLOCK'],cells:p=>[`<strong>${p.name}</strong>`,p.position,`<b class="rating">${p.rating}</b>`,development(p),p.starterSlot?`Starter ${p.starterSlot}`:p.minutes>0?'Rotation':'Reserve',status(p),p.tradeBlock?'<span class="trade-block-mark">TRADE</span>':'-']},
    simple:{heads:['NAME','POS','ALTER','RATING','POT','ENTW.','MIN','VERTRAG','STATUS','PPG'],cells:p=>[`<strong>${p.name}</strong>`,p.position,p.age,`<b class="rating">${p.rating}${p.form>0?' ▲':''}</b>`,p.potential,development(p),p.minutes,contract(p),status(p),perGame(p,'pts')]},
    details:{heads:['NAME','POS','OVR','POT','FORM','MORAL','FITNESS','TRAINING','ROLLE'],cells:p=>[`<strong>${p.name}</strong>`,p.position,`<b class="rating">${p.rating}</b>`,p.potential,meter(50+(p.form||0)*10,'form'),meter(p.morale||75,'morale'),meter(100-(p.fatigue||0),'fitness'),p.training||'Ausgewogen',p.starterSlot?`Starter ${p.starterSlot}`:p.minutes>0?`${p.minutes} Min.`:'Reserve']},
    contract:{heads:['NAME','ALTER','GEHALT','RESTLAUFZEIT','VERTRAGSART','NÄCHSTES JAHR','GESAMT'],cells:p=>{const salaries=p.salaries||[p.salary],year=p.contractYear||0,remaining=salaries.slice(year),next=remaining[1];return[`<strong>${p.name}</strong>`,p.age,money(p.salary),`${p.years} Jahr${p.years===1?'':'e'}`,p.twoWay?'Two-Way':p.option?`${p.option==='Player'?'Spieler':'Team'}option`:'Garantiert',next===undefined?'Free Agent':money(next),money(remaining.reduce((s,x)=>s+x,0))]}},
    stats:{heads:['NAME','GP','MIN','PTS','REB','AST','STL','BLK'],cells:p=>[`<strong>${p.name}</strong>`,p.stats.gp,p.minutes,perGame(p,'pts'),perGame(p,'reb'),perGame(p,'ast'),perGame(p,'stl'),perGame(p,'blk')]}
  },config=configs[rosterTab]||configs.simple;
  return`<table><thead><tr>${config.heads.map(x=>`<th>${x}</th>`).join('')}</tr></thead><tbody>${roster.map(p=>`<tr data-roster-player="${p.id}" class="${p.id===featured.id?'selected-player':''}">${config.cells(p).map(x=>`<td>${x}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
}

function allLeaguePlayers(){return teams.flatMap(t=>save.rosters[t.id].map(p=>({p,t})))}
function sortedFilteredRoster(roster){const q=rosterSearch.trim().toLowerCase(),filtered=roster.filter(p=>(!q||p.name.toLowerCase().includes(q))&&(rosterPosition==='ALL'||p.position===rosterPosition));return filtered.slice().sort((a,b)=>rosterSort==='name'?a.name.localeCompare(b.name):rosterSort==='age'?a.age-b.age:rosterSort==='salary-desc'?b.salary-a.salary:rosterSort==='potential-desc'?b.potential-a.potential:b.rating-a.rating)}
function openPlayerProfile(id){const found=allLeaguePlayers().find(x=>x.p.id===id);if(!found)return;const {p,t}=found,start=p.ratingHistory?.[0]?.rating??p.rating,diff=p.rating-start,avg=key=>p.stats.gp?(p.stats[key]/p.stats.gp).toFixed(1):'0.0';$('#modal-content').innerHTML=`<div class="player-profile-modal"><div class="profile-hero">${imageMarkup(save.playerImages?.[p.id],'profile-modal-photo',p.name,`<span>${p.number}</span>`)}<div><small>${fullName(t)} · ${p.position}</small><h2>${p.name}</h2><b>OVR ${p.rating} · POT ${p.potential}</b><p>${p.age} Jahre · ${money(p.salary)} · ${p.years} Jahr${p.years===1?'':'e'}</p></div></div><div class="profile-modal-grid"><span>Entwicklung<b class="${diff>=0?'good':'bad'}">${diff>0?'+':''}${diff} OVR</b></span><span>Fitness<b>${100-(p.fatigue||0)}%</b></span><span>Moral<b>${p.morale||75}</b></span><span>Form<b>${p.form>0?'+':''}${p.form||0}</b></span><span>PTS<b>${avg('pts')}</b></span><span>REB / AST<b>${avg('reb')} / ${avg('ast')}</b></span></div><div class="profile-modal-actions"><button data-toggle-trade-block="${p.id}" class="secondary-action">${p.tradeBlock?'VOM TRADE BLOCK NEHMEN':'AUF TRADE BLOCK SETZEN'}</button><button data-open-compare="${p.id}" class="primary-action">SPIELER VERGLEICHEN</button></div></div>`;$('#game-modal').classList.remove('hidden')}
function openPlayerComparison(firstId){const players=allLeaguePlayers().sort((a,b)=>a.p.name.localeCompare(b.p.name)),first=players.find(x=>x.p.id===firstId)||players[0],second=players.find(x=>x.p.id!==first.p.id)||players[0],options=selected=>players.map(x=>`<option value="${x.p.id}" ${x.p.id===selected?'selected':''}>${x.p.name} · ${x.t.abbr} · ${x.p.position}</option>`).join('');$('#modal-content').innerHTML=`<div class="compare-modal"><p class="eyebrow">LIGAWEITER VERGLEICH</p><h2>Spieler vergleichen</h2><div class="compare-selects"><select id="compare-player-a">${options(first.p.id)}</select><span>VS</span><select id="compare-player-b">${options(second.p.id)}</select></div><div id="compare-result"></div></div>`;$('#game-modal').classList.remove('hidden');renderPlayerComparison()}
function renderPlayerComparison(){const ids=[$('#compare-player-a')?.value,$('#compare-player-b')?.value],items=ids.map(id=>allLeaguePlayers().find(x=>x.p.id===id));if(items.some(x=>!x))return;const card=({p,t})=>`<article>${imageMarkup(save.playerImages?.[p.id],'compare-photo',p.name,`<i>${p.number}</i>`)}<h3>${p.name}</h3><small>${fullName(t)} · ${p.position}</small>${[['OVR',p.rating],['POT',p.potential],['ALTER',p.age],['FITNESS',`${100-(p.fatigue||0)}%`],['MORAL',p.morale||75],['GEHALT',money(p.salary)],['VERTRAG',`${p.years}J`]].map(([k,v])=>`<span>${k}<b>${v}</b></span>`).join('')}</article>`;$('#compare-result').innerHTML=items.map(card).join('')}
function renderRoster(){const t=activeTeam(),allRoster=save.rosters[t.id],roster=sortedFilteredRoster(allRoster);let featured=allRoster.find(p=>p.id===selectedRosterPlayer)||allRoster.slice().sort((a,b)=>b.rating-a.rating)[0];selectedRosterPlayer=featured.id;const avg=featured.stats.gp?(featured.stats.pts/featured.stats.gp).toFixed(1):'0.0',teamLogo=save.teamImages?.[t.id],portrait=save.playerImages?.[featured.id],tabs=[['list','VIEW LIST'],['simple','SIMPLE'],['details','DETAILS'],['contract','VERTRAG'],['stats','STATISTIK']];$('#view-content').innerHTML=`<div class="roster-viewer"><div class="viewer-team">${imageMarkup(teamLogo,'viewer-logo',fullName(t),`<span class="viewer-abbr">${t.abbr}</span>`)}<strong>${fullName(t)}</strong><small>${t.conference} · ${allRoster.length} SPIELER</small><button class="image-edit-button" data-edit-team-image="${t.id}">TEAMLOGO ÄNDERN</button></div><div class="viewer-player"><div class="player-image-wrap">${imageMarkup(portrait,'player-portrait',featured.name,`<div class="player-avatar">${featured.number}</div>`)}<button class="image-edit-button player-image-button" data-edit-player-image="${featured.id}">BILD ÄNDERN</button></div><div class="ovr-ring"><small>OVR</small><strong>${featured.rating}</strong></div><div class="player-title"><span>#${featured.number} · ${featured.position}</span><h2>${featured.name}</h2><strong>${featured.starterSlot?`STARTER · ${featured.starterSlot}`:'ROTATIONSSPIELER'}${featured.tradeBlock?' · TRADE BLOCK':''}</strong><small>${featured.age} Jahre · ${money(featured.salary)} · ${featured.years} Jahre</small></div><div class="player-state"><span>FORM <b>${featured.form>0?'+':''}${featured.form||0}</b></span><span>MORAL <b>${featured.morale||75}</b></span><span>PPG <b>${avg}</b></span></div></div></div><div class="roster-tools"><input id="roster-search" type="search" placeholder="Spieler suchen..." value="${rosterSearch}"><select id="roster-position"><option value="ALL">Alle Positionen</option>${['PG','SG','SF','PF','C','G','GF','F','FC'].map(x=>`<option ${rosterPosition===x?'selected':''}>${x}</option>`).join('')}</select><select id="roster-sort"><option value="rating-desc">Rating</option><option value="potential-desc" ${rosterSort==='potential-desc'?'selected':''}>Potenzial</option><option value="name" ${rosterSort==='name'?'selected':''}>Name</option><option value="age" ${rosterSort==='age'?'selected':''}>Alter</option><option value="salary-desc" ${rosterSort==='salary-desc'?'selected':''}>Gehalt</option></select><button data-open-compare="${featured.id}">SPIELER VERGLEICHEN</button><small>${roster.length} Treffer · Doppelklick öffnet Profil</small></div><div class="viewer-tabs">${tabs.map(([id,label])=>`<button class="${rosterTab===id?'active':''}" data-roster-tab="${id}">${label}</button>`).join('')}</div><div class="content-card roster-table"><div class="table-wrap">${roster.length?rosterTable(roster,featured):'<p class="empty-copy">Keine Spieler gefunden.</p>'}</div></div>`;}

function lineupWarnings(roster){
  const warnings=[];
  starterSlots.forEach(slot=>{const p=roster.find(x=>x.starterSlot===slot);if(p&&!fitsSlot(p.position,slot))warnings.push(`${slot}: ${p.name} (${p.position}) passt nicht ideal.`)});
  return warnings;
}

function workloadInfo(p,minutes=p.minutes){
  const load=minutes+(p.fatigue||0)*.18,level=load>=42?'KRITISCH':load>=35?'HOCH':load>=24?'NORMAL':'NIEDRIG';
  return {level,className:level.toLowerCase(),risk:level==='KRITISCH'?'Hohes Risiko':level==='HOCH'?'Erhöht':level==='NORMAL'?'Normal':'Niedrig'};
}

function lineupMetrics(players){
  const avg=key=>players.reduce((s,p)=>s+p[key],0)/Math.max(1,players.length),guards=players.filter(p=>['PG','SG','G','GF'].includes(p.position)).length,bigs=players.filter(p=>['PF','C','FC'].includes(p.position)).length;
  return {overall:avg('rating'),potential:avg('potential'),shooting:clamp(avg('rating')+(guards-2)*2,60,99),defense:clamp(avg('rating')+(bigs-2)*1.5,60,99),balance:Math.max(0,100-Math.abs(guards-2)*11-Math.abs(bigs-2)*9)};
}

const rotationPresetNames=['Standard','Entwicklung','Playoffs','Tiefe Bank','Eigene'];
function rotationTabs(){return`<div class="rotation-modebar"><button class="${rotationSection==='rotation'?'active':''}" data-rotation-section="rotation">ROTATION</button><button class="${rotationSection==='training'?'active':''}" data-rotation-section="training">TRAINING</button><span></span>${rotationPresetNames.map((name,i)=>`<button class="preset-slot ${activeRotationPreset===i?'active':''}" data-rotation-preset="${i}">${i+1}. ${name}</button>`).join('')}<button data-save-rotation-preset>PROFIL SPEICHERN</button></div>`}
function rotationSnapshot(){const roster=save.rosters[save.activeTeam];return{starters:Object.fromEntries(starterSlots.map(slot=>[slot,document.querySelector(`.starter-select[data-slot="${slot}"]`)?.value||roster.find(p=>p.starterSlot===slot)?.id])),minutes:Object.fromEntries(roster.map(p=>[p.id,Number(document.querySelector(`.minute-input[data-player="${p.id}"]`)?.value??p.minutes)])),bench:[...document.querySelectorAll('[data-bench-player]')].map(x=>x.dataset.benchPlayer)}}
function saveRotationPreset(){save.rotationPresets[save.activeTeam][activeRotationPreset]=rotationSnapshot();persist();const status=$('#rotation-save-status');if(status)status.textContent=`${rotationPresetNames[activeRotationPreset]} gespeichert`}
function loadRotationPreset(index){activeRotationPreset=Number(index);const data=save.rotationPresets[save.activeTeam][activeRotationPreset];if(data){const roster=save.rosters[save.activeTeam];roster.forEach(p=>{p.starterSlot=null;if(data.minutes[p.id]!==undefined)p.minutes=data.minutes[p.id]});Object.entries(data.starters||{}).forEach(([slot,id])=>{const p=roster.find(x=>x.id===id);if(p)p.starterSlot=slot});(data.bench||[]).forEach((id,i)=>{const p=roster.find(x=>x.id===id);if(p)p.rotationOrder=5+i});normalizeRotationSetup(roster)}renderView('rotation')}
function renderTraining(){const t=activeTeam(),roster=save.rosters[t.id].slice().sort((a,b)=>(b.potential-b.rating)-(a.potential-a.rating));$('#view-content').innerHTML=`${rotationTabs()}<div class="training-workspace"><section class="training-overview"><p class="eyebrow">PLAYER DEVELOPMENT</p><h2>TRAININGSZENTRUM</h2><strong>${save.trainingPoints[t.id]} PUNKTE VERFÜGBAR</strong><p>Regeneration senkt Müdigkeit. Intensive Einheiten fördern Entwicklung, erhöhen aber bei erschöpften Spielern das Verletzungsrisiko.</p></section><section class="training-roster">${roster.map(p=>`<div class="training-player-card">${imageMarkup(save.playerImages?.[p.id],'training-large-photo',p.name,`<i>${p.number}</i>`)}<div><strong>${p.name}</strong><small>${p.position} · OVR ${p.rating} · POT ${p.potential}</small><span class="training-fitness"><i style="width:${100-(p.fatigue||0)}%"></i></span></div><select data-training="${p.id}"><option ${p.training==='Ausgewogen'?'selected':''}>Ausgewogen</option><option>Wurf</option><option>Defense</option><option>Athletik</option><option>Spielverständnis</option><option>Regeneration</option></select><button data-train="${p.id}">TRAINIEREN</button></div>`).join('')}</section></div>`}

function renderRotation(){
  if(rotationSection==='training')return renderTraining();
  const t=activeTeam(),roster=normalizeRotationSetup(save.rosters[t.id]);
  const starters=starterSlots.map(slot=>({slot,player:roster.find(p=>p.starterSlot===slot)}));
  const starterIds=new Set(starters.map(x=>x.player?.id).filter(Boolean)),bench=roster.filter(p=>!starterIds.has(p.id)).sort((a,b)=>(a.rotationOrder??999)-(b.rotationOrder??999)||b.rating-a.rating);
  const playerOptions=roster.filter(p=>!p.twoWay).map(p=>`<option value="${p.id}">${p.name} · ${p.position} · OVR ${p.rating}</option>`).join('');
  const warnings=lineupWarnings(roster),metrics=lineupMetrics(starters.map(x=>x.player).filter(Boolean)),rotation=roster.slice().sort((a,b)=>(a.starterSlot?starterSlots.indexOf(a.starterSlot):99)-(b.starterSlot?starterSlots.indexOf(b.starterSlot):99)||a.rotationOrder-b.rotationOrder),trainable=roster.slice().sort((a,b)=>b.potential-b.rating-(a.potential-a.rating)).slice(0,10);
  const courtCard=({slot,player})=>`<label class="court-player court-${slot.toLowerCase()}" data-court-slot="${slot}" title="Spieler auswählen oder einen Bankspieler hierher ziehen">${imageMarkup(save.playerImages?.[player?.id],'court-photo',player?.name||slot,`<span class="court-fallback">${player?.number??slot}</span>`)}<b>${slot}</b><select class="starter-select" data-slot="${slot}">${playerOptions.replace(`value="${player?.id}"`,`value="${player?.id}" selected`)}</select><small>${player?.name||'Nicht besetzt'} · OVR ${player?.rating||'-'}</small></label>`;
  const minuteRow=p=>{const work=workloadInfo(p);return`<div class="minute-slider-row" data-minute-row="${p.id}"><div class="minute-player">${imageMarkup(save.playerImages?.[p.id],'minute-photo',p.name,`<span>${p.number}</span>`)}<strong>${p.name}<small>${p.starterSlot?`STARTER ${p.starterSlot}`:p.minutes>0?'ROTATION':'RESERVE'} · ${p.position} · OVR ${p.rating}</small></strong></div><input class="minute-input" data-player="${p.id}" type="range" min="0" max="42" value="${p.minutes}"><output data-minute-output="${p.id}">${p.minutes}</output><span class="workload ${work.className}" data-workload="${p.id}">${work.level}</span></div>`};
  $('#view-content').innerHTML=`<div class="rotation-workspace"><section class="rotation-panel court-panel"><div class="rotation-panel-head"><h3>STARTING FIVE</h3><button id="auto-rotation">AUTO</button></div><div class="basketball-court">${starters.map(courtCard).join('')}<span class="court-line court-three"></span><span class="court-line court-paint"></span><span class="court-line court-circle"></span></div><div id="lineup-warning" class="lineup-warning ${warnings.length?'':'hidden'}">${warnings.join('<br>')}</div><div class="bench-head"><h3>BANKREIHENFOLGE</h3><small>Ziehen zum Sortieren</small></div><div class="bench-drag-list">${bench.map((p,i)=>{const work=workloadInfo(p);return`<div class="bench-drag-row" draggable="true" data-bench-player="${p.id}"><span class="drag-handle">≡</span><span class="bench-rank">${i+1}</span>${imageMarkup(save.playerImages?.[p.id],'bench-photo',p.name,`<i>${p.number}</i>`)}<strong>${p.name}<small>${p.position} · OVR ${p.rating}${p.twoWay?' · Two-Way':''}</small></strong><b class="fitness-pill ${work.className}">${100-(p.fatigue||0)}%</b></div>`}).join('')}</div></section><section class="rotation-panel minutes-panel"><div class="rotation-panel-head"><h3>SPIELMINUTEN</h3><span id="minute-total" class="minute-total">${roster.reduce((s,p)=>s+p.minutes,0)} / 240</span></div><div class="rotation-groups"><span>STARTER</span><span>HAUPTROTATION</span><span>RESERVE</span></div><div class="minute-scroll">${rotation.map(minuteRow).join('')}</div></section><section class="rotation-side"><div class="rotation-panel lineup-preview"><div class="rotation-panel-head"><h3>LINEUP-VORSCHAU</h3><span>LIVE</span></div><div class="lineup-score"><strong data-lineup-metric="overall">${metrics.overall.toFixed(1)}</strong><small>STARTING FIVE OVR</small></div><div class="metric-grid"><span>SHOOTING<b data-lineup-metric="shooting">${metrics.shooting.toFixed(0)}</b></span><span>DEFENSE<b data-lineup-metric="defense">${metrics.defense.toFixed(0)}</b></span><span>POTENZIAL<b data-lineup-metric="potential">${metrics.potential.toFixed(0)}</b></span><span>BALANCE<b data-lineup-metric="balance">${metrics.balance.toFixed(0)}</b></span></div><div class="risk-summary"><span>FITNESS</span><b data-lineup-fitness>${Math.round(starters.reduce((s,x)=>s+100-(x.player?.fatigue||0),0)/5)}%</b><small>${rotation.filter(p=>workloadInfo(p).level==='KRITISCH').length} kritische Belastungen</small></div></div><div class="rotation-panel training-panel"><div class="rotation-panel-head"><h3>TRAINING</h3><b>${save.trainingPoints[t.id]} PUNKTE</b></div><p class="training-note">Fokus wählen. Regeneration reduziert Müdigkeit, intensive Einheiten erhöhen Entwicklung und Risiko.</p><div class="training-scroll">${trainable.map(p=>`<div class="training-compact">${imageMarkup(save.playerImages?.[p.id],'training-photo',p.name,`<i>${p.number}</i>`)}<strong>${p.name}<small>OVR ${p.rating} · POT ${p.potential} · FIT ${100-(p.fatigue||0)}%</small></strong><select data-training="${p.id}"><option>Ausgewogen</option><option>Wurf</option><option>Defense</option><option>Athletik</option><option>Spielverständnis</option><option>Regeneration</option></select><button data-train="${p.id}">+</button></div>`).join('')}</div></div></section><div class="rotation-savebar"><span><b id="rotation-save-status">240 Minuten erforderlich</b><small>Starter, Bank und Minuten gemeinsam speichern</small></span><button class="primary-action" id="save-rotation">AUFSTELLUNG SPEICHERN</button></div></div>`;
  $('#view-content').insertAdjacentHTML('afterbegin',rotationTabs());
  updateRotationLive();
}

function moveBenchPlayer(id,direction){
  const row=document.querySelector(`[data-bench-player="${id}"]`);if(!row)return;
  const sibling=direction<0?row.previousElementSibling:row.nextElementSibling;if(!sibling)return;
  if(direction<0)row.parentElement.insertBefore(row,sibling);else row.parentElement.insertBefore(sibling,row);
  refreshBenchRanks();
}

function refreshBenchRanks(){[...document.querySelectorAll('[data-bench-player]')].forEach((x,i)=>{x.querySelector('.bench-rank').textContent=i+1;const buttons=x.querySelectorAll('button');if(buttons.length>1){buttons[0].disabled=i===0;buttons[1].disabled=i===document.querySelectorAll('[data-bench-player]').length-1}});}

function updateRotationLive(){
  const inputs=[...document.querySelectorAll('.minute-input')],total=inputs.reduce((s,x)=>s+Number(x.value),0),totalBox=$('#minute-total'),status=$('#rotation-save-status'),button=$('#save-rotation');
  if(totalBox){totalBox.textContent=`${total} / 240`;totalBox.classList.toggle('invalid',total!==240)}
  if(status)status.textContent=total===240?'Rotation bereit zum Speichern':`${Math.abs(240-total)} Minuten ${total<240?'noch frei':'zu viel'}`;
  if(button)button.disabled=total!==240;
  inputs.forEach(input=>{const p=save.rosters[save.activeTeam].find(x=>x.id===input.dataset.player),minutes=Number(input.value),output=document.querySelector(`[data-minute-output="${p.id}"]`),badge=document.querySelector(`[data-workload="${p.id}"]`),work=workloadInfo(p,minutes);if(output)output.textContent=minutes;if(badge){badge.textContent=work.level;badge.className=`workload ${work.className}`}});
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
  const selected=selects.map(x=>roster.find(y=>y.id===x.value)).filter(Boolean);
  selects.forEach(x=>{const p=roster.find(y=>y.id===x.value);if(p&&!fitsSlot(p.position,x.dataset.slot))warnings.push(`${x.dataset.slot}: ${p.name} (${p.position}) passt nicht ideal.`);if(p?.injury>0)warnings.push(`${p.name} ist verletzt (${p.injury} Spiele).`);if((p?.fatigue||0)>=70)warnings.push(`${p.name} hat eine kritische Belastung.`)});
  if(!selected.some(p=>['PG','G'].includes(p.position)))warnings.push('Kein primärer Point Guard in der Starting Five.');
  if(!selected.some(p=>['C','FC'].includes(p.position)))warnings.push('Kein natürlicher Center in der Starting Five.');
  box.innerHTML=warnings.join('<br>');box.classList.toggle('hidden',!warnings.length);
  selects.forEach(select=>{const p=roster.find(x=>x.id===select.value),card=select.closest('.court-player'),visual=card?.querySelector('.court-photo,.court-fallback');if(!p||!card)return;if(visual)visual.outerHTML=imageMarkup(save.playerImages?.[p.id],'court-photo',p.name,`<span class="court-fallback">${p.number}</span>`);card.querySelector('small').textContent=`${p.name} · OVR ${p.rating}`});
  const metrics=lineupMetrics(selected);Object.entries(metrics).forEach(([key,value])=>{const node=document.querySelector(`[data-lineup-metric="${key}"]`);if(node)node.textContent=key==='overall'?value.toFixed(1):value.toFixed(0)});const fitness=document.querySelector('[data-lineup-fitness]');if(fitness)fitness.textContent=`${Math.round(selected.reduce((s,p)=>s+100-(p.fatigue||0),0)/Math.max(1,selected.length))}%`;
}

function tacticTeamProfile(roster){
  const rotation=roster.filter(p=>p.minutes>0).sort((a,b)=>b.minutes-a.minutes).slice(0,10),avg=fn=>rotation.reduce((s,p)=>s+fn(p),0)/Math.max(1,rotation.length),guards=rotation.filter(p=>['PG','SG','G','GF'].includes(p.position)),bigs=rotation.filter(p=>['PF','C','FC'].includes(p.position));
  return {shooting:clamp(avg(p=>p.rating)+(guards.length-4)*1.2,55,99),playmaking:clamp(avg(p=>p.rating)+(guards.length-3)*1.5,55,99),perimeter:clamp(avg(p=>p.rating)+(rotation.filter(p=>['SG','SF','GF','F'].includes(p.position)).length-3),55,99),rebounding:clamp(avg(p=>p.rating)+(bigs.length-3)*1.7,55,99),rim:clamp(avg(p=>p.rating)+(bigs.length-2)*2,55,99)};
}

function tacticImpacts(t){
  const impacts=[];if(t.paceValue>=65)impacts.push(['+','Mehr Ballbesitze'],['-','Mehr Müdigkeit']);else if(t.paceValue<=35)impacts.push(['+','Weniger Ballverluste'],['-','Weniger Fastbreaks']);if(t.threeRate>=65)impacts.push(['+','Mehr Dreier'],['-','Weniger Inside-Abschlüsse']);if(t.ballMovement>=65)impacts.push(['+','Mehr Assists']);if(t.offRebound>=65)impacts.push(['+','Mehr Offensivrebounds'],['-','Schwächere Transition Defense']);if(t.defPressure>=65)impacts.push(['+','Mehr Steals'],['-','Mehr Fouls']);return impacts.length?impacts:[['=','Ausgewogene Auswirkungen']];
}

function tacticFit(t,profile){const offense={Motion:(profile.playmaking+profile.shooting)/2,'Pick & Roll':profile.playmaking*.6+profile.rim*.4,'Five-Out':profile.shooting*.75+profile.playmaking*.25,'Pace & Space':profile.shooting*.6+profile.playmaking*.4,'Post Offense':profile.rim*.65+profile.rebounding*.35,Isolation:profile.playmaking*.7+profile.shooting*.3}[t.system]||80,defense={Mann:profile.perimeter*.65+profile.rim*.35,Switching:profile.perimeter*.7+profile.rebounding*.3,'Drop Coverage':profile.rim*.7+profile.rebounding*.3,'Zone 2-3':profile.rim*.55+profile.rebounding*.45,'Zone 3-2':profile.perimeter*.65+profile.rim*.35,'Full-Court Press':profile.perimeter*.8+profile.playmaking*.2}[t.defSystem]||80;return{offense:clamp(offense,55,99),defense:clamp(defense,55,99)}}
function tacticRoutes(system){const routes={Motion:['route-sweep','route-cut','route-screen'],'Pick & Roll':['route-pnr','route-roll'],'Five-Out':['route-five-left','route-five-right'],'Pace & Space':['route-break-one','route-break-two','route-corner'],'Post Offense':['route-entry','route-post-cut'],Isolation:['route-clear','route-iso']}[system]||['route-sweep','route-cut'];return routes.map(x=>`<span class="dynamic-route ${x}"></span>`).join('')}
function matchupAdvantage(own,opp){if(!opp)return{offense:0,defense:0};return{offense:Math.round((own.shooting+own.playmaking-opp.perimeter-opp.rim)/2),defense:Math.round((own.perimeter+own.rim-opp.shooting-opp.playmaking)/2)}}

function renderTactics(){
  const t=save.tactics[save.activeTeam],roster=save.rosters[save.activeTeam],profile=tacticTeamProfile(roster),next=findNextGame(save.activeTeam),opponent=next?teamById(next.home===save.activeTeam?next.away:next.home):null,oppRoster=opponent?save.rosters[opponent.id]:[],oppStar=oppRoster.slice().sort((a,b)=>b.rating-a.rating)[0],oppProfile=opponent?tacticTeamProfile(oppRoster):null;
  const fit=tacticFit(t,profile),matchup=matchupAdvantage(profile,oppProfile);queueMicrotask(()=>finishTacticsRender(t,fit,matchup));
  const select=(key,values,cls='')=>`<select class="${cls}" data-tactic="${key}">${values.map(v=>`<option ${t[key]===v?'selected':''}>${v}</option>`).join('')}</select>`,playerSelect=(key,filter=()=>true)=>`<select data-tactic="${key}"><option value="">Automatisch</option>${roster.filter(filter).sort((a,b)=>b.rating-a.rating).map(p=>`<option value="${p.id}" ${t[key]===p.id?'selected':''}>${p.name} · ${p.position} · ${p.rating}</option>`).join('')}</select>`,slider=(key,label,left,right)=>`<label class="tactic-slider"><span>${label}<b data-tactic-value="${key}">${t[key]}</b></span><input type="range" min="0" max="100" value="${t[key]}" data-tactic="${key}"><small>${left}<i>${right}</i></small></label>`,systems=['Motion','Pick & Roll','Five-Out','Pace & Space','Post Offense','Isolation'],defSystems=['Mann','Switching','Drop Coverage','Zone 2-3','Zone 3-2','Full-Court Press'],profileRow=(label,value)=>`<div class="profile-row"><span>${label}</span><i><b style="width:${value}%"></b></i><strong>${value.toFixed(0)}</strong></div>`;
  $('#view-content').innerHTML=`<div class="tactics-workspace"><section class="tactics-panel tactic-controls"><div class="tactics-panel-head"><h3>TAKTISCHE IDENTITÄT</h3><span>LIVE</span></div><div class="preset-strip"><button data-tactic-preset="balanced">AUSGEWOGEN</button><button data-tactic-preset="run">RUN & GUN</button><button data-tactic-preset="defense">DEFENSE FIRST</button><button data-tactic-preset="three">DREIERFOKUS</button><button data-tactic-preset="inside">INSIDE</button><button data-tactic-preset="playoff">PLAYOFFS</button></div><div class="system-row"><label>OFFENSIVSYSTEM${select('system',systems)}</label><label>DEFENSIVSYSTEM${select('defSystem',defSystems)}</label></div><div class="slider-grid">${slider('paceValue','TEMPO','Langsam','Schnell')}${slider('threeRate','DREIERQUOTE','Inside','Perimeter')}${slider('ballMovement','BALLBEWEGUNG','Isolation','Passspiel')}${slider('offRebound','OFFENSIVREBOUND','Zurück','Crash')}${slider('defPressure','DEFENSIVDRUCK','Sicher','Aggressiv')}</div><div class="impact-box"><strong>TAKTISCHE AUSWIRKUNGEN</strong><div id="tactic-impacts">${tacticImpacts(t).map(([type,text])=>`<span class="impact-${type==='+'?'plus':type==='-'?'minus':'neutral'}"><b>${type}</b>${text}</span>`).join('')}</div></div></section><section class="tactics-panel roles-panel"><div class="tactics-panel-head"><h3>SPIELERROLLEN & COURT</h3><span>STARTER</span></div><div class="tactic-court"><span class="play-route route-one"></span><span class="play-route route-two"></span>${['PG','SG','SF','PF','C'].map(slot=>{const p=roster.find(x=>x.starterSlot===slot);return`<div class="tactic-court-player tactic-${slot.toLowerCase()}">${imageMarkup(save.playerImages?.[p?.id],'tactic-player-photo',p?.name||slot,`<i>${p?.number??slot}</i>`)}<b>${slot}</b><small>${p?.name||'-'}</small></div>`}).join('')}<strong id="court-system-name">${t.system}</strong></div><div class="role-grid"><label>1. OPTION${playerSelect('primary')}</label><label>2. OPTION${playerSelect('secondary')}</label><label>3. OPTION${playerSelect('tertiary')}</label><label>BALLHANDLER${playerSelect('ballHandler',p=>['PG','SG','G','GF'].includes(p.position))}</label><label>SCREEN SETTER${playerSelect('screenSetter',p=>['PF','C','FC','F'].includes(p.position))}</label><label>RIM PROTECTOR${playerSelect('rimProtector',p=>['PF','C','FC'].includes(p.position))}</label><label>SIXTH MAN${playerSelect('sixthMan',p=>!p.starterSlot)}</label></div><div class="lineup-plan-grid"><label>STARTER${select('starterPlan',['Ausgewogen','Star fokussieren','Ball bewegen','Dreier','Inside'])}</label><label>BANK${select('benchPlan',['Ausgewogen','Ball bewegen','Tempo erhöhen','Defense'])}</label><label>CLUTCH${select('clutchPlan',['Star fokussieren','Pick & Roll','Isolation','Beste Option'])}</label></div></section><section class="tactics-side"><div class="tactics-panel profile-panel"><div class="tactics-panel-head"><h3>LIVE-TEAMPROFIL</h3><b>${teamPower(save.activeTeam).toFixed(0)}</b></div>${profileRow('SHOOTING',profile.shooting)}${profileRow('PLAYMAKING',profile.playmaking)}${profileRow('PERIMETER D',profile.perimeter)}${profileRow('REBOUNDING',profile.rebounding)}${profileRow('RIM PROTECTION',profile.rim)}</div><div class="tactics-panel situation-panel"><div class="tactics-panel-head"><h3>SITUATIONEN</h3><span>AUTOMATIK</span></div><label>BEI FÜHRUNG${select('whenLeading',['Tempo kontrollieren','Weiter aggressiv','Bank einsetzen'])}</label><label>BEI RÜCKSTAND${select('whenTrailing',['Dreier suchen','Tempo erhöhen','Pressing'])}</label><label>ENGES SPIEL${select('closeGame',['Beste Spieler','Defense Lineup','Shooting Lineup'])}</label></div><div class="tactics-panel opponent-panel"><div class="tactics-panel-head"><h3>GEGNER-GAMEPLAN</h3><span>${opponent?.abbr||'-'}</span></div>${opponent?`<div class="opponent-head">${imageMarkup(save.teamImages?.[opponent.id],'gameplan-logo',fullName(opponent),`<i>${opponent.abbr}</i>`)}<strong>${fullName(opponent)}<small>${save.records[opponent.id].wins}-${save.records[opponent.id].losses} · Stärke ${teamPower(opponent.id).toFixed(0)}</small></strong></div><div class="opponent-star"><span>TOPSPIELER</span><b>${oppStar?.name} · ${oppStar?.rating}</b></div><div class="opponent-bars"><span>SHOOTING <b>${oppProfile.shooting.toFixed(0)}</b></span><span>INSIDE <b>${oppProfile.rim.toFixed(0)}</b></span></div>${select('opponentFocus',['Star eindämmen','Dreier verhindern','Zone schließen','Tempo bremsen','Keine Anpassung'],'gameplan-select')}`:'<p class="empty-copy">Kein weiteres Spiel angesetzt.</p>'}</div></section><div class="tactics-savebar"><span><b id="tactic-save-status">ÄNDERUNGEN LIVE ANGEZEIGT</b><small>Die Simulation verwendet Regler, Systeme, Rollen und Situationen.</small></span><button class="primary-action" id="save-tactics">TAKTIK SPEICHERN</button></div></div>`;
}

function finishTacticsRender(t,fit,matchup){const courtElement=document.querySelector('.tactic-court');if(courtElement){courtElement.querySelectorAll('.play-route').forEach(x=>x.remove());courtElement.insertAdjacentHTML('afterbegin',`<div id="tactic-route-layer">${tacticRoutes(t.system)}</div>`)}const profilePanel=document.querySelector('.profile-panel');if(profilePanel)profilePanel.insertAdjacentHTML('beforeend',`<div class="system-fit"><span>OFFENSE FIT<b id="offense-fit">${fit.offense.toFixed(0)}%</b></span><span>DEFENSE FIT<b id="defense-fit">${fit.defense.toFixed(0)}%</b></span></div><div class="matchup-edge"><span>OFFENSIVER VORTEIL<b id="offense-edge" class="${matchup.offense>=0?'positive':'negative'}">${matchup.offense>0?'+':''}${matchup.offense}</b></span><span>DEFENSIVER VORTEIL<b id="defense-edge" class="${matchup.defense>=0?'positive':'negative'}">${matchup.defense>0?'+':''}${matchup.defense}</b></span></div>`);document.querySelectorAll('.tactic-slider').forEach(label=>label.title=`${label.querySelector('span')?.textContent||'Regler'} beeinflusst die Spielweise und Simulation direkt.`)}
function readTacticsForm(){const data={...save.tactics[save.activeTeam]};document.querySelectorAll('[data-tactic]').forEach(x=>data[x.dataset.tactic]=x.type==='range'?Number(x.value):x.value);return data;}

function updateTacticsLive(){
  const data=readTacticsForm(),profile=tacticTeamProfile(save.rosters[save.activeTeam]),fit=tacticFit(data,profile),next=findNextGame(save.activeTeam),opponent=next?teamById(next.home===save.activeTeam?next.away:next.home):null,oppProfile=opponent?tacticTeamProfile(save.rosters[opponent.id]):null,edge=matchupAdvantage(profile,oppProfile);document.querySelectorAll('[data-tactic-value]').forEach(x=>x.textContent=data[x.dataset.tacticValue]);const impacts=$('#tactic-impacts');if(impacts)impacts.innerHTML=tacticImpacts(data).map(([type,text])=>`<span class="impact-${type==='+'?'plus':type==='-'?'minus':'neutral'}"><b>${type}</b>${text}</span>`).join('');const court=$('#court-system-name');if(court)court.textContent=data.system;const layer=$('#tactic-route-layer');if(layer)layer.innerHTML=tacticRoutes(data.system);const offFit=$('#offense-fit'),defFit=$('#defense-fit');if(offFit)offFit.textContent=`${fit.offense.toFixed(0)}%`;if(defFit)defFit.textContent=`${fit.defense.toFixed(0)}%`;[['#offense-edge',edge.offense],['#defense-edge',edge.defense]].forEach(([selector,value])=>{const node=$(selector);if(node){node.textContent=`${value>0?'+':''}${value}`;node.className=value>=0?'positive':'negative'}});const status=$('#tactic-save-status');if(status)status.textContent='UNGESPEICHERTE ÄNDERUNGEN';
}

function applyTacticPreset(name){
  const presets={balanced:{paceValue:50,threeRate:50,ballMovement:55,offRebound:45,defPressure:50,system:'Motion',defSystem:'Mann'},run:{paceValue:88,threeRate:68,ballMovement:62,offRebound:35,defPressure:58,system:'Pace & Space',defSystem:'Switching'},defense:{paceValue:35,threeRate:42,ballMovement:55,offRebound:42,defPressure:78,system:'Motion',defSystem:'Switching'},three:{paceValue:65,threeRate:88,ballMovement:72,offRebound:30,defPressure:50,system:'Five-Out',defSystem:'Mann'},inside:{paceValue:42,threeRate:25,ballMovement:50,offRebound:82,defPressure:45,system:'Post Offense',defSystem:'Drop Coverage'},playoff:{paceValue:38,threeRate:55,ballMovement:45,offRebound:55,defPressure:72,system:'Pick & Roll',defSystem:'Switching'}};
  const preset=presets[name];if(!preset)return;Object.entries(preset).forEach(([key,value])=>{const input=document.querySelector(`[data-tactic="${key}"]`);if(input)input.value=value});updateTacticsLive();
}

function saveTacticsSetup(){
  const data=readTacticsForm();data.pace=data.paceValue<40?'Langsam':data.paceValue>65?'Schnell':'Normal';data.offense=data.system==='Post Offense'?'Inside':['Five-Out','Pace & Space'].includes(data.system)?'Dreier':data.system==='Pick & Roll'?'Pick & Roll':'Ausgewogen';data.defense=data.defSystem.startsWith('Zone')?'Zone':data.defSystem==='Drop Coverage'?'Drop':data.defSystem;data.focus=data.primary?'Star fokussieren':data.ballMovement>=65?'Ball bewegen':'Ausgewogen';data.rotation=data.benchPlan==='Tempo erhöhen'?'Tief':'Normal';save.tactics[save.activeTeam]=data;persist();renderView('tactics');
}

function leagueLeaders(stat){return teams.flatMap(t=>save.rosters[t.id].map(p=>({p,t,value:p.stats.gp?p.stats[stat]/p.stats.gp:0}))).filter(x=>x.p.stats.gp).sort((a,b)=>b.value-a.value).slice(0,10);}
function awardLeaders(){
  const all=teams.flatMap(t=>save.rosters[t.id].map(p=>({p,t,score:(p.stats.gp?p.stats.pts/p.stats.gp:0)+(p.rating-75)*.45+(p.stats.gp?p.stats.reb/p.stats.gp:0)*.35+(p.stats.gp?p.stats.ast/p.stats.gp:0)*.5})));
  return all.sort((a,b)=>b.score-a.score).slice(0,8);
}
function renderLeague(){
  const leaderTable=(title,stat,suffix)=>`<div class="content-card"><h3>${title}</h3>${leagueLeaders(stat).map((x,i)=>`<div class="standing-row"><span class="number">${i+1}</span><strong>${x.p.name}<small>${x.t.abbr}</small></strong><span>${x.value.toFixed(1)} ${suffix}</span></div>`).join('')||'<p class="muted">Nach dem ersten Spiel erscheinen die Bestenlisten.</p>'}</div>`;
  $('#view-content').innerHTML=`<div class="league-hero content-card"><div><p class="eyebrow">NBA AWARD RACE</p><h3>MVP-Favoriten</h3></div>${awardLeaders().slice(0,5).map((x,i)=>`<div class="award-candidate"><span>${i+1}</span><strong>${x.p.name}<small>${x.t.abbr} · OVR ${x.p.rating}</small></strong></div>`).join('')||'<p class="muted">Die Award-Rennen starten mit der Saison.</p>'}</div><div class="stats-leaders">${leaderTable('Punkte','pts','PPG')}${leaderTable('Rebounds','reb','RPG')}${leaderTable('Assists','ast','APG')}</div>${save.awards.length?`<div class="content-card"><h3>Historische Awards</h3>${save.awards.slice().reverse().map(a=>`<p class="news-item"><strong>${a.season}:</strong> MVP ${a.mvp}, DPOY ${a.dpoy}, Rookie ${a.roy}</p>`).join('')}</div>`:''}`;
}

function gamesForTeam(id){return save.schedule.flatMap((day,di)=>day.filter(g=>g.home===id||g.away===id).map(g=>({...g,day:di})));}
function findNextGame(id){return gamesForTeam(id).find(g=>!g.played);}
function renderSchedule(){const games=gamesForTeam(save.activeTeam);const start=Math.max(0,save.day-5);$('#view-content').innerHTML=`<div class="content-card"><div class="card-head"><h3>82-Spiele-Spielplan</h3><span>${games.filter(g=>g.played).length}/82 gespielt</span></div>${games.slice(start,start+18).map(g=>{const opp=teamById(g.home===save.activeTeam?g.away:g.home);return`<div class="game-row"><span class="number">${g.day+1}</span><strong>${g.home===save.activeTeam?'vs.':'@'} ${fullName(opp)}<small>${g.played?'Beendet':'Noch offen'}</small></strong><span>${g.played?`${g.homeScore}-${g.awayScore}`:'-'}</span></div>`}).join('')}</div>`;}

function conferenceStandings(conf){return teams.filter(t=>t.conference===conf).sort((a,b)=>{const ar=save.records[a.id],br=save.records[b.id];return br.wins-ar.wins||(br.pf-br.pa)-(ar.pf-ar.pa)});}
function renderStandings(){const table=conf=>`<div class="content-card"><h3>${conf}ern Conference</h3>${conferenceStandings(conf).map((t,i)=>{const r=save.records[t.id],logo=save.teamImages?.[t.id],status=i<6?'Playoffs':i<10?'Play-in':'Lottery';return`<div class="standing-row"><span class="number">${i+1}</span>${imageMarkup(logo,'standing-logo',fullName(t),`<span class="standing-abbr" style="--standing-color:${t.color}">${t.abbr}</span>`)}<strong>${fullName(t)}<small>${status}</small></strong><span>${r.wins}-${r.losses}</span></div>`}).join('')}</div>`;$('#view-content').innerHTML=`<div class="split-grid">${table('East')}${table('West')}</div>`;}

function tradeAssetList(teamId,side){return save.rosters[teamId].sort((a,b)=>b.rating-a.rating).map(p=>`<label class="trade-asset"><input type="checkbox" data-trade-${side}="${p.id}"><span><strong>${p.name}</strong><small>${p.position} · OVR ${p.rating} · ${money(p.salary)}</small></span></label>`).join('')}
function pickOptions(teamId,side){return `<option value="">Kein Pick</option>${(save.picks[teamId]||[]).filter(p=>p.owner===teamId).map(p=>`<option value="${p.id}">${p.year} · Runde ${p.round} (${teamById(p.originalTeam).abbr})</option>`).join('')}`;}
function renderTransactions(){
  const t=activeTeam(),others=teams.filter(x=>x.id!==t.id),f=financeStatus(t.id);
  $('#view-content').innerHTML=`<div class="finance-strip"><div><small>Payroll</small><strong>${money(f.pay)}</strong></div><div><small>Status</small><strong>${f.level}</strong></div><div><small>Luxury Tax</small><strong>${money(f.tax)}</strong></div><div><small>Kader</small><strong>${standardRosterCount(save.rosters[t.id])}/15</strong></div></div><div class="content-card"><div class="card-head"><h3>Trade Center</h3><span>Bis zu 3 Spieler plus Draftpick</span></div><label>Tradepartner</label><select id="trade-team">${others.map(x=>`<option value="${x.id}">${fullName(x)}</option>`)}</select><div class="trade-builder"><div><h3>${t.abbr} gibt ab</h3><div class="trade-assets" id="trade-mine-assets">${tradeAssetList(t.id,'mine')}</div><select id="trade-mine-pick">${pickOptions(t.id,'mine')}</select></div><div class="trade-arrow">⇄</div><div><h3 id="trade-partner-title"></h3><div class="trade-assets" id="trade-their-assets"></div><select id="trade-their-pick"></select></div></div><button class="primary-action" id="offer-trade">TRADE ANBIETEN</button><p id="trade-result" class="trade-result"></p></div><div class="content-card"><h3>Free Agency</h3><p class="muted">Cap Space: ${money(cap-payroll(t.id))} · Apron-Regeln beeinflussen Verpflichtungen.</p>${save.freeAgents.slice(0,12).map(p=>`<div class="player-row"><span class="number">${p.position}</span><strong>${p.name}<small>OVR ${p.rating} · ${money(p.salary)}</small></strong><button data-sign="${p.id}" ${standardRosterCount(save.rosters[t.id])>=15?'disabled':''}>Verpflichten</button></div>`).join('')||'<p>Keine Free Agents verfügbar.</p>'}</div>`;updateTradePlayers();
}

function renderDraft(){const order=draftOrder();$('#view-content').innerHTML=`<div class="draft-toolbar content-card"><div><p class="eyebrow">SCOUTING DEPARTMENT</p><h3>Draft Board</h3><p class="muted">Unbeobachtete Talente zeigen nur eine Potenzialspanne. Scouting enthüllt den exakten Wert.</p></div><span>${save.prospects.filter(p=>p.scouted).length}/30 gescoutet</span></div><div class="split-grid"><div class="content-card">${save.prospects.slice(0,20).map((p,i)=>`<div class="player-row"><span class="number">${i+1}</span><strong>${p.name}<small>${p.position} · ${p.age} Jahre · POT ${p.scouted?p.potential:`${Math.max(70,p.potential-5)}–${Math.min(99,p.potential+4)}`}</small></strong>${p.scouted?`<span class="rating">${p.rating}</span>`:`<button data-scout="${p.id}">Scouten</button>`}</div>`).join('')}</div><div class="content-card"><h3>${save.phase==='Offseason'?'Draft-Lotterie':'Aktuelle Reihenfolge'}</h3>${order.slice(0,15).map((t,i)=>`<div class="standing-row"><span class="number">${i+1}</span><strong>${fullName(t)}<small>${save.records[t.id].wins} Siege</small></strong><span>${(save.picks[t.id]||[]).filter(p=>p.owner===t.id&&p.year===2026+save.season-1&&p.round===1).length} Pick</span></div>`).join('')}${save.phase==='Offseason'?'<button class="primary-action" id="run-draft">LOTTERIE & DRAFT DURCHFÜHREN</button>':''}</div></div>`;}

function renderPlayoffs(){if(!save.playoffs){$('#view-content').innerHTML=`<div class="content-card empty-state"><h3>NBA Playoffs</h3><p>Nach 82 Spieltagen starten zuerst die Play-in-Spiele und danach vier Best-of-Seven-Runden.</p><button class="primary-action" id="finish-season" ${save.phase!=='Regular Season'?'disabled':''}>REGULAR SEASON SIMULIEREN</button></div>`;return;} $('#view-content').innerHTML=`<div class="content-card"><h3>Playoff-Ergebnisse</h3>${save.playoffs.log.map(x=>`<p class="news-item">${x}</p>`).join('')} ${save.phase==='Playoffs'?'<button class="primary-action" id="sim-playoffs">PLAYOFFS SIMULIEREN</button>':''}${save.phase==='Offseason'?'<button class="primary-action" id="next-season">DRAFT & NÄCHSTE SAISON</button>':''}</div>`;}

function simulateGame(game,playoff=false){
  const ht=save.tactics?.[game.home]||defaultTactics(),at=save.tactics?.[game.away]||defaultTactics(),pace=t=>((Number(t.paceValue)-50)/50)*6;
  const matchup=(def,off)=>{let bonus=0;if(def.defSystem==='Switching'&&['Five-Out','Pace & Space'].includes(off.system))bonus+=.8;if(def.defSystem==='Drop Coverage'&&off.system==='Post Offense')bonus-=.7;if(def.defSystem.startsWith('Zone')&&off.threeRate<50)bonus+=.6;if(def.defSystem==='Full-Court Press')bonus+=.3;if(def.opponentFocus==='Dreier verhindern'&&off.threeRate>=65)bonus+=.5;if(def.opponentFocus==='Tempo bremsen'&&off.paceValue>=65)bonus+=.5;if(def.opponentFocus==='Zone schließen'&&off.threeRate<=40)bonus+=.5;return bonus};
  const hp=teamPower(game.home)+3+matchup(ht,at),ap=teamPower(game.away)+matchup(at,ht),base=105+(pace(ht)+pace(at))/2;
  let hs=Math.round(base+(hp-78)*.75+rand(-12,12)),as=Math.round(base+(ap-78)*.75+rand(-12,12));while(hs===as){hs+=rand(0,6);as+=rand(0,6)}
  const quarterScores=(total)=>{const q=[rand(21,31),rand(21,31),rand(21,31)];q.push(total-q.reduce((s,x)=>s+x,0));return q};
  game.played=true;game.homeScore=hs;game.awayScore=as;game.quarters={home:quarterScores(hs),away:quarterScores(as)};game.box={home:playerBox(game.home,hs),away:playerBox(game.away,as)};
  const stars=[...game.box.home.map(x=>({...x,team:game.home})),...game.box.away.map(x=>({...x,team:game.away}))].sort((a,b)=>b.pts-a.pts).slice(0,3);game.playByPlay=[`1. Viertel: ${teamById(game.home).abbr} ${game.quarters.home[0]}:${game.quarters.away[0]} ${teamById(game.away).abbr}`,`${stars[0]?.name} führt alle Scorer mit ${stars[0]?.pts} Punkten an.`,`Halbzeit: ${game.quarters.home.slice(0,2).reduce((s,x)=>s+x,0)}:${game.quarters.away.slice(0,2).reduce((s,x)=>s+x,0)}`,`${stars[1]?.name} setzt im dritten Viertel wichtige Akzente.`,`Endstand: ${teamById(game.home).abbr} ${hs}:${as} ${teamById(game.away).abbr}`];
  if(!playoff){const hr=save.records[game.home],ar=save.records[game.away];hr.pf+=hs;hr.pa+=as;ar.pf+=as;ar.pa+=hs;if(hs>as){hr.wins++;ar.losses++}else{ar.wins++;hr.losses++}}
  return hs>as?game.home:game.away;
}

function playerBox(id,score){
  const rotation=activeGameRotation(id),tactics=save.tactics?.[id]||defaultTactics(),best=Math.max(...rotation.map(x=>x.player.rating));
  const role={PG:{usage:1.08,reb:.65,ast:1.65,blk:.25},SG:{usage:1.12,reb:.75,ast:1.05,blk:.35},SF:{usage:1.02,reb:1,ast:.8,blk:.55},PF:{usage:.94,reb:1.35,ast:.55,blk:1},C:{usage:.9,reb:1.65,ast:.45,blk:1.55},G:{usage:1.1,reb:.7,ast:1.35,blk:.3},GF:{usage:1.07,reb:.88,ast:.92,blk:.45},F:{usage:.98,reb:1.18,ast:.68,blk:.78},FC:{usage:.92,reb:1.5,ast:.5,blk:1.28}};
  const weights=rotation.map(x=>{let tactical=1,p=x.player,unitPlan=p.starterSlot?tactics.starterPlan:tactics.benchPlan;if(p.id===tactics.primary)tactical*=1.22;else if(p.id===tactics.secondary)tactical*=1.12;else if(p.id===tactics.tertiary)tactical*=1.06;else if(!tactics.primary&&p.rating===best)tactical*=1.12;if(Number(tactics.ballMovement)>=65||unitPlan==='Ball bewegen')tactical*=.94+(100-p.rating)/220;if((Number(tactics.threeRate)>=65||unitPlan==='Dreier')&&['PG','SG','G','GF'].includes(p.position))tactical*=1.08;if((tactics.system==='Post Offense'||unitPlan==='Inside')&&['PF','C','FC'].includes(p.position))tactical*=1.12;if(unitPlan==='Star fokussieren'&&p.rating===best)tactical*=1.1;if(['Five-Out','Pace & Space'].includes(tactics.system)&&['PG','SG','SF','G','GF'].includes(p.position))tactical*=1.07;if(tactics.system==='Pick & Roll'&&(p.id===tactics.ballHandler||p.id===tactics.screenSetter))tactical*=1.11;if(p.id===tactics.sixthMan&&!p.starterSlot)tactical*=1.1;return Math.max(1,(p.rating-61)**1.55)*x.minutes*role[p.position].usage*tactical*(.88+Math.random()*.24)});
  const total=weights.reduce((s,x)=>s+x,0)||1;
  const raw=weights.map(w=>score*w/total),points=raw.map(Math.floor);let left=score-points.reduce((s,x)=>s+x,0);
  raw.map((x,i)=>({i,f:x-points[i]})).sort((a,b)=>b.f-a.f).slice(0,left).forEach(x=>points[x.i]++);
  return rotation.map((x,i)=>{
    const p=x.player,r=role[p.position],minutes=x.minutes;
    const reboundBoost=Number(tactics.offRebound)>=65?1.12:1,assistBoost=Number(tactics.ballMovement)>=65?1.15:1,stealBoost=Number(tactics.defPressure)>=65?1.18:1,blockBoost=p.id===tactics.rimProtector?1.25:1;
    const line={id:p.id,name:p.name,min:minutes,pts:points[i],reb:Math.max(0,Math.round((minutes/5.7*r.reb+rand(-2,2))*reboundBoost)),ast:Math.max(0,Math.round((minutes/8*r.ast+(p.rating-75)/14+rand(-2,2))*assistBoost)),stl:Math.max(0,Math.round((minutes/28+(p.rating-75)/25+rand(-1,1))*stealBoost)),blk:Math.max(0,Math.round((minutes/30*r.blk+(p.rating-75)/30+rand(-1,1))*blockBoost))};
    p.stats.gp++;p.stats.pts+=line.pts;p.stats.reb+=line.reb;p.stats.ast+=line.ast;p.stats.stl+=line.stl;p.stats.blk+=line.blk;
    p.fatigue=clamp(p.fatigue+Math.round(minutes/9)+(Number(tactics.paceValue)>=70?1:0)+(Number(tactics.defPressure)>=70?1:0),0,100);
    p.form=clamp((p.form||0)+(line.pts>p.rating/4?1:-1),-5,5);p.morale=clamp((p.morale||75)+(line.pts>=15?1:0),35,100);
    if(Math.random()<.003+p.fatigue/9000){const injury=injuryTypes[rand(0,injuryTypes.length-1)];p.injuryType=injury[0];p.injury=rand(injury[1],injury[2]);const item=`${p.name}: ${p.injuryType}, voraussichtlich ${p.injury} Spiele Pause.`;save.news.push(item);save.leagueNews.push(item)}
    return line;
  });
}

function recoverPlayers(){teams.forEach(t=>save.rosters[t.id].forEach(p=>{p.fatigue=clamp(p.fatigue-3,0,100);if(p.injury>0){p.injury--;if(!p.injury)p.injuryType=''}if(Math.random()<.08)p.form+=(p.form>0?-1:p.form<0?1:0)}));}
function simulateDay(){if(save.day>=82){setupPostseason();return;}const games=save.schedule[save.day];games.forEach(g=>simulateGame(g));const mine=games.find(g=>g.home===save.activeTeam||g.away===save.activeTeam);save.lastGame=mine?.id||save.lastGame;save.day++;recoverPlayers();if(save.day%7===0)teams.forEach(t=>save.trainingPoints[t.id]+=3);if(mine)save.news.push(`${teamById(mine.home).abbr} ${mine.homeScore}:${mine.awayScore} ${teamById(mine.away).abbr}`);if(save.day>=82)setupPostseason();persist();}
function simulateDays(n){for(let i=0;i<n&&save.phase==='Regular Season';i++)simulateDay();renderView();}
function calculateAwards(){const ranked=awardLeaders(),rookies=teams.flatMap(t=>save.rosters[t.id].filter(p=>p.age<=21).map(p=>({p,t,score:p.rating+(p.stats.gp?p.stats.pts/p.stats.gp:0)}))).sort((a,b)=>b.score-a.score),defenders=teams.flatMap(t=>save.rosters[t.id].map(p=>({p,t,score:p.rating+(p.stats.gp?(p.stats.stl+p.stats.blk)/p.stats.gp:0)*4}))).sort((a,b)=>b.score-a.score);const award={season:save.seasonLabel,mvp:ranked[0]?.p.name||'-',dpoy:defenders[0]?.p.name||'-',roy:rookies[0]?.p.name||'-'};save.awards.push(award);save.leagueNews.push(`Awards: ${award.mvp} gewinnt MVP, ${award.dpoy} wird DPOY.`)}
function setupPostseason(){if(save.phase!=='Regular Season')return;calculateAwards();save.phase='Playoffs';save.playoffs={log:[],champion:null};runPlayIn();}
function finishRegularSeason(render=true){while(save.day<82)simulateDay();setupPostseason();persist();if(render)renderView('playoffs');}

function series(a,b,label){let aw=0,bw=0;while(aw<4&&bw<4){const g={home:(aw+bw)%2?a:b,away:(aw+bw)%2?b:a};const w=simulateGame(g,true);w===a?aw++:bw++;}const winner=aw>bw?a:b;save.playoffs.log.push(`${label}: ${teamById(winner).abbr} gewinnt ${Math.max(aw,bw)}-${Math.min(aw,bw)} gegen ${teamById(winner===a?b:a).abbr}`);return winner;}
function singleGame(a,b,label){const g={home:a,away:b};const w=simulateGame(g,true);save.playoffs.log.push(`${label}: ${teamById(w).abbr} gewinnt ${g.homeScore}:${g.awayScore}`);return w;}
function runPlayIn(){['East','West'].forEach(c=>{const s=conferenceStandings(c),seven=singleGame(s[6].id,s[7].id,`${c} Play-in 7/8`),nine=singleGame(s[8].id,s[9].id,`${c} Play-in 9/10`),eight=singleGame(seven===s[6].id?s[7].id:s[6].id,nine,`${c} Play-in Finale`);save.playoffs[c]=[s[0].id,eight,s[3].id,s[4].id,s[2].id,s[5].id,s[1].id,seven];});}
function simulatePlayoffs(){const champs={};['East','West'].forEach(c=>{let b=save.playoffs[c];let r1=[series(b[0],b[1],`${c} Runde 1`),series(b[2],b[3],`${c} Runde 1`),series(b[4],b[5],`${c} Runde 1`),series(b[6],b[7],`${c} Runde 1`)];let r2=[series(r1[0],r1[1],`${c} Halbfinale`),series(r1[2],r1[3],`${c} Halbfinale`)];champs[c]=series(r2[0],r2[1],`${c} Finals`)});const champion=series(champs.East,champs.West,'NBA Finals');save.playoffs.champion=champion;save.phase='Offseason';save.history.push({season:save.seasonLabel,champion});save.news.push(`${fullName(teamById(champion))} sind NBA-Champion!`);persist();renderView('playoffs');}

function draftOrder(){const base=[...teams].sort((a,b)=>save.records[a.id].wins-save.records[b.id].wins);if(save.phase!=='Offseason')return base;if(save.lotteryOrder)return save.lotteryOrder.map(teamById);const lottery=base.slice(0,14).map((t,i)=>({t,key:Math.random()*(14-i)})).sort((a,b)=>b.key-a.key).map(x=>x.t),order=[...lottery,...base.slice(14)];save.lotteryOrder=order.map(t=>t.id);return order;}
function standardRosterCount(roster){return roster.filter(p=>!p.twoWay).length;}
function runDraft(){const draftYear=2025+save.season;draftOrder().forEach((originalTeam,i)=>{const p=save.prospects[i];if(!p)return;const pick=Object.values(save.picks).flat().find(x=>x.originalTeam===originalTeam.id&&x.year===draftYear&&x.round===1),owner=pick?.owner||originalTeam.id,roster=save.rosters[owner];if(standardRosterCount(roster)>=15){const cut=roster.filter(x=>!x.twoWay).sort((a,b)=>a.rating-b.rating||b.age-a.age)[0];save.freeAgents.push(cut);roster.splice(roster.indexOf(cut),1)}roster.push({...p,id:`${owner}_${p.id}`,salaries:Array(4).fill(p.salary),contractYear:0,stats:resetStats()});if(i<5)save.leagueNews.push(`Draft #${i+1}: ${teamById(owner).abbr} wählt ${p.name}.`);buildDefaultRotation(roster);});save.prospects=[];save.lotteryOrder=null;save.news.push('Draft-Lotterie und NBA Draft wurden durchgeführt.');persist();renderView('draft');}
function optionAccepted(p,nextSalary){const market=Math.max(2,(p.rating-68)*1.8+(p.potential-p.rating)*.5);return p.option==='Player'?nextSalary>=market*.72:market>=nextSalary*.72;}
function advanceSeason(){
  if(save.prospects.length)runDraft();
  teams.forEach(t=>{
    const returning=[];
    save.rosters[t.id].forEach(p=>{
      p.age++;const growth=p.age<25?Math.min(rand(0,2),p.potential-p.rating):p.age>32?-rand(0,2):p.rating<p.potential&&Math.random()<.25?1:0;
      p.rating=clamp(p.rating+growth,55,99);p.ratingHistory=p.ratingHistory||[];p.ratingHistory.push({season:save.seasonLabel,rating:p.rating});p.fatigue=0;p.injury=0;p.stats=resetStats();
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
  save.season++;save.seasonLabel=`${2024+save.season}/${String(25+save.season).padStart(2,'0')}`;save.phase='Regular Season';save.day=0;save.records=Object.fromEntries(teams.map(t=>[t.id,{wins:0,losses:0,pf:0,pa:0}]));save.schedule=generateSchedule();save.prospects=generateProspects(save.season);save.playoffs=null;save.lastGame=null;save.lotteryOrder=null;persist();renderView('overview');
}

function showBoxscore(game){if(!game)return;const rows=(id,lines)=>`<h3>${fullName(teamById(id))}</h3><table><thead><tr><th>Spieler</th><th>MIN</th><th>PTS</th><th>REB</th><th>AST</th><th>STL</th><th>BLK</th></tr></thead><tbody>${lines.map(x=>`<tr><td>${x.name}</td><td>${x.min}</td><td>${x.pts}</td><td>${x.reb}</td><td>${x.ast}</td><td>${x.stl}</td><td>${x.blk}</td></tr>`).join('')}</tbody></table>`;const quarters=game.quarters?`<div class="quarter-board"><span>TEAM</span><span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span><strong>${teamById(game.home).abbr}</strong>${game.quarters.home.map(x=>`<b>${x}</b>`).join('')}<strong>${teamById(game.away).abbr}</strong>${game.quarters.away.map(x=>`<b>${x}</b>`).join('')}</div>`:'';$('#modal-content').innerHTML=`<div class="match-head"><p class="eyebrow">MATCH CENTER</p><h2>${teamById(game.home).abbr} ${game.homeScore}:${game.awayScore} ${teamById(game.away).abbr}</h2></div>${quarters}<div class="play-log">${(game.playByPlay||[]).map(x=>`<p>${x}</p>`).join('')}</div><div class="table-wrap">${rows(game.home,game.box.home)}${rows(game.away,game.box.away)}</div>`;$('#game-modal').classList.remove('hidden');}
function findGameById(id){return save.schedule.flat().find(g=>g.id===id);}
function updateTradePlayers(){const el=$('#trade-team'),target=$('#trade-their-assets');if(!el||!target)return;target.innerHTML=tradeAssetList(el.value,'theirs');$('#trade-their-pick').innerHTML=pickOptions(el.value,'theirs');$('#trade-partner-title').textContent=`${teamById(el.value).abbr} gibt ab`;}
function tradeValue(players,pick){return players.reduce((s,p)=>s+p.rating+(p.potential-p.rating)*.65-Math.max(0,p.age-29)*.3,0)+(pick?(pick.round===1?18:6)+(pick.year-2026)*1.5:0);}
function offerTrade(){
  const otherId=$('#trade-team').value,mine=[...document.querySelectorAll('[data-trade-mine]:checked')].slice(0,3).map(x=>save.rosters[save.activeTeam].find(p=>p.id===x.dataset.tradeMine)),theirs=[...document.querySelectorAll('[data-trade-theirs]:checked')].slice(0,3).map(x=>save.rosters[otherId].find(p=>p.id===x.dataset.tradeTheirs));
  const myPick=(save.picks[save.activeTeam]||[]).find(p=>p.id===$('#trade-mine-pick').value),theirPick=(save.picks[otherId]||[]).find(p=>p.id===$('#trade-their-pick').value),result=$('#trade-result');
  if(!mine.length&&!myPick||!theirs.length&&!theirPick){result.textContent='Beide Teams müssen mindestens einen Wert abgeben.';return}
  const mySalary=mine.reduce((s,p)=>s+p.salary,0),theirSalary=theirs.reduce((s,p)=>s+p.salary,0),salaryOk=Math.max(mySalary,theirSalary)<=Math.min(mySalary,theirSalary)*1.25+10;
  const accepted=salaryOk&&tradeValue(mine,myPick)+rand(-4,4)>=tradeValue(theirs,theirPick);
  if(!accepted){const gap=Math.max(0,tradeValue(theirs,theirPick)-tradeValue(mine,myPick));result.innerHTML=salaryOk?`Abgelehnt. ${teamById(otherId).abbr} verlangt etwa <strong>${gap.toFixed(1)}</strong> mehr Trade-Wert. Gegenangebot: Lege einen Pick oder besseren Spieler dazu.`:'Abgelehnt: Die Gehälter passen nach den Matching-Regeln nicht.';return}
  save.rosters[save.activeTeam]=save.rosters[save.activeTeam].filter(p=>!mine.includes(p)).concat(theirs);save.rosters[otherId]=save.rosters[otherId].filter(p=>!theirs.includes(p)).concat(mine);
  if(myPick){myPick.owner=otherId;save.picks[otherId].push(myPick);save.picks[save.activeTeam]=save.picks[save.activeTeam].filter(p=>p!==myPick)}if(theirPick){theirPick.owner=save.activeTeam;save.picks[save.activeTeam].push(theirPick);save.picks[otherId]=save.picks[otherId].filter(p=>p!==theirPick)}
  buildDefaultRotation(save.rosters[save.activeTeam]);buildDefaultRotation(save.rosters[otherId]);const headline=`Trade: ${theirs.map(p=>p.name).join(', ')||'Draftpick'} zu ${teamById(save.activeTeam).abbr}.`;save.news.push(headline);save.leagueNews.push(headline);persist();renderView('transactions');
}
function signPlayer(id){const p=save.freeAgents.find(x=>x.id===id);if(!p)return;const roster=save.rosters[save.activeTeam],projected=payroll(save.activeTeam)+p.salary;if(standardRosterCount(roster)>=15||projected>firstApron){alert(projected>firstApron?'Verpflichtung blockiert: Das Team würde den First Apron überschreiten.':'Kein Kaderplatz verfügbar.');return}p.twoWay=false;p.salaries=[p.salary];p.contractYear=0;roster.push(p);buildDefaultRotation(roster);save.freeAgents=save.freeAgents.filter(x=>x.id!==id);const item=`${p.name} unterschreibt bei ${activeTeam().abbr} für ${money(p.salary)}.`;save.news.push(item);save.leagueNews.push(item);persist();renderView('transactions');}

document.addEventListener('click',e=>{
  const nav=e.target.closest('.nav-item');if(nav)return renderView(nav.dataset.view);
  const quick=e.target.closest('[data-quick-view]');if(quick)return renderView(quick.dataset.quickView);
  const boxscore=e.target.closest('[data-boxscore]');if(boxscore)return showBoxscore(findGameById(boxscore.dataset.boxscore));
  const team=e.target.closest('.team-card');if(team)return setSelection(team.dataset.team);
  const load=e.target.closest('[data-load-slot]');if(load){slot=load.dataset.loadSlot;save=readSave(slot);return showDashboard()}
  const rosterPlayer=e.target.closest('[data-roster-player]');if(rosterPlayer){selectedRosterPlayer=rosterPlayer.dataset.rosterPlayer;clearTimeout(rosterClickTimer);rosterClickTimer=setTimeout(()=>renderView('roster'),220);return}
  const rosterTabButton=e.target.closest('[data-roster-tab]');if(rosterTabButton){rosterTab=rosterTabButton.dataset.rosterTab;return renderRoster()}
  const compare=e.target.closest('[data-open-compare]');if(compare)return openPlayerComparison(compare.dataset.openCompare);
  const tradeBlock=e.target.closest('[data-toggle-trade-block]');if(tradeBlock){const found=allLeaguePlayers().find(x=>x.p.id===tradeBlock.dataset.toggleTradeBlock);if(found){found.p.tradeBlock=!found.p.tradeBlock;persist();$('#game-modal').classList.add('hidden');return renderRoster()}}
  const rotationMode=e.target.closest('[data-rotation-section]');if(rotationMode){rotationSection=rotationMode.dataset.rotationSection;return renderView('rotation')}
  const rotationPreset=e.target.closest('[data-rotation-preset]');if(rotationPreset)return loadRotationPreset(rotationPreset.dataset.rotationPreset);
  if(e.target.closest('[data-save-rotation-preset]'))return saveRotationPreset();
  const editTeamImage=e.target.closest('[data-edit-team-image]');if(editTeamImage){const t=teamById(editTeamImage.dataset.editTeamImage);return openImageEditor('team',t.id,`${fullName(t)} · Teamlogo`)}
  const editPlayerImage=e.target.closest('[data-edit-player-image]');if(editPlayerImage){const p=save.rosters[save.activeTeam].find(x=>x.id===editPlayerImage.dataset.editPlayerImage);return openImageEditor('player',p.id,`${p.name} · Spielerbild`)}
  const sign=e.target.closest('[data-sign]');if(sign)return signPlayer(sign.dataset.sign);
  const scout=e.target.closest('[data-scout]');if(scout){const p=save.prospects.find(x=>x.id===scout.dataset.scout);p.scouted=true;save.scouting[p.id]=true;persist();return renderView('draft')}
  const benchUp=e.target.closest('[data-bench-up]');if(benchUp)return moveBenchPlayer(benchUp.dataset.benchUp,-1);
  const benchDown=e.target.closest('[data-bench-down]');if(benchDown)return moveBenchPlayer(benchDown.dataset.benchDown,1);
  const train=e.target.closest('[data-train]');if(train){const t=activeTeam();if(save.trainingPoints[t.id]<1)return alert('Keine Trainingspunkte verfügbar.');const p=save.rosters[t.id].find(x=>x.id===train.dataset.train),type=document.querySelector(`[data-training="${p.id}"]`).value,intense=['Wurf','Defense','Athletik','Spielverständnis'].includes(type);if(type==='Regeneration'){p.fatigue=clamp(p.fatigue-22,0,100);p.morale=clamp((p.morale||75)+2,35,100)}else{if(p.rating<p.potential&&Math.random()<(type==='Ausgewogen'?.45:.58))p.rating++;p.fatigue=clamp(p.fatigue+(intense?7:4),0,100);if(intense&&p.fatigue>80&&Math.random()<.08){p.injury=1;p.injuryType='Trainingsüberlastung'}}p.training=type;save.trainingPoints[t.id]--;persist();return renderView('rotation')}
  const preset=e.target.closest('[data-tactic-preset]');if(preset)return applyTacticPreset(preset.dataset.tacticPreset);
  if(e.target.id==='sim-next')simulateDays(1);if(e.target.id==='sim-10')simulateDays(10);if(e.target.id==='finish-season')finishRegularSeason();if(e.target.id==='sim-playoffs')simulatePlayoffs();if(e.target.id==='run-draft')runDraft();if(e.target.id==='next-season')advanceSeason();if(e.target.id==='offer-trade')offerTrade();if(e.target.id==='last-boxscore')showBoxscore(findGameById(save.lastGame));
  if(e.target.id==='auto-rotation'){buildDefaultRotation(save.rosters[save.activeTeam]);persist();return renderView('rotation')}
  if(e.target.id==='save-tactics')return saveTacticsSetup();
  if(e.target.id==='save-image')return saveEditedImage();
  if(e.target.id==='remove-image'){const map=imageEditorTarget.type==='team'?save.teamImages:save.playerImages;delete map[imageEditorTarget.id];persist();$('#game-modal').classList.add('hidden');return renderView('roster')}
  if(e.target.id==='save-rotation')return saveRotationSetup();
});

$('#all-teams').addEventListener('click',()=>setSelection('all'));
$('#start-game').addEventListener('click',startCareer);
$('#team-switcher').addEventListener('change',e=>{save.activeTeam=e.target.value;persist();renderView(currentView)});
$('#trade-team')?.addEventListener('change',updateTradePlayers);
$('#view-content').addEventListener('change',e=>{if(e.target.id==='trade-team')updateTradePlayers();if(e.target.classList.contains('starter-select'))updateLineupPreview();if(e.target.classList.contains('minute-input'))updateRotationLive();if(e.target.matches('[data-tactic]'))updateTacticsLive()});
$('#view-content').addEventListener('change',e=>{if(e.target.id==='roster-position'){rosterPosition=e.target.value;renderRoster()}if(e.target.id==='roster-sort'){rosterSort=e.target.value;renderRoster()}});
$('#view-content').addEventListener('input',e=>{if(e.target.classList.contains('minute-input'))updateRotationLive();if(e.target.matches('[data-tactic]'))updateTacticsLive();if(e.target.id==='roster-search'){rosterSearch=e.target.value;renderRoster();const input=$('#roster-search');if(input){input.focus();input.setSelectionRange(input.value.length,input.value.length)}}});
$('#view-content').addEventListener('dblclick',e=>{const row=e.target.closest('[data-roster-player]');if(row){clearTimeout(rosterClickTimer);openPlayerProfile(row.dataset.rosterPlayer)}});
$('#game-modal').addEventListener('change',e=>{if(e.target.matches('#compare-player-a,#compare-player-b'))renderPlayerComparison()});
let draggedBenchPlayer=null;
$('#view-content').addEventListener('dragstart',e=>{const row=e.target.closest('[data-bench-player]');if(!row)return;draggedBenchPlayer=row;row.classList.add('dragging');e.dataTransfer.effectAllowed='move'});
$('#view-content').addEventListener('dragover',e=>{const court=e.target.closest('[data-court-slot]');if(court&&draggedBenchPlayer){e.preventDefault();court.classList.add('drop-target');return}const row=e.target.closest('[data-bench-player]');if(!row||!draggedBenchPlayer||row===draggedBenchPlayer)return;e.preventDefault();const rect=row.getBoundingClientRect(),after=e.clientY>rect.top+rect.height/2;row.parentElement.insertBefore(draggedBenchPlayer,after?row.nextSibling:row);refreshBenchRanks()});
$('#view-content').addEventListener('dragleave',e=>e.target.closest('[data-court-slot]')?.classList.remove('drop-target'));
$('#view-content').addEventListener('drop',e=>{const court=e.target.closest('[data-court-slot]');if(court&&draggedBenchPlayer){e.preventDefault();const select=court.querySelector('.starter-select');select.value=draggedBenchPlayer.dataset.benchPlayer;court.classList.remove('drop-target');updateLineupPreview();return}if(draggedBenchPlayer)e.preventDefault()});
$('#view-content').addEventListener('dragend',()=>{if(draggedBenchPlayer)draggedBenchPlayer.classList.remove('dragging');draggedBenchPlayer=null;refreshBenchRanks()});
document.addEventListener('input',e=>{if(e.target.id==='image-url'){const url=safeImageUrl(e.target.value),preview=$('#image-preview');preview.innerHTML=url?`<img src="${url}" alt="Vorschau">`:'KEIN BILD'}});
document.addEventListener('change',async e=>{if(e.target.id==='image-file'&&e.target.files[0]){try{const data=await resizeImage(e.target.files[0]);$('#image-preview').innerHTML=`<img src="${data}" alt="Vorschau">`}catch{alert('Das Bild konnte nicht verarbeitet werden.')}}});
$('#save-game').addEventListener('click',()=>{persist();alert(`Karriere in Slot ${slot} gespeichert.`)});
$('#new-career').addEventListener('click',()=>{persist();location.reload()});
$('#close-modal').addEventListener('click',()=>$('#game-modal').classList.add('hidden'));
$('#game-modal').addEventListener('click',e=>{if(e.target.id==='game-modal')e.currentTarget.classList.add('hidden')});

renderTeamChoice();
