//Get player information: https://api.sportsdata.io/v3/mlb/scores/json/Player/${player-name}?key=23c95a605da34a6da64a5a2e44160c36
//Get player statistics: http://api.sportradar.us/mlb/trial/v7/en/players/${player-name}/profile.json?api_key=rwdtx9v3uxsadnpwhaf6r6xd

let search = document.querySelector('#player-search')
let button = document.querySelector('#search-button')
button.addEventListener('click', async (event) => {
  getOptions();
  event.preventDefault();
});
async function getOptions() {
  try {
    // const url = ``
    const response = await axios.get(`https://api.sportsdata.io/v3/mlb/scores/json/Players?key=23c95a605da34a6da64a5a2e44160c36`)
    // console.log(response);
    response.data.forEach(player => {
      let fullName = `${player.FirstName} ${player.LastName}`
      // let input = "Chase Anderson"
      if (search.value === fullName) {
        console.log(player)
      }
    })
    console.log(search.value) //the person's input
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}