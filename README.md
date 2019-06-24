# NPS Information Kiosk

Submission for Capital One Software Engineering Summit.


A deployed website allowing users to search for NPS parks and retrieve information regarding them.

[Preview Website!](https://ashnamehrotra.github.io/) (please allow time for API to load information)

## Outline:
  * #### HTML/CSS
    * [index.html](index.html)
      * home page for user to search for a park name through state and designation filtering, name and keyword search
    * [map.html](map.html)
      * link to open map visualization
    * [displayInfo.html](displayInfo.html)
      * link that displays all information regarding user chosen park
  * #### JavaScript + AJAX (XMLHttpRequest)
    * [index1.js](js/index1.html)
      * provides user with list of park names
    * [index2.js](js/index2.html)
      * provides user with a list of park names based on chosen state
    * [index3.js](js/index3.html)
      * provides user with a list of park names based on entered designation
    * [index4.js](js/index4.html)
      * provides user with a list of park names based on entered key words      
  * #### GoogleMaps API
    * previewed park location on map & calculated distance from current location
  * #### NPS API
    * retrieved information to display
    * checked for null values & HTTP Request Status Code
  * #### Deployed on Github
  
