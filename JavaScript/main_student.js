document.addEventListener('DOMContentLoaded', async () => {
    let isTeacher, session_token, API_KEY = ""

    try {
        isTeacher = await cookieStore.get("isTeacher")
        session_token = await cookieStore.get("session_token")
        API_KEY = await cookieStore.get("API_KEY")
    } catch (e) {
        window.location.href = "/Oral-Exam-Frontend/HTML/sign-in.html"
    }

    if (isTeacher !== "true" && session_token && API_KEY) {
        window.location.href = "/Oral-Exam-Frontend/HTML/main-student.html"
    }
    else if (isTeacher !== "true" && !session_token) {
        window.location.href = "/Oral-Exam-Frontend/HTML/sign-in.html"
    }
});