# Project Overview

## Baseball-Stat-Search

Public web URL goes here.

## Project Description

This website will allow a user to enter a current MLB player's name into a search field and when they submit the search, the return will be a picture of the player, some basic biographical information about the player, and a rundown of the player's statistics broken down by season. All of this will be encompassed in one page with ability to clear their respective search each time by clicking a button that says "clear search" or typing in a new player to start a new search. It will be formatted to allow for access on desktop and mobile.

## API and Data Sample

https://developer.sportradar.com/

```json 
{player: {
	id: "6e1cac5c-b059-4b80-a267-5143b19efb27",
	status: "RET",
	position: "IF",
	primary_position: "1B",
	first_name: "Steven",
	last_name: "Pearce",
	preferred_name: "Steve",
	full_name: "Steve Pearce",
	height: "71",
	weight: "200",
	throw_hand: "R",
	bat_hand: "R",
	college: "South Carolina",
	high_school: "Lakeland, FL",
	birthdate: "1983-04-13",
	birthstate: "FL",
	birthcountry: "USA",
	birthcity: "Lakeland",
	pro_debut: "2007-09-01",
	updated: "2020-04-14T14:03:57+00:00",
	reference: "456665",
	draft: {
		team_id: "481dfe7e-5dab-46ab-a49f-9dcc2b6e2cfd",
		year: 2005,
		round: 8,
		pick: 11
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
- Pull in API data for player biographical information
- Pull in API data for player image
- Pull in API data for player statistics
- Establish proper media query design to reorganize the page for mobile platform

#### PostMVP  

- Wrap text so it flows to fit the screen width after scrolling below the image
- Style the button and search fields with advanced CSS techniques, creating a fancier display
- Make footer fixed to the page so when user scrolls, always see the footer with site sources and authorization
- Add an animation upon hitting the button that processes while the API gathers the data
- Incorporate a background image that dynamically changes to the team logo of the player searched for

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Sept 18-21| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Sept 21| Project Approval | Incomplete
|Sept 22| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Sept 23| MVP | Incomplete
|Sept 24| Post MVP/Styling | Incomplete
|Sept 25| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

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
