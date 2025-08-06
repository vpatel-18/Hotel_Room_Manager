    let startX = 0, startY = 0;
    let fixedX, fixedY; 
    let currentCard = null;

    var rooms = [];
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


    for(var i = 0; i < nums.length; i++){
      rooms.push(new Room((innerWidth/100) + ((innerWidth*i)/10), 200, 100, 100, nums[i]));
    }



    function mouseDown(e) {
      currentCard = e.target;
      startX = e.clientX;
      startY = e.clientY;
      
      console.log(e.target);

      fixedX = e.target.style.left; 
      fixedY = e.target.style.top;

      document.addEventListener('mousemove', mouseMove);
      document.addEventListener('mouseup', mouseUp);
    }

    function mouseMove(e) {
      if (!currentCard) return;

      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      console.log(e + " \n \n" + dx+ ", " + dy);

      startX = e.clientX;
      startY = e.clientY;


      currentCard.style.left = (currentCard.offsetLeft + dx) + 'px';
      currentCard.style.top = (currentCard.offsetTop + dy) + 'px';
    }

    function mouseUp() {

      console.log("Replace: " + e.target.innerText);

      currentCard.style.left = fixedX; 
      currentCard.style.top = fixedY;

      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseup', mouseUp);
      currentCard = null;
    }