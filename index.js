console.log('connection successful');

document.addEventListener('DOMContentLoaded', function() {
    let counting=0;
    document.getElementById('flowerArea').addEventListener('click', function(event) {
        // flower events

        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/flower')
            .then(rawResponse => rawResponse.json())
            .then(jsonifiedResponse => {
                console.log(jsonifiedResponse);

                const definition = jsonifiedResponse[0].meanings[0].definitions[1].definition;
                console.log(definition);
                document.getElementById('definitionText').innerText = `Flower: ${definition}`;
                counting= counting + 1;
                showButton();
                console.log(counting);
            })
            .catch(error => console.error('Error fetching data:', error));
    });



    document.getElementById('leafs').addEventListener('click', function(event) {
        

        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/leaf')
            .then(rawResponse => rawResponse.json())
            .then(jsonifiedResponse => {
                console.log(jsonifiedResponse);

                const leafDef = jsonifiedResponse[0].meanings[0].definitions[0].definition;
                console.log(leafDef);
                counting= counting + 1;
                showButton();
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
                counting= counting + 1;
                showButton();
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
                counting= counting + 1;
                showButton();
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
                    counting= counting + 1;
                    showButton();
                    document.getElementById('rootDefinition').innerText = `Root: ${rootDef}`;
                })
                .catch(error => console.error('Error fetching data:', error));
        });
// resets the paragraphs//
    function pageReset(){
        document.getElementById('definitionText').innerText = '';
        document.getElementById('leafDefinition').innerText = '';
        document.getElementById('fruitDefinition').innerText = '';
        document.getElementById('stemDefinition').innerText = '';
        document.getElementById('rootDefinition').innerText = '';
        document.getElementById('buttonStuff').style.display = 'none';
        counting=0;
    };

    document.getElementById('buttonStuff').addEventListener('click', pageReset);

    function showButton(){
        if(counting>0){
            document.getElementById('buttonStuff').style.display = 'block';
        };
    };



})
