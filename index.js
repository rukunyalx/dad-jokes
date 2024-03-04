const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")
const apiKey = "Uyk0pyu8bNrfdS7HcDmFbA==bPl2GLwLudLhYfUE";

const options ={
    method: "GET",
    headers: {
        "X-Api-key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

    jokeEl.innerText = " ";
async function getJoke(){
    const response = await fetch(apiURL, options);
    const data = await response.json();
    
    jokeEl.innerText = data[0].joke;
}


btnEl.addEventListener( "click", getJoke);