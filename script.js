const form=document.getElementById("signupform")
const errormsg=document.getElementById("errormsg")
const showpwd=document.getElementById("showpwd")
const passwordInput=document.getElementById("password")

showpwd.addEventListener("click",function(){
    if(passwordInput.type==="password")
    {
        passwordInput.type="text";
    }
    else{
        passwordInput.type="password";
    }
})
form.addEventListener("submit",function(event)
        {
            event.preventDefault();
            const name=document.getElementById("name").value.trim();
            const email=document.getElementById("email").value.trim();
            const password=document.getElementById("password").value.trim();
            if(name===""||email===""||password==="")
            {
                errormsg.textContent="All fields are required";
            return;
            }
        
        const eamilRegex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
        if(!eamilRegex.test(email)){
            errormsg.textContent="please enter a valid eamil!";
            return;
        }
        const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
        if(!passwordRegex.test(password)){
            errormsg.textContent="password must be at least 8 characters and include uppercase,lowercase,number,and special symbol."
            return;
        }
        const user={name,email,password};
        localStorage.setItem("signupData",JSON.stringify(user));

        errormsg.textContent="";
        alert("signup succesful! \nName:"+name+"\nEmail:"+email);

        form.reset();
    })
