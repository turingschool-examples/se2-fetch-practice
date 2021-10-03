# Fetch Practice

This repo provides a backend server to practice with GET and POST requests.

## Backend Setup

1. Clone down this repo
1. `cd` into the cloned repo
1. Run `npm install`
1. Run `npm start`. The server should be running locally on `http://localhost:3001`
1. Navigate to the endpoint you're trying to request in the browser (for example, if you want to GET users, navigate to http://localhost:3001/api/v1/users in the browser)
1. Practice making your network requests in the console!

## Spicier Challenge

After you've done some network requests in the console, continue with implementing a network requests in a small front-end application included in this repo.

### Frontend Details

In the `client` directory, there are some files we can use as a makeshift client.

1. Run `open client/index.html` from your command line to see the application in your browser
1. Follow the directions that are commented out in `client/index.js` to practice fetching!

## Endpoints

The following endpoints are documented below:

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
