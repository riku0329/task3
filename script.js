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
  document.body.classList.remove('gnav_show')
})




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



// scroll

const scrollTop = document.getElementById('scroll_top');

scrollTop.addEventListener('click', () => {
  scrollTo(0, 0)
})
