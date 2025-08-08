    let startX = 0, startY = 0;
    let fixedX, fixedY; 
    let currentCard = null;
    let swapCard = null; 

    var rooms = [];
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const hitBox = document.createElement('div');
    document.body.appendChild(hitBox);


    for(var i = 0; i < nums.length; i++){
      rooms.push(new Room((innerWidth/100) + ((innerWidth*i)/10), 200, 100, 100, nums[i]));
    }

    function overlapCards(element1, element2){

      const elem1 = element1.getBoundingClientRect();
      const elem2 = element2.getBoundingClientRect();


      if(elem1.bottom < elem2.top || elem1.left > elem2.right || elem1.top > elem2.bottom || elem1.right < elem2.left){
        return false;
      }

      console.log("wegotem");

      return true; 

    }

    function mouseDown(e) {
      currentCard = e.target;
      startX = e.clientX;
      startY = e.clientY;
      
      console.log("Size: " + startX);

      hitBox.classList.add('card');
      hitBox.style.left = e.clientX + 'px';
      hitBox.style.top = e.clientY + 'px';
      hitBox.style.transform = 'translate(-50%, -50%)';

      hitBox.style.background = 'red'; 
      hitBox.style.width = '20px';
      hitBox.style.height = '20px';
      hitBox.style.borderRadius = '100px';

      hitBox.addEventListener('mousemove', mouseMove);
      hitBox.addEventListener('mouseop', mouseUp); 

      fixedX = e.target.style.left; 
      fixedY = e.target.style.top;

      document.addEventListener('mousemove', mouseMove);
      document.addEventListener('mouseup', mouseUp);
    }

    function mouseMove(e) {
      if (!currentCard) return;

      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      startX = e.clientX;
      startY = e.clientY;


      currentCard.style.left = (currentCard.offsetLeft + dx) + 'px';
      currentCard.style.top = (currentCard.offsetTop + dy) + 'px';

      hitBox.style.left = (hitBox.offsetLeft + dx) + 'px';
      hitBox.style.top = (hitBox.offsetTop + dy) + 'px';

      const elements = document.querySelectorAll('div');
      let cardsCollied = false; 
      
      for(var i = 0; i < elements.length; i++){
        try{
          if(elements[i] != currentCard && elements[i] != hitBox){
            if(overlapCards(hitBox, elements[i])){
              currentCard.style.background = "blue";
              swapCard = elements[i];
              cardsCollied = true;

              console.log("Collision Check: " + elements[i].innerText + " " + swapCard.innerText);
            }
          }
        }
        catch{
          alert("something happened");
        }
      }

      if(!cardsCollied){
        swapCard = null;
        currentCard.style.background = "white";
        cardsCollied = false; 
      }
    }

    function mouseUp() {


      if(swapCard != null){

        alert("Are you sure you want to swap");

        //currentCard.swapRoom(swapCard);

        swapCard = null; 
      }

      currentCard.style.left = fixedX; 
      currentCard.style.top = fixedY;
      currentCard.style.background = "pink";

      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseup', mouseUp);
      currentCard = null;
    }