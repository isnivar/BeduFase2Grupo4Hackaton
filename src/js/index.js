import { addPokemon } from './history';




//Functionality

//DOM constants
const searchButton=document.querySelector('#searchButton')
const pokemonImg=document.querySelector('#pokemonImg')
const pokemonDes=document.querySelector('#pokemonDes')
searchButton.addEventListener('click', function(){
    const searchContent=document.querySelector('#search').textContent;
    fetchResults(searchContent)
})

function fetchResults(secondParameter){
    return fetch(`https://pokeapi.co/api/v2/pokemon/${secondParameter}`)
    .then (function(data){
        addPokemon(data.json())
        return data.json()

    })

}

fetchResults
.then(function(data){
    renderHTML(data)
})

function renderHTML(data){
 //render image
 //pokemonImg.src=data.
 pokemonDes.textContent=data
}