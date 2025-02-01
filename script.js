let date = document.getElementById('date');
let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');

let today = new Date()

let weekDays = ["Monday "," Tuesday","Wednesday "," Thursday","Friday ","Saturday ","Sunday ",]
let allMonth = [" January","February "," March"," April","May ","June ","Julay ","August ","September","October","November "," Desember",]

date.innerHTML=today.getDate()
day.innerHTML=weekDays[today.getDay()-1]
month.innerHTML=allMonth[today.getMonth()]
year.innerHTML=today.getFullYear()
console.log(weekDays)




// if (month == "Desember",date=="Friday");
if (today.getDate() === 20 && today.getMonth() === 12){
    document.body.style.background = 'yellow'
}



