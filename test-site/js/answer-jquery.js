'use strict';
// ------------------------------------
// DOM操作
// 回答はあくまで１例。他にやり方はたくさんあると思います
// ------------------------------------

// idから取得
// const id = document.getElementById('title');
const id = $('#title');

// クラスから取得
// const text = document.querySelector('.p-dom__text');
const text = $('.p-dom__text');

// 要素（今回はリスト）を複数取得
// const li = document.querySelectorAll('.p-dom__item');
const li = $('.p-dom__item');

// data属性から値を取得（2種類）
// const data = document.querySelector('.p-dom__data');
const data = $('.p-dom__data');
// パターン１
// const dataNum = data.dataset.indexNumber;
const dataNum = data.data('indexNumber');
// パターン２
// const dataNum2 = data.getAttribute('data-index-number');
const dataNum2 = data.attr('data-index-number');

// idから取得したテキストを変更
id.textContent = 'テキストを変更';
id.text('テキストを変更');

// ulを取得して、ulの親要素、子要素、祖先要素を取得
// const ul = document.querySelector('.p-dom__list');
const ul = $('.p-dom__list');

// ulの最初の子要素、最後の子要素を取得
// ul.firstElementChild;
$(ul.children[0]);
$(ul.eq(0));
$(ul.first());
ul.filter(':first');

// ul.lastElementChild;
$(ul.children[ul.children.length - 1]);
$(ul.last());
ul.filter(':last');

// ulの前後の兄弟要素を取得
// ul.previousElementSibling;
ul.prev();
// ul.nextElementSibling;
ul.next();

// li要素を新しく作成し、テキストも追加する
// const createItem = document.createElement('li');
// createItem.textContent = '追加リスト';
const createItem = $("<li>");
createItem.text('追加リスト');
// 別解
const createItem2 = $("li>", {
  text: '追加リスト'
});

// ul要素にli要素を追加・削除
ul.prepend(createItem);
// 要素の移動になる
ul.append(createItem);

// クラスの追加
// const classText = document.querySelector('.p-dom__class');
// classText.classList.add('test');
const classText = $('.p-dom__class:first');
classText.addClass('test');

// CSSを変更。プロパティはキャメルケースで書く！
// classText.style.backgroundColor = 'red';
classText.css('background-color', 'red');

// 追加したクラスを削除
// classText.classList.remove('test');
classText.removeClass('test');

// 属性の値を取得・変更
// const link = document.querySelector('.p-dom__link');
// const url = link.getAttribute('href');
//
// link.setAttribute('href', 'https://yahoo.com');

const link = $('.p-dom__link:first');
const url = link.attr('href');

link.attr('href', 'https://yahoo.com');

// 要素の横幅・縦幅を取得
// const box = document.querySelector('.p-dom__box');
// // boxのborderまでの値を取得するならclient
// const boxClientWidth = box.clientWidth;
// const boxClientHeight = box.clientHeight;
// console.log(`横の長さは${boxClientWidth}px, 縦の長さは${boxClientHeight}px`);
const box = $('.p-dom__box:first');
// boxのborderまでの値を取得するならclient
const boxClientWidth = box.innerWidth();
const boxClientHeight = box.innerHeight();
console.log(`横の長さは${boxClientWidth}px, 縦の長さは${boxClientHeight}px`);

// boxのborderを含めた値を取得するならoffset
// const boxOffsetWidth = box.offsetWidth;
// const boxOffsetHeight = box.offsetHeight;
// console.log(`borderを含めた横の長さは${boxOffsetWidth}px, 縦の長さは${boxOffsetHeight}px`);
const boxOffsetWidth = box.outerWidth();
const boxOffsetHeight = box.outerHeight();
console.log(`borderを含めた横の長さは${boxOffsetWidth}px, 縦の長さは${boxOffsetHeight}px`);

// 要素の位置を取得
// const offsetTop = box.offsetTop;
// const offsetLeft = box.offsetLeft;
// console.log(`boxの位置は縦${offsetTop}px,横${offsetLeft}pxの位置`);
// Todo: 要確認offsetTopがVanillaとずれる(740px → 739.546875px)
const offsetTop = box.offset().top;
const offsetLeft = box.offset().left;
console.log(`boxの位置は縦${offsetTop}px,横${offsetLeft}pxの位置`);

// ------------------------------------
// ハンバーガーメニュー
// body,hamburger,navにis-openを付け外しする
// ------------------------------------

// const headerBtn = document.querySelector('.c-hamburger');
// const headerNav = document.querySelector('.p-header-nav');
// const toggleNav = () => {
//   document.body.classList.toggle('is-open');
//   headerBtn.classList.toggle('is-open');
//   headerNav.classList.toggle('is-open');
// }
//
// headerBtn.addEventListener('click', function() {
//   toggleNav();
// });


const headerBtn = $('.c-hamburger:first');
const headerNav = $('.p-header-nav:first');
const toggleNav = () => {
  $('body').toggleClass('is-open');
  headerBtn.toggleClass('is-open');
  headerNav.toggleClass('is-open');
}

headerBtn.on('click', function() {
  toggleNav();
});

// ------------------------------------
// タブメニュー
// tabとcontentのis-activeを外してから付ける
// ------------------------------------

// パターン１
// const tabs = document.querySelectorAll('.p-tab__btn');
// const tabContents = document.querySelectorAll('.p-tab__content');
// tabs.forEach( function(tab) {
//   tab.addEventListener('click', function() {
//     tabs.forEach( (tab) => tab.classList.remove('is-active') );
//     tabContents.forEach( (content) => content.classList.remove('is-active') );
//     const id = tab.getAttribute('data-id');
//     const targetContent = document.getElementById(id);
//     targetContent.classList.add('is-active');
//   });
// });

const tabs = $('.p-tab__btn')
const tabContents = $('.p-tab__content')
tabs.on('click', function() {
  tabs.removeClass('is-active');
  tabContents.removeClass('is-active');
  const id = $(this).data('id');
  const targetContent = $('#' + id);
  targetContent.addClass('is-active');
});

// パターン２
// const tabs = document.querySelectorAll('.p-tab__btn');
// const tabContents = document.querySelectorAll('.p-tab__content');
// tabs.forEach( function(tab) {
//   tab.addEventListener('click', toggleTab );
// });
// function toggleTab(event) {
//   tabs.forEach( (tab) => tab.classList.remove('is-active') );
//   tabContents.forEach( (content) => content.classList.remove('is-active') );

//   const clickTab = event.currentTarget;
//   clickTab.classList.add('is-active');

//   const targetContent = document.getElementById(clickTab.dataset.id);
//   targetContent.classList.add('is-active');
// }

// ------------------------------------
// モーダル
// data属性とidを上手く連携させる
// ------------------------------------
// const modalBtns = document.querySelectorAll('.p-modal__btn');
// const modals = document.querySelectorAll('.p-modal__content');
// const modalOverlay = document.querySelector('.p-modal__overlay');
//
// modalBtns.forEach( (btn) => {
//   btn.addEventListener('click', function() {
//     const id = this.getAttribute('data-id');
//     const modalTarget = document.getElementById(id);
//     modalTarget.classList.add('is-open');
//     modalOverlay.classList.add('is-open');
//   });
// });

const modalBtns = $('.p-modal__btn');
const modalOverlay = $('.p-modal__overlay');

modalBtns.on('click', function() {
  const id = $(this).data('id');
  const modalTarget = $('#' + id);
  modalTarget.addClass('is-open');
  modalOverlay.addClass('is-open');
});



// function modalClose() {
//   const modalIsOpen = document.querySelector('.p-modal__content.is-open');
//   modalIsOpen.classList.remove('is-open');
//   modalOverlay.classList.remove('is-open');
// }
//
// modalOverlay.addEventListener('click', () => {
//   // modalClose();
//   const modalIsOpen = document.querySelector('.p-modal__content.is-open');
//   modalIsOpen.classList.remove('is-open');
//   modalOverlay.classList.remove('is-open');
// });

// function modalClose() {
//   const modalIsOpen = document.querySelector('.p-modal__content.is-open');
//   modalIsOpen.classList.remove('is-open');
//   modalOverlay.classList.remove('is-open');
// }

modalOverlay.on('click', function() {
  const modalIsOpen = $('.p-modal__content.is-open');
  modalIsOpen.removeClass('is-open');
  modalOverlay.removeClass('is-open');
});


// // ------------------------------------
// // アコーディオン
// // こっちは簡単パターン
// // ------------------------------------
// const accordions = document.querySelectorAll('.p-accordion__item');
// accordions.forEach( function(accordion) {
//   accordion.addEventListener('click', function() {
//     accordion.classList.toggle('is-open');
//   });
// });
//
// // ------------------------------------
// // アコーディオン(jQueryのslideToggleと同じ挙動にする)
// // 難しいパターン、heightがautoだとアニメーションが動かないので処理が多め
// // ------------------------------------
// const terms = document.querySelectorAll('.p-accordion__term2');
// terms.forEach( (term) => {
//   term.addEventListener('click', function(event) {
//     const term = event.currentTarget;
//     if (term.dataset.isOpen === 'false') {
//       const termInner = term.nextElementSibling;
//       const content = termInner.children[0];
//
//       // コンテンツ内側の要素の高さを取得する
//       const targetHeight = content.offsetHeight;
//       // コンテンツ外側に、内側要素の高さを設定する。ここでtransitionによるアニメーションが作動する
//       termInner.style.height = targetHeight + 'px';
//
//       // transitionで指定した秒数を遅らせる。アニメーション完了後にheightをautoにする。data属性も変更する。
//       setTimeout( function() {
//         termInner.style.height = 'auto';
//         term.dataset.isOpen = true
//       }, 500);
//     }
//     if (term.dataset.isOpen === 'true') {
//       const termInner = term.nextElementSibling;
//       const content = termInner.children[0];
//
//       const targetHeight = content.offsetHeight;
//       termInner.style.height = targetHeight + 'px';
//
//       setTimeout( function() {
//         // 高さを0にする。ここでアニメーションが作動する。
//         termInner.style.height = 0;
//         term.dataset.isOpen = false
//       });
//     }
//   });
// });

$('.p-accordion__item').on('click', function() {
    $(this).toggleClass('is-open');
});

// ------------------------------------
// アコーディオン(jQueryのslideToggleと同じ挙動にする)
// 難しいパターン、heightがautoだとアニメーションが動かないので処理が多め
// ------------------------------------

$('.p-accordion__term2').on('click', function() {
    const termInner = ($(this).next());
    const content = $(termInner.children()[0]);
    content.slideToggle();
});

// ------------------------------------
// スクロール
// 今回はIntersection Observer APIを使用
// ------------------------------------
const options = {
  root: null,
  rootMargin: '-100px',
  threshold: .5,
}
const callback = (entries, observer) => {
  entries.forEach( function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-active');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('is-active');
    }
  });
};
// インスタンス化
const observer = new IntersectionObserver(callback, options);
// 監視対象
const scrollImgs = document.querySelectorAll('.p-scroll');
scrollImgs.forEach( img => observer.observe(img));

// ------------------------------------
// スクロールでヘッダーの色を変える＆ページトップボタンの表示・非表示
// ------------------------------------
// const header = document.querySelector('.p-header');
// const pageTop = document.querySelector('.p-page-top');
// let timerId;
//
// function scrollChange() {
//   const scroll = window.scrollY;
//   if (scroll > 300) {
//     header.style.backgroundColor = 'red';
//     pageTop.classList.add('is-active');
//   } else {
//     header.style.backgroundColor = 'white';
//     pageTop.classList.remove('is-active');
//   }
//   timerId = null;
// }
// window.addEventListener('scroll', () => {
//   if (!timerId) {
//     timerId = setTimeout(scrollChange, 300);
//   }
// });
const header = $('.p-header:first');
const pageTop = $('.p-page-top:first');
let timerId;

function scrollChange() {
  const scroll = window.scrollY;
  if (scroll > 300) {
    header.css('background-color', 'red');
    pageTop.addClass('is-active');
  } else {
    header.css('background-color', 'white');
    pageTop.removeClass('is-active');
  }
  timerId = null;
}
$(window).on('scroll', function() {
  if (!timerId) {
    timerId = setTimeout(scrollChange, 300);
  }
});

// ------------------------------------
// ページトップへ戻る
// ------------------------------------
// const scrollLinks = document.querySelectorAll('a[href="#"]');
// scrollLinks.forEach( (scrollLink) => {
//   scrollLink.addEventListener('click', (event) => {
//     event.preventDefault();
//     const offsetTop = scrollLink.offsetTop;
//     window.scrollTo({
//       top: offsetTop,
//       behavior: 'smooth',
//     });
//   });
// });

const scrollLinks = $('a[href="#"]');
scrollLinks.on('click', function(event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, 300);
});
