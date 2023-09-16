const inputEl = document.getElementById("input");
const infotextEl = document.getElementById("info-text");

const titleEl = document.getElementById("title");
const maeningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");
const meaningContainerEl = document.getElementById("meaning-container");





// https://api.dictionaryapi.dev/api/v2/entries/en/hello

async function fetchAPI(word) {
    // console.log(word)

    try {
        infotextEl.style.display = 'block';
        meaningContainerEl.style.display = 'none';
        titleEl.innerText = `Searching the meaning of ${word}`;
        const responce = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await responce.json();
        console.log(data)
        infotextEl.style.display = 'none';
        meaningContainerEl.style.display = 'block';
        titleEl.innerText = data[0].word;
        maeningEl.innerText = data[0].meanings[0].definitions[0].definition;
        audioEl.src = data[0].phonetics[0].audio;
    } catch (error) {
        console.log(error);
        meaningContainerEl.style.display = 'none';
        infotextEl.innerText = "Something went wrong! Please try again later";



    }

}


inputEl.addEventListener("keyup", (e) => {
    // console.log(e.key)
    if (e.target.value && e.key === "Enter") {
        fetchAPI(e.target.value)
    }
})