function generatePassword(){
	const length = document.getElementById("length").value;
	const includeUppercase = document.getElementById("uppercase").checked;
	const includeNumbers = document.getElementById("numbers").checked;
	const includeSymbols = document.getElementById("symbols").checked;

	const uppercase = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
	const lowercase = "abcdefghijklmnopqrstuvwxyz";
	const numbers = "123456789";
	const symbols = "!@#$%^&*()_+[]{}|;:,.";

	let characters = lowercase;
	if(includeUppercase) characters += uppercase;
	if(includeNumbers) characters += numbers;
	if(includeSymbols) characters += symbols;

	let password = '';
	for(let i = 0; i < length; i++){
		const randomIndex = Math.floor(Math.random() * characters.length);
		password += characters[randomIndex];
	}
     document.getElementById('password').value = password;
}