// Shared JavaScript across all pages
document.addEventListener('DOMContentLoaded', function () {
    // Initialize any shared functionality
});

// Utility function to check answers with root matching
function checkAnswer(userInput, correctAnswer) {
    if (!userInput || !correctAnswer) return false;

    // Normalize both strings: lowercase, trim, remove extra spaces
    const normalizedUser = userInput.toLowerCase().trim().replace(/\s+/g, ' ');
    const normalizedCorrect = correctAnswer.toLowerCase().trim().replace(/\s+/g, ' ');

    // Check if user input contains the root of the correct answer
    return normalizedCorrect.includes(normalizedUser) || normalizedUser.includes(normalizedCorrect);
}

// User profile management
class UserProfile {
    constructor() {
        this.profile = JSON.parse(localStorage.getItem('literatureQuizProfile')) || null;
    }

    saveProfile(email, firstName, lastName, highScore) {
        this.profile = {
            email,
            firstName,
            lastName,
            highScore: highScore || 0
        };
        localStorage.setItem('literatureQuizProfile', JSON.stringify(this.profile));
    }

    getHighScore() {
        return this.profile ? this.profile.highScore : 0;
    }

    updateHighScore(newScore) {
        if (this.profile && newScore > this.profile.highScore) {
            this.profile.highScore = newScore;
            localStorage.setItem('literatureQuizProfile', JSON.stringify(this.profile));
        }
    }
}

// Initialize user profile
const userProfile = new UserProfile();// JavaScript source code
