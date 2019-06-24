var btn = document.getElementById("btn");
var container = document.getElementById("park-info");


btn.addEventListener("click", function() {
	var ourRequest = new XMLHttpRequest();
  	ourRequest.open('GET', 'https://developer.nps.gov/api/v1/parks?limits=500&api_key=4wRBdtDHPdue1L2T9USMQ7YDGm5Q9jBj4aCqu1dY');
  	ourRequest.onload = function() {
      if(ourRequest.status != 200){
        alert(ourRequest.status+" Response Error!")
      }
	    var ourData = JSON.parse(ourRequest.responseText);
	    renderHTML(ourData);    
  	};
		ourRequest.send();
	});

function renderHTML(myData) {
  container.innerHTML = "";
  var htmlString = "<select id=\"parkList\">";

  htmlString += "<option value=\""+"\">"+"Select a park</option>";

  for (i = 0; i < myData.data.length; i++) {
    htmlString += "<option value=\""+myData.data[i].parkCode+"\">"+myData.data[i].fullName+"</option>";

  }

  htmlString+="</select>";

  htmlString+="<button id=\"getInfo\">Get park info!</button>";

  container.insertAdjacentHTML('beforeend', htmlString);

  var displayInfo = document.getElementById("getInfo");

  displayInfo.addEventListener("click", function() {
  	var list =  document.getElementById("parkList");
 	 var selectedValue = list.options[list.selectedIndex].value;
  	 sessionStorage.setItem("parkCode", JSON.stringify(selectedValue));
	 var opened = window.open("displayInfo.html");
  });  
}

