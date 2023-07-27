const hamburger = document.querySelector('.navlinks-mobile');
const navLinks = document.querySelector('.links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Contact us
function validate(){
    let fname = document.getElementById('fname');
    let password = document.getElementById('password');
    let email = document.getElementById('email');
    
        if(fname.value.trim() === ""){
            alert('Enter your Full Name');
            return false;
            }
    
            else if(password.value.trim() ===""){
                alert('Enter your password');
                return false;
            }
    
            else if(email.value.trim() ===""){
                alert('Enter your email');
                return false;
            }
            
            else{
                alert('Your message has been recorded')
            }
            }
    
