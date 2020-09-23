# Baseball-Search

Public web URL goes here.

## Project Description

This website will allow a user to select a MLB team from a drop-down menu and when swinging, the result will be a list of all the current, active players on that respective team! No more having to wonder who is on your favorite team, thanks to Baseball Search!

## API and Data Sample

https://sportsdata.io/developers/api-documentation/mlb#/free -- bio information and image

```json 
{
        "PlayerID": 10000001,
        "SportsDataID": "",
        "Status": "Active",
        "TeamID": 3,
        "Team": "TOR",
        "Jersey": 22,
        "PositionCategory": "P",
        "Position": "SP",
        "MLBAMID": 502624,
        "FirstName": "Chase",
        "LastName": "Anderson",
        "BatHand": "R",
        "ThrowHand": "R",
        "Height": 73,
        "Weight": 200,
        "BirthDate": "1987-11-30T00:00:00",
        "BirthCity": "Wichita Falls",
        "BirthState": "TX",
        "BirthCountry": "USA",
        "HighSchool": null,
        "College": "Oklahoma",
        "ProDebut": "2014-05-11T00:00:00",
        "Salary": null,
        "PhotoUrl": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000001.png",
        "SportRadarPlayerID": "4bdcd59e-2cd5-4d1e-8058-588a72a1f8ae",
        "RotoworldPlayerID": 7333,
        "RotoWirePlayerID": 12419,
        "FantasyAlarmPlayerID": 100318,
        "StatsPlayerID": 501567,
        "SportsDirectPlayerID": 106019,
        "XmlTeamPlayerID": 4645,
        "InjuryStatus": "Scrambled",
        "InjuryBodyPart": "Scrambled",
        "InjuryStartDate": null,
        "InjuryNotes": "Scrambled",
        "FanDuelPlayerID": 38161,
        "DraftKingsPlayerID": 501567,
        "YahooPlayerID": 9698,
        "UpcomingGameID": 60463,
        "FanDuelName": "Chase Anderson",
        "DraftKingsName": "Chase Anderson",
        "YahooName": "Chase Anderson",
        "GlobalTeamID": 10000003,
        "FantasyDraftName": "Chase Anderson",
        "FantasyDraftPlayerID": 501567,
        "Experience": "6",
        "UsaTodayPlayerID": 6630254,
        "UsaTodayHeadshotUrl": "http://cdn.usatsimg.com/api/download/?imageID=14076551",
        "UsaTodayHeadshotNoBackgroundUrl": "http://cdn.usatsimg.com/api/download/?imageID=14510439",
        "UsaTodayHeadshotUpdated": "2020-02-21T19:29:41",
        "UsaTodayHeadshotNoBackgroundUpdated": "2020-07-13T12:16:44"
    }
```
    

## Wireframes
![Main Wireframe](https://github.com/corysmith1522/Baseball-Stat-Search/blob/master/website_files/Homepage.png)

![Mobile Wireframe](https://github.com/corysmith1522/Baseball-Stat-Search/blob/master/website_files/Mobile%20Homepage.png)


### MVP/PostMVP  

#### MVP 

- Establish base HTML that includes header, footer, website description, background image, form, button, placeholders for image & text 
- Establish base CSS guidelines to desktop page that aligns everything in center and spaced appropriately with proper sizing, makes text readable, properly displays image in proportion to the page
- Return API results using Javascript and Axios to display player information and an image onto the website
- Incorporate event listener to activate search functions when button is clicked
- Pull in API data for player biographical information (sportsdata)
- Pull in API data for player image (sportsdata)
- Establish proper media query design to reorganize the page for mobile platform

#### PostMVP  

- Wrap text so it flows to fit the screen width after scrolling below the image
- Style the button and search fields with advanced CSS techniques, creating a fancier display
- Make footer fixed to the page so when user scrolls, always see the footer with site sources and authorization
- Add an animation upon hitting the button that processes while the API gathers the data
- Incorporate a background image that dynamically changes to the team logo of the player (note: probably use different API)

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Sept 18-21| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Sept 21| Project Approval, base HTML, CSS to align properly, start API returns | Complete
|Sept 22| Continue API returns, test all API pulls, write JS functions, add event listener | Complete
|Sept 23| Populate browser with API data, Make media query for responsive design, finish MVP | Incomplete
|Sept 24| Text Wrap, button styling, fixed footer, background image, animation if time | Incomplete
|Sept 25| Presentations | Incomplete

## Priority Matrix

![Priority Matrix](https://github.com/corysmith1522/Baseball-Stat-Search/blob/master/website_files/Time%20Matrix.png)


## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create basic HTML Structure | H | 1hr| 30m | 30m |
| Create CSS styles for HTML | H | 3hrs| 1hr | 1 hr |
| Debug CSS to account for center & spacing | H | 3hrs| 2.5hrs | 2.5hrs |
| Successfully pull in API data | H | 2hrs| 6hrs | 6hrs |
| Write JS code to map out API requests | H | 3hrs| 4hrs | 4hrs |
| Write JS code to return data to Browser | H | 3hrs| 2hrs | 2hrs |
| Add event listener for submit button | H | 1hrs| 30m | 30m |
| Test all JS functionality | H | 3hrs| 3hrs | 3hrs |
| Implement Responsive Design, make media query for mobile | H | 3hrs| 30m | 30m |
| Debug Responsive Design | H | 3hrs| 1hr | 1hr |
| Stylize button | H | 3hrs|  |  |
| Make footer a fixed position on the page | H | 3hrs|  |  |
| Make background image change to image of team for each player | H | 3hrs|  |  |
| Animations | H | 3hrs|  |  |
| Total | H | 37hrs| 21hrs | 21hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
Birthplace: ${player.BirthCity}, ${player.BirthState || player.BirthCountry} 
```
On my own, I figured out how to not print a "null" value out on the browser by inserting a "or" conditional.
## Change Log
 This project pivoted towards listing out players on the respective teams rather than searching by player, allowing for less room for error when making the search request.
