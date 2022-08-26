const type=document.querySelector('#type').textContent;
const searchContent=document.querySelector('#searchInput').textContent;
const searchButton=document.querySelector('#searchButton')

searchButton.addEventListener('click', fetchResults)

function fetchResults(type,secondParameter){
    return fetch(`https://pokeapi.co/api/v2/${type}/${secondParameter}`)
    .then (function(data){
        return data.json()

    })

}

fetchResults
.then(function(data){
    renderHTML(data)
})