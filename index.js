import {users, calendarHead, dayTimes} from './calendar';

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
   dataEvent.forEach(el => {
        const activeCell = document.getElementById(el);
        activeCell.style.backgroundColor = '#D3F5B4';
        activeCell.innerHTML = `<div class="activeEvent">
        <p class="activeEvent__name">${data[el].eventName}</p>
        <button type="button" class="activeEvent__button" id="button_${el}">&#10006</button>
        </div>`
        // cellActive.push(activeCell)
        const activeEventButton = document.getElementById(`button_${el}`);
        // console.log(activeEventButton);
        activeEventButton.addEventListener('click', () => {
            // console.log('click Button');
            const modalBacground = document.getElementsByClassName('header');
            // console.log('body', document.body);
            document.body.insertAdjacentHTML('afterbegin', `
                 <div class="modal">
                     <div class="modal__window">
                         <p>lorem Ipsum& </p>
                         <div>
                             <button class="modalButton">Cansel</button>
                             <button class="modalButton">Ok</button>
                         </div>
                     </div>
                 </div>
            `)
             const modal = document.getElementsByClassName('modal')[0];
            const modalButtonCansel = document.getElementsByClassName('modalButton')[0];
            const modalButtonOk = document.getElementsByClassName('modalButton')[1];
            modalButtonCansel.addEventListener('click', () => {
                 modal.remove();
            });
            modalButtonOk.addEventListener('click', () => {
                // console.log('button ok', activeCell);
                activeCell.style.backgroundColor = '';
                activeCell.innerHTML = '';
                delete data[el];
                // console.log('data', data);
                localStorage.setItem('calendarData', JSON.stringify(data))
                modal.remove();
            })
        })

        user.addEventListener('blur', () => {
            if(user.value !== 'all users') {
                    dataEvent.forEach(el => {
                        const userEv = data[el].eventPartisipans;
                        if(user.value !== userEv) {
                            const delCell = document.getElementById(el);
                            console.log('el', delCell );
                            delCell.innerHTML = '';
                            delCell.style.backgroundColor = '';
                        }
                        
        
                    })
        
                }
            // }
            // dataUser(data)
        })
    
   })
//    user.addEventListener('blur', () => {
//     if(user.value !== 'all users') {
//         alert(user.value)
//         function dataUser(data, activeCell) {
//             const usersNotActive = [];
//             dataEvent.forEach(el => {
//                 const userEv = data[el].eventPartisipans;
//                 if(user.value !== userEv) {
//                 }
                

//             })

//         }
//     }
//             })
        
        // dataUser(data)
    }
   
//    console.log(user.value);





