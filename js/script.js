// nav

const gnavBtn = document.getElementById('gnav_btn');
const toggle = document.getElementById('toggle');
const gnav = document.getElementById('gnav');

let navToggle = false;

gnavBtn.addEventListener('click', () => {
  navToggle = !navToggle;
  document.body.classList.toggle('gnav_show');
  console.log(navToggle);
  if (navToggle === true) {
    toggle.classList.add('close');
  } else {
    toggle.classList.remove('close');
  }
});

gnav.addEventListener('click', () => {
  document.body.classList.remove('gnav_show');
});

// works

const worksEl = document.getElementById('works_map');

const works = [
  {
    id: 1,
    mac: '../img/lens.png',
    image: '../img/clothing.png',
    h3: 'ECサイト',
    p: 'フレームワーク / React',
  },
  {
    id: 2,
    mac: '../img/lens.png',
    image: '../img/portfolio.png',
    h3: 'デザインデータを元にコーディング',
    p: 'デザイン / XD',
  },
  {
    id: 3,
    mac: '../img/lens.png',
    image: '../img/screen.png',
    h3: 'デザインデータを元にコーディング',
    p: 'デザイン / Photoshop',
  },
  {
    id: 4,
    mac: '../img/lens.png',
    image: '../img/blog.png',
    h3: 'My blog',
    p: 'js / Gatsby',
  },
  {
    id: 5,
    mac: '../img/lens.png',
    image: '../img/chat.png',
    h3: 'チャットアプリ',
    p: 'フレームワーク / React',
  },
];

function init() {
  worksEl.innerHTML = works
    .map(
      (work) =>
        `
          <div class="works_list">
            <div class="works_image">
              <img src=${work.mac} alt="mac" class="works_image-mac" />
              <img
                src=${work.image}
                alt="display"
                class="works_image-display"
              />
            </div>
            <div class="works_list-name">
              <h3>${work.h3}</h3>
              <p>${work.p}</p>
            </div>
          </div>
    `
    )
    .join('');
}

init();

// nice scroll
$(function () {
  $('body').niceScroll({
    cursorcolor: '#222',
    cursoropacitymin: 1,
    cursoropacitymax: 1,
    cursorwidth: '10px',
    cursorborder: 'none',
    mousescrollstep: 20,
    background: '#a0a0a0',
    smoothscroll: true,
    sensitiverail: true,
  });
});

// スムーズスクロール
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
});



// swiper
const swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
});



// swipe trigger
const trigger = new ScrollTrigger.default();
trigger.add('[data-trigger]', {
  once: true,
  offset: {
    viewport: {
      y: (trigger, frame, direction) => {
        return trigger.visible ? 0 : 0.3;
      },
    },
  },
});
