function getAkanName(){
  const maleAkanNames = ["Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"];
  const femaleAkanNames = ["Ama", "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  //Collect data from html
  var gender = document.getElementsByName("gender").value;
  var myBirthday = document.getElementById("myBirthDate").value;
  var dateOfBirth = new date (myBirthday);
  var dayOfTheWeek = dateOfBirth.getDay();

  if (myBirthday === ""){
    document.getElementById('message').innerHTML = "Didn't submit valid date";
    alert("Enter Birth Date");
  }
  else {
    for (var i = 0; i < myGender.length; i++) {
      if (myGender[i].checked){
        if (myGender[i].value === "Male"){
          alert("Born on a " + "" + days[dayOfTheWeek], + "Your Akan Name is" + "" + maleAkanNames[dayOfTheWeek]);
        }
        else {
          alert("Born on a " + "" + days[dayOfTheWeek], + "Your Akan Name is" + "" + femaleAkanNames[dayOfTheWeek]);
        }
        break;
      }
      else {
        document.getElementById('message').innerHTML = "Plase select a Gender";
      }
    }
}
