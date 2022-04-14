//Variables



//Show today's date
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

var thisHour = moment().format("k");
console.log(thisHour);
//$("#9").addClass("bg-danger");

function check9 () {
    if (thisHour < 9) {
        $("#9").addClass("bg-primary");
    } else if (thisHour == 9) {
        $("#9").addClass(".bg-secondary");
    } else if (thisHour > 9) {
        $("#9").addClass("bg-danger");
    } return
}
// var now = moment();
// console.log(now.format("k"));


function check10 () {
    if (thisHour < 10) {
        $("#10").addClass("bg-primary");
    } else if (thisHour == 10) {
        $("#10").addClass(".bg-secondary");
    } else if (thisHour > 10) {
        $("#10").addClass("bg-danger");
    } return
}
check10();

function check11 () {
    if (thisHour < 11) {
        $("#11").addClass("bg-primary");
    } else if (thisHour == 11) {
        $("#11").addClass(".bg-secondary");
    } else if (thisHour > 11) {
        $("#11").addClass("bg-danger");
    } return
}
function check12 () {
    if (thisHour < 12) {
        $("#12").addClass("bg-primary");
    } else if (thisHour == 12) {
        $("#12").addClass(".bg-secondary");
    } else if (thisHour > 12) {
        $("#12").addClass("bg-danger");
    } return
}
function check1 () {
    if (thisHour < 13) {
        $("#1").addClass("bg-primary");
    } else if (thisHour == 13) {
        $("#1").addClass(".bg-secondary");
    } else if (thisHour > 13) {
        $("#1").addClass("bg-danger");
    } return
}
function check2 () {
    if (thisHour < 14) {
        $("#2").addClass("bg-primary");
    } else if (thisHour == 14) {
        $("#2").addClass(".bg-secondary");
    } else if (thisHour > 14) {
        $("#2").addClass("bg-danger");
    } return
}
function check3 () {
    if (thisHour < 15) {
        $("#3").addClass("bg-primary");
    } else if (thisHour == 15) {
        $("#3").addClass(".bg-secondary");
    } else if (thisHour > 15) {
        $("#3").addClass("bg-danger");
    } return
}
function check4 () {
    if (thisHour < 16) {
        $("#4").addClass("bg-primary");
    } else if (thisHour == 16) {
        $("#4").addClass(".bg-secondary");
    } else if (thisHour > 16) {
        $("#4").addClass("bg-danger");
    } return
}
function check5 () {
    if (thisHour < 17) {
        $("#5").addClass("bg-primary");
    } else if (thisHour == 17) {
        $("#5").addClass(".bg-secondary");
    } else if (thisHour > 17) {
        $("#5").addClass("bg-danger");
    } return
}

check9();
check10();
check11();
check12();
check1();
check2();
check3();
check4();
check5();
//$("#9").addClass("bg-primary");

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


//this will either need to be placed in an interval to be checked every say second. Or maybe I could use moment to determine colors throughout the day. set up a statement saying, at moment(example), color the rows as such. at moment(example), color the rows as such. and so on and so forth for the nine hours that apply to this particular scheduler.
//No interval needed for moment because it is constantly keeping up to date with that time. 
//If moment(k) >= 9 && moment(k) < 10) {
    //use the .addClass function to color each row accordingly
//} else if (moment(k) >= 10 && moment(k) < 11) {
    //use the .addClass function to color each row accordingly
//}