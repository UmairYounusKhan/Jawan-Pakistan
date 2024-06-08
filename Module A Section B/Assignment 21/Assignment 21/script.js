document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('studentTable');
    const tbody = table.querySelector('tbody');
  
    // Function to create a new row for a student record
    function createStudentRow(name, age, grade) {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      const ageCell = document.createElement('td');
      const gradeCell = document.createElement('td');
      const actionCell = document.createElement('td');
      const deleteButton = document.createElement('button');
  
      nameCell.textContent = name;
      ageCell.textContent = age;
      gradeCell.textContent = grade;
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
        tbody.removeChild(row); // Remove the row when the delete button is clicked
      });
  
      actionCell.appendChild(deleteButton);
  
      row.appendChild(nameCell);
      row.appendChild(ageCell);
      row.appendChild(gradeCell);
      row.appendChild(actionCell);
  
      return row;
    }
  
    // Generate some dummy student records
    const studentData = [
      { name: 'John Doe', age: 20, grade: 'A' },
      { name: 'Jane Smith', age: 22, grade: 'B' },
      { name: 'Alice Johnson', age: 21, grade: 'C' },
      { name: 'Bob Brown', age: 19, grade: 'B' },
      { name: 'Eva Davis', age: 23, grade: 'A' },
      { name: 'Michael Wilson', age: 20, grade: 'B' },
      { name: 'Olivia Lee', age: 21, grade: 'C' },
      { name: 'Sophia Clark', age: 22, grade: 'A' },
      { name: 'William Martinez', age: 19, grade: 'C' },
      { name: 'Emma Taylor', age: 23, grade: 'B' }
    ];
  
    // Populate the table with student records
    studentData.forEach(function(student) {
      const newRow = createStudentRow(student.name, student.age, student.grade);
      tbody.appendChild(newRow);
    });
  });
// 
// 
// 
// 
var counterValue = 0;
    const counterElement = document.getElementById('counter');

    function increaseCounter() {
      counterValue++;
      updateCounter();
    }

    function decreaseCounter() {
      counterValue--;
      updateCounter();
    }

    function updateCounter() {
      counterElement.textContent = counterValue;
    }  