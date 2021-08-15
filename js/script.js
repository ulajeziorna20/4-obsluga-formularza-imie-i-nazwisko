const submitForm = (event) => {

    event.preventDefault();


    let firstName = document.querySelector('[name="fname"]').value;
    // console.log(firstName);
    let lastName = document.querySelector('[name="lname"]').value;
    // console.log(lastName);

    console.log(`Imie: ${firstName}, Nazwisko: ${lastName}`);
}


let form = document.getElementById('form');
// console.log(form);

form.addEventListener(`submit`, submitForm);
