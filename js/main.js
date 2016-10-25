function traducir() {
	document.getElementById('form-signin-heading').innerHTML ="Por favor iniciar sesión"

	var input = document.getElementById ("inputEmail");
	input.placeholder = "por favor ingresa tu email"; 

	var input = document.getElementById ("inputPassword");
	input.placeholder = "contraseña";

	document.querySelector ('.checkbox span').innerHTML ="recuerdame";

	document.querySelector ('button').innerHTML ="inscribirme";
}
