const studentForm = document.getElementById('student-form');
const studentList = document.getElementById('student-list');

let students = [];

studentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('student-name').value;
    const age = document.getElementById('student-age').value;

    const student = {
        name: name,
        age: age
    };

    students.push(student);
    displayStudents();
    studentForm.reset();
});

function displayStudents() {
    studentList.innerHTML = '';
    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.textContent = `${student.name}, Age: ${student.age}`;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = () => {
            students.splice(index, 1);
            displayStudents();
        };

        li.appendChild(deleteBtn);
        studentList.appendChild(li);
    });
}
