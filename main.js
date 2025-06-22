// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Grab the modal and message elements
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');

// Grab all heart icons
const hearts = document.querySelectorAll('.like-glyph');

// Loop through each heart and add click event listener
hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    // Simulate server call
    mimicServerCall()
      .then(() => {
        // On success: toggle heart appearance
        if (heart.innerText === EMPTY_HEART) {
          heart.innerText = FULL_HEART;
          heart.classList.add('activated-heart');
        } else {
          heart.innerText = EMPTY_HEART;
          heart.classList.remove('activated-heart');
        }
      })
      .catch((error) => {
        // On error: show modal with message
        modal.classList.remove('hidden');
        modalMessage.innerText = error;

        // Hide modal after 3 seconds
        setTimeout(() => {
          modal.classList.add('hidden');
        }, 3000);
      });
  });
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
