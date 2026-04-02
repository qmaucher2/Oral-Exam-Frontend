function post_quiz() {
    // alert("add function to post quiz");
    alert("Frontend received requests");
}

let student_num = 0
function add_student(){
    let student_name = document.getElementById('add_student_input').value;
    const students_list = document.getElementById("students_list");
    const students_bulletpoint = document.createElement("students_bulletpoint");
    students_bulletpoint.innerHTML = `
    <li id="${student_name}">
        ${student_name}
    </li>
    `
    students_list.appendChild(students_bulletpoint);
    console.log("Student_name", student_name);
    student_num++;


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