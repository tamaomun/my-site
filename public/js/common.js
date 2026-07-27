// ぬるっとスクロールし、ヘッダーぶんの位置を調整する
jQuery(function () {
  var windowWidth = jQuery(window).width();
  var windowSm = 1030;
  if (windowSm > windowWidth) {
    var headerHeight = 60;
  } else {
    var headerHeight = 80;
  }
 jQuery('a[href^="#"]').click(function(){
     var href= jQuery(this).attr("href");
       var target = jQuery(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerHeight; //ヘッダの高さ分位置をずらす
     jQuery("html, body").animate({scrollTop:position}, 550, "swing");
        return false;
   });
   window.onresize = function () {
     var windowWidth = jQuery(window).width();
   }
});

// ハンバーガーメニュー実装
if(document.getElementById('menubtn') != null && document.getElementById('navmenu') != null) {

  const menubtn = document.getElementById('menubtn');
  const navmenu = document.getElementById('navmenu');

  function openMenu() {
    if (navmenu.className == '') {
      navmenu.classList.add('checked');
      menubtn.innerText = '×';
    } else {
      navmenu.classList.remove('checked');
      menubtn.innerText = '☰';
    }
  }
  menubtn.addEventListener('click', openMenu);

  jQuery(function() {
    jQuery(document).on('click', function(e) {
      if(!jQuery(e.target).is('#navmenu, #menubtn') && navmenu.className == 'checked') {
        navmenu.classList.remove('checked');
        menubtn.innerText = '☰';
      }
    });
  });

  // ウインドウサイズが大きくなったら.checkedクラスを外す
  function resizeWindow(){
    if(jQuery(window).width() > 1030) {
      navmenu.classList.remove('checked');
      menubtn.innerText = '☰';
    }
  }
  window.onresize = resizeWindow;
}

// TOTOPリンクをスクロール幅に応じて出す
function showTotop() {
if (document.getElementById('totop') != null) {
  let scrollY = window.pageYOffset;
  let body = document.body;

  let totop = document.getElementById('totop');

  if( scrollY < 300 ) {
    totop.classList.add('totop-hidden');
  } else {
    totop.classList.remove('totop-hidden');
  }
 }
}

window.addEventListener('scroll', showTotop);
