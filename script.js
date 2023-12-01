import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
function handleInput(event) {
    if (event.key === 'Enter') {
        var inputText = document.getElementById("inputText").value;
        var outputText = document.getElementById("outputText");
    
        // Adicionar o texto ao campo superior
        document.getElementById("displayText").textContent = ">:";
        outputText.value += inputText + "\n";

        // Limpar o campo de entrada
        document.getElementById("inputText").value = "";
    }
}

function getResponse(event){

}