(function() {
  var images = [];
  startGame();

  function startGame(){
    for(var i = 0; i < 16; i++){
      var card = document.querySelector('#card' + i);
      console.log(card);
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

    }
  }

  function flipcard(){
    var faces = this.getElementsByClassName("face");
    faces[0].classList.toggle("flipped");
    faces[1].classList.toggle("flipped");
  }
}());