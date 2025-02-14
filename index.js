console.log('connection successful');

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('flowerArea').addEventListener('click', function(event) {
        // event.preventDefault();  // Uncomment this if needed to prevent the default action

        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/flower')
            .then(rawResponse => rawResponse.json())
            .then(jsonifiedResponse => {
                console.log(jsonifiedResponse);

                const definition = jsonifiedResponse[0].meanings[0].definitions[1].definition;
                console.log(definition);
                document.getElementById('definitionText').innerText = `Definition: ${definition}`;
            })
            .catch(error => console.error('Error fetching data:', error));
    });
});
