$(function ($) {
  let url = window.location.href;
  $('li a').each(function () {
    if (this.href === url) {
      $(this).closest('li').addClass('active');
    }
  });
});

$('.wrap_item').click(function (ev) {
  document.location.href = "Products_detail.html";
})
$('.card-body .card-title').click(function (ev) {
  document.location.href = "Products_detail.html";
})

$('.news-item-larger').click(function (ev) {
  document.location.href = "News_detail.html";
})
$('.news-item-smaller').click(function (ev) {
  document.location.href = "News_detail.html";
})

function rollUpInPost(ad, e) {
  e = e || window.event;
  e.preventDefault();
  var element = document.getElementById(ad)
  window.scrollTo({ top: element.offsetTop - 161, behavior: 'smooth' });
}




var example_link1 = 'https://www.instagram.com/p/CxPaWT4u2zD'
var example_link2 = 'https://www.instagram.com/p/CxPaWT4u2zD'
var example_link3 = 'https://www.instagram.com/p/CxPaWT4u2zD'
var getImgSource = '/media/?size=l'


