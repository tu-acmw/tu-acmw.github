var emailText = document.getElementById("emailText");
var emailSubmitBtn = document.getElementById("emailSubmitBtn");

function emailSubmitClick(){
	var firebaseRef = firebase.database().ref();
	
	firebaseRef.child("Text").set(emailText.value);
	
}