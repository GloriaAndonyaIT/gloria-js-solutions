function gradeGenerator(marks) {
    // Make sure the input is between 0 and 100
    if (marks < 0 || marks > 100) {
        return "Invalid input. Marks should be between 0 and 100.";
    }

    // Check the grade based on marks
    if (marks > 79) return "A"; 
    else if (marks >= 60) return "B"; 
    else if (marks >= 49) return "C"; 
    else if (marks >= 40) return "D"; 
    else return "E"; 
}

// Ask the user for marks and convert to a number
let marks = Number(prompt("Enter student marks (0-100): "));

// Show the grade in the console
console.log(`Grade: ${gradeGenerator(marks)}`);
