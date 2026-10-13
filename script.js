// Mock Database (Student Records)
const studentDatabase = {
    "101": { name: "John Doe", maths: 85, science: 90, english: 78 },
    "102": { name: "Sarah Smith", maths: 42, science: 55, english: 38 },
    "103": { name: "Alex Jones", maths: 28, science: 32, english: 30 }
};

function checkResult() {
    const rollInput = document.getElementById("rollNumber").value.trim();
    const resultArea = document.getElementById("resultArea");
    const errorMsg = document.getElementById("errorMsg");

    // Check if the roll number exists in our database
    if (studentDatabase[rollInput]) {
        const student = studentDatabase[rollInput];
        
        // Injecting student data into HTML
        document.getElementById("studentName").innerText = student.name;
        document.getElementById("studentRoll").innerText = rollInput;
        document.getElementById("mathsMarks").innerText = student.maths;
        document.getElementById("scienceMarks").innerText = student.science;
        document.getElementById("englishMarks").innerText = student.english;

        // Calculations
        const total = student.maths + student.science + student.english;
        const percentage = (total / 3).toFixed(2);
        
        document.getElementById("totalMarks").innerText = total;
        document.getElementById("percentage").innerText = percentage;

        // Determining Pass/Fail Status (Passing criteria: 33 marks in each subject)
        const statusElement = document.getElementById("status");
        if (student.maths >= 33 && student.science >= 33 && student.english >= 33) {
            statusElement.innerText = "PASSED";
            statusElement.className = "pass";
        } else {
            statusElement.innerText = "FAILED";
            statusElement.className = "fail";
        }

        // Show result card and hide error message
        resultArea.style.display = "block";
        errorMsg.style.display = "none";
    } else {
        // If roll number is not found
        resultArea.style.display = "none";
        errorMsg.style.display = "block";
    }
}
// Grade Calculation
let grade = "";
if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else if (percentage >= 50) {
    grade = "D";
} else {
    grade = "E";
}
if (student.maths < 33 || student.science < 33 || student.english < 33) {
    grade = "F"; 
}
document.getElementById("grade").innerText = grade;