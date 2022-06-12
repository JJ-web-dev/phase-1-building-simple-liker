// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modalSelect = document.querySelector('#modal');
//test would not pass unless exposed outside of function hideError()
let model = modalSelect.classList.add('hidden')


document.addEventListener("DOMContentLoaded", () => {
  // hideError()
  likeEvent()

})

// function hideError() {
//     model
// }



function likeEvent() {
  const likeGroup = document.querySelectorAll('.like-glyph');
  // const makeHeartRed = document.querySelector('.activated-heart')

  likeGroup.forEach((element) => {
    element.addEventListener('click', (event) => {
      mimicServerCall()
        .then(() => {
          if (event.target.innerText === EMPTY_HEART){
            event.target.innerText = FULL_HEART;
            event.target.classList.add('activated-heart');
            } else {
              event.target.innerText = EMPTY_HEART;
              event.target.classList.remove('activated-heart')
          }
        })
        .catch(() => modalSelect.classList.remove('hidden'))
      setTimeout(() => {
        model
      }, 3000)
    })

  })
};





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}