let isLogin = true;

function switchMode(){

    isLogin = !isLogin;

    document.getElementById("title").innerText =
        isLogin ? "Login" : "Register";

    document.getElementById("mainBtn").innerText =
        isLogin ? "Login" : "Register";

    document.querySelector(".toggle").innerText =
        isLogin
        ? "No account? Register here"
        : "Already have account? Login here";

    document.getElementById("msg").innerText = "";
}

function auth(){

    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if(user === "" || pass === ""){

        document.getElementById("msg").innerText =
        "Fill all fields!";

        return;
    }

    if(isLogin){

        let stored = localStorage.getItem(user);

        if(stored === pass){

            localStorage.setItem("loggedIn", user);

            document.getElementById("msg").innerText =
            "Login successful!";

            setTimeout(() => {
                window.location.href = "index.html";
            },1000);

        } else {

            document.getElementById("msg").innerText =
            "Invalid login!";
        }

    } else {

        if(localStorage.getItem(user)){

            document.getElementById("msg").innerText =
            "User already exists!";

        } else {

            localStorage.setItem(user, pass);

            document.getElementById("msg").innerText =
            "Registered successfully!";
        }
    }
}