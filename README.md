# Fetch Practice

This repo provides a backend server to practice with GET and POST requests.

## Backend Setup

1. Clone down this repo
1. `cd` into the cloned repo
1. Run `npm install`
1. Run `npm start` to start the backend server. The server should be running locally on `http://localhost:3001`. (_Note:_ If you navigate to `http://localhost:3001/` in your browser, you will see a screen that says `Cannot GET /`, which is to be expected. Follow the next step to see more useful information.)
1. Navigate to an endpoint you're trying to request in the browser (for example, if you want to GET users, navigate to http://localhost:3001/api/v1/users in the browser) - see the tables below for possible endpoints.

## Frontend Setup

1. Open a new tab in your terminal with `command + T`
2. Run `open client/index.html` to see the application in your browser.
1. Follow the directions that are commented out in `client/index.js` to practice fetching!

**Note:** To stop your server, hit `Ctrl + C` together.  (_Do not just close the window, this will not stop the server!_)

## Endpoints

**Note:** The POST endpoints are for the POST lesson only. If you are currently in the GET lesson, ignore those!

### User Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3001/api/v1/users` | GET | not needed | Array of all existing users: `[{ id: 1, name: 'Travis Rollins', status: 'online', interests: 'Music, Software, & Gaming' }]` |
| `http://localhost:3001/api/v1/users` | POST | `{ id: <Number>, name: <String>, status: <String>, interests: <String> }` | New user: `{ id: 1, name: 'Leta', status: 'online', interests: 'Science, Music, & Classic Films' }` |


### Animal Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3001/api/v1/animals` | GET | not needed | Array of all existing animals: `[{ id: 3, name: 'orcas', diet: 'birds, squid, octopuses, sea turtles, sharks, rays & fish', fun_fact: 'Orcas, also known as killer whales, are known to prey on other marine mammals, including dolphins and seals.' }]` |
| `http://localhost:3001/api/v1/animals` | POST | `{ id: <Number>, name: <String>, diet: <String>, fun_fact: <String> }` | New animal: `{ id: 4, name: 'tigers', diet: 'chital, sambar, gaur & wild board', fun_fact: 'The main food of tigers are buffalos, antelopes, and rodents.' }` |

#### Sport Team Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3001/api/v1/sport-teams` | GET | not needed | Array of all existing sport teams: `[{ id: 1, name: 'Dallas Cowboys', head_coach: 'Jason Garrett', sport: 'football' }]` |
| `http://localhost:3001/api/v1/sport-teams` | POST | `{ id: <Number>, name: <String>, head_coach: <String>, sport: <String> }` | New sport team: `{ id: 2, name: 'New York Yankees', head_coach: 'Aaron Boone', sport: 'baseball' },` |
