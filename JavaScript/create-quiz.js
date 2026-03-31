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
    alert("The frontend received the request");
    console.log("Quiz-form submitted")
}

function createjson_quiz(){
    let questions = document.querySelectorAll(".question-field");
    let notes = document.querySelectorAll(".notes-field");

    // const question_array = [...questions].map(x => x.value);
    const question_array = Array.from(questions).map(x => x.value);
    const notes_array = Array.from(notes).map(x => x.value);
    console.log("qeustion",question_array);
    console.log("notes", notes_array);

    const ordered_quiz = Object.fromEntries(
        question_array.map((key, index) => [key, notes_array[index]])
    );

    let json_quiz = {
        questions: question_array,
        notes: notes_array,
    }

    let json_voice = {
        elements: [question_array, notes_array]
    }
    console.log(JSON.stringify(json_quiz));
    console.log(JSON.stringify(json_voice));


    const subject = document.getElementById("uservalue_subject").value;
    // const formData = new FormData();
    // formData.append("class_name", subject);
    // append the file:
    // formData.append("json_quiz_string", json_quiz_string);
    // formData.append("due_date", "01/01/2027")


    const payload = {
        title: "name",
        classroom_name: subject,
        questions: ordered_quiz,
        due_date: "01/01/2027",
    }

    fetch('\n' +
        'https://oral-exam-backend-307630687354.northamerica-northeast1.run.app/supabase/create_assignment', {
        method: 'POST',
        headers: {
            // This is where you pass the key!
            "Content-Type": "application/json",
            "API_KEY": "3570fd7fe03b163e9dc26f9b3f0c22496e1ae7ab2d12f2b6ec1072c57018835d"
        },
        body: JSON.stringify(payload)
    })
        .then(async response => {
            // 1. Check if the response is a 422 Unprocessable Entity
            if (response.status === 422) {
                const errorData = await response.json();
                // 2. Log FastAPI's specific error details as a readable table
                console.error("FastAPI Validation Error:");
                console.table(errorData.detail);
                throw new Error("Data validation failed (422)");
            }

            // 3. Handle other errors (401, 404, 500)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return response.json();
        })
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
            <textarea rows=5, cols=25 id="ai_input_uservalue_topic" placeholder="Please describe the topic of your quiz to the AI"></textarea>
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