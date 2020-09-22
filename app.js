//Get player information: https://api.sportsdata.io/v3/mlb/scores/json/Player/${player-name}?key=23c95a605da34a6da64a5a2e44160c36
//Get player statistics: http://api.sportradar.us/mlb/trial/v7/en/players/${player-name}/profile.json?api_key=rwdtx9v3uxsadnpwhaf6r6xd

let search = document.querySelector('#player-search')

async function getName(team) {
  try {
    let response = await axios.get(`https://api.sportsdata.io/v3/mlb/scores/json/Players/${team}?key=23c95a605da34a6da64a5a2e44160c36`)
    let active = response.data.filter(player => player.Status === "Active")
    // console.log(active)
    printData(active)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

const form = document.querySelector('form')
form.addEventListener('submit', inputValue)

function inputValue(e) {
  e.preventDefault()
  const inputValue = document.querySelector('select').value
  // console.log(inputValue)
  getName(inputValue)
}

function printData(active) {
  active.forEach(player => {
    console.log(`${player.FirstName} ${player.LastName} `)
    // console.log(player)
    let p = document.createElement('p')
    p.textContent = `${player.Jersey} | ${player.FirstName} ${player.LastName} | ${player.Position} | ${player.BirthCity}, ${player.BirthState || player.BirthCountry} | ${player.BatHand}, ${player.ThrowHand}`
    document.querySelector('#player-stats').append(p)
  })
}