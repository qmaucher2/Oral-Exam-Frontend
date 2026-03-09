let placeholder = 2;

function addquestion() {
    const insertfield = document.getElementById("questionslist");
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
    createjson_quiz();
    send_json();
    console.log("Quiz-form submitted")
}

function createjson_quiz(){
    let questions = document.querySelectorAll(".question-field");
    let notes = document.querySelectorAll(".notes-field");

    // const question_array = [...questions].map(x => x.value);
    const question_array = Array.from(questions).map(x => x.value);
    const notes_array = Array.from(notes).map(x => x.value);

    let json_quiz = {
        questions: question_array,
        notes: notes_array,
    }

    let json_voice = {
        elements: [question_array, notes_array]
    }

    console.log("json_quiz:", json_quiz);
    console.log("json_voice:", json_voice);
    console.log(JSON.stringify(json_quiz));
    console.log(JSON.stringify(json_voice));
}

function send_json(){

}


function generatequiz(){
    let token = 0;
     if (token === 0) {
        const ai_input = document.getElementById("ai_input");
        const ai_input_container = document.createElement("div");
        ai_input_container.innerHTML = `
        <input id="ai_input_uservalue_subject">'Please list the Course subject, e.g. "AP Physics C".'</input>
        <textarea id="ai_input_uservalue_topic" placeholder="Please describe the topic of your quiz to the AI"></textarea>
        <button id="submit-ai-generate-quiz-form" type="submit">Generate Quiz</button>
        `;
        ai_input.appendChild(ai_input_container);
        token++;
     }
     else if (token === 1) {
         alert("Please fill in the fields!")
         // ai_input_container.innerHTML = '';
         token = 0;
     }


    const insertfield = document.getElementById("questionslist")
    const newFrage = document.createElement("div");
    newFrage.innerHTML = `
        <label>Question ${placeholder}.
        <textarea class="question-field" placeholder="Enter Question ${placeholder} here."></textarea>
        <textarea class="notes-field" placeholder="Enter Notes to AI about Question ${placeholder} here."></textarea>
        </label>
        `;

    insertfield.appendChild(newFrage);




}