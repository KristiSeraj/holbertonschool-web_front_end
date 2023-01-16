function welcomeMessage(fullName) {
    function displayMessage() {
        alert(`Welcome ${fullName}`);
    }

    displayMessage();
}

let guillame = welcomeMessage("Guillame");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred");