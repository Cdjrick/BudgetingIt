const calendar = document.getElementById('calDiv')
const daysArr = []

for(let dayNum = 1; dayNum <= 31; dayNum++) {
    daysArr.push(dayNum)
}

daysArr.forEach((day) =>{
    calendar.insertAdjacentHTML('beforeend', `<div id='day${day}' class='days'> ${day}</div>`)
    document.addEventListener(click, ()=>{
        
    })
})

