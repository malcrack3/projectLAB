$(document).ready(function () {
    var index = 0;
    var items = $('.carousel-container img');
    var totalItems = items.length;

    function tampilkanGambar() {
        items.hide(); 
        items.eq(index).fadeIn(); 
    }

    tampilkanGambar(); 

    $('.next').click(function () {
        if (index < totalItems - 1) {
            index = index + 1;
        } else {
            index = 0;
        }
        tampilkanGambar();
    });

    $('.prev').click(function () {
        if (index > 0) {
            index = index - 1;
        } else {
            index = totalItems - 1;
        }
        tampilkanGambar();
    });
});


//=================================================================================

// Register Page
const isAlphanumeric = (password) => {
    let hasLetter = false;
    let hasNumber = false;
    for(let i = 0; i < password.length; i++){

        const char = password[i];
        if((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
            hasLetter = true;
        }


        if(char >= '0' && char <= '9') {
            hasNumber = true;
        }
    }

    return hasLetter && hasNumber;
}


const validateForm =() => {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;
    let male = document.getElementById("male");
    let female = document.getElementById("female");

    if(username.length < 10) {
        alert("Oh no, you need to insert your username more than 10 character!"); return;
    }

    if(!email.endsWith(".com")){
        alert("Oh no, your email must end with .com!"); return;
    }

    if(!isAlphanumeric (password)){
        alert ("Oh no, your password must be alphanumeric!"); return;
    }

    if (age < 10) {
    alert("You need to be more than 10 years old to register!"); return;
    }

    if(!male.checked && !female.checked) {
        alert("Oh no, you must pick a gender!"); return;
    }

    alert("Your Registration is Complete!");
}

//=================================================================================
// detail song page

window.addEventListener('load', () => {
  const audio = document.querySelector('audio');
  if (audio) {
    audio.play().catch(() => {
      alert('audio gagal, kemungkinan browser memblokir autoplay tanpa interaksi user.');
    });
  }
});

document.getElementById('back').addEventListener('click', () => {
  window.location.href = '../HTML/song_collection.html';
});
