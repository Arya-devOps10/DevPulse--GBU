document.getElementById('signupForm').addEventListener('submit', function(e) {
    // 1. Form ko reload hone se rokna (Very Important!)
    e.preventDefault(); 

    // 2. HTML form se saari values uthana
    const name = document.getElementById('name').value;
    const yearSection = document.getElementById('year-section').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // 3. Basic Validation: Passwords match ho rahe hain ya nahi?
    if (password !== confirmPassword) {
        alert("Oops! Dono passwords match nahi ho rahe. Phir se check kar lo.");
        return; // Agar error hai toh code yahi ruk jayega, aage nahi badhega
    }

    // 4. Data ko ek jageh pack karna (Object banana)
    const userData = {
        name: name,
        yearSection: yearSection,
        email: email,
        password: password 
    };

    // Console mein check karne ke liye ki sab theek hai
    console.log("Frontend ready! Sending data to backend...", userData);

    // 5. Backend (Node.js/MongoDB) ko data bhejna
    fetch('http://localhost:3000/api/signup', {
        method: 'POST', // Secure tareeka data bhejne ka
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData) // Object ko text mein convert karke bhejna
    })
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            alert("Account created successfully! Welcome to DevPulse.");
            // Account banne ke baad login page par bhej do
            window.location.href = "login.html"; 
        } else {
            alert("Error: " + data.message);
        }
    })
    .catch(error => {
        console.error("Server error:", error);
        alert("Server se connect nahi ho paya. Backend on hai?");
    });
});