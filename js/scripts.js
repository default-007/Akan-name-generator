function calculateWeek(){
  var maleAkanNames = ["Kwame","Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi"];
  var femaleAkanNames = ["Ama","Akosua","Adwoa","Abenaa","Akua","Yaa","Afua"];
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  var day = parseInt(document.getElementById(day))
  var month = parseInt(document.getElementById(month))
  var year = parseInt(document.getElementById(year))
  var yy = parseInt(year/100)
  var cc = parseInt(year%100)

  let dayofWeek =  ( ( (CC/4) -(2*CC)-1) + ((5*YY)/4) + ((26*(MM+1)/10)) + DD) % 7

  if (gender === "male"){
  alert("Your Akan Name is; " + maleAkanNames[dayofWeek] + " born on " + days[dayofWeek])
  }else {
  alert("Your Akan Name is; " + femaleAkanNames[dayofWeek] + " born on " + days[dayofWeek])
  }
  return false;
  }
