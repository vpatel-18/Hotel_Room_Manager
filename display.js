    let startX = 0, startY = 0;
    let fixedX, fixedY; 
    let currentCard = null;

    var rooms = [];
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


    for(var i = 0; i < nums.length; i++){
      rooms.push(new Room((innerWidth/100) + ((innerWidth*i)/10), 200, 100, 100, nums[i]));
    }

    function overlapCards(element1, element2){

      const elem1 = element1.getBoundingClientRect();
      const elem2 = element2.getBoundingClientRect();

      if(elem1.bottom < elem2.top || elem1.left > elem2.right || elem1.top > elem2.bottom || elem1.right < elem2.left){
        return false;
      }

      return true; 

    }

    function mouseDown(e) {
      currentCard = e.target;
      startX = e.clientX;
      startY = e.clientY;
      

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

      const elements = document.querySelectorAll('div');

      for(var i = 0; i < elements.length; i++){
        if(elements[i] != currentCard){
          if(overlapCards(currentCard, elements[i])){
            currentCard.style.background = "blue";
          }
        }
        else{
          currentCard.style.background = "pink";
        }
      }
    }

    function mouseUp() {


      currentCard.style.left = fixedX; 
      currentCard.style.top = fixedY;

      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseup', mouseUp);
      currentCard = null;
    }