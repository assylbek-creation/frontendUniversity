
window.onload = function() {
  const parallax = document.querySelector('.parallax');

  if(parallax){
    const content = document.querySelector('.parallax__container');
    const clouds = document.querySelector('.images-parallax__clouds');
    const mountains = document.querySelector('.images-parallax__mountains');
    const human = document.querySelector('.images-parallax__human');

    const forClouds = 40;
    const forMountains = 20;
    const forHuman = 10;

    const speed = 0.05;

    let positionX = 0, positionY = 0;
    let coordXprocent = 0, coordYprocent = 0;

    function setMouseParallaxStyle(){
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;

      positionX = positionX + (distX * speed);
      positionY = positionY + (distY * speed);

      clouds.style.cssText = `transform: translate(${positionX / forClouds}%, ${positionY/forClouds}%);`;
      mountains.style.cssText = `transform: translate(${positionX / forMountains}%, ${positionY/forMountains}%);`;
      human.style.cssText = `transform: translate(${positionX / forHuman}%, ${positionY/forHuman}%);`;

      requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();

    parallax.addEventListener("mousemove", function(e){
      const parallaxWidth = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;

      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;

      coordXprocent = coordX / parallaxWidth * 100;
      coordYprocent = coordY / parallaxHeight * 100;
    });

    let thresholdSets = [];

    for(let i=0; i<=1.0; i+=0.005){
      thresholdSets.push(i);
    }

    const callback = function(entries, observer){
      const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
      // setParallaxItemStyle(scrollTopProcent);
    }
    const observer = new IntersectionObserver(callback, {
      threshold: thresholdSets
    });

    observer.observe(document.querySelector('.content'));
    //
    // function setParallaxItemStyle(scrollTopProcent){
    //   content.style.cssText = `transform: translate(0%, -${scrollTopProcent / 9}%);`;
    //   mountains.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 6}%);`;
    //   human.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 3}%);`;
    //
    // }

  }
    $(document).ready(function(){
      let initialFontSize = parseInt($('.header-title').css('font-size'));
      let increasedFontSize = initialFontSize * 1.1;
      let decreasedFontSize = initialFontSize / 1.1;

      $('.header-title').hover(function(){
          // Увеличиваем размер текста при наведении
          $(this).animate({
              'font-size': increasedFontSize + 'px'
          }, 500);
      }, function(){
          // Возвращаем к начальному размеру при убирании курсора
          $(this).animate({
              'font-size': decreasedFontSize + 'px'
          }, 500, function(){
              // Возвращаем к абсолютно начальному размеру после анимации
              $(this).css('font-size', initialFontSize + 'px');
          });
      });
  });

  const restaurantData = {
    name: "Our Reustarant",
    location: "Astana",
    dishesCount: 100,
  };
  const cart_img = document.querySelector('.cart-img')
  cart_img.addEventListener('click', function(){
    const audio = document.getElementById('cartSound');
    audio.play();

    console.log(`Welcome to ${restaurantData.name} located at ${restaurantData.location}. We have ${restaurantData.dishesCount} dishes for you!`);
  });

  cart_img.addEventListener('mouseover', function(){
    this.style.transform = 'scale(1.1)';
  })

  cart_img.addEventListener('mouseout', function(){
    this.style.transform = 'scale(1.0)';
  });

  document.addEventListener('keypress', function(event){
    if(event.key === 'c'){
      alert('You pressed the "c" key!')
    }
  });

  let soundMouse = document.querySelectorAll(".nav-link");

  console.log(soundMouse)

  soundMouse.forEach((pic, index) =>{
    pic.addEventListener('click', function(){
      const audioMouse = document.getElementById('cartSound');
      audioMouse.play();
      console.log(audioMouse)
      console.log(index)

    })
  })


}
