// Создаём объект с информацией о гамбургерах
const hamburgers = {
    small: {
        name: "Hamburger S",
        price: "$1",
        img: "assets\\pic1.jpg"
    },
    medium: {
        name: "Hamburger M",
        price: "$2",
        img: "assets\\pic2.png"
    },
    large: {
        name: "Hamburger L",
        price: "$3",
        img: "assets\\pic3.jpg"
    }
};

document.addEventListener("DOMContentLoaded", function () {
    // Выбираем элементы на странице
    const bigPic = document.querySelector(".big_pic img");
    const smallPics = document.querySelectorAll(".all_small_pic img");
    const dishTexts = document.querySelectorAll(".text div");
    const ourDishes = document.querySelector(".our_dishes");
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];

    // Загружаем звуковой файл для воспроизведения при клике на "Наши блюда"
    const ourDishesMusic = new Audio("assets/click.mp3");

    smallPics.forEach((pic, index) => {
        pic.addEventListener("mouseover", function () {
            // Изменяем большое изображение на изображение, на которое навели курсор
            bigPic.src = pic.src;

            // Изменяем текст рядом с изображением на соответствующий текучему изображению гамбургера
            const keys = Object.keys(hamburgers);
            console.log(keys);
            const hamburger = hamburgers[keys[index]];
            console.log(index);
            if (hamburger) {
                correspondingText.style.color = 'rgb(253, 186, 147)';  // Меняем цвет текста на красный
            }
        });
    });


    // Обработчики для закрытия модального окна
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    document.addEventListener('keypress', function(e){
        if(e.key == 'C' || e.key == 'c'){
            if (ourDishesMusic.paused) {
                ourDishesMusic.play();
            } else {
                ourDishesMusic.pause(); // Останавливаем музыку
                ourDishesMusic.currentTime = 0; // Сбрасываем время воспроизведения музыки к началу
            }
            ourDishes.style.transition = "all 0.5s";
            ourDishes.style.transform = "scale(1.2)";
            setTimeout(() => {
                ourDishes.style.transform = "scale(1)";
            }, 500);


    
            // Показать модальное окно
            modal.style.display = "block";

            btn.onclick = function(e){
                var userInput = document.getElementById("myInput").value;
                if(userInput.toLowerCase() === 'best'){
                    alert('Congratulations! You have applied the promo code.');
                }
                else{
                    alert('Incorrect Promocode')
                }
            }
            
        }

    })

});


let soundMouse = document.querySelectorAll(".nav-link");
console.log(soundMouse)
soundMouse.forEach((pic, index) =>{
    pic.addEventListener('click', function(){
      const audioMouse = document.getElementById('mouse');
      audioMouse.play();
      console.log(audioMouse)
      console.log(index)

    })
  })