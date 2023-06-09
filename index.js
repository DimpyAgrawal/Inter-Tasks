function register(){
    const s1=document.getElementById("n1").value;
    const s2=document.getElementById("e1").value;
    const s3=document.getElementById("a1").value;
    const s4=document.getElementById("sa1").value;
    const s5=document.getElementById("p1").value;
    const s6=document.getElementById("p2").value;
    
    const flag=true;
    if(s1==null || s1==""){
        alert('Name can not be empty')
        flag=false;
    }

    var mailformat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(e1.value.match(mailformat)) {}
    else{
        alert('You have entered an invalid email address!');
        flag=false;
    }
    if(Number.isInteger(parseInt(s3)) && (s3>=1 && s3<=100)){}
    else{
        alert('Please enter valid Age');
        flag=false;
    }

    if(Number.isInteger(parseInt(s4))){}
    else{
        alert('Salary must be in numeric');
        flag=false;
    }

    if(s5!=s6){
        alert('Your password is not matching');
        flag=false;
    }
    if(flag){
        alert("Your account register successfully"); 
    }
    else{
        alert("Please enter valid details");
    }
    
}

