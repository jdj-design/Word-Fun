console.log('connection successful');
let counting=0;
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('flowerArea').addEventListener('click', function(event) {
        // flower events

        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/flower')
            .then(rawResponse => rawResponse.json())
            .then(jsonifiedResponse => {
                console.log(jsonifiedResponse);

                const definition = jsonifiedResponse[0].meanings[0].definitions[1].definition;
                const flowerAudio= jsonifiedResponse[0].phonetics[2].audio;
                const audioElement = new Audio(flowerAudio);
                audioElement.play();
                console.log(definition);
                document.getElementById('definitionText').innerText = `Flower: ${definition}`;
                let counting= counting + 1;
            })
            .catch(error => console.error('Error fetching data:', error));
    });



    document.getElementById('leafs').addEventListener('click', function(event) {
        // event.preventDefault();  // Uncomment this if needed to prevent the default action

        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/leaf')
            .then(rawResponse => rawResponse.json())
            .then(jsonifiedResponse => {
                console.log(jsonifiedResponse);

                const leafDef = jsonifiedResponse[0].meanings[0].definitions[0].definition;
                console.log(leafDef);
                document.getElementById('leafDefinition').innerText = `Leaf: ${leafDef}`;
            })
            .catch(error => console.error('Error fetching data:', error));
    });

    document.getElementById('fruit').addEventListener('click', function(event) {
        

        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/fruit')
            .then(rawResponse => rawResponse.json())
            .then(jsonifiedResponse => {
                console.log(jsonifiedResponse);

                const fruitDef = jsonifiedResponse[0].meanings[0].definitions[1].definition;
                console.log(fruitDef);
                document.getElementById('fruitDefinition').innerText = `Fruit: ${fruitDef}`;
            })
            .catch(error => console.error('Error fetching data:', error));
    });

    document.getElementById('stem').addEventListener('click', function(event) {
        

        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/stem')
            .then(rawResponse => rawResponse.json())
            .then(jsonifiedResponse => {
                console.log(jsonifiedResponse);

                const stemDef = jsonifiedResponse[0].meanings[0].definitions[3].definition;
                console.log(stemDef);
                document.getElementById('stemDefinition').innerText = `Stem: ${stemDef}`;
            })
            .catch(error => console.error('Error fetching data:', error));
        });

     document.getElementById('root').addEventListener('click', function(event) {
        

            fetch('https://api.dictionaryapi.dev/api/v2/entries/en/root')
                .then(rawResponse => rawResponse.json())
                .then(jsonifiedResponse => {
                    console.log(jsonifiedResponse);
    
                    const rootDef = jsonifiedResponse[0].meanings[0].definitions[0].definition;
                    console.log(rootDef);
                    document.getElementById('rootDefinition').innerText = `Root: ${rootDef}`;
                })
                .catch(error => console.error('Error fetching data:', error));
        });
        
    //document.getElementById('buttonStuff').style.display = 'block';



})
