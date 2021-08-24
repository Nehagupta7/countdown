// constant variable inputDays,inputMonth that contain date and month from user
const inputDays = prompt('Type day like(23)');
const inputMonth = prompt('Type Month name (january february)');
const inputYear =prompt('Type the year');
//create all the variable from html is name
// const Days = document.querySelector('Days');
const Hour = document.querySelector('Hour');
const Minutes = document.querySelector('Minutes');
const Seconds = document.querySelector('Seconds');

var x;
//  create function
function birth() {
  //type date and month store as declared date in destination variable
  let destination = new Date(`${inputMonth}${inputDays} ,${inputYear} 16:23:00`).getTime();
  //source variable store the current date 
  let source = new Date().getTime();
    // the difference variable store the difference of given user date and current date
  let difference = destination - source;
  //finding the day because diffrence variable return the value of milliseconds so we get  Days
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  //days return value like (13.44455)so math .floor function return the integer value
  var hour = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  //difference of days are like (.44455)has some hour and mint so we use % this to get the rest of number 
  var mint = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
  var sec = Math.floor(difference % (1000 * 60) / (1000));
  document.getElementById('Days').innerHTML = days;
  document.getElementById('Hour').innerHTML = hour;
  document.getElementById('Minutes').innerHTML = mint;
  document.getElementById('Seconds').innerHTML = sec;

  //all odf days hour mint sec are find then it store the span container into the html element
  if (days === 0 && hour === 0 && mint === 0 && sec === 0) 
  {//if time is over the messge are displayed
    clearInterval(x);
    document.getElementById('content').innerHTML = "times up!!! ";
  }
  else if (difference <=0) 
  {   //if the time is passed the message are displayed
    clearInterval(x);
    document.getElementById('content').innerHTML = "expried time period!!! ";
  }
  else 
  {//if time is correct the time are shown
    document.getElementById('content').innerHTML = " time start now!!!";
  }
} x = setInterval(birth, 1000);
//set interval the (1000)one second 
