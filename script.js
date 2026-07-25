let first = document.querySelector('input[name="fname"]')
let last = document.querySelector('input[name="lname"]')
function getFormvalue() {
	function completeName(first,last){
		return `${first} ${last}`
	}
	alert(first.value,last.value);
}
