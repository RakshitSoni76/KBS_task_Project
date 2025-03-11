document.addEventListener("DOMContentLoaded", function () {

    // variable to store display value
    const display = document.getElementById("display");

    // variable to store button value
    const buttons = document.querySelectorAll("button");

    // Loop to perform different operations
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.value;  // Get the value of the clicked button
            if(display.value === "Error" && display.value!=="clear"){
                display.value="";
            }
            if (value === "clear") {
                display.value = "";
            }
            else if (value === "delete") {
                display.value = display.value.slice(0, -1);
            }
            else if (value === "=") {
                try {
                    // Replace x and ÷ with * and /
                    let expression = display.value.replace(/x/g, '*').replace(/÷/g, '/');
                    display.value = eval(expression);
                } catch (error) {
                    display.value = "Error";
                    
                     // If there's an error, show "Error"
                }
            }
            //Handle other buttons
            else {
                display.value += value;
            }
        });
    });

});
