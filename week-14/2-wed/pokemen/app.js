const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
app.use(express.json());
app.use(cors());

const pokemon = [
    {
        name: "Bulbasaur",
        img: "http://img.pokemondb.net/artwork/bulbasaur.jpg"
    },
    {
        name: "Ivysaur",
        img: "http://img.pokemondb.net/artwork/ivysaur.jpg"
    },
    {
        name: "Venusaur",
        img: "http://img.pokemondb.net/artwork/venusaur.jpg"
    },
    {
        name: "Charmander",
        img: "http://img.pokemondb.net/artwork/charmander.jpg"
    },
    {
        name: "Charizard",
        img: "http://img.pokemondb.net/artwork/charizard.jpg"
    },
    {
        name: "Squirtle",
        img: "http://img.pokemondb.net/artwork/squirtle.jpg"
    },
    {
        name: "Wartortle",
        img: "http://img.pokemondb.net/artwork/wartortle.jpg"
    }
];

app.get('/pokemon', (request, response) => {
    const list = [];
    pokemon.forEach((poke) => {
        list.push(poke.name);
    });
    response.json(pokemon);
});

app.get('/pokemon/:name', (request, response) => {
    const requiredName = request.params.name;
    const requiredPokemon = pokemon.find(poke => poke.name === requiredName);
    response.json(requiredPokemon);
});

app.post('/pokemon', (request, response) => {
    const toAdd = request.body;
    pokemon.push(toAdd);
    response.json(pokemon);
});

app.put('/pokemon/:name', (request, response) => {
    const toChange = request.params.name;
    const newValues = request.body;
    pokemon.map((poke) => {
        if (poke.name === toChange) {
            poke.name = newValues.name;
            poke.img = newValues.img;
        }
        return poke
    });
    response.json(pokemon);
});

app.patch('/pokemon/:name', (request, response) => {
    const toEdit = request.params.name;
    const newValues = request.body;
    const keys = Object.keys(newValues);
    for (const poke of pokemon) {
        if (poke.name === toEdit) {
            for (const key of keys) {
                poke[`${key}`] = newValues[`${key}`]
            }
        }
    }
    response.json(pokemon);
});

app.delete('/pokemon/:name', (request, response) => {
    const toDelete = request.params.name;
    for (const poke of pokemon) {
        if (poke.name === toDelete) {
            const index = pokemon.indexOf(poke);
            pokemon.splice(index, 1);
        }
    }
    response.json(pokemon);
});

app.listen(port, () => {
    console.log(`Listening on port http://127.0.0.1:${port}`);
});