(function() {

  var images = [];
  
  var imgMatchSign = document.queryCommandIndeterm("#imgMatchSign");

  var modalGameOver = document.querySelector("#modalGameOver");
  
  var flippedCards = [];

  var matches = 0;  

  for(var i = 0; i < 16; i++){
    var img = {
      src: "images/" + i + ".jpg",
      id: i%8
    };
    images.push(img);
  }

  startGame();

  function startGame(){
    
    flippedCards = [];

    matches = 0;

    images = randomSort(images);

    var frontFaces = document.getElementsByClassName("front");
    var backFaces = document.getElementsByClassName("back");

    for(var i = 0; i < 16; i++){
      frontFaces[i].classList.remove("match","flipped");
      backFaces[i].classList.remove("match","flipped");

      var card = document.querySelector('#card' + i);
      if(i === 0 || i === 8) {
        card.style.left = 5 + "px";
      }else{
        card.style.left = i%8 * 165 + 5 + "px";
      }

      if(i < 8){
      card.style.top = 5 + "px";
    }else{
      card.style.top = 250 + "px";
    } 
    
    card.addEventListener("click", flipcard, false);

    frontFaces[i].style.background = "url('"+ images[i].src +"')";
    frontFaces[i].setAttribute("id", images[i].id);
    
    }

    modalGameOver.style.zIndex = -2;
    modalGameOver.removeEventListener('click', function () {
      startGame();
     }, false);
  }

  function randomSort(oldArray){
    var newArray = [];

    while(newArray.length !== oldArray.length){
      var i = Math.floor(Math.random()*oldArray.length);

      if(newArray.indexOf(oldArray[i]) < 0){
        newArray.push(oldArray[i]);
      }

    }

    return newArray;
        
  }

  function flipcard(){

    if(flippedCards.length < 2){
      var faces = this.getElementsByClassName("face");

      if(faces[0].classList.length > 2){
        return;
      }

      faces[0].classList.toggle("flipped");
      faces[1].classList.toggle("flipped");

      flippedCards.push(this);

      if(flippedCards.length === 2){

        if(flippedCards[0].childNodes[3].id === flippedCards[1].childNodes[3].id){

          flippedCards[0].childNodes[1].classList.toggle("match");
          flippedCards[0].childNodes[3].classList.toggle("match");
          flippedCards[1].childNodes[1].classList.toggle("match");
          flippedCards[1].childNodes[3].classList.toggle("match");

          flippedCards = [];

          matches++;
          

          if(matches >= 8){
            gameOver();
          }
        }
      }

    } else {
      flippedCards[0].childNodes[1].classList.toggle("flipped");
      flippedCards[0].childNodes[3].classList.toggle("flipped");
      flippedCards[1].childNodes[1].classList.toggle("flipped");
      flippedCards[1].childNodes[3].classList.toggle("flipped");

      flippedCards = [];
    
    }
    
  }

  function gameOver(){
    modalGameOver.style.zIndex = "99";
    modalGameOver.addEventListener('click', function(){
      startGame();
    }, false);
  }

}());