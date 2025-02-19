//Get the HTML elements fpr hours , minutes and seconds
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");

//Set an Interval to update the clock every second
const clock = setInterval(
  function time() {
    //Get the current date and time
    const date_now = new Date();

    //extract the hours,minutes and seconds from current time
    let hr = date_now.getHours();
    let min = date_now.getMinutes();
    let sec = date_now.getSeconds();

    //Ensure the hours,minutes and seconds are always two digits
    //For Example : 5 become 05
    hr = hr.toString().padStart(2, "0");
    min = min.toString().padStart(2, "0");
    sec = sec.toString().padStart(2, "0");

    //Update the content of the respective HTML elements with curent time
    hour.textContent = hr;
    minute.textContent = min;
    seconds.textContent = sec;
  },
  1000 //run the function every 1000 millisecond (1 second)
);
