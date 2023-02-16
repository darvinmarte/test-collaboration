//getting todays date

function headerTime(){
    var timeInterval = setInterval(function(){

    }, 1000);
}

var today = dayjs();
var reformatDate = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
console.log(reformatDate);