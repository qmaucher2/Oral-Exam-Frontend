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
            "ORAL_EXAM_API_KEY": "3570fd7fe03b163e9dc26f9b3f0c22496e1ae7ab2d12f2b6ec1072c57018835d"
        },
        body: formData
    })
        .then(response => response.json())
        .then(data => console.log(data))
}