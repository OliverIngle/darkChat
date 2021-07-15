//grab elements from DOM
const messageContainer = document.getElementById('messageContainer');
const messageInput = document.getElementById('messageInput');
const submitButton = document.getElementById('submitButton');
const chatContainer = document.getElementById('chatContainer');7

//media query stuff
if (window.innerWidth < 600) {
    submitButton.innerHTML = '<img src="/svg/cloud-upload.svg"></img>';
}


//EVENT LISTNERS
//chat container
window.onload = () => {chatContainer.scrollTop = chatContainer.scrollHeight;}

//message sender
messageContainer.addEventListener('submit', (e) => {
    //prevent default
    e.preventDefault();

    //get input value
    let message = messageInput.value;

    //clear input feild
    messageInput.value = '';

    //convert input value to object
    const data = {
        sender: 'client',
        value: message
    }

    //post to server and get response
    if (message != '') {
        submitButton.style.backgroundColor = 'grey';
        fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res.response);
                setTimeout(_ => {
                    location.reload(true);
                }, 1000)
            });
    } 
});