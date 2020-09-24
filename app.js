//Get player information: https://api.sportsdata.io/v3/mlb/scores/json/Player/${player-name}?key=23c95a605da34a6da64a5a2e44160c36
//Get player statistics: http://api.sportradar.us/mlb/trial/v7/en/players/${player-name}/profile.json?api_key=rwdtx9v3uxsadnpwhaf6r6xd

async function getName(team) {
  removeData()
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
  // removeData()
  e.preventDefault()
  const inputValue = document.querySelector('select').value
  // console.log(inputValue)
  getName(inputValue)
}

function printData(active) {
  // removeData()
  const sortedNames = active.sort((first, second) => first.Jersey > second.Jersey ? 1 : -1)
  sortedNames.forEach(player => {
    // console.log(`${player.FirstName} ${player.LastName} `)
    // console.log(player)
    let div = document.createElement('div')
    div.setAttribute("id", "player-stats")
    document.querySelector('.player-container').append(div)
    let img = document.createElement('img')
    img.setAttribute('src', player.PhotoUrl)
    document.querySelector('#player-stats').append(img)
    let p = document.createElement('p')
    p.textContent = `#${player.Jersey} | ${player.FirstName} ${player.LastName} | Position: ${player.Position} | Birthplace: ${player.BirthCity}, ${player.BirthState || player.BirthCountry} | Bats: ${player.BatHand}, Throws: ${player.ThrowHand} | College: ${player.College || ' '}`
    document.querySelector('#player-stats').append(p)
  })
}

function removeData() {
  const removeElement = document.querySelector('.player-container')
  while (removeElement.lastChild) {
    removeElement.removeChild(removeElement.lastChild)
  }
}

function addLogo() {
  let selection = document.querySelector('button')
  selection.addEventListener('click', () => {
    let choice = document.querySelectorAll('option')
    let teamLogo = document.querySelectorAll('.team-logo')
    if (choice.value === teamLogo.classList) {
      logo.style.display = "none"
    } else {
      logo.style.display = "inline-block"
    }
  })
}

addLogo()