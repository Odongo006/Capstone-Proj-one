/* eslint-disable linebreak-style */
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
const home = document.getElementById('home');
const Program = document.getElementById('program');
const Sponsors = document.getElementById('sponsor');
const Campaign = document.getElementById('campaign');

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

// featured speakers synamic rendering
const ListObj = [{
  mainTitle: 'Featured Speakers',
  name: 'Kelly Householder',
  role: 'Chief Executive Officer for solutions and technology',
  desc: 'Kelly empowers hundreds of thousands of ClickBank partners worldwide with the tools, and platform they crave to achieve their entrepreneurial goals.',
  img: 'imgs/Kelly-clickbank.jpeg',
},
{
  name: 'Chad Blodgett',
  role: 'Chief Revenue Officer of revenue driving teams',
  desc: 'Chad brings 18 years of experience building high performing, revenue driving teams within startups as well as inside large publicly traded enterprises.',
  img: 'imgs/Chad-Blodgett-clickbank.jpeg',
},
{
  name: 'Jason Scherer',
  role: 'Chief Technical Officer focused on enterprise organizations.',
  desc: 'Scherer believes in the importance of teamwork as much as technology, and is passionate about building a high-performing organizations to drive innovation.',
  img: 'imgs/Jason-clickbank.jpeg',
},
{
  name: 'Ryan Vestal',
  role: 'Chief Financial Officer and leader in the Boise tech community.',
  desc: 'Ryan began his career with KPMG, ascending into roles with leading Boise-based companies including KTVB News Group.',
  img: 'imgs/Jason-clickbank.jpeg',
},
{
  name: 'Jennifer Beevers',
  role: 'Vice President of Customer Advocacy and Compliance',
  desc: 'Jen oversees the Business Product Approval Team, the Physical Product Compliance Team, and the Risk Team which manages fraud control.',
  img: 'imgs/Ryan-clickbank.jpeg',
},
{
  name: 'Jenny Shelton',
  role: 'Vice President of Talent.',
  desc: 'Jenny focuses on creating innovative ways to attract and retain top talent, and empower all ClickBank team members to be the best version of themselves.',
  img: 'imgs/Jen-clickbank.jpeg',
},
];

const speakersEl = document.querySelector('.speakers');
ListObj.forEach((obj) => {
  speakersEl.innerHTML += `
      <ul class="speaker-team">
          <li class="team">
           <img src="${obj.img}" alt="">
            <div class="team-content">
              <h3>${obj.name}</h3>
              <h6 href="#">${obj.role}</h6>
              <p>${obj.desc}</p>
            </div>
          </li>
       </ul>
      `;
});