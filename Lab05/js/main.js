// ========== PAGE 1: USER FORM ==========

// Listeners for both pages
document.addEventListener("DOMContentLoaded", () => {

    // SEND BUTTON on index.html
    const sendBtn = document.getElementById("sendBtn");
    if (sendBtn) {
        sendBtn.addEventListener("click", (e) => {
            e.preventDefault();
            userForm();
        });
    }

    // CALCULATE BUTTON on excel.html
    const calcBtn = document.getElementById("calcBtn");
    if (calcBtn) {
        calcBtn.addEventListener("click", (e) => {
            e.preventDefault();
            myExcelFuns();
        });
    }
});

// Function for page 1 (index.html)
function userForm() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let province = document.getElementById("province").value;

    let membership = "";
    if (document.getElementById("premium").checked) membership = "Premium";
    else if (document.getElementById("standard").checked) membership = "Standard";
    else membership = "Basic";

    let fullName = fname + " " + lname;

    document.getElementById("output").innerHTML = `
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}, ${city}, ${province}</p>
        <p><strong>Membership:</strong> ${membership}</p>
    `;
}



// ========== PAGE 2: EXCEL FUNCTIONS ==========

function myExcelFuns() {

    let numberStr = document.getElementById("numbers").value.trim();

    if (numberStr === "") {
        alert("Please enter numbers separated by spaces");
        return;
    }

    let numberArr = numberStr.split(" ");

    // create clean array (remove empty spaces)
    let finalArr = [];
    for (let i = 0; i < numberArr.length; i++) {
        if (numberArr[i] !== "") {
            finalArr.push(Number(numberArr[i]));
        }
    }

    let result;

    if (document.getElementById("sum").checked) {
        result = finalArr.reduce((a, b) => a + b, 0);

    } else if (document.getElementById("avg").checked) {
        let total = finalArr.reduce((a, b) => a + b, 0);
        result = total / finalArr.length;

    } else if (document.getElementById("max").checked) {
        result = Math.max(...finalArr);

    } else {
        result = Math.min(...finalArr);
    }

    // print result
    document.getElementById("excel-output").innerHTML = `<strong>${result}</strong>`;
}



// ========== THEME SWITCHER ==========

function setTheme(theme) {
    if (theme === "light") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
}
