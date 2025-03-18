// Henter formen med id´et frmContact. Brug QuerySelectorAll hvis det skal bruges på alle forms.
// Man kan også bruge document.getElementById eller document.getElementByClass
//  (e) for event - man kan også skrive (event)



// Ny
document.querySelector('#frmContact').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = e.target.txtName.value;
    const email = e.target.txtEmail.value;
    const comments = e.target.txtComments.value;

    const modal = document.querySelector('#contact_message');
    modal.querySelector('#name').innerText = name;
    modal.querySelector('#email').innerText = email;
    modal.querySelector('#comments').innerText = comments;

    modal.showModal();
    modal.focus();

    modal.querySelector('.close').addEventListener('click', function() {
        this.parentElement.parentElement.close();
    });

    // Faster and less cumbersome, but sometimes you don't have the element you want to operate with
    // modal.querySelector('.close').addEventListener('click', () => {
    //     modal.close();
    // });

    modal.addEventListener('close', () => {
        window.location.replace('index.html');
    });
});




// Gammel
// document.querySelector('#frmContact').addEventListener('submit', (e) =>  {
//     e.preventDefault();

//     const name = e.target.txtName.value;
//     const email = e.target.txtEmail.value;
//     const comments = e.target.txtComments.value;

//     const submittedInfo = `
//     Thank you for your messange. We will get back to you shortly.

//     Registred information:
//     - Name: ${name}
//     - Email: ${email}
//     - Comments: ${comments}
//     `;

//     alert(submittedInfo);

//     window.location.replace('index.html');
// });



// Nedenstående virker ikke, fordi intro kun er kaldet inde i funktionen
// function showText(text) {
//     let intro = 'Your text is: ';
//     alert(intro + text);
// }
// alert(intro);