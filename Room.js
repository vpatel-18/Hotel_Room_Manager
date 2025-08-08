class Room{

    constructor(x, y, width, height, number){

        /*this.height = 60; 
        this.width = 50; 
        this.yPosition = nums.length; 
        this.xPosition = nums.length;
        this.number = number; */

        this.width = width; 
        this.height = height; 
        this.number = number; 

        const newCard = document.createElement('div');
        const cardText = document.createElement('p');
        newCard.classList.add('card');
        newCard.style.top = y+ 'px';
        newCard.style.left = x + 'px';
        newCard.style.background = 'pink';
        newCard.style.width = '100px';
        newCard.style.height = '100px';
        newCard.innerText = this.number;
        newCard.style.textAlign = 'center';
        newCard.style.justifyContent = 'center';


        newCard.addEventListener('mousedown', mouseDown);
        document.body.appendChild(newCard);

    }


    swapRoom(other){

        let placeholder = other; 

        other = this.newCard; 
        this.newCard = placeholder; 


    }

}