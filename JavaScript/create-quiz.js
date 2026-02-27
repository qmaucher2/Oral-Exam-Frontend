let placeholder = 2;

function addquestion() {
    const insertfield = document.getElementById("questionslist")
    const newFrage = document.createElement("div");
    newFrage.innerHTML = `
        <label>Question ${placeholder}.</label>
        <textarea class="question-field" placeholder="Enter Question ${placeholder} here."></textarea>
        `;
    insertfield.appendChild(newFrage);
    placeholder++;
}