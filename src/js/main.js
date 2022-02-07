const workImgArr = [
  "https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

  "https://images.unsplash.com/photo-1507497806295-753c4108560c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",

  "https://images.unsplash.com/photo-1609348632802-b952f368fc3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",

  "https://images.unsplash.com/photo-1558611997-dd5b20e08c71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",

  "https://images.unsplash.com/photo-1608126841512-ed53266c1d62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",

  "https://images.unsplash.com/photo-1584033576580-8ccc78cfaf3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

  "https://images.unsplash.com/photo-1631622483070-8ea904171f11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",

  "https://images.unsplash.com/photo-1612473741370-55a9374e4944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",

  "https://images.unsplash.com/photo-1464963160608-a6834f70b421?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",

  "https://images.unsplash.com/photo-1510900767338-8bf61abf2562?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1077&q=80",

  "https://images.unsplash.com/photo-1499815022134-5a333f5a299c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
];

const projectsArr = [
  {
    idx: 1,
    name: "УД 654",
    img: "src/img/654/654.jpg",
    info: "Аппарат УД654 предназначен для восстановления наплавки изношенных боковых поверхностей жолобчатых рельсов на криволинейных и прямых участках трамвайных путей без демонтажа рельсов.",
    images: {
      img_0: "src/img/682/682.jpg",
      img_1: "src/img/682/682_1.jpg",
      img_2: "src/img/682/682_2.jpg",
      img_3: "src/img/682/682_3.jpg",
      img_4: "src/img/682/682_3.jpg",
      img_5: "src/img/682/682_3.jpg",
      img_6: "src/img/682/682_3.jpg",
      img_7: "src/img/682/682_3.jpg",
      img_8: "src/img/682/682_3.jpg",
    },
  },
  {
    idx: 2,
    name: "УД 681",
    img: "src/img/681/681.jpg",
    info: "Автоматическая наплавка сплошной или специальной проволокой кольцевых уплотнительных поверхностей внутри корпусов вентилей, клапанов и других узлов энергетической арматуры высоких параметров.",
  },
  {
    idx: 3,
    name: "УД 682",
    img: "src/img/682/682.jpg",
    info: "Установка предназначена для сварки листовых тел методом TIG в узкий зазор с магнитным управлением дугой. Сварка выполняется аргонодуговым способом с присадочной проволокой, в несколько проходов. Количество проходов зависит от толщины свариваемого изделия. Изделие поступает на сварку собранное на остающейся подкладке.",
    images: {
      img_1: "src/img/682/682_1.jpg",
      img_2: "src/img/682/682_2.jpg",
      img_3: "src/img/682/682_3.jpg",
    },
    text: {
      1: "Толщина свариваемых изделий, мм, в пределах - 20 – 110",
      2: "Длина свариваемых изделий, мм, не более – 4000",
      3: "Способ сварки - Вольфрамовым электродом с присадочной проволокой в среде инертных газов",
      4: "Диаметр присадочной проволоки, мм, в пределах - 2.0; 2.5; 3.0",
      5: "Диаметр вольфрамового электрода, мм - 4.0; 5.0; 6.0",
      6: "Диапазон регулирования амплитуды магнитной индукции, мТл, в пределах - 0 – 8",
      7: "Диапазон регулирования частоты магнитного поля, Hz, в пределах - 5-80",
      8: "Максимальный сварочный ток, А  ,при ПВ 100 % - 500",
      9: "Скорость подачи присадочной проволоки, м/час, в пределах - 5-170",
      10: "Перемещение сварочной головки, мм",
      11: "- вдоль шва - 4300",
      12: "- по вертикали - 250",
      13: "- поперек шва -55",
      14: "Скорость перемещения сварочной головки, м/ч, в пределах",
      15: "- вдоль шва (маршевая) - 82",
      16: "- вдоль шва (рабочая) - 2.5-10",
      17: "мм/с, в пределах",
      18: "- по вертикали - 0.1 - 5",
      19: "- поперек шва - 0.1 - 2.5",
      20: "Перемещение защитного колпака, мм – 115",
      21: "Перемещение ручного двух координатного корректора, мм",
      22: "- по вертикали - 130",
      23: "- по горизонтали – 60",
      24: "Перемещение ручного корректора цанги, мм",
      25: "- по вертикали – 120",
      26: "Расход аргона, л/мин, не более – 80",
      27: "Давление аргона на входе в систему, атм, в пределах - 6…10",
      28: "Напряжение питания, В - 3х380, 50 Гц",
      29: "Потребляемая мощность КВА, не более",
      30: "- Шкаф управления - 5",
      31: "- Выпрямитель для дуговой сварки – 2",
      32: "Габаритные размеры, мм, не более (Д х Ш х В)",
      33: "- Портал - 6080х1610х1720",
      34: "- Стол для сварки образцов - 1500х1000х1000",
      35: "- Шкаф управления - 500х600х1800",
      36: "- Выпрямитель для дуговой сварки - 850х520х800",
      37: "Масса, кг, не более:",
      38: "- Портал - 1100",
      39: "- Головка сварочная - 280",
      40: "- Стол для сварки образцов - 330",
      41: "- Шкаф управления - 160",
      42: "- Выпрямитель для дуговой сварки - 32",
    },
  },
  {
    idx: 4,
    name: "ТС-81",
    img: "src/img/81/img_81_1.jpg",
    info: "Трактор сварочный ТС-81 предназначен для автоматической сварки стыковых соединений прямолинейных и кольцевых с разделкой или без разделки кромок, а также угловых, нахлесточных и тавровых соединений, применяя дополнительно заказные сменные устройства",
  },
];
/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== cooperations SWIPER  ====================*/
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/* WORKS Gallary*/
for (el of workImgArr) {
  let worksImg = `
    <a class="gallery-item" data-lightbox='img' href="${el}" rel='gallery'>
    <img alt="img" class="gallery-item-img" src="${el}" />
  </a>
  `;
  document.getElementById("mygallery").innerHTML += worksImg;
}
$("#mygallery").justifiedGallery({
  lastRow: "nojustify",
  rowHeight: 100,
  rel: "gallery",
  margins: 5,
});

/* WORKS Gallary===========================WORKS Gallary===========================WORKS Gallary===========================*/

/* PUSH HTML BLOCK===========================PUSH HTML BLOCK===========================PUSH HTML BLOCK=========================== */
(function showProducts() {
  for (let i = 0; i < projectsArr.length; i++) {
    let element = `<div class="card text-center">
    <div class="card-header">
    ${
      projectsArr[i].name
        ? `
        <h2 class="project__title card-text">${projectsArr[i].name}</h2>`
        : `<div class="message">
        <h4 class="empty__info card-text">Нет информации</h4>
      </div>`
    }
    </div>
    <div class="card-body">
    <div class='card-info>
    <div class='project__info--img'>
    ${
      projectsArr[i].img
        ? `  <a href="${projectsArr[i].img}" data-lightbox="${projectsArr[i].idx}">
          <img
            src="${projectsArr[i].img}"
            class="project__img"
            alt="project__img"
          />
        </a>`
        : `<div class="message">
        <h4 class="empty__info text-center">Нет изображения</h4>
      </div>`
    }
    
    </div>
      <p class="card-text">  ${
        projectsArr[i].info
          ? `<p class="project__subtitle card-text">${projectsArr[i].info}</p>`
          : `<div class="message">
          <h4 class="empty__info text-center fullwidth">Нет информации</h4>
        </div>`
      }</p>
      </div>
      <button class="accordion btn btn-warning fullwidth text-center">Подробнее</button>
      <div class="panel">
      <ul class="project__desc--list text-center fullwidth">
      ${
        projectsArr[i].text
          ? Object.values(projectsArr[i].text)
              .map((txt) => `<li class="project__desc--text">${txt}</li>`)
              .join("")
          : `<div class="message ">
            <h4 class="empty__info text-center fullwidth">Нет информации</h4>
          </div>`
      }
          </ul>
      <div class="project__gallery--list text-center" id='project-gallery'>
      ${
        projectsArr[i].images
          ? Object.values(projectsArr[i].images)
              .map(
                (
                  src
                ) => `<a href="${src}" class="gallery-item" data-lightbox='${projectsArr[i].idx}'><img
                      src="${src}"
                      class="gallery-item-img smallimg mr-0-5 mb-0-5"
                      alt="project__img"
                    /></a>`
              )
              .join("")
          : `<div class="message fullwidth">
              <h4 class="empty__img">Нет изображений</h4>
            </div>`
      }
      </ul>
      </div>
    </div>
  </div>
  `;
    document.getElementById("projects").innerHTML += element;
  }
})();

/* ACCORDION PROJECTS */
const acc = document.getElementsByClassName("accordion");
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
