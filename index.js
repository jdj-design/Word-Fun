// Event listener for clicking the flower area
console.log('connection sucessful');
document.getElementById('flowerArea').addEventListener('click', function(){
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/tomato')
    .then(rawResponse => rawResponse.json())
    .then(jsonifiedResponse => console.log(jsonifiedResponse))
});

