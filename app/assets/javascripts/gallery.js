//= require masonry.pkgd.min.js
//= require jquery.fancybox.pack.js
//= require jquery.fancybox-buttons.js
//= require jquery.mousewheel-3.0.6.pack.js
//= require instafeed.min.js


$(document).ready(function()
{
  $(".fancybox").fancybox(
  {
    helpers: {
      overlay: {
        css: {
          'background': "rgba( 50, 50, 50, 0.70 )"
        }
      }
    }
  });
});

$(window).load(function()
{
  $(".masonry").masonry(
  {
    itemSelector: ".image-box"
  });
});

