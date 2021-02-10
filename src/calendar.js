export const weekDays = ['Name', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']
export const names = ['Sasha', 'Sveta', 'Sofia', 'Kolya']

export function calendar (){
    document.body.innerHTML =`
    <div class="calendar__container">
        <div class="header">
            <h1>Calendar</h1>
            <input type="text" list="names" class="header__field" placeholder="all members">
            <datalist id="names"></datalist>
            <button type="button" class="header__button">New event +</button>
        </div>
        <div class="calendar">
            <table class="calendar__table table">
            <thead class="table__head">
                <tr class="calendar__header row"></tr>
            </thead>
            <tbody class="table__body" ></tbody> 
    </div>
    
    `
    const tHead = document.getElementsByClassName('calendar__header')[0];
    const tBody = document.getElementsByClassName('table__body')[0];
    const user = document.getElementById('names');

    users(names, user);
    calendarHead(weekDays, tHead);
    dayTimes(weekDays, tBody);

}

function users(arr, user) {
    for(let i = 0; i < arr.length; i++) {
        user.insertAdjacentHTML('beforeend', `
        <option value="${arr[i]}">${arr[i]}</option> 
        `)
    }
}

function calendarHead(arr, data){
    for(let i =0; i < arr.length; i++) {
        data.insertAdjacentHTML('beforeEnd', `
        <th class="row__sell">${arr[i]}</th>
        `)
   }
}

function dayTimes(arr, data) {
    for (let i = 10; i < 19; i++){
        data.insertAdjacentHTML('beforeend', `
        <tr class="calendar__row row">
        <td class="row__sell">${i}:00</td>
        <td class="row__sell ${arr[1].toLowerCase()}_${i}"></td>
        <td class="row__sell ${arr[2].toLowerCase()}_${i}"></td>
        <td class="row__sell ${arr[3].toLowerCase()}_${i}"></td>
        <td class="row__sell ${arr[4].toLowerCase()}_${i}"></td>
        <td class="row__sell ${arr[5].toLowerCase()}_${i}"></td>
    </tr>
        `)
    }
}

