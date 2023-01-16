'use strict';
// ------------------------------------
// DOM操作
// 回答はあくまで１例。他にやり方はたくさんあると思います
// ------------------------------------

// idから取得
const id = document.getElementById('title');

// クラスから取得
const text = document.querySelector('.p-dom__text');

// 要素（今回はリスト）を複数取得
const li = document.querySelectorAll('.p-dom__item');

// data属性から値を取得（2種類）
const data = document.querySelector('.p-dom__data');
// パターン１
const dataNum = data.dataset.indexNumber;
// パターン２
const dataNum2 = data.getAttribute('data-index-number');

// idから取得したテキストを変更
id.textContent = 'テキストを変更';

// ulを取得して、ulの親要素、子要素、祖先要素を取得
const ul = document.querySelector('.p-dom__list');

// ulの最初の子要素、最後の子要素を取得
ul.firstElementChild;
ul.lastElementChild;

// ulの前後の兄弟要素を取得
ul.previousElementSibling;
ul.nextElementSibling;

// li要素を新しく作成し、テキストも追加する
const createItem = document.createElement('li');
createItem.textContent = '追加リスト';

// ul要素にli要素を追加・削除
ul.prepend(createItem);
// 要素の移動になる
ul.append(createItem);

// クラスの追加
const classText = document.querySelector('.p-dom__class');
classText.classList.add('test');

// CSSを変更。プロパティはキャメルケースで書く！
classText.style.backgroundColor = 'red';

// 追加したクラスを削除
classText.classList.remove('test');

// 属性の値を取得・変更
const link = document.querySelector('.p-dom__link');
const url = link.getAttribute('href');

link.setAttribute('href', 'https://yahoo.com');

// 要素の横幅・縦幅を取得
const box = document.querySelector('.p-dom__box');
// boxのborderまでの値を取得するならclient
const boxClientWidth = box.clientWidth;
const boxClientHeight = box.clientHeight;
console.log(`横の長さは${boxClientWidth}px, 縦の長さは${boxClientHeight}px`);

// boxのborderを含めた値を取得するならoffset
const boxOffsetWidth = box.offsetWidth;
const boxOffsetHeight = box.offsetHeight;
console.log(`borderを含めた横の長さは${boxOffsetWidth}px, borderを含めた縦の長さは${boxOffsetHeight}px`);

// 要素の位置を取得
const offsetTop = box.offsetTop;
const offsetLeft = box.offsetLeft;
console.log(`boxの位置は縦${offsetTop}px,横${offsetLeft}pxの位置`);

// ------------------------------------
// ハンバーガーメニュー
// body,hamburger,navにis-openを付け外しする
// ------------------------------------

const headerBtn = document.querySelector('.c-hamburger');
const headerNav = document.querySelector('.p-header-nav');
const toggleNav = function () {
  document.body.classList.toggle('is-open');
  headerBtn.classList.toggle('is-open');
  headerNav.classList.toggle('is-open');
}

headerBtn.addEventListener('click', function () {
  toggleNav();
});

// ------------------------------------
// タブメニュー
// tabとcontentのis-activeを外してから付ける
// ------------------------------------

// パターン１
// const tabs = document.querySelectorAll('.p-tab__btn');
// const tabContents = document.querySelectorAll('.p-tab__content');
// tabs.forEach(function (tab) {
//   tab.addEventListener('click', function () {
//     tabs.forEach( function(tab) {
//       tab.classList.remove('is-active');
//     });
//     tabContents.forEach( function(content) {
//       content.classList.remove('is-active');
//     });
//     const id = tab.getAttribute('data-id');
//     const targetContent = document.getElementById(id);
//     targetContent.classList.add('is-active');
//   });
// });

// パターン２
const tabs = document.querySelectorAll('.p-tab__btn');
const tabContents = document.querySelectorAll('.p-tab__content');
tabs.forEach(function (tab) {
  tab.addEventListener('click', toggleTab);
});
function toggleTab(event) {
  tabs.forEach(function (tab) {
    tab.classList.remove('is-active');
  });
  tabContents.forEach(function (content) {
    content.classList.remove('is-active');
  });

  const clickTab = event.currentTarget;
  clickTab.classList.add('is-active');

  const targetContent = document.getElementById(clickTab.dataset.id);
  targetContent.classList.add('is-active');
}

// ------------------------------------
// モーダル
// data属性とidを上手く連携させる
// ------------------------------------
const modalBtns = document.querySelectorAll('.p-modal__btn');
const modalOverlay = document.querySelector('.p-modal__overlay');

modalBtns.forEach((btn) => {
  btn.addEventListener('click', function () {
    const id = btn.getAttribute('data-id');
    const modalTarget = document.getElementById(id);
    modalTarget.classList.add('is-open');
    modalOverlay.classList.add('is-open');
  });
});
modalOverlay.addEventListener('click', function () {
  const modalIsOpen = document.querySelector('.p-modal__content.is-open');
  modalIsOpen.classList.remove('is-open');
  modalOverlay.classList.remove('is-open');
});


// ------------------------------------
// モーダルに×ボタンを足すときはこっちの処理にする
// 処理を関数にまとめた方が記述が少なくなる
// ------------------------------------
// const modalBtn = document.querySelector('.p-modal__btn');
// function modalClose() {
//   const modalIsOpen = document.querySelector('.p-modal__content.is-open');
//   modalIsOpen.classList.remove('is-open');
//   modalOverlay.classList.remove('is-open');
// }
// modalOverlay.addEventListener('click', function() {
//   modalClose();
// });
// modalBtn.addEventListener('click', function() {
//   modalClose();
// });

// ------------------------------------
// アコーディオン
// こっちは簡単パターン
// ------------------------------------
const accordions = document.querySelectorAll('.p-accordion__item');
accordions.forEach(function (accordion) {
  accordion.addEventListener('click', function () {
    accordion.classList.toggle('is-open');
  });
});

// ------------------------------------
// アコーディオン(jQueryのslideToggleと同じ挙動にする)
// 難しいパターン、heightがautoだとアニメーションが動かないので処理が多め
// ------------------------------------
const terms = document.querySelectorAll('.p-accordion__term2');
terms.forEach(function (term) {
  term.addEventListener('click', function (event) {
    const term = event.currentTarget;
    if (term.dataset.isOpen === 'false') {
      const termInner = term.nextElementSibling;
      const content = termInner.children[0];

      // コンテンツ内側の要素の高さを取得する
      const targetHeight = content.offsetHeight;
      // コンテンツ外側に、内側要素の高さを設定する。ここでtransitionによるアニメーションが作動する
      termInner.style.height = targetHeight + 'px';

      // transitionで指定した秒数を遅らせる。アニメーション完了後にheightをautoにする。data属性も変更する。
      setTimeout(function () {
        termInner.style.height = 'auto';
        term.dataset.isOpen = true
      }, 500);
    }
    if (term.dataset.isOpen === 'true') {
      const termInner = term.nextElementSibling;
      const content = termInner.children[0];

      const targetHeight = content.offsetHeight;
      termInner.style.height = targetHeight + 'px';

      setTimeout(function () {
        // 高さを0にする。ここでアニメーションが作動する。
        termInner.style.height = 0;
        term.dataset.isOpen = false
      });
    }
  });
});

// ------------------------------------
// スクロール
// ------------------------------------
{
  let timerId;
  function imgFadeIn() {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const scrollImgs = document.querySelectorAll('.p-scroll');
    scrollImgs.forEach(function (scrollImg) {
      const imgOffsetY = scrollImg.offsetTop;
      if (scrollY > imgOffsetY - windowHeight) {
        scrollImg.classList.add('is-active');
      }
    });
    timerId = null;
  }

  window.addEventListener('scroll', function () {
    if (!timerId) {
      timerId = setTimeout(imgFadeIn, 300);
    }
  });
}

// ------------------------------------
// パターン２ Intersection Observer APIを使用。パフォーマンスはこちらの方が良いです
// ------------------------------------
// optionsやcallbackは他の場所でも使用される可能性があるので{}で囲んでます
// {
//   const options = {
//     root: null,
//     rootMargin: '-100px',
//     threshold: .5,
//   }
//   const callback = (entries, observer) => {
//     entries.forEach(function (entry) {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('is-active');
//         observer.unobserve(entry.target);
//       } else {
//         entry.target.classList.remove('is-active');
//       }
//     });
//   };

//   インスタンス化
//   const observer = new IntersectionObserver(callback, options);
//   監視対象
//   const scrollImgs = document.querySelectorAll('.p-scroll');
//   scrollImgs.forEach(img => observer.observe(img));
// }

// ------------------------------------
// スクロールでヘッダーの色を変える＆ページトップボタンの表示・非表示
// ------------------------------------
{
  const header = document.querySelector('.p-header');
  const pageTop = document.querySelector('.p-page-top');
  let timerId;

  function scrollChange() {
    const scroll = window.scrollY;
    if (scroll > 300) {
      header.style.backgroundColor = 'red';
      pageTop.classList.add('is-active');
    } else {
      header.style.backgroundColor = 'white';
      pageTop.classList.remove('is-active');
    }
    timerId = null;
  }
  window.addEventListener('scroll', function () {
    if (!timerId) {
      timerId = setTimeout(scrollChange, 300);
    }
  });
}

// ------------------------------------
// ページトップへ戻る
// ------------------------------------
const scrollLinks = document.querySelectorAll('a[href="#"]');
scrollLinks.forEach((scrollLink) => {
  scrollLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});
