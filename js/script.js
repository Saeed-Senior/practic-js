'use strict';

const burger = document.querySelector('.header__burger');
const menuBody = document.querySelector('.menu__body');


burger.addEventListener('click', function(e){
burger.classList.toggle('_active');
menuBody.classList.toggle('_active');
document.body.classList.toggle('_lock');
});

const mainForm = document.forms.main;
const input1 = mainForm.inp1;
const valueInput1 = input1.getAttribute('value');
const input2 = mainForm.inp2;
const valueInput2 = input2.getAttribute('value');
const btn = mainForm.btn;

input1.addEventListener('focus', function(e){
   if(input1.value === valueInput1){
input1.value = '';
input1.style.border = '2px solid transparent';
   }
});
input1.addEventListener('blur', function(e){
   if(!input1.value){
      input1.value = valueInput1;
   }
   });
input2.addEventListener('focus', function(e){
   if(input2.value === valueInput2){
      input2.value = '';
      input2.style.border = '2px solid transparent';
         }
});
input2.addEventListener('blur', function(e){
   if(!input2.value){
   input2.value = valueInput2;
   }
   });

   mainForm.addEventListener('submit', function(event){
      if (input1.value === valueInput1 || input1.value === ''){
         input1.style.border = '2px solid red';
         event.preventDefault();
      }
      if (input2.value === valueInput2 || input2.value === ''){
         input2.style.border = '2px solid red';
         event.preventDefault();
      }
   })

   const headerLink1 = document.querySelector('.header__link1');
   const headerLink2 = document.querySelector('.header__link2');
   const headerLink3 = document.querySelector('.header__link3');
   const headerLink4 = document.querySelector('.header__link4');


   
      function setScroll1(top){
         const mainSection = document.querySelector('.section-main');
         mainSection.scrollIntoView({
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth',
         })
         burger.classList.remove('_active');
         menuBody.classList.remove('_active');
         document.body.classList.remove('_lock');
      };
headerLink1.addEventListener('click', setScroll1);


function setScroll2(top){
   const mainSection = document.querySelector('.episodes');
   mainSection.scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth',
   })
   burger.classList.remove('_active');
   menuBody.classList.remove('_active');
   document.body.classList.remove('_lock');
};
headerLink2.addEventListener('click', setScroll2);

function setScroll3(top){
   const mainSection = document.querySelector('.about');
   mainSection.scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth',
   })
   burger.classList.remove('_active');
   menuBody.classList.remove('_active');
   document.body.classList.remove('_lock');
};
headerLink3.addEventListener('click', setScroll3);

function setScroll4(top){
   const mainSection = document.querySelector('.footer');
   mainSection.scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth',
   })
   burger.classList.remove('_active');
   menuBody.classList.remove('_active');
   document.body.classList.remove('_lock');
};
headerLink4.addEventListener('click', setScroll4);
