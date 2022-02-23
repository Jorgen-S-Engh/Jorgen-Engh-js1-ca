const form = document.querySelector("#contactForm")
const name = document.querySelector("#name")



function validateForm(){
    event.preventDefault();

    console.log(event)

    if (name.value.length > 0){
        nameError.style.display = "none"
    }else{
        nameError.style.display = "block"
    }

    ;
    console.log(name.value);
}

form.addEventListener("submit", validateForm)


// function validateEmail(email) {
//     const regEx = /\S+@\S+\.\S+/;
//     const patternMatches = regEx.test(email);
//     return patternMatches;
// }