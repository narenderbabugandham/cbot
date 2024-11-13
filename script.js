// Select elements
const messagesContainer = document.querySelector('.chatbot-messages');
const inputField = document.querySelector('.chatbot-input');
const sendButton = document.querySelector('.chatbot-send-button');

// Function to add a message to the chat window
function addMessage(content, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender); // 'user' or 'bot'
    messageDiv.textContent = content;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to latest message
}

// Function to handle sending of user messages
function handleSendMessage() {
    const userInput = inputField.value.trim();
    if (userInput !== '') {
        // Display user's message
        addMessage(userInput, 'user');
        inputField.value = ''; // Clear the input field

        // Simulate bot response
        setTimeout(() => {
            generateBotResponse(userInput);
        }, 500); // Delay for a more natural response time
    }
}

// Function to generate a bot response
function generateBotResponse(userMessage) {
    let botMessage = 'I’m here to help you!';

    // Example of simple bot responses based on keywords
    if (userMessage.toLowerCase().includes('hello')) {
        botMessage = 'Hello! How can I assist you today?';
    } else if (userMessage.toLowerCase().includes('help')) {
        botMessage = 'Sure, I’d be happy to help! Please tell me more.';
    } else if (userMessage.toLowerCase().includes('account')) {
        botMessage = 'It seems like you need assistance with your account. Could you provide more details?';
    } else {botMessage = 'I am still being trained, will be able to answer you in a few days!'}


    // Display bot's message
    addMessage(botMessage, 'bot');
}

// Event listener for "Send" button
sendButton.addEventListener('click', handleSendMessage);

// Event listener for "Enter" key to send message
inputField.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        handleSendMessage();
    }
});
