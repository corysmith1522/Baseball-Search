//Get player information: https://api.sportsdata.io/v3/mlb/scores/json/Player/${player-name}?key=23c95a605da34a6da64a5a2e44160c36
//Get player statistics: http://api.sportradar.us/mlb/trial/v7/en/players/${player-name}/profile.json?api_key=rwdtx9v3uxsadnpwhaf6r6xd
let search = document.querySelector('#player-search')
async function getOptions() {
  const url = `https://api.sportsdata.io/v3/mlb/scores/json/Players?key=23c95a605da34a6da64a5a2e44160c36`
  try {
    const response = await axios.get(url)
    const data = response.data
    console.log(search.value)
    console.log(filterName(data, search.value))
    // for (let i = 0; i < data.length; i++) {
    //   let name = `${response.data[i].FirstName} ${response.data[i].LastName}`
    //   console.log(name)
    // }
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

getOptions()

function filterName(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true
    }
  }
  return false
}
console.log(filterName([1, 2, 3], 7))