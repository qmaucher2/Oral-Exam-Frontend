function post_quiz() {
    // alert("add function to post quiz");
    alert("Frontend received requests");
}
let student_num = 0
let list_of_students = [];
function add_student(){
    let student_name = document.getElementById('add_student_input').value;
    const students_list = document.getElementById("students_list");
    const students_bulletpoint = document.createElement("students_bulletpoint");
    const student_num_tag =document.getElementById("student_num_tag");
    if (student_name.includes("@")){
        if (list_of_students.includes(student_name)){
            alert("Student Name is already in the list");
        }
        else{
            students_bulletpoint.innerHTML = `
            <li id="${student_name}">
            ${student_name}
            </li>
            `
            students_list.appendChild(students_bulletpoint);
            console.log("Student_name", student_name);
            student_num++;
            student_num_tag.innerHTML = student_num;
            list_of_students.push(student_name);
            console.log(list_of_students);
        }
    }
    else{
        alert("Please enter a valid student email");
    }
}

function remove_student(){
    let student_name = document.getElementById('add_student_input').value;
    const students_bulletpoint = document.createElement("students_bulletpoint");
    students_bulletpoint.removeChild(student_name);
    student_num--;
}