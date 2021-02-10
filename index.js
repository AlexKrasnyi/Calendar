import {calendar} from './src/calendar';
import {createEvent} from './src/create-event'

calendar();

const addEvent = document.getElementsByClassName('header__button')[0];
const cal = document.getElementsByClassName('calendar__container')[0];

addEvent.addEventListener('click', () => {
    cal.style.display = 'none';
    // document.body.insertAdjacentHTML('afterbegin', createEvent);
    createEvent();
    const addNewEvent = document.getElementsByClassName('event__button');
    const eventPage = document.getElementsByClassName('event')[0];
    console.log(addNewEvent);
    addNewEvent[0].addEventListener('click', () => {
        eventPage.style.display = 'none';
        cal.style.display = 'grid';
});
    addNewEvent[1].addEventListener('click', () => {
        const eventName = document.getElementsByClassName('field__data');
        const activeCell = document.getElementsByClassName(`${eventName[2].value}_${eventName[3].value}`.toLowerCase())[0];
        if(!activeCell.textContent){
            activeCell.style.backgroundColor = '#D3F5B4';
            activeCell.textContent = `${eventName[0].value}`
            eventPage.style.display = 'none';
            cal.style.display = 'grid';
        } else {
            alert('error')
        }
        


    })
})
