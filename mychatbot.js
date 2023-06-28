(function(global) {
    function MyChatbot() {
        // Initialize your chatbot here
    }

    MyChatbot.prototype.query = function(question) {
        // Send the question to your API and return the response
        var API_URL = "https://frontend-production-eb9a.up.railway.app/api/v1/prediction/8ae09b59-b273-42e8-bc4d-1991d70fb60a";
        var payload = { "question": question };
        return fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        .then(response => response.json());
    };

    MyChatbot.prototype.display = function(output) {
        // Display the output in your chatbot
        // This will depend on how your chatbot is structured
    };

    // Expose your chatbot to the global scope
    global.MyChatbot = MyChatbot;
})(window);
