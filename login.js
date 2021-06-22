function required() {
  var user = document.form1.text1.value;
  var pass = document.form1.text2.value;


    if(user =="" || pass =="") {
    return false;
  }
  document.form1.submit;
  return true;

}
  //   alert("sorry...Please Enter Username and Password");
  //   return false;
  // } else {
  //   if (user == "") {
  //     alert("Please enter Username");
  //     return false;
  //   } else {
  //     if (pass == "") {
  //       return false;
  //       alert("Please enter Password");
  //       return false;
  //
  //
  //     } else {
  //       document.form1.submit;
  //       return true;
  //
  //     }
//
//
//   }
// }


// function required(){
//         var user = document.form1.text1.value;
//         var pass = document.form1.text2.value;
//   if(user == "" || pass == ""){
//           alert("sorry...Please Enter Username and Passowrd");
//      }else{
//   if(user == "" ){
//           document.loginform.submit();
//     }else{
//          alert("Please Enter Correct Credentials");
//   }
//        }
//            }
