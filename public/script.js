document.getElementById("yesBtn").addEventListener("click", function () {
    // Fill the screen with balloons
    fillScreenWithBalloons();

    // Show the Thank You Message after 3 seconds
    setTimeout(() => {
        showThankYouMessage();
    }, 3000);

    // Redirect to WhatsApp AFTER the popup is visible
    setTimeout(() => {
        const whatsappLink = "https://wa.me/6230271530?text=I%20forgive%20you!%20%F0%9F%98%8A%20";
        window.location.href = whatsappLink;
    }, 7000); // Increased delay to 7 seconds for better timing
});

/* Moving 'No' Button - Stays Inside the Container */
document.getElementById("noBtn").addEventListener("mouseover", function () {
    const container = document.querySelector(".container");
    const containerRect = container.getBoundingClientRect();
    const buttonRect = this.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width - 20;
    const maxY = containerRect.height - buttonRect.height - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    this.style.position = "absolute";
    this.style.left = `${randomX}px`;
    this.style.top = `${randomY}px`;
});

/* Function to Fill the Screen with Balloons */
function fillScreenWithBalloons() {
    const balloonContainer = document.createElement("div");
    balloonContainer.classList.add("balloon-container");
    document.body.appendChild(balloonContainer);

    for (let i = 0; i < 50; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.bottom = "-50px";
        balloon.style.backgroundColor = getRandomColor();
        balloonContainer.appendChild(balloon);

        // Animate each balloon separately
        setTimeout(() => {
            balloon.style.transform = `translateY(-110vh)`;
            balloon.style.opacity = "0";
        }, Math.random() * 4000);

        // Remove balloon after animation
        setTimeout(() => {
            balloon.remove();
        }, 5000);
    }
}

/* Function to Show Thank You Popup */
function showThankYouMessage() {
    let popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = "<h2>Thanks for forgiving me! ❤️ You're the best! 😊</h2>";
    document.body.appendChild(popup);

    // Keep visible for 4 seconds, then fade out
    setTimeout(() => {
        popup.style.opacity = "1"; // Ensure it is fully visible
    }, 500);

    setTimeout(() => {
        popup.style.opacity = "0"; // Fade out after 4 seconds
    }, 4000);

    // Remove popup after fade-out
    setTimeout(() => {
        popup.remove();
    }, 5000);
}

/* Random Colors for Balloons */
function getRandomColor() {
    const colors = ["#FF4081", "#FFD700", "#FFA07A", "#FF6347", "#6A5ACD", "#32CD32", "#FF4500", "#9400D3"];
    return colors[Math.floor(Math.random() * colors.length)];
}
