function JQTest(){
	$("#test").get("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=links&titles=Charles_Duncan_(British_Army_soldier)&plnamespace=0&pllimit=500", function(data, status){
		alert("Data: " + data + "/nStatus: " + status);
	});
}

function fontFunction(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("test").innerHTML = xhttp.responseText;
		}
	};
	xhttp.open("GET", "demo_get.asp", true);
	xhttp.send();
	
	
	// document.getElementById("test").innerHTML = url;
}

//var url = "https://en.wikipedia.org"
//url += "/w/api.php?action=query&format=json&prop=links&titles=Charles_Duncan_(British_Army_soldier)&plnamespace=0&pllimit=500"