$(document).ready(function(){
  $.backstretch([
          "https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_1024/v1464896760/photo-1428223501723-d821c5d00ca3_knl5ki.jpg",
          "https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_1024/v1464896839/photo-1432888498266-38ffec3eaf0a_ukva1r.jpg"
      ],{
          duration:30000,
          fade: 'slow'
  });
var data = [
  {
    id:23,
    title:"Speed System",
    description:"Speed System e um sistema de protocolos de documentos que eu desenvolvi para a UEG.",
    demoUrl:"www.posse.ueg.br",
    previewUrl:"https://raw.githubusercontent.com/slivadrip/patrimonio/master/patrimonio-api/docs/speed-system.jpg",
    category:"backend"
  },
  {
    id:21,
    title:"Drinks ★",
    description:"Drinks ★ é um Sistema para controle de estoque e vendas de bebidas para distribuidoras.",
    demoUrl:"https://github.com/slivadrip/drinks/",
    previewUrl:"https://github.com/slivadrip/drinks/raw/master/fotos/dashboard.PNG",
    category:"backend"
  },
  {
    id:0,
    title:"Gestão Patrimonio",
    description:"Sistema feito em angular para Gestão de patrimonio.",
    demoUrl:"https://github.com/slivadrip/patrimonio",
    previewUrl:"https://github.com/slivadrip/patrimonio/raw/master/patrimonio-api/docs/patrimonio.png",
    category:"backend"
  }
 
];

  var frontend = data.filter(function(item){
    return item.category === 'frontend';
  });

  var backend =  data.filter(function(item){
    return item.category === 'backend';
  });

  var react =  data.filter(function(item){
    return item.category === 'react';
  });

   var meteor = data.filter(function(item){
    return item.category === 'meteor';
  });

  function removeActiveClass(){
    $('.center').find('a').each(function(i,el){    if($(el).hasClass('active')){
      $(el).removeClass('active');
    }

    });
  }
  function removeOpenClass(){
    $('.container').each(function(i,el){
      if($(el).hasClass('open')){
        $(el).removeClass('open');
      }
    })
  }
  $('.js-close').on('click',function(e){
    e.preventDefault();
    removeActiveClass();
    $('.center').animate({
      opacity:'0'
    },50);
    if($(window).width()<=900) $('.container.home header .right').show(100);
    removeOpenClass();
    $('.close-arrow').hide();
  });
  $('.js-open-about').on('click',function(e){
    e.preventDefault();
    removeOpenClass();
    $('.about').addClass('open');
    $('.close-arrow').show(600);
    if($(window).width()<=900) $('.container.home header .right').hide(100);
    $('.center').animate({
      opacity:'1'
    },500);
        removeActiveClass();
    $('.center').find('.js-open-about').addClass('active');
  });

  $('.js-open-works').on('click',function(e){
    e.preventDefault();
    removeOpenClass();
    $('.works').addClass('open');
    $('.close-arrow').show(600);
    if($(window).width()<=900) $('.container.home header .right').hide(100);
    $('.center').animate({
      opacity:'1'
    },500);
        removeActiveClass();
    $('.center').find('.js-open-works').addClass('active');
  });

  $('.js-open-contact').on('click',function(e){
    e.preventDefault();
    removeOpenClass();
    $('.contact').addClass('open');
    $('.close-arrow').show(600);
    if($(window).width()<=900) $('.container.home header .right').hide(100);
    $('.center').animate({
      opacity:'1'
    },500);
    removeActiveClass();
    $('.center').find('.js-open-contact').addClass('active');
  });

  // $(".title h1").typed({
  //       strings: ["Hello", "Welcome", "I Am VinayPuppal", "A Self Taught","Web Developer"],
  //       typeSpeed: 100,
  //       loop: true
  //     });

function generateCard(data){
    var title = data.title;
    var desc = data.description;
    var imgUrl = data.previewUrl;
    var demoUrl = data.demoUrl;
    return ('<li class="card animated zoomIn"><div class="card-media"><img src='+imgUrl+' alt="#" /></div><div class="card-content"><h4>'+title+'</h4><p>'+desc+'</p></div><div class="card-actions"><a target="_blank" href='+demoUrl+' class="view-demo">View Demo</a></div></li>');
  }
  function renderToDom(data){
    data.forEach(function(item){
      var card = generateCard(item);
      //render card to dom
      //console.log(card);
      $('.js-list').append(card);
    });
  }
  //for intial rendering
  renderToDom(backend);

  function clearDom(){
    $('.js-list').empty();
  }
 $('input[type=radio]').on('change',function(e){
     switch(e.target.value){
       case 'frontend':
         clearDom();
         renderToDom(frontend);
         break;
       case 'backend':
         clearDom();
         renderToDom(backend);
         break;
       case 'react':
         clearDom();
         renderToDom(react);
         break;
       case 'meteor':
         clearDom();
         renderToDom(meteor);
         break;
     }
    });

  if(document.createElement("p").style.flex===undefined){
      $('.supported').hide();
      $('.not-supported').show();
      alert("Sorry your browser is not supported. Please Use Latest Browsers Like Chrome")
   }

   if(~navigator.userAgent.indexOf('UCBrowser') || ~navigator.userAgent.indexOf('Opera Mini')){
    $('.supported').hide();
    $('.not-supported').show();
    alert("Sorry your browser is not supported. Please Use Latest Browsers Like Chrome")
   }
});
