import {weekDays, names} from './calendar'

export function createEvent() {
 document.body.insertAdjacentHTML('afterbegin', `
<div class="event">
        <div class="event__name field">
            <label for="event__name" class="field__name">Name of the event:</label>
            <input type="text" id="event__name" name="event__name" class="field__data">
        </div>
        <div class="event__users field">
            <label for="event__users" class="field__name">Partisipants:</label>
            <input type="text" id="event__users" name="event__users" list="users" class="field__data">
            <datalist id="users"></datalist>
        </div>
        <div class="event__day field">
            <label for="event__day" class="field__name">Day:</label>
            <input type="text" id="event__day" name="event__day" list="days" class="field__data">
            <datalist id="days"></datalist>
        </div>
        <div class="event__time field" >
            <label for="event__time" class="field__name">Time:</label>
            <input type="text" id="event__time" name="event__time" list="times" class="field__data">
            <datalist id="times">
            </datalist>
        </div>
        <div class="buttons">
            <button type="button" class="event__button buttonCancel">Cansel</button>
            <button type="button" class="event__button buttonOk">Ok</button>
        </div>
    </div>`)
    users();
    day();
    times();
};

    function users() {
        const eUsers = document.getElementById('event__name')
        const eventUser = document.getElementById('users');
        for(let i = 0; i < names.length; i++) {
            eventUser.insertAdjacentHTML('beforeend', `
            <option value="${names[i]}" class="userOption"> ${names[i]}</option>
            `)
        }
        const userOption = document.getElementsByClassName('userOption');
        for(let i = 0; i < userOption.length; i++) {
            userOption[i].addEventListener('click', () => {
                eUsers.value = `${eUsers.value}, ${userOption.value}`
            })
        }
    }

    function day() {
        const eventDay = document.getElementById('days');
        for (let i = 1; i < weekDays.length; i++) {
            eventDay.insertAdjacentHTML('beforeend', `
            <option value="${weekDays[i]}">${weekDays[i]}</option>
            `)
        }
    }
    function times() {
        const eventTime = document.getElementById('times');
        for (let i = 10; i < 19; i++){
            eventTime.insertAdjacentHTML('beforeend', `
            <option value="${i}">${i}:00</option> 
            `
            )}
    }