
// Target Elements
const button = document.querySelector('#action-btn');
const statusText = document.querySelector('.status');

//Modify content and class/style
statusText.textContent = 'Processing...';
status.classList.add('loading');

button.addEventListener('click', () => {
    // Simulate a process
    statusText.textContent = "Action completed!";
});

const form = document.querySelector('#user-form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevents page refresh
  const name = document.querySelector('#name-input').value;
  console.log(`Submitted name: ${name}`);
});

// JavaScript toggles the trigger class
card.addEventListener('mouseenter', () => card.classList.toggle('highlight'));

async function loadUserData() {
  const response = await fetch('https://api.example.com/user');
  const data = await response.json();
  document.querySelector('#profile-name').textContent = data.name;
}
const toggleBtn = document.querySelector('#theme-toggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  const isDarkMode = document.body.classList.contains('dark-mode');
  toggleBtn.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});