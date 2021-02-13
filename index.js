import {users, calendarHead, dayTimes, createEvent, userFilter} from './srs/js/calendar';

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const names = ['all users','Sasha', 'Sveta', 'Sofia', 'Kolya'];
const times = [10, 11, 12, 13, 14, 15, 16, 17, 18];
const tHead = document.getElementsByClassName('calendar__header')[0];
const tBody = document.getElementsByClassName('table__body')[0];
const user = document.getElementById('names');
const cellActive = [];

users(names, user);
calendarHead(["Name", ...weekDays], tHead);
dayTimes(times, tBody, weekDays);

if (!localStorage.getItem('calendarData')) {
    const data = {};

} else {
   const data = JSON.parse(localStorage.getItem('calendarData'));
   const dataEvent = Object.keys(data);
   createEvent(dataEvent, user, data);
   userFilter(user, dataEvent, data);
}

