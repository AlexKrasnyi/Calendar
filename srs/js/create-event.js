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
    const partisipantsEvent = document.getElementsByClassName('select__field')[0].textContent.replace(/(\,.*)\./g).split(' ');
    const dayEvent = document.getElementById('event__day').value;
    const timeEvent = document.getElementById('event__time').value;
    if(nameEvent && partisipantsEvent && dayEvent && timeEvent) {
        console.log(nameEvent, partisipantsEvent, dayEvent, timeEvent );
        const name = `${dayEvent}_${timeEvent}`.toLowerCase();
        if(typeof data[name] !== "undefined") {
            error('This day and time occupied')
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
        error('All fields can be fill')
    }      
});


function error (text) {
    const eventContainer = document.getElementsByClassName('event')[0];
        const error = document.getElementsByClassName('error')[0];
            if(error) {
                error.parentNode.removeChild(error)
            }
            eventContainer.insertAdjacentHTML('afterbegin', `
            <div class="errorContainer">
                <div class="error">
                    <span>ERROR!!!</span>
                    <p> ${text}</p>
                </div>
            </div>
            `)
}
function partisipans() {
    const eventUser = document.getElementsByClassName('select__items')[0];
    for(let i = 0; i < names.length; i++) {
        eventUser.insertAdjacentHTML('beforeend', `
        <li class="select__item" data-select="item">${names[i]}</li>
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

const usersButton = document.getElementsByClassName('select__trigger')[0];
usersButton.addEventListener('click', () => {
    const userList = document.getElementsByClassName('select__dropdown')[0];
    const backDrop = document.getElementsByClassName('select__backdrop')[0];
    userList.style.display = 'block';
    backDrop.style.display = 'block';
    addParticipants(userList);
    backDrop.addEventListener('click', ()=> {
        userList.style.display = 'none';
        backDrop.style.display = 'none';
    })
})

function addParticipants(userList) {
    const evUsers = []
    const items = document.getElementsByClassName('select__item');
    const userField = document.getElementsByClassName('select__field')[0];
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', () => {
            if(!evUsers.includes(items[i].textContent)) {
                userField.insertAdjacentText('beforeend', `${items[i].textContent} `)
                items[i].style.backgroundColor = 'lightblue';
                evUsers.push(items[i].textContent)
            }
        })
    } 
}
