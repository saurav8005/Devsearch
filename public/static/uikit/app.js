





// let alertWrapper = document.querySelector('.alert')
// let alertClose = document.querySelector('.alert__close')
  
//   if (alertWrapper) {
//     console.log("button got click")
//     alertClose.addEventListener('click', () =>
//       alertWrapper.style.display = 'none'
//     )
//   }

function showPopup() {
    document.getElementById('popup').style.display = 'block'; 
  }
  window.onload = showPopup;
  $('.alert__close').click(function() {
     
    
    $('#popup').hide();
  });