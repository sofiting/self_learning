function handleClick() {
    alert('Button clicked');
}

function changeBg() {
    // Change the background color to a random color
    var randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
}

function getRandomColor() {
    // Generate a random hexadecimal color code
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

var clickme = document.querySelector("#click");
clickme.addEventListener('click', handleClick);

//mousevent
var change = document.querySelector("#bg");
change.addEventListener('click', changeBg);

// Creating a custom event
var customEvent = new CustomEvent('customEventName', {
    detail: {
        message: 'Custom event triggered!',
        additionalData: 'Any additional data you want to include'
    },
    bubbles: true, // Allow the event to bubble up through the DOM hierarchy
    cancelable: true // Allow the event to be canceled
});

// Dispatching the custom event on a target element
var targetElement = document.body; // Change this to the desired target element
targetElement.dispatchEvent(customEvent);

// Adding an event listener to handle the custom event
targetElement.addEventListener('customEventName', function (event) {
    console.log(event.detail.message);
    console.log(event.detail.additionalData);
});
