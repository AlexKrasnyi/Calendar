import {users, calendarHead, dayTimes, createEvent, userFilter} from './srs/js/calendar';

const weekDays = JSON.parse(localStorage.getItem('weekDays'))
const participantsDict = JSON.parse(localStorage.getItem('participantsDict'))
const times = JSON.parse(localStorage.getItem('times'))

const tHead = document.getElementsByClassName('calendar__header')[0];
const tBody = document.getElementsByClassName('table__body')[0];
const user = document.getElementById('names');

users(participantsDict, user);
calendarHead(["Name", ...weekDays], tHead);
dayTimes(times, tBody, weekDays);

if (!localStorage.getItem('calendarData')) {
    const data = {};

} else {
   const data = JSON.parse(localStorage.getItem('calendarData'));
   const dataEvent = Object.keys(data);
   createEvent(user);
   userFilter(user, dataEvent, data);
}
const linkToCreate = document.getElementById('linkToCreatePage');
const createButton = document.getElementsByClassName('header__button')[0];
createButton.addEventListener('click', () => linkToCreate.click());
