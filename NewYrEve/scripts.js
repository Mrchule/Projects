let d=document.querySelector('#day');
let hours=document.querySelector('#hour');
let min=document.querySelector('#min');
let sec=document.querySelector('#sec');

function calculate() {
  const date = new Date();
  const newyr = new Date("1 jan 2025");
  let totalMilisecond = newyr - date;
  let secc=totalMilisecond / 1000;
  let TotalSecond = Math.floor(secc%60);
  const minutes = Math.floor(secc / 60 %60);
  const hour = Math.floor((secc /3600)%24);
  const day = Math.floor((secc/3600)/24);
  // console.log(day, hour, minutes, secc);
  d.textContent=day;
  hours.textContent=Formattim(hour);
  min.textContent=Formattim(minutes);
  sec.textContent=Formattim(TotalSecond);
  setTimeout(calculate, 1000);
}
function Formattim(time){
  return time<10 ? (`0${time}`) : time ;
}