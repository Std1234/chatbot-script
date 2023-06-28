(function() {
    var chatWidget = document.createElement('div');
    chatWidget.id = 'myChatbot';
    chatWidget.style.position = 'fixed';
    chatWidget.style.bottom = '0';
    chatWidget.style.right = '0';
    chatWidget.style.width = '300px';
    chatWidget.style.height = '400px';
    chatWidget.style.backgroundColor = '#fff';
    chatWidget.style.border = '1px solid #ccc';
    chatWidget.style.padding = '10px';
    chatWidget.style.overflow = 'auto';
    chatWidget.style.display = 'none';
    chatWidget.style.fontFamily = 'Arial, sans-serif';

    var chatTitle = document.createElement('h2');
    chatTitle.textContent = 'Chat with us';
    chatTitle.style.textAlign = 'center';
    chatWidget.appendChild(chatTitle);

    var chatMessages = document.createElement('div');
    chatMessages.style.height = '80%';
    chatMessages.style.overflowY = 'scroll';
    chatWidget.appendChild(chatMessages);

    var chatInput = document.createElement('input');
    chatInput.style.width = '100%';
    chatInput.style.height = '20%';
    chatInput.placeholder = 'Type your message here...';
    chatWidget.appendChild(chatInput);

    var chatButton = document.createElement('button');
    chatButton.innerHTML = 'Chat with us';
    chatButton.style.position = 'fixed';
    chatButton.style.bottom = '0';
    chatButton.style.right = '0';
    chatButton.style.backgroundColor = '#008CBA'; // Blue color
    chatButton.style.color = 'white';
    chatButton.style.border = 'none';
    chatButton.style.padding = '15px 32px';
    chatButton.style.textAlign = 'center';
    chatButton.style.textDecoration = 'none';
    chatButton.style.display = 'inline-block';
    chatButton.style.fontSize = '16px';
    chatButton.style.margin = '4px 2px';
    chatButton.style.cursor = 'pointer';
    chatButton.onclick = function() {
        if (chatWidget.style.display === 'none') {
            chatWidget.style.display = 'block';
        } else {
            chatWidget.style.display = 'none';
        }
    };

    document.body.appendChild(chatButton);
    document.body.appendChild(chatWidget);

    async function query(data) {
        const response = await fetch(
            "https://frontend-production-eb9a.up.railway.app/api/v1/prediction/8ae09b59-b273-42e8-bc4d-1991d70fb60a",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        );
        const result = await response.json();
        return result;
    }

    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            var message = e.target.value;
            e.target.value = '';
            var messageElement = document.createElement('p');
            messageElement.textContent = 'You: ' + message;
            chatMessages.appendChild(messageElement);
            query({"question": message}).then((response) => {
                var replyElement = document.createElement('p');
                replyElement.textContent = 'Bot: ' + response.answer;
                chatMessages.appendChild(replyElement);
            });
        }
    });
})();
