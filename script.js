
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Get the ID of the section
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start'
            });
        }
    });
});

// Form Validation
const contactForm = document.querySelector('.contact form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const name = contactForm.querySelector('input[placeholder="Your Name"]').value.trim();
    const email = contactForm.querySelector('input[placeholder="Your Email"]').value.trim();
    const message = contactForm.querySelector('textarea[placeholder="Your Message"]').value.trim();

    if (!name || !email || !message) {
        alert('All fields are required. Please fill out the form.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    contactForm.reset(); // Clear the form
});

// Email Validation Helper Function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
// Step Counter
let steps = 0;

function incrementSteps() {
    steps += Math.floor(Math.random() * 10 + 1); // Simulate steps increment
    document.getElementById('step-count').textContent = `Steps: ${steps}`;
}

// Calorie Tracker
let caloriesConsumed = 0;
let caloriesBurned = 0;

function trackCalories(consumed, burned) {
    caloriesConsumed += consumed;
    caloriesBurned += burned;

    document.getElementById('calorie-tracker').innerHTML = `
        <p>Calories Consumed: ${caloriesConsumed} kcal</p>
        <p>Calories Burned: ${caloriesBurned} kcal</p>
        <p>Net Calories: ${caloriesConsumed - caloriesBurned} kcal</p>
    `;
}

// Goal Setting
let dailyGoal = 10000; // Default goal
let isGoalMet = false;

function setGoal(newGoal) {
    dailyGoal = newGoal;
    document.getElementById('goal-display').textContent = `Daily Goal: ${dailyGoal} steps`;
}

function checkGoal() {
    if (steps >= dailyGoal) {
        isGoalMet = true;
        alert('Congratulations! You’ve met your daily goal!');
    } else {
        alert(`Keep going! You need ${dailyGoal - steps} more steps to reach your goal.`);
    }
}

// Event Listeners for Buttons
document.getElementById('increment-steps-btn').addEventListener('click', incrementSteps);
document.getElementById('set-goal-btn').addEventListener('click', () => {
    const newGoal = parseInt(prompt('Enter your new daily step goal:'), 10);
    if (!isNaN(newGoal) && newGoal > 0) {
        setGoal(newGoal);
    } else {
        alert('Please enter a valid number!');
    }
});
document.getElementById('check-goal-btn').addEventListener('click', checkGoal);
document.getElementById('add-calories-btn').addEventListener('click', () => {
    const consumed = parseInt(prompt('Enter calories consumed:'), 10);
    const burned = parseInt(prompt('Enter calories burned:'), 10);
    if (!isNaN(consumed) && !isNaN(burned)) {
        trackCalories(consumed, burned);
    } else {
        alert('Please enter valid numbers for both fields!');
    }
});

