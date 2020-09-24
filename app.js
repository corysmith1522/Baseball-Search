//Get player information: https://api.sportsdata.io/v3/mlb/scores/json/Player/${player-name}?key=23c95a605da34a6da64a5a2e44160c36
//Get player statistics: http://api.sportradar.us/mlb/trial/v7/en/players/${player-name}/profile.json?api_key=rwdtx9v3uxsadnpwhaf6r6xd


//3. removes any previous player data, pulls from API, filters for active players, then prints
async function getName(team) {
  removeData()
  try {
    let response = await axios.get(`https://api.sportsdata.io/v3/mlb/scores/json/Players/${team}?key=23c95a605da34a6da64a5a2e44160c36`)
    let active = response.data.filter(player => player.Status === "Active")
    printData(active)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
//1. grab the form and add a listener for the selected value
const form = document.querySelector('form')
form.addEventListener('submit', inputValue)

//2. grabs the selected value, and on submit, removes the logos plus starts pulling player data
function inputValue(e) {
  e.preventDefault()
  const inputValue = document.querySelector('select').value
  removeLogos()
  getName(inputValue)
}


//4. sorts active players by jersey number, then creates the image and info for each player to print.
function printData(active) {
  const sortedNames = active.sort((first, second) => first.Jersey > second.Jersey ? 1 : -1) // idea came from w3schools: https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript, 
  sortedNames.forEach(player => {
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

// removes all previous data from the browser
function removeData() {
  const removeElement = document.querySelector('.player-container')
  while (removeElement.lastChild) {
    removeElement.removeChild(removeElement.lastChild)
  }
}


//removes logos from the browser
function removeLogos() {
  let choice = document.querySelectorAll('option')
  let teamLogo = document.querySelectorAll('.team-logo')
  teamLogo.forEach(logo => {
    if (choice.value === teamLogo.classList) {
      logo.style.display = "none"
    } else {
      logo.style.display = "inline-block"
    }
  })
}

// let logos = document.querySelectorAll('.team-logo')
// let logoBin = [`${logos[0]}`, `${logos[1]}`, `${logos[2]}`, `${logos[3]}`, `${logos[4]}`, `${logos[5]}`, `${logos[6]}`,
// `${logos[7]}`, `${logos[8]}`, `${logos[9]}`, `${logos[10]}`, `${logos[11]}`, `${logos[12]}`, `${logos[13]}`, `${logos[14]}`,
// `${logos[15]}`, `${logos[16]}`, `${logos[17]}`, `${logos[18]}`, `${logos[19]}`, `${logos[20]}`, `${logos[21]}`, `${logos[22]}`, `${logos[23]}`,
// `${logos[24]}`, `${logos[25]}`, `${logos[26]}`, `${logos[27]}`, `${logos[28]}`, `${logos[29]}`,]
// console.log(logoBin)