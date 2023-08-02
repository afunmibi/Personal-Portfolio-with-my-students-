// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})



// form validation


document.querySelector('.btn').addEventListener('click', function(){
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const comment = document.getElementById{'comment'};

    if(name.value.trim() === ""|| email.value.trim() === ""||subject.value.trim() === ""||comment.value.trim()){
        alert('Name field cannot be emptied');
    } else{
console.log('Message saved.')
    }


})
