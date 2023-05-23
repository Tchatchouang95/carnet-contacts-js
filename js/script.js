const addButton = document.getElementById('left-btn');
const editButton = document.getElementById('icon-1');
const deleteButton = document.getElementById('icon-2');
const submitButton = document.getElementById('submit');
const cancelButton = document.getElementById('cancel');
const formPage= document.querySelector('.right-side');
const contactListView = document.querySelector('.contact-append');

//Add button to display the form page
addButton.addEventListener('click', function(e){
    
    if(formPage.style.display === 'none'){
        formPage.style.display = 'block';
    }
    else{
        formPage.style.display = 'none';
    }
    addButton.style.display = 'none';
})

//Submit button
submitButton.addEventListener('click' , function(e){
    
    e.preventDefault();

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const country = document.getElementById('country').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const formValues = {
        fname,
        lname,
        country,
        gender,
        email,
        phone,
    };
    
    let block = `
        <div class="added-persons">
            <div class="img-and-info">
                <div class="added-img">
                    <img src="images/avatar.png" alt="avtar">
                </div>
                <div class="added-info">
                    <h3>${formValues.fname} ${formValues.lname}</h3>
                    <p>${formValues.country}</p>
                    <p class="size">${formValues.gender}</p>
                    <p  class="size">${formValues.email}</p>
                    <p  class="size">${formValues.phone}</p>
                </div> 
            </div> 
            <div class="icons">
                <div id="icon-1">
                    <i class="fa-regular fa-pen-to-square"></i>
                </div>
                <div id="icon-2">
                    <i class="fa-solid fa-trash-can"></i></div>
                </div>
            </div>
        </div>
    `;
    contactListView.innerHTML += block;

    for(i = 0; i < formValues.length; i++){
        formValues[i]='';
    }
    formPage.style.display = 'none'
    addButton.style.display = 'block'
})