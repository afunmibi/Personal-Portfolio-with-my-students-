const fname = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const btn = document.querySelector('#btn'); 







function validate(){
if(fname.vale.trim()===''){
    alert('Name must be filled');
    return false;
}else

if(email.vale.trim()===''){
    alert('Email must be filled')
    return false;
}
else
if(name.vale.trim()===''){
    alert('Message must be filled')
    return false;
}
else{
    alert('Message Recorded')
}
}

