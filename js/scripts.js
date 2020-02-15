function calculateWeek(){
  var maleAkanNames = ["Kwame","Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi"];
  var femaleAkanNames = ["Ama","Akosua","Adwoa","Abenaa","Akua","Yaa","Afua"];
  var daysofWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var day = parseInt(document.getElementById(day).value);
  var month = parseInt(document.getElementById(month).value);
  var year = parseInt(document.getElementById(year).value);
  var gender = document.getElementsByName(gender)
  var yy = parseInt(year/100);
  var cc = parseInt(year%100);

  var dayofWeek =  ( ( (CC/4) -(2*CC)-1) + ((5*YY)/4) + ((26*(MM+1)/10)) + DD) % 7;

  if (gender === "male"){
  alert("Your Akan Name is; " + maleAkanNames[dayofWeek] + " born on " + daysofWeek[dayofWeek])
} else(gender === "female") {
  alert("Your Akan Name is; " + femaleAkanNames[dayofWeek] + " born on " + daysofWeek[dayofWeek])
  }
  return false;
  }
