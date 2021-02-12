const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const names = ['Sasha', 'Sveta', 'Sofia', 'Kolya'];
const times = [10, 11, 12, 13, 14, 15, 16, 17, 18]
let data = {};
if (localStorage.getItem('calendarData')) {
    data = JSON.parse(localStorage.getItem('calendarData'));
}
partisipans();
days();
time();

const addEvent  = document.getElementsByClassName('event__button');
const returnHome = document.getElementsByClassName('homeWay')[0];
addEvent[0].addEventListener('click', () => returnHome.click());
addEvent[1].addEventListener('click', () => {
    const nameEvent = document.getElementById('event__name').value;
    const partisipantsEvent = document.getElementById('event__users').value;
    const dayEvent = document.getElementById('event__day').value;
    const timeEvent = document.getElementById('event__time').value;
    if(nameEvent && partisipantsEvent && dayEvent && timeEvent) {
        console.log(nameEvent, partisipantsEvent, dayEvent, timeEvent );
        const name = `${dayEvent}_${timeEvent}`.toLowerCase();
        if(typeof data[name] !== "undefined") {
            alert('this day and time occupied');
        }else{
            console.log(name === 'mon_10');
        console.log('partisipantsEvent', partisipantsEvent);
        
        data[name] = {
            eventName : nameEvent,
            eventPartisipans: partisipantsEvent
        }
        localStorage.setItem('calendarData', JSON.stringify(data))
        returnHome.click();
        }      
    } else {
        alert('All fields can be fill')
    }      
});



function partisipans() {
    const eventUser = document.getElementById('event__users');
    for(let i = 0; i < names.length; i++) {
        eventUser.insertAdjacentHTML('beforeend', `
        <option value="${names[i]}" class="userOption"> ${names[i]}</option>
        `)
    }
}

function days() {
    const eventDay = document.getElementById('event__day');
    for (let i = 0; i < weekDays.length; i++) {
        eventDay.insertAdjacentHTML('beforeend', `
        <option value="${weekDays[i]}">${weekDays[i]}</option>
        `)
    }
}       
function time() {
    const eventTime = document.getElementById('event__time');
    for (let i = 0; i < times.length; i++){
        eventTime.insertAdjacentHTML('beforeend', `
        <option value="${times[i]}">${times[i]}:00</option> 
        `
        )}
}
