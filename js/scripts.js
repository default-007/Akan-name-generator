$(document).ready(function(){
    $("#myBirthDate").mask("99/99/9999");
});


function getAkanName(){
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    var myBirthday = document.getElementById("myBirthDate").value;
    var myGender = document.getElementsByName("gender");
    var dateOfBirth = new Date(myBirthday);
    var dayOfTheWeek = dateOfBirth.getDay();
    if(myBirthday === ""){
        document.getElementById('message').innerHTML = " You Didn't Submit a Valid Date!";

    }
    else {
        for(var i=0;i<myGender.length;i++){
            if(myGender[i].checked){
                if(myGender[i].value === "Male"){
                    document.getElementById('message').innerHTML = " Born on a <span>" + days[dayOfTheWeek] +, "Your Akan Name's " + maleAkanNames[dayOfTheWeek] + "";

                }
                else {
                    document.getElementById('message').innerHTML = " Born on a <span>" + days[dayOfTheWeek] + "Your Akan Name's" + femaleAkanNames[dayOfTheWeek] + "";

                }
                break;
            }
            else {
                document.getElementById('message').innerHTML = "Please select a Gender";

            }
        }
    }
}

function clearAkanMessage(){
    document.getElementById('message').innerHTML = "";
    return false;
}
