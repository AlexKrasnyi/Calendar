
export function users(arr, user) {
    for(let i = 0; i < arr.length; i++) {
        user.insertAdjacentHTML('beforeend', `
        <option value="${arr[i]}">${arr[i]}</option> 
        `)
    }
}


export function calendarHead(arr, data){
    for(let i =0; i < arr.length; i++) {
        data.insertAdjacentHTML('beforeEnd', `
        <th class="row__sell">${arr[i]}</th>
        `)
    }
}

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
