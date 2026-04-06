function post_quiz() {
    // alert("add function to post quiz");
    alert("Frontend received requests");
}
let student_num = 0
function add_student(){
    let student_name = document.getElementById('add_student_input').value;
    const students_list = document.getElementById("students_list");
    const students_bulletpoint = document.createElement("students_bulletpoint");
    const student_num_tag =document.getElementById("student_num_tag");
    students_bulletpoint.innerHTML = `
    <li id="${student_name}">
        ${student_name}
    </li>
    `
    students_list.appendChild(students_bulletpoint);
    console.log("Student_name", student_name);
    student_num++;
    student_num_tag.innerHTML = student_num;
}

function remove_student(){
    let student_name = document.getElementById('add_student_input').value;
    const students_bulletpoint = document.createElement("students_bulletpoint");
    students_bulletpoint.removeChild(student_name);
}