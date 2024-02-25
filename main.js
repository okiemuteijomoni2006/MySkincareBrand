const countdown = () => {
    const countDate = new Date('April 17, 2024 00:00:00').getTime()
    const now = new Date().getTime();
    const gap = countDate - now;

    //Setting timer 
    const seconds = 1000;
    const minutes = seconds * 60
    const hours = minutes * 60
    const days = hours * 24
    
    //calculating countdown
    const textdate = Math.floor(gap / days);
    const texthour = Math.floor((gap% days)/ hours);
    const textmin = Math.floor((gap% hours)/ minutes);
    const textsec = Math.floor((gap% minutes)/ seconds);

document.querySelector('#days').innerText = textdate;
document.querySelector('#hours').innerText = texthour;
document.querySelector('#minutes').innerText = textmin;
document.querySelector('#seconds').innerText = textsec;

};

setInterval(countdown, 1000);