      function login() {
        var user = document.getElementById("user").value;
        var password = document.getElementById("password").value;
        var error = document.getElementById("error");

        if (user === "admin" && password === "password") {
          window.location.href = "admin.html";
        } 
        else if (user === "user1" && password === "password") {
          window.location.href = "user1.html";
        }
        else if (user === "user2" && password === "password") {
            window.location.href = "user2.html";
          } 
        else {
          error.textContent = "Invalid username or password";
        }
      }
