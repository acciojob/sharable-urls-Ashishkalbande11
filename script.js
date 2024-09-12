function updateURL(){
	const name = document.getElementById("name").value;
	const year = document.getElementById("year").value;

	let url = "https://localhost:8080/";

	if(name){
		url += `?name=${name}`;
	}
	if(year){
		url += ((name) ? "&" : "?")+`year=${year}`;
	}

	document.getElementById("url").textContent = url;
}