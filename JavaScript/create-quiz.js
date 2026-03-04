let placeholder = 2;
let questions = document.getElementsByClassName("question-field");
let notes = document.getElementsByClassName("note-field");

function addquestion() {
    const insertfield = document.getElementById("questionslist")
    const newFrage = document.createElement("div");
    newFrage.innerHTML = `
        <label>Question ${placeholder}.
        <textarea class="question-field" placeholder="Enter Question ${placeholder} here."></textarea>
        <textarea class="notes-field" placeholder="Enter Notes to AI about Question ${placeholder} here."></textarea>
        </label>
        `;

    insertfield.appendChild(newFrage);
    console.log(newFrage);
    placeholder++;
}

function submitquiz(){
    createjson_voice()
    createjson_quiz()
}

function createjson_voice(){
    let json_voice = {
        "questions-set:":"questions.value"
    }
    alert(json_voice);
}

function createjson_quiz(){
    let json_quiz = {
        "questions-set":":questions.value",
        "notes-set":":notes.value",
    }
}