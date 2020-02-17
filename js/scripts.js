function calculateWeek(){
  const maleAkanNames = ["Kwame","Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi"];
  const femaleAkanNames = ["Ama","Akosua","Adwoa","Abenaa","Akua","Yaa","Afua"];
  const daysofWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var day = parseInt(document.getElementById(day).value);
  var month = parseInt(document.getElementById(month).value);
  var year = parseInt(document.getElementById(year).value);
  var gender = document.getElementsByName(gender)
  var yy = parseInt(year%100);
  var cc = parseInt(year/100);

  var dayofWeek =  ( ( (cc/4) -(2*cc)-1) + ((5*yy)/4) + ((26*(month+1)/10)) + day) % 7;
if day (day === 0) {
  return "Sunday"
} else if (day === 1) {
  return "Monday"
} else if (day === 2) {
  return "Tuesday"
} else if (day === 3) {
  return "Wednesday"
} else if (day === 4) {
  return "Thursday"
} else if (day === 5) {
  return "Friday"
} else (day === 6) {
  return "Sartuday"
}
  if (gender === "male"){
  alert("Your Akan Name is; " + maleAkanNames[dayofWeek] + " born on " + daysofWeek[dayofWeek])
} else(gender === "female") {
  alert("Your Akan Name is; " + femaleAkanNames[dayofWeek] + " born on " + daysofWeek[dayofWeek])
  }
  return false;
  }
