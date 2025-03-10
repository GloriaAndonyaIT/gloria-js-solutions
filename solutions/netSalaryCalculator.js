// Function to calculate PAYE (Income Tax) based on tax brackets
function calculatePAYE(grossSalary) {
    if (grossSalary <= 24000) return grossSalary * 0.1; // 10% for income up to 24,000
    else if (grossSalary <= 32333) return (24000 * 0.1) + ((grossSalary - 24000) * 0.25); // 25% for next bracket
    else if (grossSalary <= 500000) return (24000 * 0.1) + (8333 * 0.25) + ((grossSalary - 32333) * 0.3); // 30% for next bracket
    else if (grossSalary <= 800000) return (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + ((grossSalary - 500000) * 0.325); // 32.5% for next bracket
    else return (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + (300000 * 0.325) + ((grossSalary - 800000) * 0.35); // 35% for income above 800,000
}

// Function to calculate NHIF deduction based on salary range
function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    else if (grossSalary <= 7999) return 300;
    else if (grossSalary <= 11999) return 400;
    else if (grossSalary <= 14999) return 500;
    else if (grossSalary <= 19999) return 600;
    else if (grossSalary <= 24999) return 750;
    else if (grossSalary <= 29999) return 850;
    else if (grossSalary <= 34999) return 900;
    else if (grossSalary <= 39999) return 950;
    else if (grossSalary <= 44999) return 1000;
    else if (grossSalary <= 49999) return 1100;
    else if (grossSalary <= 59999) return 1200;
    else if (grossSalary <= 69999) return 1300;
    else if (grossSalary <= 79999) return 1400;
    else if (grossSalary <= 89999) return 1500;
    else if (grossSalary <= 99999) return 1600;
    else return 1700; // Maximum NHIF deduction
}

// Function to calculate NSSF deduction (6% of salary, capped at 2,160)
function calculateNSSF(grossSalary) {
    return Math.min(grossSalary * 0.06, 2160);
}

// Function to compute net salary
function netSalaryCalculator(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits; // Total earnings before deductions

    let paye = calculatePAYE(grossSalary); // Income tax
    let nhif = calculateNHIF(grossSalary); // Health insurance
    let nssf = calculateNSSF(grossSalary); // Retirement savings

    let netSalary = grossSalary - (paye + nhif + nssf); // Salary after deductions

    return `
    Salary Breakdown
    ------------------------------
    Gross Salary: Ksh ${grossSalary}
    PAYE (Tax): Ksh ${paye}
    NHIF: Ksh ${nhif}
    NSSF: Ksh ${nssf}
    ------------------------------
    Net Salary: Ksh ${netSalary}
    `;
}

// Prompt user for input
let basicSalary = parseFloat(prompt("Enter your basic salary: "));
let benefits = parseFloat(prompt("Enter your benefits: "));

console.log(netSalaryCalculator(basicSalary, benefits));
