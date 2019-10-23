# Fetch Practice

This repo is meant to be used with the <a href="https://frontend.turing.io/lessons/module-2/intro-network-requests.html" target="\__blank"> Mod 2 Network Request</a> lesson plan.

## Installation / Set up

1. `git clone` the repo
2. cd into the cloned repo
3. run `npm install`
4. run `npm start`. The server should be running locally on port 3001
5. Navigate to the endpoint you're trying to request in the browser
6. Practice making your network requests!


## Making the requests

In the repl, use the following endpoints to:

- GET all users
- POST a new user (you can verify this worked with another GET request)
- GET all animals
- POST a new animal

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
