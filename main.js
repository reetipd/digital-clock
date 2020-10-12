function showTime(){
    var Time = new Date();    //to initialize the current time
    var seconds = Time.getSeconds();         //getting the current seconds
    var minutes = Time.getMinutes();        //getting the current minutes
    var hours = Time.getHours();            //getting the current hours
    
    var amPm = "AM"; //setting defalt as AM
    var date = new Date().toDateString();
    //For displayng the time in 12 hour format , converting it if hours is greater than 12
    if (hours>12){
        hours = hours - 12;
        amPm = "PM";
    }
    //add 0 infront of time if they are less than 10
    if (hours == 0){
        hours = 12;
    }
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    document.getElementById('clock').innerText = hours + " : " + minutes + " : " + seconds + " " + amPm;
    document.getElementById('date').innerHTML = date;
}

//call the showTime function after every 1 sec to show updated real time
setInterval(showTime,1000);