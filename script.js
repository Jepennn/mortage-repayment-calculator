

//Clear 
function clearAll(){
    
    const inputValues = document.querySelectorAll("input");

    console.log(inputValues);
    inputValues.forEach((input) => {
        //checks if radio input
        if (input.type === "radio") {
            input.checked = false;
        } else {
            input.value = "";
        }
    })
}







const clearAllFields = document.getElementById("clearAll");



//All eventListener 
clearAllFields.addEventListener("click", clearAll);