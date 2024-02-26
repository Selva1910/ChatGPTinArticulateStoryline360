function SendMessage()
{
	



// Get variables from Articulate Storyline
var player = GetPlayer();
var message = player.GetVar("message");
var response = player.GetVar("response");
var chatHistory = player.GetVar("chatHistory");
var role = player.GetVar("role");
var apiKey = player.GetVar("apiKey");
apiKey = "Bearer "+apiKey;
var question = message;
message = "Act as a "+role+". Write answer in maximun 450 characters. My question is: "+message;

function sendMessage() {
    // Set up API request
    var xhr = new XMLHttpRequest();
    var url = 'https://api.openai.com/v1/chat/completions';
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', apiKey);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var apiResponse = JSON.parse(xhr.responseText);

                if (apiResponse.choices && apiResponse.choices[0] && apiResponse.choices[0].text) {
                    var generatedResponse = apiResponse.choices[0].text.trim();

                    // Update Articulate Storyline variables
                    player.SetVar("response", generatedResponse);
                    player.SetVar("chatHistory", chatHistory + "\nQuestion: " + question + "\nAnswer: " + generatedResponse+"\n");

                    // Clear the message variable
                    player.SetVar("message", "");
                } else {
                    console.error("Unexpected API response:", JSON.stringify(apiResponse));
                }
            } else {
                console.error("Error in API request:", xhr.status, xhr.statusText, xhr.responseText);
            }
        }
    };

    var data = JSON.stringify({
        "prompt": message,
        "max_tokens": 100,
        "n": 1,
        "stop": null,
        "temperature": 0.7,
        "model":"gpt-3.5-turbo"
    });

    xhr.send(data);
}

sendMessage();

	
}

function CopyResponse()
{
	
	var player = GetPlayer();
	var response = player.GetVar("response");
	navigator.clipboard.writeText(response)
	.then(function() {
    console.log('Text copied to clipboard');
	})
	.catch(function(error) {
    console.error('Failed to copy text: ', error);
	});

}

function ExportChat()
{
	
var title = "Chat History";
var editor = GetPlayer().GetVar("chatHistory");
var blob = new Blob([editor], { type: 'application/msword' });
var downloadLink = document.createElement("a");
downloadLink.download = "Chat History" + ".doc";
downloadLink.innerHTML = "Download File";
downloadLink.href = window.URL.createObjectURL(blob);
document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);	
}