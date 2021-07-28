 //--Get user string from the page (controller function)--//
 function getValue(){
     //--Make sure the alert is invisible--//
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    //--Check for a palindrome--//
    let returnObj = checkPalindrome(userString);
    //--Display the results to the screen--//
    displayMessage(returnObj);
}

//--Reverse the string and check for palindrome (logic function)--//
function checkPalindrome(userString){
    //--Ensure only alphanumeric characters are compared, no spaces or symbols--//
    userString = userString.toLowerCase();
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex,"");
    //--Reverse the cleaned string using a for loop--//
    let revString = [];
    let returnObj = {};
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }
    //--Determine if the string is a palindrome and update the object msg property--//
    if(revString == userString){
        returnObj.msg = "SUCCESS! You entered a palindrome!"
    }else{
        returnObj.msg = "Sorry, you did not enter a palindrome."
    }
    returnObj.reversed = revString;
    return returnObj;
}

//--Show the result to the user (display function)--//
function displayMessage(returnObj){
    //--Write to page--//
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase in reverse is: ${returnObj.reversed}`;
    //--Show the alert box--//
    document.getElementById("alert").classList.remove("invisible");
}