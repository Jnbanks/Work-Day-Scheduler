//Show today's date
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));
var currentHour = moment("k");
var row9 = $("#9");

function check9 () {
    let row9 = 9;
    if (currentHour < row9) {
        $("#9").addClass("bg-primary");
    } else if (currentHour == row9) {
        $("#9").addClass(".bg-secondary");
    } else if (currentHour > row9) {
        $("#9").addClass("bg-danger");
    } return
}

$("#9").addClass(".future");

//determine the color of the middle input box based on past, present and future
//compare the input-box number with the current hour as determined by moment
//if the input-box number is less than the current moment hour, .past(css)
//else if the input-box number is equal to the current moment hour, .present(css)
//else if the input-box number is greater than the current moment hour, .future(css)
//question, how to get the input-box number? 
//      ids sound good, but an array with the   numbers representing those hours (military time) which can be used to relate to those ids sounds even better.
//how to make the comparison?
//      var currentHour = moment(k) < || = || > hourBox[i]
//Looks like I'll need a for function with the if parameters above
//  Could like like: 
//  for (i = 0; i < hourBox.length; i++) {

//}

//Next you will need a function that saves input, places it in local storage, and then recalls and reloads it when the page is refreshed