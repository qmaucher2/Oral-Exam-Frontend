let placeholder = 2;

let questions = document.querySelectorAll(".question-field");
let notes = document.querySelectorAll(".note-field");
let json_voice = {}
let json_quiz = {}

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
    console.log("Quiz-form submitted")
}



function createjson_voice(){
    const voice_array = [...questions].map(x => x.value)
    json_voice["questions"] = voice_array;
    alert(voice_array);
}

function createjson_quiz(){
    const question_array = [...questions].map(x => x.value);
    const notes_array = [...notes].map(x => x.value);
    json_quiz["questions"] = question_array;
    json_quiz["notes"] = notes_array;
    console.log("quiz form created");
    alert(json_quiz)
}