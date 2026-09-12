(async () => {
    let WORDS = await fetch("./words.txt").then(res => res.text()).then(text => text.split("\n").filter(line => line.trim().length > 0));
    const numberOfNames = 25;

    function generateNames() {
        const resultElement = document.getElementById("result");
        resultElement.innerHTML = "";
        for(let i = 0; i < numberOfNames; i++) {
            const spanElement = document.createElement("span");
            spanElement.innerText = WORDS[Math.floor(Math.random() * WORDS.length)] + WORDS[Math.floor(Math.random() * WORDS.length)];
            resultElement.appendChild(spanElement);
        }
    }

    generateNames();
    document.querySelector("button").addEventListener("click", generateNames);
})();
