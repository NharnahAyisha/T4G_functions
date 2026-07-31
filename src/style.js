let gender = prompt("Please enter your gender (Male/Female):");


function checkGender(){
  if(gender === "female"){
    alert("You are a girl! 👩🏽‍🦱");
  }else if (gender === "male") {
    alert("You are a boy! 👨🏾");
  }else {
    alert("Invalid input. Please enter Male or Female.");
  }
}

checkGender();
