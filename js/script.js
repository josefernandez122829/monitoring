$( function() {

let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

document.getElementById('datepicker').value = today;
console.log(today);

$('#datepicker').datepicker();
});