import {users, calendarHead, dayTimes} from './calendar';

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const names = ['Sasha', 'Sveta', 'Sofia', 'Kolya'];
const times = [10, 11, 12, 13, 14, 15, 16, 17, 18];
const tHead = document.getElementsByClassName('calendar__header')[0];
const tBody = document.getElementsByClassName('table__body')[0];
const user = document.getElementById('names');

users(names, user);
calendarHead(["Name", ...weekDays], tHead);
dayTimes(times, tBody, weekDays);

if (!localStorage.getItem('calendarData')) {
    const data = {};
} else {
   const data = JSON.parse(localStorage.getItem('calendarData'));
   const dataEvent = Object.keys(data);
   console.log(dataEvent);
   dataEvent.forEach(el => {
       console.log(el);
       const activeCell = document.getElementById(el);
       activeCell.style.backgroundColor = '#D3F5B4';
       console.log(data[el].eventName);
       activeCell.innerHTML = `<div class="activeEvent">
       <p class="activeEvent__name">${data[el].eventName}</p>
       <button type="button" class="activeEvent__button" id="button_${el}">&#10006</button>
       </div>`

       const activeEventButton = document.getElementById(`button_${el}`);
       console.log(activeEventButton);
       activeEventButton.addEventListener('click', () => {
           console.log('click Button');
           const modalBacground = document.getElementsByClassName('header');
           console.log('body', document.body);
           document.body.insertAdjacentHTML('afterbegin', `
                <div class="modal">
                    <div class="modal__window">
                        
                    </div>
                </div>
           `)
       })
   })


}

