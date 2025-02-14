console.log('connection successful');

// document.getElementById('flowerArea').addEventListener('click', function(event) {
//     event.preventDefault(); 

    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/flower')
        .then(rawResponse => rawResponse.json())
        .then(jsonifiedResponse => {
            //console.log(jsonifiedResponse);

           
            const definition = jsonifiedResponse[0].meanings[0].definitions[1].definition;
            console.log(definition);
        })
        .catch(error => console.error('Error fetching data:', error));
//});
