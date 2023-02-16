//getting todays date
var dateTimeEl = document.querySelector('#date-time');


dateTimeEl.textContent = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
function headerTime(){
    var timeInterval = setInterval(function(){
        dateTimeEl.textContent = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
    }, 1000);
}

headerTime();


