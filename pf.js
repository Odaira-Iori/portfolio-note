window.onload = function () {
    var nav = document.getElementById('nav-wrapper');
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('open');
    });
    blackBg.addEventListener('click', function () {
        nav.classList.remove('open');
    });
};



/*(function () {
    document.addEventListener('DOMContentLoaded', function() { // HTML解析が終わったら
      const btn = document.getElementById('dropdown__btn'); // ボタンをidで取得
      if(btn) { // ボタンが存在しないときにエラーになるのを回避
        btn.addEventListener('click', function(){ //ボタンがクリックされたら
          this.classList.toggle('is-open'); // is-openを付加する
        });
      }
    });
  }());*/

  window.onload = function () {
    // ハンバーガーメニューの開閉
    var nav = document.getElementById('nav-wrapper');
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('open'); // ハンバーガーメニューの開閉
    });

    blackBg.addEventListener('click', function () {
        nav.classList.remove('open'); // ハンバーガーメニューを閉じる
    });

    // ドロップダウンメニューの開閉
    const dropdownButtons = document.querySelectorAll('.dropdown__btn'); // 全てのドロップダウンボタンを取得
    dropdownButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.stopPropagation(); // クリックイベントの伝播を止める

            // 他のドロップダウンを閉じる
            dropdownButtons.forEach(function (btn) {
                if (btn !== button) {
                    btn.classList.remove('is-open'); // is-openクラスを削除
                    const body = btn.nextElementSibling; // ボタンに対応するメニュー
                    if (body) body.style.display = 'none'; // 閉じる
                }
            });

            // 現在のドロップダウンを開閉
            const dropdownBody = button.nextElementSibling; // ボタンに対応するメニュー
            if (dropdownBody) {
                if (button.classList.contains('is-open')) {
                    button.classList.remove('is-open');
                    dropdownBody.style.display = 'none'; // メニューを閉じる
                } else {
                    button.classList.add('is-open');
                    dropdownBody.style.display = 'block'; // メニューを開く
                }
            }
        });
    });

    // メニュー外をクリックした際にドロップダウンを閉じる
    document.addEventListener('click', function () {
        dropdownButtons.forEach(function (button) {
            button.classList.remove('is-open'); // すべてのボタンのis-openクラスを削除
            const dropdownBody = button.nextElementSibling; // ボタンに対応するメニュー
            if (dropdownBody) dropdownBody.style.display = 'none'; // 閉じる
        });
    });
};
