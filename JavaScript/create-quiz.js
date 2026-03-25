let placeholder = 2;
let token = 0;

function dontpushthisbutton(){
    const html = document.documentElement;
    console.log("uhoh");
    html.innerHTML = "";
}


function addquestion() {
    const insertfield = document.getElementById("questionslist");
    const newFrage = document.createElement("div");
    newFrage.innerHTML = `
        <label>
        <a>Question ${placeholder}.</a>
        <br>
        <textarea id="question${placeholder}" rows ="5" cols="25" class="question-field" placeholder="Enter Question ${placeholder} here."></textarea>
        <textarea id="note${placeholder}" rows ="5" cols="25" class="notes-field" placeholder="Enter Notes to AI about Question ${placeholder} here."></textarea>
        </label>
        `;

    insertfield.appendChild(newFrage);
    console.log(newFrage);
    placeholder++;
}

function submitquiz(){
    createjson_quiz();
    send_json();
    alert("asdf");
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
    console.log(JSON.stringify(json_quiz));
    console.log(JSON.stringify(json_voice));

    const json_quiz_string = JSON.stringify(json_quiz);
    const subject = document.getElementById("uservalue_subject").value;
    const formData = new FormData();
    formData.append("class_name", subject);
    // append the file:
    formData.append("json_quiz_string", json_quiz_string);

    fetch('\n' +
        'https://oral-exam-backend-307630687354.northamerica-northeast1.run.app/supabase/create_assignment', {
        method: 'POST',
        headers: {
            // This is where you pass the key!
            "ORAL_EXAM_API_KEY": process.env.ORAL_EXAM_API_KEY
        },
        body: formData
    })
        .then(response => response.json())
        .then(data => console.log(data));

}

function send_json(){

}




function generatequiz(){
    const ai_input = document.getElementById("ai_input");
    const ai_input_container = document.createElement("div");
     if (token === 0) {
         console.log("token", token);
         ai_input_container.innerHTML = `
         <label>
         <div id="ai_input_uservalue">
            <input placeholder='Please list the Course subject, e.g. "AP Physics C".' id="ai_input_uservalue_subject">
            <textarea id="ai_input_uservalue_topic" placeholder="Please describe the topic of your quiz to the AI"></textarea>
         </div>
         <br>
         <button id="submit-ai-generate-quiz-form" type="submit">Generate Quiz</button>
         </label>
         `;
         ai_input.appendChild(ai_input_container);
         token = 1;
         console.log("token", token);
         call_generative_ai();
     }

     else if (token === 1) {
         alert("Please fill in the fields!")
         ai_input.innerHTML = "";
         token = 0;
     }
}

function call_generative_ai() {
    let course_subject_input = document.getElementById("ai_input_uservalue_subject");
    let quiz_topic_input = document.getElementById("ai_input_uservalue_topic");

    const course_subject_input_array = Array.from(course_subject_input).map(x => x.value);
    const quiz_topic_input_array = Array.from(quiz_topic_input).map(x => x.value);

    let quiz_generation_prompt = {
        course_subject: course_subject_input_array,
        quiz_topic: quiz_topic_input_array,
    }

    let quiz_generation_prompt_json = JSON.stringify(quiz_generation_prompt);
}