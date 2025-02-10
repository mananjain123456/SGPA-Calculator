// Function to add a new subject field
function addSubject() {
    const subjectFields = document.getElementById('subjectFields');
    const newSubject = document.createElement('div');
    newSubject.className = 'subject';
    newSubject.innerHTML = `
      <input type="text" placeholder="Subject Name" required>
      <select class="grade" required>
        <option value="10">A+</option>
        <option value="9">A</option>
        <option value="8">B+</option>
        <option value="7">B</option>
        <option value="6">C</option>
        <option value="5">D</option>
        <option value="0">F</option>
      </select>
      <input type="number" placeholder="Credits" min="1" required>
      <button type="button" class="remove-subject" onclick="removeSubject(this)">Remove</button>
    `;
    subjectFields.appendChild(newSubject);
  }
  
  // Function to remove a subject field
  function removeSubject(button) {
    const subjectFields = document.getElementById('subjectFields');
    const subject = button.parentElement;
    subjectFields.removeChild(subject);
  }
  
  // Function to calculate SGPA
  document.getElementById('sgpaForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let totalGradePoints = 0;
    let totalCredits = 0;
  
    const subjects = document.querySelectorAll('.subject');
    let isValid = true;
  
    subjects.forEach(subject => {
      const grade = parseFloat(subject.querySelector('.grade').value);
      const credits = parseFloat(subject.querySelector('input[type="number"]').value);
  
      if (isNaN(grade) || isNaN(credits) || credits < 1) {
        isValid = false;
        alert("Please enter valid grades and credits for all subjects.");
        return;
      }
  
      totalGradePoints += grade * credits;
      totalCredits += credits;
    });
  
    if (!isValid) return;
  
    if (totalCredits === 0) {
      alert("Please add at least one subject with valid credits.");
      return;
    }
  
    const sgpa = totalGradePoints / totalCredits;
    document.getElementById('result').innerText = `Your SGPA is: ${sgpa.toFixed(2)}`;
  });