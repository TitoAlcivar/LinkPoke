import React from 'react'

export const PokePeti = () => {

    const getPokemons = async () => {

        const response = await fetch("https://pokeapi.co/api/v2/pokemon")
        const data = await response.json();
        console.log(data.results);
    }
    getPokemons()

    

    const getData =async() => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/1")
        const data = await response.json()
        console.log(data);
    };
    getData()

    // const data = async() => {

    // }

    // const getInput = () => {
    //     const input = document.querySelector('#id').value
    //     getPokemons(input)
    // }
    // getInput()



  return (
    <div>
        <form >
            <label>Buscar Pokemon:</label>
            <input type="text" name='text' id='text' placeholder='Bulbasaur' />
        </form>


        </div>
  )
}
