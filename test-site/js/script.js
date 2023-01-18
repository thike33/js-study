'use strict';
// ------------------------------------
// DOM操作
// ------------------------------------

// idから取得


// クラスから取得


// 要素（今回はリスト）を複数取得


// data属性から値を取得（2種類）
// パターン１


// パターン２


// idから取得したテキストを変更


// ulを取得して、ulの親要素、子要素、祖先要素を取得


// ulの最初の子要素、最後の子要素を取得


// ulの前後の兄弟要素を取得


// li要素を新しく作成し、テキストも追加する


// ul要素にli要素を追加・削除


// 要素の移動になる


// クラスの追加


// CSSを変更。プロパティはキャメルケースで書く！


// 追加したクラスを削除


// 属性の値を取得・変更


// 要素の横幅・縦幅を取得


// 要素の位置を取得


// ------------------------------------
// ハンバーガーメニュー
// body,hamburger,navにis-openを付け外しする
// ------------------------------------
const headerBtn = document.querySelector('.c-hamburger');
const headerNav = document.querySelector('.p-header-nav');
headerBtn.addEventListener('click', () => {
  headerBtn.classList.toggle('is-open');
  document.body.classList.toggle('is-open');
  headerNav.classList.toggle('is-open');
})

// ------------------------------------
// タブメニュー
// tabとcontentのis-activeを外してから付ける。data属性とidを上手く連携させる
// ------------------------------------
const tabs = document.querySelectorAll('.p-tab__btn');
const tabContents = document.querySelectorAll('.p-tab__content');
tabs.forEach(function (tab) {
  tab.addEventListener('click', () => {
    tabs.forEach(function (tab) {
      tab.classList.remove('is-active');
    })
    tabContents.forEach(function (content) {
      content.classList.remove('is-active');
    });
    const id = tab.getAttribute('data-id');
    const content = document.getElementById(id);
    content.classList.add('is-active');
  });
});

// ------------------------------------
// モーダル
// これもdata属性とidを上手く連携させる
// ------------------------------------
const modalBtns = document.querySelectorAll('.p-modal__btn');
const modalOverlay = document.querySelector('.p-modal__overlay');

modalBtns.forEach( function(btn) {
  btn.addEventListener('click', function() {
    const id = btn.getAttribute('data-id');
    const modalTarget = document.getElementById(id);
    modalTarget.classList.add('is-open');
    modalOverlay.classList.add('is-open');
  });
});
function modalClose() {
  const modalIsOpen = document.querySelector('.p-modal__content.is-open');
  modalIsOpen.classList.remove('is-open');
  modalOverlay.classList.remove('is-open');
}
modalOverlay.addEventListener('click', function() {
  modalClose();
});


// ------------------------------------
// アコーディオン
// ------------------------------------
const accordions = document.querySelectorAll('.p-accordion__item');
accordions.forEach( function(accordion) {
  accordion.addEventListener('click', function() {
    
  });
});

// ------------------------------------
// アコーディオン(jQueryのslideToggleと同じ挙動にする)
// 難しいパターン、heightがautoだとアニメーションが動かないので処理が多め
// かなり難しいので飛ばしてOK！
// ------------------------------------


// ------------------------------------
// スクロール
// ------------------------------------


// ------------------------------------
// スクロールでヘッダーの色を変える＆ページトップボタンの表示・非表示
// ------------------------------------


// ------------------------------------
// ページトップへ戻る
// ------------------------------------
