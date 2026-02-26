let placeholder = 2

function addClassroom() {
    const insertfield = document.getElementById("created-classrooms")
    const newClassroom = document.createElement("div");
    newClassroom.innerHTML = `
        <li class="classroom-bullet-point"><a href="Template-Classroom${placeholder}_teacher-pov.html">Template Classroom-${placeholder}</a></li>
        `;
    insertfield.appendChild(newClassroom);
    placeholder++;
}