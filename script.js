let courses = [1, 2, 3, 4, 5, 6, 7];
generateCourses();

function generateCourses() {
    let text = '';
    for(let i = 0; i < courses.length; i++) {
        const placeholder = `Course Name ${i + 1}`;
        const id = `Name${i + 1}`
        text += '<div class="form-grade">' +
            '                <input id={id} type="text" placeholder="Course Name" class="form-input" >' +
            '                <select class="form-select">' +
            '                    <option value="">Select</option>' +
            '                    <option value="4.0">A+</option>' +
            '                    <option value="4.0">A</option>' +
            '                    <option value="3.7">A-</option>' +
            '                    <option value="3.3">B+</option>' +
            '                    <option value="3.0">B</option>' +
            '                    <option value="2.7">B-</option>' +
            '                    <option value="2.3">C+</option>' +
            '                    <option value="2.0">C</option>' +
            '                    <option value="1.7">C-</option>' +
            '                    <option value="1.0">D</option>' +
            '                    <option value="0.0">F</option>' +
            '                </select>' +
            '                <input type="text" placeholder="Credits" class="form-input" >' +
            '            </div>';
    }

    document.getElementById("formContent").innerHTML = text;
}

function addCourse() {
    courses.push(courses.length + 1);
    generateCourses();
}



