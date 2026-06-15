const fs = require('fs');

global.localStorage = {setItem(){}, getItem(){return null;}};
const rosterSource = fs.readFileSync('rosters.js', 'utf8');
const appSource = fs.readFileSync('app.js', 'utf8').split("document.addEventListener('click'")[0];
for(const marker of ['basketball-court','minute-input','bench-drag-row','lineup-preview','rotation-savebar']){
  if(!appSource.includes(marker))throw new Error('rotation UI missing: '+marker);
}
for(const marker of ['tactics-workspace','tactic-slider','tactic-court','data-tactic-preset','opponentFocus']){
  if(!appSource.includes(marker))throw new Error('tactics UI missing: '+marker);
}
for(const marker of ['calendar-grid','BACK-TO-BACK','standings-table-row','awardRaces','POWER RANKING','All-Defense']){
  if(!appSource.includes(marker))throw new Error('league update missing: '+marker);
}

const checks = `
const rosters={};
teams.forEach(t=>rosters[t.id]=fallbackRoster(t));
save=normalizeSaveData({version:12,slot:'test',manager:'Test',controlAll:true,activeTeam:'atl',season:1,seasonLabel:'2025/26',phase:'Regular Season',day:0,rosters,records:Object.fromEntries(teams.map(t=>[t.id,{wins:0,losses:0,pf:0,pa:0}])),schedule:generateSchedule(),freeAgents:makeFreeAgents(),prospects:generateProspects(),history:[],playoffs:null,lastGame:null,news:[],trainingPoints:Object.fromEntries(teams.map(t=>[t.id,3]))});
if(!save.teamImages||!save.playerImages)throw new Error('image storage missing');
if(safeImageUrl('javascript:alert(1)'))throw new Error('unsafe image URL accepted');
if(!safeImageUrl('https://example.com/logo.png'))throw new Error('valid image URL rejected');

for(const t of teams){
  if(STATIC_POSITIONS[t.id].length!==STATIC_ROSTERS[t.id].length)throw new Error(t.id+' position count mismatch');
  const total=save.rosters[t.id].reduce((sum,p)=>sum+p.minutes,0);
  if(total!==240)throw new Error(t.id+' rotation has '+total+' minutes');
  if(!save.rosters[t.id].every(p=>['PG','SG','SF','PF','C','G','GF','F','FC'].includes(p.position)))throw new Error(t.id+' has invalid positions');
  const starters=save.rosters[t.id].filter(p=>p.starterSlot);
  if(starters.length!==5||new Set(starters.map(p=>p.starterSlot)).size!==5)throw new Error(t.id+' starting five is invalid');
}
if(save.rosters.gsw.find(p=>p.name==='Draymond Green').position!=='PF')throw new Error('Draymond Green position is wrong');
if(save.rosters.gsw.find(p=>p.name==='Moses Moody').position!=='GF')throw new Error('Moses Moody position is wrong');
const injuredCenter=save.rosters.atl.find(p=>p.starterSlot==='C');injuredCenter.injury=2;
const injuryRotation=activeGameRotation('atl');
if(!injuryRotation.slice(0,5).some(x=>fitsSlot(x.player.position,'C')))throw new Error('center injury replacement is invalid');
injuredCenter.injury=0;

const testGame={home:'den',away:'okc'};
simulateGame(testGame,true);
if(testGame.box.home.reduce((s,p)=>s+p.pts,0)!==testGame.homeScore)throw new Error('home box score mismatch');
if(testGame.box.away.reduce((s,p)=>s+p.pts,0)!==testGame.awayScore)throw new Error('away box score mismatch');
if(testGame.box.home.reduce((s,p)=>s+p.min,0)!==240)throw new Error('home minutes mismatch');
if(!testGame.quarters||testGame.quarters.home.reduce((s,x)=>s+x,0)!==testGame.homeScore)throw new Error('quarter score mismatch');

while(save.day<82)simulateDay();
for(const t of teams){
  const r=save.records[t.id];
  if(r.wins+r.losses!==82)throw new Error(t.id+' played '+(r.wins+r.losses)+' games');
  const standing=teamStandingData(t);
  if(standing.last.length!==10)throw new Error(t.id+' last-ten form missing');
  if(!standing.home.includes('-')||!standing.away.includes('-'))throw new Error(t.id+' split records missing');
}
if(!save.awards.length)throw new Error('season awards missing');
if(!awardRaces().MVP.length||!leagueLeaders('stl').length||!leagueLeaders('blk').length)throw new Error('league leaders missing');
save.phase='Offseason';save.prospects=[];renderView=()=>{};
advanceSeason();
for(const t of teams){
  const roster=save.rosters[t.id];
  if(standardRosterCount(roster)!==15)throw new Error(t.id+' has '+standardRosterCount(roster)+' standard contracts');
  if(roster.reduce((sum,p)=>sum+p.minutes,0)!==240)throw new Error(t.id+' new-season rotation is invalid');
}
console.log('OK: 30 teams, rotations, box scores, 82-game season and offseason contracts.');
`;

new Function(rosterSource+'\n'+appSource+'\n'+checks)();
