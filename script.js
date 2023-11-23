const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const textBox = document.getElementById('text-box');


//light to dark
 function imageMode(color){
    img1.src =`https://kinsta.com/wp-content/uploads/2021/11/about-us-page.png_${color} `;
    img2.src =`https://cdn3.careeraddict.com/uploads/article/59046/small-illustration-people-office.jpg_${color}`;
    img3.src =`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQTLfz_2t4nTntxPBirSJLZINhQM2ddhULGyAdJ3ilV4MgkwbTpPm4HIveFIhaXD9QF1U&usqp=CAU_${color}`;
}

// Dark mode
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor ='rgb(255 255 255 / 50%)'
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
   }

// Light  mode
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor ='rgb(0 0 0 / 50%)'
    toggleIcon.children[0].textContent = 'light mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    imageMode('light');
}

// Switch Theme Dynamically
function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local storage for Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    }
}