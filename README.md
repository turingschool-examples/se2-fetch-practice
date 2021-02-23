# Fetch Practice

This repo is meant to be used with the <a href="https://frontend.turing.io/lessons/module-2/network-requests-gets-and-posts.html" target="\__blank"> Mod 2 Network Request</a> lesson plan.

## Backend Installation / Set up

1. `git clone` the repo
2. cd into the cloned repo
3. run `npm install`
4. run `npm start`. The server should be running locally on port 3001
5. Navigate to the endpoint you're trying to request in the browser (ie if you want to GET users, navigate to http://localhost:3001/api/v1/users in the browser)
6. Practice making your network requests in the console or a Repl!


## Frontend Setup

In the `client` directory, there are some files we can use as a makeshift client.

1. run `open client/index.html` from your command line
2. open your console, so that you can check your fetch requests using either `debugger` or `console.log()` ("so fetch!" should be showing up in your console on page load.)
3. follow the directions in `client/index.js` to practice fetching! (feel free to get rid of the gif if it's too distracting)

## Your challenge

Follow the directions that are commented out in `client/index.js`.

## Endpoints

The following endpoints are documented below:

- GET all users
- POST a new user (you can verify this worked with another GET request)
- GET all animals
- POST a new animal
- GET all sports teams
- POST a new sports team

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
