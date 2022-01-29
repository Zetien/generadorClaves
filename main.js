const generarPassword=(base, length)=>{
	let password ="";
	for (let i = 0; i < length; i++) {
		let random = Math.floor(Math.random()*base.length)
		password += base.charAt(random) 
	}
	return password

}

const generate=()=>{
	let length=parseInt(inputLength.value);

	let base="abcdefghijklnmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
	const numeros ="0123456789";
	const simbolos="!@#$%^&*(){}<>?;.,[]";

	if (checkbox1.checked) {
		base+=numeros;
	}
	if (checkbox2.checked) {
		base+=simbolos;
	}
	passwordGenerado.innerText=generarPassword(base, length);
};




window.addEventListener('DOMContentLoaded',()=>{
	btnGenerar.addEventListener("click",()=>{
		generate();
	});
});