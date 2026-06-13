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
  ['phx','Phoenix','Suns','PHX','#1d1160','West',76,['Devin Booker','Jalen Green','Dillon Brooks','Grayson Allen','Royce O’Neale']],
  ['por','Portland','Trail Blazers','POR','#e03a3e','West',77,['Deni Avdija','Shaedon Sharpe','Jrue Holiday','Donovan Clingan','Scoot Henderson']],
  ['sac','Sacramento','Kings','SAC','#5a2d81','West',75,['Domantas Sabonis','DeMar DeRozan','Zach LaVine','Keegan Murray','Malik Monk']],
  ['sas','San Antonio','Spurs','SAS','#8a8d8f','West',89,['Victor Wembanyama','De’Aaron Fox','Stephon Castle','Dylan Harper','Devin Vassell']],
  ['tor','Toronto','Raptors','TOR','#ce1141','East',81,['Scottie Barnes','Brandon Ingram','RJ Barrett','Immanuel Quickley','Jakob Poeltl']],
  ['uta','Utah','Jazz','UTA','#6a2c91','West',69,['Lauri Markkanen','Walker Kessler','Keyonte George','Ace Bailey','Isaiah Collier']],
  ['was','Washington','Wizards','WAS','#002b5c','East',68,['Trae Young','Alex Sarr','Tre Johnson','Bilal Coulibaly','Bub Carrington']]
];

const teams = teamData.map(([id,city,name,abbr,color,conference,strength,players]) => ({ id,city,name,abbr,color,conference,strength,players }));
let selection = null;
let save = JSON.parse(localStorage.getItem('fullCourtSave') || 'null');
if (save && (save.version !== 2 || !teams.some(team => team.id === save.activeTeam))) {
  localStorage.removeItem('fullCourtSave');
  save = null;
}

const teamGrid = document.querySelector('#team-grid');
const allTeamsButton = document.querySelector('#all-teams');
const startButton = document.querySelector('#start-game');

function renderTeamChoice() {
  teamGrid.innerHTML = teams.map(team => `
    <button class="team-card" style="--team-color:${team.color}" data-team="${team.id}" type="button">
      <span class="team-abbr">${team.abbr}</span>
      <strong>${team.city} ${team.name}</strong>
      <small>${team.conference} · Teamstärke ${team.strength}</small>
      <span class="check">✓</span>
    </button>`).join('');
}

function setSelection(value) {
  selection = value;
  allTeamsButton.classList.toggle('selected', value === 'all');
  document.querySelectorAll('.team-card').forEach(card => card.classList.toggle('selected', card.dataset.team === value));
  document.querySelector('#selection-count').textContent = value === 'all' ? `${teams.length} ausgewählt` : value ? '1 ausgewählt' : '0 ausgewählt';
  startButton.disabled = !value;
}

function makeRoster(team) {
  return team.players.map((name, i) => ({
    number: (i * 7 + team.strength) % 55,
    name,
    position: ['PG', 'SG', 'SF', 'PF', 'C'][i % 5],
    age: 20 + ((i * 3 + team.strength) % 13),
    rating: Math.min(97, team.strength + 4 - i * 2)
  })).sort((a, b) => b.rating - a.rating);
}

function startCareer() {
  const manager = document.querySelector('#manager-name').value.trim() || 'Coach';
  save = {
    version: 2,
    manager,
    controlAll: selection === 'all',
    activeTeam: selection === 'all' ? teams[0].id : selection,
    rosters: Object.fromEntries(teams.map(t => [t.id, makeRoster(t)])),
    records: Object.fromEntries(teams.map((t, i) => [t.id, { wins: (i * 3) % 8, losses: (i * 5) % 7 }])),
    week: 1
  };
  localStorage.setItem('fullCourtSave', JSON.stringify(save));
  showDashboard();
}

function activeTeam() { return teams.find(t => t.id === save.activeTeam); }

function showDashboard() {
  document.querySelector('#setup-screen').classList.add('hidden');
  document.querySelector('#dashboard').classList.remove('hidden');
  const switcher = document.querySelector('#team-switcher');
  switcher.innerHTML = (save.controlAll ? teams : teams.filter(t => t.id === save.activeTeam))
    .map(t => `<option value="${t.id}" ${t.id === save.activeTeam ? 'selected' : ''}>${t.city} ${t.name}</option>`).join('');
  switcher.classList.toggle('hidden', !save.controlAll);
  renderView('overview');
}

function renderView(view) {
  const team = activeTeam();
  const roster = save.rosters[team.id];
  const record = save.records[team.id];
  document.querySelector('#welcome-title').textContent = `Willkommen, ${save.manager}`;
  document.querySelector('#active-team-mark').innerHTML = `${team.city} ${team.name}<small>${save.controlAll ? 'Liga-Modus · Team wechselbar' : 'Dein Team'}</small>`;
  document.querySelectorAll('.nav-item').forEach(b => b.classList.toggle('active', b.dataset.view === view));
  const content = document.querySelector('#view-content');

  if (view === 'roster') {
    content.innerHTML = `<div class="content-card"><h3>Kader · ${team.city} ${team.name}</h3>${roster.map(p => playerRow(p)).join('')}</div>`;
    return;
  }
  if (view === 'standings') {
    const sorted = [...teams].sort((a,b) => save.records[b.id].wins - save.records[a.id].wins);
    content.innerHTML = `<div class="content-card"><h3>Ligatabelle</h3>${sorted.map((t,i) => `<div class="standing-row"><span class="number">${i+1}</span><strong>${t.city} ${t.name}</strong><span>${save.records[t.id].wins}–${save.records[t.id].losses}</span></div>`).join('')}</div>`;
    return;
  }
  if (view === 'schedule') {
    content.innerHTML = `<div class="content-card"><h3>Die nächsten Spiele</h3>${teams.slice(1,7).map((t,i) => `<div class="game-row"><span class="number">${i+1}</span><strong>${i%2 ? 'Auswärts' : 'Heim'} vs. ${t.city} ${t.name}<small>Spieltag ${save.week+i}</small></strong><span>${i+1}. Woche</span></div>`).join('')}</div>`;
    return;
  }

  const next = teams[(teams.indexOf(team) + save.week) % teams.length];
  content.innerHTML = `
    <div class="stats-grid">
      <div class="stat-box"><small>Bilanz</small><strong>${record.wins}–${record.losses}</strong></div>
      <div class="stat-box"><small>Teamstärke</small><strong>${team.strength}</strong></div>
      <div class="stat-box"><small>Tabellenplatz</small><strong>#${[...teams].sort((a,b)=>save.records[b.id].wins-save.records[a.id].wins).findIndex(t=>t.id===team.id)+1}</strong></div>
      <div class="stat-box"><small>Budget</small><strong>${(28 + team.strength / 5).toFixed(1)} M</strong></div>
    </div>
    <div class="dash-grid">
      <div class="content-card"><h3>Top-Spieler</h3>${roster.slice(0,5).map(p => playerRow(p)).join('')}</div>
      <div class="content-card"><h3>Nächstes Spiel</h3><div class="next-game"><strong>${team.abbr}</strong><span class="versus">VS</span><strong>${next.abbr}</strong><p>${team.city}<br>Spieltag ${save.week}</p></div></div>
    </div>`;
}

function playerRow(p) {
  return `<div class="player-row"><span class="number">${p.number}</span><strong>${p.name}<small>${p.position} · ${p.age} Jahre</small></strong><span class="rating">${p.rating}</span></div>`;
}

allTeamsButton.addEventListener('click', () => setSelection('all'));
teamGrid.addEventListener('click', e => {
  const card = e.target.closest('.team-card');
  if (card) setSelection(card.dataset.team);
});
startButton.addEventListener('click', startCareer);
document.querySelector('#team-switcher').addEventListener('change', e => { save.activeTeam = e.target.value; localStorage.setItem('fullCourtSave', JSON.stringify(save)); renderView('overview'); });
document.querySelectorAll('.nav-item').forEach(button => button.addEventListener('click', () => renderView(button.dataset.view)));
document.querySelector('#new-career').addEventListener('click', () => { if (confirm('Möchtest du wirklich eine neue Karriere beginnen?')) { localStorage.removeItem('fullCourtSave'); location.reload(); } });

renderTeamChoice();
if (save) showDashboard();
