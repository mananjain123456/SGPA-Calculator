// Predefined subjects and credits for each semester
const semesterData = {
    1: [
      { name: "Mathematics-I", credits: 4 },
      { name: "Engineering Physics/Chemistry", credits: 4 },
      { name: "Communication Skills", credits: 2 }, 
      { name: "Programming for Problem Solving", credits: 2 },
      { name: "Basic Electrical/Civil Engineering", credits: 2 },
      { name: "Engineering Physics/Chemistry LAB", credits: 1 },
      { name: "Language LAB", credits: 1 },
      { name: "Computer Programming LAB", credits: 1.5 },
      { name: "Basic Electrical/Civil Engineering LAB", credits: 1 },
      { name: "Computer Aided Machine Drawing", credits: 1.50 },
      { name: "Sports I", credits: 0.50 },
       
    ],
    2: [
      { name: "Engineering Mathematics-II", credits: 4 },
      { name: "Engineering Chemistry/Physics", credits: 4 },
      { name: "Human Values", credits: 2 },
      { name: "Basic Mechanical Engineering", credits: 2 },
      { name: "Basic Civil/Electrical Engineering", credits: 2 },
      { name: "Engineering Chemistry/Physics Lab", credits: 1 },
      { name: "Human Values Activities & Sports", credits: 1 },
      { name: "Manufacturing Practice Workshop ", credits: 1.50 },
      { name: "Basic Civil/Electrical Engineering LAB", credits: 1 },
      { name: "Computer Aided Engineering Graphics", credits: 1.50 },
      { name: "Sports II", credits: 0.50 },
    ],
    // Add more semesters as needed
  };
  
  // Function to load subjects based on selected semester
  function loadSubjects() {
    const semester = document.getElementById('semester').value;
    const subjectFields = document.getElementById('subjectFields');
    subjectFields.innerHTML = ''; // Clear previous subjects
  
    if (semester && semesterData[semester]) {
      semesterData[semester].forEach(subject => {
        const subjectDiv = document.createElement('div');
        subjectDiv.className = 'subject';
        subjectDiv.innerHTML = `
          <label>${subject.name} (Credits: ${subject.credits}):</label>
          <select class="grade" required>
            <option value="10">A++</option>
            <option value="9">A+</option>
            <option value="8.5">A</option>
            <option value="8">B+</option>
            <option value="7.5">B</option>
            <option value="7">C+</option>
            <option value="6.5">C</option>
            <option value="6">D+</option>
            <option value="5.5">D</option>
            <option value="4">E</option>
            <option value="0">F</option>
          </select>
        `;
        subjectFields.appendChild(subjectDiv);
      });
    }
  }
  
  // Function to calculate SGPA
  document.getElementById('sgpaForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const semester = document.getElementById('semester').value;
    if (!semester || !semesterData[semester]) {
      alert("Please select a valid semester.");
      return;
    }
  
    let totalGradePoints = 0;
    let totalCredits = 0;
  
    const subjects = document.querySelectorAll('.subject');
    subjects.forEach((subject, index) => {
      const grade = parseFloat(subject.querySelector('.grade').value);
      const credits = semesterData[semester][index].credits;
      totalGradePoints += grade * credits;
      totalCredits += credits;
    });
  
    if (totalCredits === 0) {
      alert("No subjects found for the selected semester.");
      return;
    }
  
    const sgpa = totalGradePoints / totalCredits;
    document.getElementById('result').innerText = `Your SGPA is: ${sgpa.toFixed(2)}`;
  });