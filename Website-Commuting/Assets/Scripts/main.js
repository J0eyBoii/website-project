function validate() {
  var age;
  age=document.formContact.IAge.value;
  if (document.formContact.IName.value == "") {
    alert('Please enter your name!');
    return(false);
  } else if (isNaN(age)==true || document.formContact.IAge.value=="") {
     alert('Please enter a valid age!');
     return(false);
   } if (document.formContact.Ifeedback.value == "") {
     alert('The feedback field is blank!');
     return(false);
   } else {
     document.getElementById("formContact").reset();
   }
}
