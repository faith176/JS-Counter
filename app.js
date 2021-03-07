//intialize the counter value
let count = 0;

//finds the component with the ID "value", which is the counter
const value = document.querySelector("#value");

//finds all components with the class .btn
const buttons = document.querySelectorAll(".btn");
console.log(buttons);

//forEach performs the specified function against all the items specified
buttons.forEach( function (btns) {
    //Add an event listener to all the buttons
    btns.addEventListener("click", function(e) {
        //creates a variable to check which button was pressed by the user
        //event object e has the property, currentTarget, which looks for all the classList this element has
        const styles = (e.currentTarget.classList);
        
        if (styles.contains("decrease")) {
            count = count - 1;
        }
        else if (styles.contains("increase")) {
            count = count + 1;
        }
        else if (styles.contains("reset")) {
            count = 0;
        }
        
        if (count < 0) {
            value.style.color = "red";
        }
        
        if (count > 0) {
            value.style.color = "green"
        }
        
        if (count === 0) {
            value.style.color ="#222";
        }
        
        //sets counter to new value
        value.textContent = count;
    });
});
