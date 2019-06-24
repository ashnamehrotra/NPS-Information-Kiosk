var container2 = document.getElementById("park-info-state");
var btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://developer.nps.gov/api/v1/parks?limits=500&api_key=4wRBdtDHPdue1L2T9USMQ7YDGm5Q9jBj4aCqu1dY');
  ourRequest.onload = function() {
    if(ourRequest.status != 200){
      alert(ourRequest.status+" Response Error!")
    }	
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML2(ourData);    
  };

  ourRequest.send();
});


function renderHTML2(myData) {

	container2.innerHTML = "";

	var val = document.getElementById("state").value;
	var htmlString = "<p>"+"Select a park from "+val+" down below, or slect another state!</p>\n";
	var parksC = [];
	var parksN = [];


	for (i = 0; i < myData.data.length; i++) {
		if(myData.data[i].states == val){
			parksC.push(myData.data[i].parkCode);
		  	parksN.push(myData.data[i].fullName);
		 }
	}

	if(parksC.length != 0){

	  	htmlString += "<select id=\"newList\">";

	  	for(i=0; i<parksC.length; i++)
	  		htmlString += "<option value=\""+parksC[i]+"\">"+parksN[i]+"</option>";

	  	htmlString+="</select>";

	  	htmlString+="<button id=\"getInfo2\">Get park info!</button>";

	 	container2.insertAdjacentHTML('beforeend', htmlString);

	 	btnGetInfo = document.getElementById("getInfo2");

	  	btnGetInfo.addEventListener("click", function() {
	  		var list =  document.getElementById("newList");
	     	var selectedValue = list.options[list.selectedIndex].value;
		  	sessionStorage.setItem("parkCode", JSON.stringify(selectedValue));
			var openedWindow = window.open("displayInfo.html");
		});

	}
	else{
	 	window.alert("No parks in "+val+"! Please select another state.");
	}
}