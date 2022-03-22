document.addEventListener('DOMContentLoaded', function (e) {

  var hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', function (e) {
    if (!document.body.classList.contains('mobile-menu-active')) {
      document.body.classList.add('mobile-menu-active');
    }
    else {
      document.body.classList.remove('mobile-menu-active');
    }
      
  });

  var boxes = document.querySelectorAll('.box');

    for (let index = 0; index < boxes.length; index++) {

      boxes[index].addEventListener('click', function (e) {
       
        if (!boxes[index].childNodes[3].classList.contains('faq-list-box-active')) {
          boxes[index].childNodes[3].classList.remove('faq-list-box');
          boxes[index].childNodes[3].classList.add('faq-list-box-active');
          boxes[index].childNodes[1].childNodes[3].src="img/faq-images/faq-icon/top.png";

        } else {
          
          boxes[index].childNodes[3].classList.add('faq-list-box');
          boxes[index].childNodes[3].classList.remove('faq-list-box-active');
          boxes[index].childNodes[1].childNodes[3].src="img/faq-images/faq-icon/faq-icon.png";

        }





      });
    }





  
});