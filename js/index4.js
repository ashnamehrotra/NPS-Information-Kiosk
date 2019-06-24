var container4 = document.getElementById("park-info-keyword");
var btn2 = document.getElementById("btn3");

btn3.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://developer.nps.gov/api/v1/parks?limits=500&api_key=4wRBdtDHPdue1L2T9USMQ7YDGm5Q9jBj4aCqu1dY');
  ourRequest.onload = function() {
    if(ourRequest.status != 200){
      alert(ourRequest.status+" Response Error!")
    }
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML4(ourData);    
  };

  ourRequest.send();
});


function renderHTML4(myData) {

  container4.innerHTML = "";

  var inputDesignation=document.getElementById("keywords").value.toLowerCase();
  var words = inputDesignation.split(", ")
  var htmlString = ""
  var parksC = [];
  var parksN = [];

  for (i = 0; i < myData.data.length; i++) {
    var name = myData.data[i].fullName.toLowerCase()
    var contain = true

    for(x = 0; x<words.length; x++){
      var check = words[x].toLowerCase()
      if(name.includes(check) == false){
        contain = false;
      }
    }

    if(contain == true){
      parksC.push(myData.data[i].parkCode);
      parksN.push(myData.data[i].fullName);
    }

  }


  if(parksC.length != 0){

    htmlString += "<select id=\"myList\">";

    for(i=0; i<parksC.length; i++)
      htmlString += "<option value=\""+parksC[i]+"\">"+parksN[i]+"</option>"

    htmlString+="</select>"

    htmlString+="<button id=\"getParkInfo\">Get park info!</button>"

    container4.insertAdjacentHTML('beforeend', htmlString);

    getParkInfo = document.getElementById("getParkInfo");

    getParkInfo.addEventListener("click", function() {
      var list =  document.getElementById("myList");
      var selectedValue = list.options[list.selectedIndex].value;
      sessionStorage.setItem("parkCode", JSON.stringify(selectedValue));
      var openedWindow = window.open("displayInfo.html")
    });
  }
  else{
      window.alert("No parks matching those keywords. Please try again");
  }

}