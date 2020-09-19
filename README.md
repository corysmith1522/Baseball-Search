# Project Overview

## Baseball-Stat-Search

Public web URL goes here.

## Project Description

This website will allow a user to enter a current MLB player's name into a search field and when they submit the search, the return will be a picture of the player, some basic biographical information about the player, and a rundown of the player's statistics broken down by season. All of this will be encompassed in one page with ability to clear their respective search each time by clicking a button that says "clear search" or typing in a new player to start a new search. It will be formatted to allow for access on desktop and mobile.

## API and Data Sample

https://developer.sportradar.com/ -- statistics

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
https://wireframe.cc/pro/pp/2e1b4eccf374428 -- main desktop wireframe

https://wireframe.cc/pro/pp/4c48594b8374430 -- mobile platform wireframe


### MVP/PostMVP  

#### MVP 

- Establish base HTML that includes header, footer, website description, background image, form, button, placeholders for image & text 
- Establish base CSS guidelines to desktop page that aligns everything in center and spaced appropriately with proper sizing, makes text readable, properly displays image in proportion to the page
- Return API results using Javascript and Axios to display player information and an image onto the website
- Incorporate event listener to activate search functions when button is clicked
- Pull in API data for player biographical information (sportsdata)
- Pull in API data for player image (sportsdata)
- Pull in API data for player statistics (sportradar)
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
|Sept 18-21| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Sept 21| Project Approval, base HTML, CSS to align properly, start API returns | Incomplete
|Sept 22| Continue API returns, test all API pulls, write JS functions, add event listener | Incomplete
|Sept 23| Populate browser with API data, Make media query for responsive design, finish MVP | Incomplete
|Sept 24| Text Wrap, button styling, fixed footer, background image, animation if time | Incomplete
|Sept 25| Presentations | Incomplete

## Priority Matrix

https://wireframe.cc/pro/pp/111fbc7c4374467 -- also shown in website_files folder


## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.
