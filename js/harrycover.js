$(function() {
  var words = [
  'un développeur',
  'un designer',
  'un animateur',
  'un graphiste'
],
i = 0;
$(function(){
     setInterval(function(){
        $(".catchphrase ul").animate({marginRight:-60},800,function(){
           $(this).css({marginRight:0}).find("li:last").after($(this).find("li:first"));
        })
     }, 2500);
  });

  $(function(){
       setInterval(function(){
          $(".slideshowdown ul").animate({marginTop:0},0,function(){
             $(this).css({marginTop:0}).find("li:last").after($(this).find("li:first"));
          })
       }, 150);
    });

//on créé l'animation des diporama
/*$(function(){
     setInterval(function(){
        $(".slideshowblack ul").animate({marginTop:0},0,function(){
           $(this).css({marginTop:0}).find("li:last").after($(this).find("li:first"));
        })
     }, 150);
  });*/
$(function(){
     setInterval(function(){
        $(".slideshow ul").animate({marginTop:0},0,function(){
           $(this).css({marginTop:0}).find("li:last").after($(this).find("li:first"));
        })
        $(".slideshowblack ul").animate({marginTop:0},0,function(){
           $(this).css({marginTop:0}).find("li:last").after($(this).find("li:first"));
        })
     }, 150);
  });


// Wrap every letter in a span
$('.ml2').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    //targets: '.catchphrase .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: function(el, i) {
      return 70*i;
    }
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 2500,
    easing: "easeOutExpo",
    delay: 1000
  });

  //on gère l'affichage du menu responsive pour les écrans <= 992px
  $(".navbar-responsive").toggle();

  $(".menu").click(function () {
    $(".navbar-responsive").toggle("slow");
  });

  // On gère l'affichage aléatoire des compétences d'accroche logonavbar(toutes les 3.5 secondes)


  // On gère l'affichage aléatoire des phrases d'accroche du header (toutes les 3.5 secondes)
/*  setInterval(function() {
    $("#word").fadeOut(function() {
      $(this).html(words[i = (i + 1) % words.length]).fadeIn();
    });
  }, 3500);*/

  //on gère le scroll des différente section du site
  $(".scroll").click(function() {
  var section = $("." + this.id);
  $("html,body").animate({scrollTop: section.offset().top}, 'slow');
});

  // On gère l'affichage des progressbar pour les compétences
  window.sr = ScrollReveal();
  sr.reveal(".progress-bar", {
    origin: 'left',
    duration: 2000,
    distance: '100%'
  });
//On gère le bouton de retour haut de page
jQuery(document).ready(function() {
  var duration = 500;
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 100) {
      // Si un défillement de 100 pixels ou plus.
      // Ajoute le bouton
      jQuery('.cRetour').fadeIn(duration);
    } else {
      // Sinon enlève le bouton
      jQuery('.cRetour').fadeOut(duration);
    }
  });

  jQuery('.cRetour').click(function(event) {
    // Un clic provoque le retour en haut animé.
    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, 'slow');
    return false;
  });
});
});
