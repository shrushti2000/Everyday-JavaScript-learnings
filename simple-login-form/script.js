const button =document.querySelector("#button");
const form=document.querySelector("#form");


//console.log(myname);
console.log(email);
console.log(phone);
console.log(sex);
console.log(date);
console.log(language);
console.log(address);

const submitdata=(e)=>{
    e.preventDefault();
    if(!/^[a-zA-Z ]+$/.test( form.name.value)){
        alert("Name should contain only alphabets");
    }
    else if((form.name.value).length<6){
        alert("name should not be less than 6 characters")
    }
    else if(((form.password.value).length)<6){
        alert("password cannot be less than 6 characters")
    }
    else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.email.value)){
        alert("enter valid email id")
    }
    else if((form.phone.value).length!==10){
        alert("phone no should contain only 10 digits")
    }
    else{
        alert("form submitted successfully!")
    }
    
    
    
}

button.addEventListener('click',submitdata);