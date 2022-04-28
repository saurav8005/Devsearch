





// let alertWrapper = document.getElementsByClassName('.alert')
// let alertClose = document.getElementsByClassName('.alert__close')
  
//   if (alertWrapper) {
//     console.log("button got click")
//     alertClose.addEventListener('click', () =>
//       alertWrapper.style.display = 'none'
//     )
//   }

// function showPopup() {
//     document.getElementById('popup').style.display = 'none'; 
//   }
//   window.onload = showPopup;
  $('.alert__close').click(function() {
    console.log('button got')
     
    
    $('.alert__message').hide();
    $('.alert__close').hide();
  });