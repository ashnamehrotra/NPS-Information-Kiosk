var container3 = document.getElementById("park-info-designation");
var btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://developer.nps.gov/api/v1/parks?limits=500&api_key=4wRBdtDHPdue1L2T9USMQ7YDGm5Q9jBj4aCqu1dY');
  ourRequest.onload = function() {
    if(ourRequest.status != 200){
      alert(ourRequest.status+" Response Error!")
    }
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML3(ourData);    
  };

  ourRequest.send();
});


function renderHTML3(myData) {

 container3.innerHTML = "";

  var inputDesignation=document.getElementById("des").value.toLowerCase();

  var parksC = [];
  var parksN = [];

  htmlString="";


   for (i = 0; i < myData.data.length; i++) {
      var compare = myData.data[i].designation.toLowerCase()
        if(inputDesignation.localeCompare(compare) == 0){
           parksC.push(myData.data[i].parkCode);
           parksN.push(myData.data[i].fullName);
        }
    }

    if(parksC.length != 0){

        htmlString += "<select id=\"stateList\">";

        for(i=0; i<parksC.length; i++)
          htmlString += "<option value=\""+parksC[i]+"\">"+parksN[i]+"</option>"

        htmlString+="</select>"

        htmlString+="<button id=\"getInfo3\">Get park info!</button>"

        container3.insertAdjacentHTML('beforeend', htmlString);

        getInfo3 = document.getElementById("getInfo3");


        getInfo3.addEventListener("click", function() {
          var list =  document.getElementById("stateList");
          var selectedValue = list.options[list.selectedIndex].value;
          sessionStorage.setItem("parkCode", JSON.stringify(selectedValue));
          var openedWindow = window.open("displayInfo.html")
        });
   }
   else{
          window.alert("No parks with designation "+inputDesignation+"! Please try another.");
   }

}




