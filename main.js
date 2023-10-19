const secondHand = document.querySelector('.second')
const minuteHand = document.querySelector('.minute')
const hourHand = document.querySelector('.hour')

function setTime() {
    const date = new Date();

    const second = date.getSeconds() 
    const minute = date.getMinutes() 
    const hour = date.getHours()
    
    const secondDegree = ((second / 60) * 360) + 90;
    const minuteDegree = ((minute / 60) * 360) + ((second / 60) * 6) + 90;
    const hourDegree = ((hour / 12) * 360) + ((minute / 60) * 30) + 90;
   
     
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}


setInterval(setTime, 1000)