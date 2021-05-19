    function Login(){
        var pseudo=document.login.pseudo.value;
        var username=pseudo.toLowerCase();
        var password=document.login.password.value;
        if (pseudo=="4dm1n" && password=="P4s5w0rD") {
            alert("Good Job, take your flag and go away");
            window.location.href = "./hereitis.html";
        } else { 
            alert("Password or Username incorrect"); 
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }
    }
