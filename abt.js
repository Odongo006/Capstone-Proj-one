/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const hamburgerbtn = document.querySelector('.hamburger');
const menuNav = document.querySelector('.mobileNavBar');
const closeBtn = document.querySelector('.closeIcon');

const lc1 = document.querySelector('.cl1');
const lc2 = document.querySelector('.cl2');
const lc3 = document.querySelector('.cl3');
const lc4 = document.querySelector('.cl4');
const lc5 = document.querySelector('.cl5');
const lc6 = document.querySelector('.cl6');

const openMenu = function MenuOpen() {
  menuNav.style.display = 'flex';
  hamburgerbtn.style.display = 'none';
};

hamburgerbtn.addEventListener('click', openMenu);

const closeMenu = function MenuClose() {
  menuNav.style.display = 'none';
  hamburgerbtn.style.display = 'block';
};

closeBtn.addEventListener('click', closeMenu);

const clsmenu = function menucls() {
  menuNav.style.display = 'none';
  hamburgerbtn.style.display = 'block';
};
lc1.addEventListener('click', clsmenu);

const clsmenu2 = function menucls2() {
  menuNav.style.display = 'none';
  hamburgerbtn.style.display = 'block';
};
lc3.addEventListener('click', clsmenu2);

const clsmenu3 = function menucls3() {
  menuNav.style.display = 'none';
  hamburgerbtn.style.display = 'block';
};
lc4.addEventListener('click', clsmenu3);

const clsmenu4 = function menucls4() {
  menuNav.style.display = 'none';
  hamburgerbtn.style.display = 'block';
};
lc5.addEventListener('click', clsmenu4);

const clsmenu5 = function menucls5() {
  menuNav.style.display = 'none';
  hamburgerbtn.style.display = 'block';
};
lc6.addEventListener('click', clsmenu5);