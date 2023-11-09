const historysOb = {
    Drinks:{
      number: "93",
      text: "In our restaurant, special attention is paid to drinks. Inspired by the natural springs found in the forest during the founders' lost journey, we have created an exclusive line of drinks. Each drink is made from fresh ingredients, water from mountain springs and carefully selected spices, which makes its taste unique."
    },
    Food:{
      number: "206",
      text: "The food in our restaurant is not just dishes, it's works of art. The founders of the restaurant, having learned how to survive in the wild, brought elements of wildlife to the menu. We use only the freshest local products, prepare them using traditional methods, preserving all the useful properties and taste."
    },
    Snacks:{
      number: "71",
      text: "Snacks in our restaurant also have their own unique history. Inspired by the simple but delicious snacks that the founders prepared for themselves in the forest, we created a menu in which each snack tells its own story. From tiny delicacies to rich dishes, our snacks perfectly complement any drink or main course."
    },
}

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.querySelectorAll(".btn-outline-secondary");
    let text = document.getElementById('history-text');
    let textOriginal = text.textContent;
    buttons.forEach((button, i) => {
      button.addEventListener("mouseover", function() {
        const keys = Object.keys(historysOb);
        const hist = historysOb[keys[i]];
        if(hist){
          text.textContent = `${hist.text}`;
        }
      })

      button.addEventListener("mouseout", function(){
        text.textContent = textOriginal;
      })
    });



})

function imageZoom(imgID, resultID) {
  var img, lens, result, cx, cy;
  img = document.getElementById(imgID);
  result = document.getElementById(resultID);
  /* Create lens: */
  lens = document.createElement("DIV");
  lens.setAttribute("class", "img-zoom-lens");
  /* Insert lens: */
  img.parentElement.insertBefore(lens, img);
  /* Calculate the ratio between result DIV and lens: */
  cx = (result.offsetWidth / lens.offsetWidth) / 2;
  cy = (result.offsetHeight / lens.offsetHeight) / 2;

  /* Set background properties for the result DIV */
  result.style.backgroundImage = "url('" + img.src + "')";
  result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
  /* Execute a function when someone moves the cursor over the image, or the lens: */
  lens.addEventListener("mousemove", moveLens);
  img.addEventListener("mousemove", moveLens);
  /* And also for touch screens: */
  lens.addEventListener("touchmove", moveLens);
  img.addEventListener("touchmove", moveLens);
  function moveLens(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    /* Calculate the position of the lens: */
    x = pos.x - (lens.offsetWidth / 2);
    y = pos.y - (lens.offsetHeight / 2);
    /* Prevent the lens from being positioned outside the image: */
    if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
    if (x < 0) {x = 0;}
    if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
    if (y < 0) {y = 0;}
    /* Set the position of the lens: */
    lens.style.left = x + "px";
    lens.style.top = y + "px";
    /* Display what the lens "sees": */
    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
  lens.addEventListener("mouseenter", showResult);
  img.addEventListener("mouseenter", showResult);

  // Скрывать результат, когда мышь уходит с изображения или линзы
  lens.addEventListener("mouseleave", hideResult);
  img.addEventListener("mouseleave", hideResult);

  function showResult() {
      result.style.display = "block";
  }

  function hideResult() {
      result.style.display = "none";
  }

  document.addEventListener("keypress", function (e) {
      if (e.key === "d" || e.key === "D") {
        window.location.href = "fon.html";
      }
  });
}
