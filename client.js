
//The checkbox action for the password
window.onload = function(){
	checkb = document.getElementById("cb");
	checkb.addEventListener("click", changeType);
	function changeType() {
		var pass = document.getElementById("passwd");
		//make this fire onclick event
		if(checkb.checked) {
			pass.setAttribute("type", "text");
		}
		else {
			pass.setAttribute("type", "password");
		}
	}

	sub = document.getElementById("sub");
	sub.addEventListener("mousedown", changeTypeForSending);
	function changeTypeForSending() {
		var pass = document.getElementById("passwd");
		pass.setAttribute("type", "password");
	}
}
