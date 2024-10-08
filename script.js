document.getElementById('attendance-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const studentName = document.getElementById('student-name').value;
    const date = document.getElementById('date').value;
    const status = document.getElementById('status').value;

    const recordsTable = document.getElementById('attendance-records');
    const newRow = recordsTable.insertRow();

    const nameCell = newRow.insertCell(0);
    const dateCell = newRow.insertCell(1);
    const statusCell = newRow.insertCell(2);

    nameCell.textContent = studentName;
    dateCell.textContent = date;
    statusCell.textContent = status;

    // Clear the form
    document.getElementById('attendance-form').reset();
});
