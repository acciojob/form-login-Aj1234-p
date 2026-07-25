let first = document.querySelector('input[name="fname"]')
let last = document.querySelector('input[name="lname"]')
function getFormvalue() {
  alert(`${first.value.trim()} ${last.value.trim()}`)
} 
