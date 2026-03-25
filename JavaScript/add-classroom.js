let placeholder = 2

function addClassroom() {
    const insertfield = document.getElementById("created-classrooms")
    const newClassroom = document.createElement("div");
    newClassroom.innerHTML = `
        <li class="classroom-bullet-point"><a href="Template-Classroom${placeholder}_teacher-pov.html">Template Classroom-${placeholder}</a></li>
        `;
    insertfield.appendChild(newClassroom);
    console.log(newClassroom);
    placeholder++;

    const formData = new FormData();
    formData.append("class_name", subject);
    formData.append("teacher_id", teacher);
    fetch('/n' + 'https:https://oral-exam-backend-307630687354.northamerica-northeast1.run.app/supabase/create_classroom', {
        method:'POST',
        headers: {
            "ORAL_EXAM_API_KEY": process.env.ORAL_EXAM_API_KEY
        },
        body: formData
    })
        .then(response => response.json())
        .then(data => console.log(data))
}