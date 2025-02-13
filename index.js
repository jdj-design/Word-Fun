// Event listener for clicking the flower area
document.getElementById('tomato').addEventListener('click', function(){
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/tomato')
    .then(rawResponse => rawResponse.json())
    .then(jsonifiedResponse => console.log(jsonifiedResponse))
})
