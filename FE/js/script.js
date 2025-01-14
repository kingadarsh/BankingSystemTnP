// Theme switching functionality
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Update theme attribute
    body.setAttribute('data-theme', newTheme);
    
    // Update image source based on theme
    const themeImage = document.querySelector('.theme-image');
    if (themeImage) {
        if (newTheme === 'dark') {
            themeImage.src = '/FE/assets/bankpng-white.png';
        } else {
            themeImage.src = '/FE/assets/bank.png';
        }
    }
    
    // Store theme preference
    localStorage.setItem('theme', newTheme);
}

// Set initial theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    
    // Set initial image based on saved theme
    const themeImage = document.querySelector('.theme-image');
    if (themeImage) {
        themeImage.src = savedTheme === 'dark' ? 
            '/FE/assets/bankpng-white.png' : 
            '/FE/assets/bank.png';
    }
});


// --------------------------------------------------------------------------------------------------------------

function CreateAcc(){
    const fullname = document.getElementById("name").value;
    const email= document.getElementById("email").value;
    const dob =document.getElementById("dob").value;
    // const gender = document.getElementById("gender").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const pincode = document.getElementById("pincode").value;
    const password = document.getElementById("password").value;



}