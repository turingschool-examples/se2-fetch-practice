const express = require('express');
const cors = require('express-cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const app = express();
const { users, sportTeams, animals } = require('./data.js');

app.locals = {
  title: 'Network Request Practice',
  users,
  sportTeams,
  animals
}

app.use(cors({
  allowedOrigins: ['localhost:3001']
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/v1/users', (req, res) => {
  res.status(200).json(app.locals.users);
});

app.post('/api/v1/users', (req, res) => {
  const newUser = req.body;

  for (let requiredParameter of ['id', 'name', 'status', 'interests']) {
    if (!newUser[requiredParameter]) {
      return res.status(422).json({
        message: `You are missing a required parameter of ${requiredParameter}`
      });
    }
  }

  app.locals.users = [...app.locals.users, { ...newUser, status: false }];

  return res.status(201).json({id: newUser.id});
});

app.delete('/api/v1/users/:id', (req, res) => {
  const { id } = req.params;
  const match = app.locals.users.find(user => user.id == id);

  if (!match) {
    return res.status(404).json({
      message: `No user found with an id of ${id}`
    });
  }

  const filteredUsers = app.locals.users.filter(user => user.id != id);

  app.locals.users = filteredUsers;

  return res.sendStatus(204);
});

app.get('/api/v1/sport-teams', (req, res) => {
  res.status(200).json(app.locals.users);
});

app.post('/api/v1/sport-teams', (req, res) => {
  const newSportTeam = req.body;

  for (let requiredParameter of ['id', 'name', 'head_coach', 'sport']) {
    if (!newSportTeam[requiredParameter]) {
      return res.status(422).json({
        message: `You are missing a required parameter of ${requiredParameter}`
      });
    }
  }

  app.locals.sportTeams = [...app.locals.sportTeams, { ...newSportTeam, status: false }];

  return res.status(201).json({id: newSportTeam.id});
});

app.delete('/api/v1/sport-teams/:id', (req, res) => {
  const { id } = req.params;
  const match = app.locals.sportTeams.find(sportTeam => sportTeam.id == id);

  if (!match) {
    return res.status(404).json({
      message: `No sport team found with an id of ${id}`
    });
  }

  const filteredSportTeams = app.locals.sportTeams.filter(user => user.id != id);

  app.locals.sportTeams = filteredSportTeams;

  return res.sendStatus(204);
});

app.get('/api/v1/animals', (req, res) => {
  res.status(200).json(app.locals.users);
});

app.post('/api/v1/animals', (req, res) => {
  const newAnimal = req.body;

  for (let requiredParameter of ['id', 'name', 'diet', 'fun_fact']) {
    if (!newAnimal[requiredParameter]) {
      return res.status(422).json({
        message: `You are missing a required parameter of ${requiredParameter}`
      });
    }
  }

  app.locals.animals = [...app.locals.animals, { ...newAnimal, status: false }];

  return res.status(201).json({id: newAnimal.id});
});

app.delete('/api/v1/animals/:id', (req, res) => {
  const { id } = req.params;
  const match = app.locals.animals.find(sportTeam => sportTeam.id == id);

  if (!match) {
    return res.status(404).json({
      message: `No animal found with an id of ${id}`
    });
  }

  const filteredAnimals = app.locals.animals.filter(user => user.id != id);

  app.locals.animals = filteredAnimals;

  return res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`${app.locals.title} is now running on ${port}!`)
});

