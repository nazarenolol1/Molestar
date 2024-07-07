document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('message');
    const userInput = document.getElementById('userInput');
    const changeMessageButton = document.getElementById('changeMessageButton');

    changeMessageButton.addEventListener('click', () => {
        const newMessage = userInput.value;
        if (newMessage.trim() !== "") {
            messageElement.textContent = newMessage;
        } else {
            alert("Por favor, escribe un mensaje.");
        }
    });
});
