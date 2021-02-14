// form users in filter field
export function users(arr, user) {
    for(let i = 0; i < arr.length; i++) {
        user.insertAdjacentHTML('beforeend', `
        <option value="${arr[i]}">${arr[i]}</option> 
        `)
    }
}
// form table headers
export function calendarHead(arr, data){
    for(let i =0; i < arr.length; i++) {
        data.insertAdjacentHTML('beforeEnd', `
        <th class="row__sell">${arr[i]}</th>
        `)
    }
}
// form table cell
export function dayTimes(arr, data, days) {
    for (let i = 0; i < arr.length; i++){
        data.insertAdjacentHTML('beforeend', `
            <tr class="calendar__row row">
                <td class="row__sell">${arr[i]}:00</td>
                <td class="row__sell" id="${days[0].toLowerCase()}_${arr[i]}"></td>
                <td class="row__sell" id="${days[1].toLowerCase()}_${arr[i]}"></td>
                <td class="row__sell" id="${days[2].toLowerCase()}_${arr[i]}"></td>
                <td class="row__sell" id="${days[3].toLowerCase()}_${arr[i]}"></td>
                <td class="row__sell" id="${days[4].toLowerCase()}_${arr[i]}"></td>
            </tr>
        `)
    }    
}
// render events
export function createEvent(user) {
    const data = JSON.parse(localStorage.getItem('calendarData'));
    const dataEvent = Object.keys(data);
    dataEvent.forEach(el => {
        const activeCell = document.getElementById(el);
        displayEvent(activeCell, data, el)
        modalWindow (el, activeCell, data);
    })
}
// filters events by users
export function userFilter(user, dataEvent, data) {
    user.addEventListener('change', () => {
        createEvent(dataEvent, user, data)
        if(user.value !== 'all users') {
            dataEvent.forEach(el => {
                const userEv = data[el].eventPartisipans;
                
                if(!userEv.includes(user.value)) {
                    const delCell = document.getElementById(el);
                    delCell.innerHTML = '';
                    delCell.style.backgroundColor = '';
                } 
            })
        }
    })
}
// form new event
function displayEvent(activeCell, data, el) {
    activeCell.style.backgroundColor = '';
    activeCell.style.backgroundColor = '#D3F5B4';
        activeCell.innerHTML = `<div class="activeEvent">
        <p class="activeEvent__name">${data[el].eventName}</p>
        <button type="button" class="activeEvent__button" id="button_${el}">&#10006</button>
        </div>`
}
// cansel delete event
function abolishmentDeleteEvent() {
    const modal = document.getElementsByClassName('modal')[0];
    const modalButtonCansel = document.getElementsByClassName('modal__button')[0];
    modalButtonCansel.addEventListener('click', () => {
         modal.remove();
    });
}
// delete event
function removeEvent(cell, data, el) {
    const modal = document.getElementsByClassName('modal')[0];
    const modalButtonOk = document.getElementsByClassName('modal__button')[1];
    modalButtonOk.addEventListener('click', () => {
        cell.style.backgroundColor = '';
        cell.innerHTML = '';
        delete data[el];;
        localStorage.setItem('calendarData', JSON.stringify(data))
        modal.remove();
    })
}
// create modal window
function modalWindow (el, activeCell, data) {
    const activeEventButton = document.getElementById(`button_${el}`);
        activeEventButton.addEventListener('click', () => {
            const modalBacground = document.getElementsByClassName('header');
            document.body.insertAdjacentHTML('afterbegin', `
                 <div class="modal">
                     <div class="modal__window">
                         <p>Are yor sure you want to delete " ${data[el].eventName} " event?</p>
                         <div>
                             <button class="modal__button">No</button>
                             <button class="modal__button">Yes</button>
                         </div>
                     </div>
                 </div>
            `)
        abolishmentDeleteEvent();
        removeEvent(activeCell, data, el);
    })
}

