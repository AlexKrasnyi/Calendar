const weekDays = JSON.parse(localStorage.getItem('weekDays'))
const participantsDict = JSON.parse(localStorage.getItem('participantsDict'))
const times = JSON.parse(localStorage.getItem('times'))
let data = {}
if (localStorage.getItem('calendarData')) {
  data = JSON.parse(localStorage.getItem('calendarData'))
}
partisipans()
days()
time()

let partisipantsData = []
const addEvent = document.getElementsByClassName('event__button')
const returnHome = document.getElementsByClassName('homeWay')[0]
addEvent[0].addEventListener('click', () => returnHome.click())
addEvent[1].addEventListener('click', () => {
  const nameEvent = document.getElementById('event__name').value
 // const partisipantsEvent = document.getElementsByClassName('select__field')[0].textContent.replace(/(\,.*)\./g).split(' ')
  const dayEvent = document.getElementById('event__day').value
  const timeEvent = document.getElementById('event__time').value
  if (nameEvent && partisipantsData && dayEvent && timeEvent) {
    console.log(nameEvent, partisipantsData, dayEvent, timeEvent)
    const name = `${dayEvent}_${timeEvent}`.toLowerCase()
    if (typeof data[name] !== 'undefined') {
      error('This day and time occupied')
    } else {
      console.log(name === 'mon_10')
      console.log('partisipantsEvent', partisipantsData)

      data[name] = {
        eventName: nameEvent,
        eventPartisipans: partisipantsData
      }
      localStorage.setItem('calendarData', JSON.stringify(data))
      returnHome.click()
    }
  } else {
    error('All fields can be fill')
  }
})

function error (text) {
  const eventContainer = document.getElementsByClassName('event')[0]
  const error = document.getElementsByClassName('error')[0]
  if (error) {
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

import { initMultiSelect } from '../js/multiselect'
function partisipans () {
  const element = document.getElementById('event__users')

  const select = function (data) {
    console.log(data)
    partisipantsData = data
  }

  initMultiSelect(element, participantsDict, select)

}

function days () {
  const eventDay = document.getElementById('event__day')
  for (let i = 0; i < weekDays.length; i++) {
    eventDay.insertAdjacentHTML('beforeend', `
        <option value="${weekDays[i]}">${weekDays[i]}</option>
        `)
  }
}

function time () {
  const eventTime = document.getElementById('event__time')
  for (let i = 0; i < times.length; i++) {
    eventTime.insertAdjacentHTML('beforeend', `
        <option value="${times[i]}">${times[i]}:00</option> 
        `
    )
  }
}

