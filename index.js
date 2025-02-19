console.log('connection successful');

document.addEventListener('DOMContentLoaded', function() {
    let counting=0;
    let flowerCount=0;
    let leafCount =0;
    let fruitCount=0;
    let stemCount=0;
    let rootCount=0;
    document.getElementById('flowerArea').addEventListener('click', function(event) {
        // flower events
        if(flowerCount <1){

            
            fetch('https://api.dictionaryapi.dev/api/v2/entries/en/flower')
            .then(rawResponse => rawResponse.json())
            .then(jsonifiedResponse => {
                console.log(jsonifiedResponse);
                
                const definition = jsonifiedResponse[0].meanings[0].definitions[1].definition;
                const soundDefinition =jsonifiedResponse[0].phonetics[2].audio;
                
                // converts and plays audio, I need a condition to stop it from being hit twice.
                const flowerAudio = new Audio(soundDefinition);
                flowerAudio.play();
                
                
                console.log(definition);
                document.getElementById('definitionText').innerText = `Flower: ${definition}`;
                counting= counting + 1;
                
                document.getElementById('page').value= document.getElementById('page').value + 20;
                
                showButton();
                console.log(counting);
                console.log(flowerCount);
            })
            .catch(error => console.error('Error fetching data:', error));
            flowerCount=flowerCount+1;
        };
    });



    document.getElementById('leafs').addEventListener('click', function(event) {
        if(leafCount<1){

            
            fetch('https://api.dictionaryapi.dev/api/v2/entries/en/leaf')
            .then(rawResponse => rawResponse.json())
            .then(jsonifiedResponse => {
                console.log(jsonifiedResponse);
                
                const leafDef = jsonifiedResponse[0].meanings[0].definitions[0].definition;
                const leafSpeach=jsonifiedResponse[0].phonetics[0].audio;
                const leafAudio = new Audio(leafSpeach);
                leafAudio.play();
                
                console.log(leafDef);
                counting= counting + 1;
                leafCount= leafCount + 1;
                document.getElementById('page').value= document.getElementById('page').value + 20;
                showButton();
                document.getElementById('leafDefinition').innerText = `Leaf: ${leafDef}`;
            })
            .catch(error => console.error('Error fetching data:', error));
        };
    });

    document.getElementById('fruit').addEventListener('click', function(event) {
        if(fruitCount<1){

            
            fetch('https://api.dictionaryapi.dev/api/v2/entries/en/fruit')
            .then(rawResponse => rawResponse.json())
            .then(jsonifiedResponse => {
                console.log(jsonifiedResponse);
                
                const fruitDef = jsonifiedResponse[0].meanings[0].definitions[1].definition;
                
                const fruitSpeach=jsonifiedResponse[0].phonetics[1].audio;
                const stemAudio = new Audio(fruitSpeach);
                stemAudio.play();
                
                console.log(fruitDef);
                counting= counting + 1;
                fruitCount=fruitCount +1;
                document.getElementById('page').value= document.getElementById('page').value + 20;
                showButton();
                document.getElementById('fruitDefinition').innerText = `Fruit: ${fruitDef}`;
            })
            .catch(error => console.error('Error fetching data:', error));
        };
    });

    document.getElementById('stem').addEventListener('click', function(event) {
        if(stemCount<1){

            
            fetch('https://api.dictionaryapi.dev/api/v2/entries/en/stem')
            .then(rawResponse => rawResponse.json())
            .then(jsonifiedResponse => {
                console.log(jsonifiedResponse);
                
                const stemDef = jsonifiedResponse[0].meanings[0].definitions[3].definition;
                const stemSpeach=jsonifiedResponse[0].phonetics[0].audio;
                const stemAudio = new Audio(stemSpeach);
                stemAudio.play();
                
                console.log(stemDef);
                counting= counting + 1;
                stemCount=stemCount + 1;
                document.getElementById('page').value= document.getElementById('page').value + 20;
                showButton();
                document.getElementById('stemDefinition').innerText = `Stem: ${stemDef}`;
            })
            .catch(error => console.error('Error fetching data:', error));
        };
        });

     document.getElementById('root').addEventListener('click', function(event) {
        if(rootCount<1){

            
            fetch('https://api.dictionaryapi.dev/api/v2/entries/en/root')
            .then(rawResponse => rawResponse.json())
            .then(jsonifiedResponse => {
                console.log(jsonifiedResponse);
                
                    const rootDef = jsonifiedResponse[0].meanings[0].definitions[0].definition;
                const rootSpeach=jsonifiedResponse[0].phonetics[1].audio;
                const rootAudio = new Audio(rootSpeach);
                rootAudio.play();

                    console.log(rootDef);
                    counting= counting + 1;
                    rootCount=rootCount + 1;
                    document.getElementById('page').value= document.getElementById('page').value + 20;
                    showButton();
                    document.getElementById('rootDefinition').innerText = `Root: ${rootDef}`;
                })
                .catch(error => console.error('Error fetching data:', error));
            };
        });
// resets the paragraphs//
    function pageReset(){
        document.getElementById('definitionText').innerText = '';
        document.getElementById('leafDefinition').innerText = '';
        document.getElementById('fruitDefinition').innerText = '';
        document.getElementById('stemDefinition').innerText = '';
        document.getElementById('rootDefinition').innerText = '';
        document.getElementById('page').value= document.getElementById('page').value =0;
        document.getElementById('buttonStuff').style.display = 'none';
        counting=0;
        flowerCount=0
        leafCount=0;
        fruitCount=0;
        stemCount=0;
        rootCount=0;
    };

    document.getElementById('buttonStuff').addEventListener('click', pageReset);

    function showButton(){
        if(counting>0){
            document.getElementById('buttonStuff').style.display = 'block';
        };
    };



})
