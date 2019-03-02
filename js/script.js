window.onload = function(){
  let numberMenu = 9; //Количество li головного меню
  let numberCategories = 4; //Количевство li в категории под именем Categories

  //Функция создания элементов на странице и присвоения им различных атрибутов
  function createElem(name, className=null, attributeName=null, attributeValue=null, text=null, event=null, func=null){
    let elem = document.createElement(name);
    if(className!=null){
      elem.classList.add(className);
    };
    if(attributeName!=null && attributeValue!=null){
      elem.setAttribute(attributeName, attributeValue);
    };
    if(text!=null){
      elem.innerHTML=text;
    };
    if(event!=null && func!=null){
      elem.addEventListener(event, func)
    };
    return elem
  };

        //HEADER
document.body.appendChild(createElem('div', 'container'));  //создание основного контейнера контейнра
document.body.getElementsByClassName('container')[0].appendChild(createElem('div', 'containerHead')); //container головы сайта
let contHead = document.body.getElementsByClassName('containerHead')[0];
contHead.appendChild(createElem('img', 'logotipHead', 'src', 'images/banner/logotip.png'));           //Logotip сайта


        //функция создания меню головы сайта
(function menuHead(){
  contHead.appendChild(createElem('ul', 'menuHead'));
  for(var i = 0; i<numberMenu; i++){
    contHead.children[1].appendChild(createElem('li'));
  };
  let menuHead = document.getElementsByClassName('menuHead')[0].children;
  menuHead[0].innerHTML='Categories';
  menuHead[2].innerHTML='Forums';
  menuHead[4].innerHTML='Shop';
  menuHead[6].innerHTML='Shortcodes';
  menuHead[8].innerHTML='Contact';
  for(var j=0; j<numberMenu; j++){
    if(j%2!=0){
      menuHead[j].appendChild(createElem('img', null, 'src', 'images/banner/verticalMenu.jpg'));
    };
  };

  menuHead[0].appendChild(createElem('ul', 'categoriesElem'));          // Создаем подраздел категории Categories
  let catElem = menuHead[0].getElementsByClassName('categoriesElem')[0];
  for(var k=0; k<numberCategories; k++){
    catElem.appendChild(createElem('li'));
  };
  catElem.children[0].innerHTML='CATEGORIES1';
  catElem.children[1].innerHTML='CATEGORIES2';
  catElem.children[2].innerHTML='CATEGORIES3';
  catElem.children[3].innerHTML='CATEGORIES4';

  contHead.appendChild(createElem('div', 'contBanHead'));         //создаем контейнер баннера
  let contBanner = document.getElementsByClassName('contBanHead')[0];
  contBanner.appendChild(createElem('img', null, 'src', 'images/bannerHead.gif'))     //создание картинки для баннера головы
})();

        //создание раздела breakingNews
(function news(){
document.body.getElementsByClassName('container')[0].appendChild(createElem('div', 'breakingNews'));
let breakingNews = document.getElementsByClassName('breakingNews')[0]
for(var i=0; i<3; i++){
  breakingNews.appendChild(createElem('div'));
};
let ban = breakingNews.children;
ban[0].classList.add('brNews');
ban[0].appendChild(createElem('span')).innerHTML='Breaking News';
ban[0].appendChild(createElem('img', null, 'src', 'images/banner/breackingNews.png'));

      //бегущая строка
ban[1].classList.add('ticker');
ban[1].appendChild(createElem('span')).innerHTML='✦ &emsp; Breaking News hello world Breaking &emsp; ✦ &emsp; Breaking News hello world Breaking Breaking News hello world Breaking ';

      //ссылки соц сетей
ban[2].classList.add('socSeti');
for(var j=0; j<4; j++){
  ban[2].appendChild(createElem('img'));
};
let banSet = ban[2].children;
banSet[0].setAttribute('src', 'images/banner/cs1.jpg');
banSet[1].setAttribute('src', 'images/banner/cs2.jpg');
banSet[2].setAttribute('src', 'images/banner/cs3.jpg');
banSet[3].setAttribute('src', 'images/banner/cs4.jpg');
})();


        // функция создания блоков новостей
function blockEl(quontity, blockElem, id) {
  let mas = [].concat(master);
  for (var j = 0; j < mas.length; j++) {
    if (mas[j].id !== id) {
      mas.splice(j, 1);
      j--;
    };
  };
  for (var i = 0; i < quontity; i++) {
    if(i==mas.length) break;
    blockElem[i].appendChild(createElem('img', 'newsBanBigImage', 'src', mas[i].photo)); //фото каталога
    blockElem[i].appendChild(createElem('div', 'blockFolder'));
    blockElem[i].children[1].appendChild(createElem('span', 'infoSpan')).innerHTML = mas[i].content; //инфо о каталоге
    blockElem[i].children[1].appendChild(createElem('div', 'blockFold')); //блок с папками
    var blockFolder = blockElem[i].getElementsByClassName('blockFolder')[0];
    blockFolder.children[1].appendChild(createElem('img', 'imageFolder', 'src', 'images/banner/folder.png'));
    blockFolder.children[1].appendChild(createElem('span', 'titleFolder'));
    for (var j = 0; j < 4; j++) {
      blockFolder.children[1].appendChild(createElem('img', 'icons'));
    };
    blockElem[i].getElementsByClassName('icons')[0].style.marginRight = '27px';
    var icons = blockElem[i].getElementsByClassName('icons');
    icons[0].setAttribute('src', 'images/banner/icon3.png');
    icons[1].setAttribute('src', 'images/banner/icon2.png');
    icons[2].setAttribute('src', 'images/banner/icon1.png');
    blockElem[i].getElementsByClassName('titleFolder')[0].innerHTML = mas[i].nameFolder;
  };
};

        //Функция подсчета и выставления оценки блока
function rate(post, valNum, nameScore, id){
  post.appendChild(createElem('div', 'value', null, null, null, 'click', valArifmetic1));
  let value = document.getElementsByClassName('value')[`${valNum}`];
  value.id = id;
  value.appendChild(createElem('span'));
  value.appendChild(createElem('span'));
  value.setAttribute('title', 'Оценить');
  value.children[1].innerHTML=nameScore;
  post.appendChild(createElem('div', 'valNone', null, null, null, 'click', valArifmetic2));
  let valNone = document.getElementsByClassName('valNone')[`${valNum}`];
    //блок который появляется при клике на оценку
  for(var l = 0; l<10; l++){
    valNone.appendChild(createElem('span'));
    valNone.children[l].innerHTML=l+1;
  };

  //функции подсчета и эффектов для оценки конт

  let val=0, valu=0;
  let delitel=0, delitel1=0;

  function valArifmetic1(event){
    valNone.style.opacity='1';
    valNone.style.marginLeft='0px';
  };
  value.children[0].innerHTML=0;
  function valArifmetic2(event){
    if(event.target.tagName=='SPAN'){
    delitel++;
    val+=parseInt(event.target.innerHTML);
    valNone.style.opacity='0';
    valNone.style.marginLeft='-650px';
    value.children[0].innerHTML=(val/delitel).toFixed(1);
  };
  };
};

        //получаем данные json
var master = [];
var xhr = new XMLHttpRequest();
xhr.open('GET', 'js/js.json');
xhr.send();
xhr.onload = function(){
  var mas = JSON.parse(xhr.responseText);
  master = [].concat(mas)
};

        //Главная карусель
(function newsBan(){
  document.body.getElementsByClassName('container')[0].appendChild(createElem('div', 'newsBan'));
  let newsBanCont = document.body.getElementsByClassName('newsBan')[0];
  let newsCont = newsBanCont.children;
  let quontBlocks = 12;                                                                // количество главных блоков
  for(var j=0; j<quontBlocks; j++){
    newsBanCont.appendChild(createElem('div', 'newsBanChild'));
  };
  //гавный блок с прокруткой
  setTimeout(function(){
    blockEl(quontBlocks, newsCont, 'mainAccord');
    increaseFoto(newsCont.length, newsCont, true);
  },700);
})();

        //Увеличение картинки при наведении в блоках
  function increaseFoto(length, who, scale) {
    for (var i = 0; i < length; i++) {
      who[i].addEventListener('mouseover', newsBanContent)
    };
    let block = document.getElementsByClassName('blockFolder');
    function newsBanContent(event) {
      if (scale == true) {
        this.children[0].style.transform = 'scale(1.2,1.2)';
        this.children[0].style.transitionDuration = '1s';
      } else if (scale == false) {
        this.children[1].children[0].style.transform = 'translate(5px, -5px)';
      };
      this.children[1].children[0].style.textShadow = "0 0 6px rgba(202,228,225,0.92), 0 0 30px rgba(202,228,225,0.34), 0 0 12px rgba(30,132,242,0.52), 0 0 21px rgba(30,132,242,0.92), 0 0 34px rgba(30,132,242,0.78), 0 0 54px rgba(30,132,242,0.92)"
      this.children[1].children[0].style.transitionDuration = '1s';
      this.style.cursor = 'pointer';
      if (this.onmouseout = function() {
          if (scale == true) {
            this.children[0].style.transform = 'scale(1,1)';
            this.children[0].style.transitionDuration = '1s';
          } else if (scale == false) {
            this.children[1].children[0].style.transform = 'translate(0px, 0px)'
          };
          this.children[1].children[0].style.textShadow = "";
          this.children[1].children[0].style.transitionDuration = '1s';
        });
    };
  };

        //Функция прокрутки новостей
function corusel(slider, quontStrip, wayOne, wayTwo, newsBan, quontPixel){
  for(var i=0; i<quontStrip; i++){
    slider.appendChild(createElem('img', null, 'src', `images/banner/${wayOne}`, null, 'click', swich));
  };
  slider.children[0].setAttribute('src', `images/banner/${wayTwo}`);
  function swich(event){
    if(event.target.tagName=='IMG'){
      for(var j=0; j<slider.children.length; j++){
        if(slider.children[j].getAttribute('src')==`images/banner/${wayTwo}`){      //добавить
          slider.children[j].setAttribute('src', `images/banner/${wayOne}`);
        };
      };
      event.target.setAttribute('src', `images/banner/${wayTwo}`);
      let x = 0;
      for(var k=0; k<slider.children.length; k++){
        if(slider.children[k].getAttribute('src')==`images/banner/${wayTwo}`){
          newsBan.style.transitionDuration='1s';
          newsBan.style.transitionProperty='margin-left';
          newsBan.style.marginLeft=-k*quontPixel + 'px';
        };
      };
    };
  };
};

        //функция создания главной карусели
(function mainCorusel(){
  document.body.getElementsByClassName('container')[0].appendChild(createElem('div', 'corusel'));
  let coruselImages = document.getElementsByClassName('corusel')[0];
  let newsB = document.body.getElementsByClassName('newsBan')[0];
  corusel(coruselImages, 6, 'corusel1.png', 'corusel2.png', newsB, 1260);
})();

//Функция создания Entertainment small block
    function addSmallBlock(where, handler, id) {
    let mas = [].concat(master);
    for (var j = 0; j < mas.length; j++) {
      if (mas[j].id !== id) {
        mas.splice(j, 1);
        j--;
      };
    };
    for (var i = 0; i < mas.length; i++) {
      where.appendChild(createElem('div', 'newsEnt', null, null, null, 'click', handler));
      where.children[i].appendChild(createElem('img', 'newsImage', 'src', mas[i]['photo']));
      where.children[i].appendChild(createElem('span', 'infoSpanBlock'));
      let span = document.getElementsByClassName('infoSpanBlock')[i];
      span.innerHTML = mas[i]['content'];
      for (var j = 0; j < 4; j++) {
        where.children[i].appendChild(createElem('img', 'icon'));
      };
      where.children[i].children[2].setAttribute('src', 'images/banner/icon3.png');
      where.children[i].children[3].setAttribute('src', 'images/banner/icon2.png');
      where.children[i].children[4].setAttribute('src', 'images/banner/icon1.png');
      if (i == mas.length - 1) {
        where.children[i].style.borderBottom = '0px';
      }
    }
  }

		//создаем контейнер для основного контента
(function cont(){
document.body.getElementsByClassName('container')[0].appendChild(createElem('div', 'content'));
let content = document.getElementsByClassName('content')[0];
for(var i=0; i<3; i++){
  content.appendChild(createElem('div'));
};

		//работа с 1/3 частью
(function firstCont(){
  let divFirst = content.children[0];
  divFirst.classList.add('divFirst'); //основной блок
  let divF = divFirst.children;
  for(var i=0; i<4; i++){
    divFirst.appendChild(createElem('div'));
    divFirst.appendChild(createElem('div'));
  };
  for(var j=0; j<divF.length; j++){
    if(j%2==0){
      divF[j].appendChild(createElem('div', 'spFirst'));
      divF[j].children[0].appendChild(createElem('span', 'imageStr'));
    }
  }
		//контент первой колонки
  divF[0].children[0].children[0].innerHTML = 'Latest Posts';
  divF[2].children[0].children[0].innerHTML = 'News is Picture';
  divF[4].children[0].children[0].innerHTML = 'Carousel Posts';
  divF[6].children[0].children[0].innerHTML = 'Entertainment';

		//Редактирование блока с названием Latest Posts
(function latPost(){
  divF[1].classList.add('latPosts')
  for(var i=0; i<4; i++){
    divF[1].appendChild(createElem('div', 'postsFour'));
  };
  let post = divF[1].children;
  increaseFoto(4, post, false);
  setTimeout(function(){
  blockEl(post.length, post, 'blockAvesome');
  rate(post[0], 0, 'Avesome', 'val1');
  rate(post[3], 1, 'Amazing', 'val2');
},700);


		//Редактирование блока под названием NEWS IS Picture
(function newsPic(){
divF[3].classList.add('newsPicture')
divF[2].style.marginTop='41px'
divF[3].appendChild(createElem('div', 'newsDiv'));
divF[3].appendChild(createElem('div', 'newsDiv'));
for(var i=0; i<9; i++){
  divF[3].children[1].appendChild(createElem('div', 'miniDiv', null, null, null, 'click', imgWork));
  divF[3].children[1].children[i].appendChild(createElem('img', 'img'));
};
let img = divF[3].children[1].children;

img[0].children[0].setAttribute('src', 'images/content/1.jpg');
img[1].children[0].setAttribute('src', 'images/content/2.jpg');
img[2].children[0].setAttribute('src', 'images/content/3.jpg');
img[3].children[0].setAttribute('src', 'images/content/4.jpg');
img[4].children[0].setAttribute('src', 'images/content/5.jpg');
img[5].children[0].setAttribute('src', 'images/content/6.jpg');
img[6].children[0].setAttribute('src', 'images/content/7.jpg');
img[7].children[0].setAttribute('src', 'images/content/8.jpg');
img[8].children[0].setAttribute('src', 'images/content/9.jpg');

divF[3].children[0].appendChild(createElem('img', 'imgBig', 'src', 'images/content/1.jpg'));
function imgWork(event) {
  divF[3].children[0].children[0].style.opacity = '0';
  setTimeout(function() {
    divF[3].children[0].children[0].setAttribute('src', event.target.getAttribute('src'));
    divF[3].children[0].children[0].style.opacity = '1';
  }, 800)
}
})();

		//Редактирование блока под названием Carousel posts
(function corPosts(){
  divF[5].classList.add('carouselPost');
  divF[4].style.marginTop='38px';
  divF[4].style.position='relative';
  divF[4].children[0].appendChild(createElem('div', 'slid'));
  var slide = document.getElementsByClassName('slid')[0];
  divF[5].appendChild(createElem('div', 'overFlow'));
  corusel(slide, 3, 'corusel3.png', 'corusel4.png', divF[5].children[0], 587);

  // заполнение контентом блок corusel posts
  setTimeout(function() {
    let masa = [].concat(master);
    for (let j = 0; j < masa.length; j++) {
      if (masa[j].id != 'coruselPosts') {
        masa.splice(j, 1);
        j--;
      };
    };
    for (var k = 0; k < 9; k++) {
      divF[5].children[0].appendChild(createElem('div', 'osnBlock'));
      let contents = divF[5].children[0].children[k];
      contents.appendChild(createElem('div', 'fotoOsn'));
      contents.appendChild(createElem('span', 'spanOsn')).innerHTML = masa[k].content;
      contents.appendChild(createElem('div', 'kalendOsn'));
      contents.children[2].appendChild(createElem('img', null, 'src', 'images/banner/icon2.png'));
      contents.children[2].appendChild(createElem('span')).innerHTML = masa[k].date;
      var fotoOsn = document.getElementsByClassName('fotoOsn');
      fotoOsn[k].appendChild(createElem('img', null, 'src', `${masa[k].photo}`));
    };
  }, 900);
})();
})();

		//Работа с блоком Entertainment
    divF[6].classList.add('entertainment');
    divF[7].classList.add('newsBanEnter');
    divF[7].appendChild(createElem('div', 'heightEnter'));
    divF[7].appendChild(createElem('div', 'blockEnterTwo'));
    let entMent =divF[7].children;
    increaseFoto(1, entMent, false) //плавный переход для span
    setTimeout(function(){
		//левая чатсь блока
      blockEl(1, divF[7].children, 'entertainment');
      rate(entMent[0], 2, 'Awesome', 'val3');
      addSmallBlock(entMent[1], newsEnt, "enterSmallBlock"); 	//Правая часть блока Entertainment
    },1000);

    //функция выбора small block Entertainment
    function newsEnt(e) {
      let content = document.getElementsByClassName('heightEnter')[0];
      let con = content.children[0];
      con.style.width = '0%';
      con.style.opacity = '0';
      content.children[1].children[0].style.opacity = '0';
      content.children[1].children[0].style.marginLeft = '-200px';
      let context = this;
      setTimeout(function() {
        con.setAttribute('src', context.children[0].getAttribute('src'));
        con.style.transition = 'none';
        con.style.width = '100%';
        con.style.opacity = '0';
        con.style.height = '20%';
        content.children[1].children[0].innerHTML = context.children[1].innerHTML;
      }, 500)
      setTimeout(function() {
        con.style.transition = 'all 0.5s linear';
        con.style.opacity = '1';
        con.style.height = '100%';
        content.children[1].children[0].style.opacity = '1';
        content.children[1].children[0].style.marginLeft = '21px';
      }, 600)
    }

    //баннер нижней части сайта
    divFirst.appendChild(createElem('img', 'banImg', 'src', 'images/content/gifka.gif'));
  })();//первая часть
})();//Контейнер основного контента




//Работа с контейнером FOOTER
(function footer(){
  //Основной контейнер
  let container = document.body.querySelector('.container');
  container.appendChild(createElem('footer', null));
  let foot = document.getElementsByTagName('footer');
  for (var i = 0; i < 4; i++) {
    foot[0].appendChild(createElem('div', 'footMainBlock'));
  }
  foot[0].children[2].className = 'footThree';
  foot[0].children[3].className = 'footMenu';





})()




























}
