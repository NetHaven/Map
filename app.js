/******************************************************************************
* Module: Class Application
*
* Package: None.
*
* Created: 12/22/14
*
* Last Updated: 12/23/14
*
* Fields: moduleList, modulesLoaded.
*
* Methods: main(), namespace(), success().
*
* Description: This is the main application class.
******************************************************************************/
var Application = (function() 
{ 														/* Class Application */
	/* Fields */
	var moduleList, modulesLoaded, 

	/* Methods */
	main, namespace, success;
	
	/**************************************************************************
	* Module: Method namespace
	*
	* Created: 12/22/14
	*
	* Last Updated: 12/23/14
	*
	* Passed Parameters: nsString.
	*
	* Local Variables: i, nsList, parentElement.
	*
	* Methods Called: None.
	*
	* Returned Value: None.
	*
	* Description: Builds an object hierarchy as a name space.
	**************************************************************************/
	namespace = function(nsString)
	{ 													 /* Method namespace */
		var i, nsList, parentElement;
	
		nsList = nsString.split(".");
		parentElement = window;
		for (i = 0; i < nsList.length; i+=1)
		{
			parentElement[nsList[i]] = {};
			parentElement = parentElement[nsList[i]];
		}
	}; 													 /* Method namespace */
	
	success = function()
	{ 													   /* Method success */
		var MapEngine;
		
		modulesLoaded += 1;
		if (modulesLoaded === moduleList.length)
		{
			MapEngine = edu.hofstra.map.MapEngine;
	
			MapEngine.setLocation(new edu.hofstra.map.Coordinate(40.71786400000001, -73.59743700000004));
			MapEngine.setZoomLevel(8);
			MapEngine.render(document.getElementById("map"));			
		}
	}; 													   /* Method success */

	/**************************************************************************
	* Module: Method main
	*
	* Created: 12/22/14
	*
	* Last Updated: 12/23/14
	*
	* Passed Parameters: None.
	*
	* Local Variables: i.
	*
	* Methods Called: namespace().
	*
	* Returned Value: None.
	*
	* Description: Loads the appropriate modules and data and starts the 
	* 			   application.
	**************************************************************************/
	main = function()
	{ 														  /* Method main */
		var i;
				
		modulesLoaded = 0;
		moduleList = [
			"edu.hofstra.map.Coordinate", 
			"edu.hofstra.map.Building",
			"edu.hofstra.map.MapProvider",
			"edu.hofstra.map.MapEngine"
		];
		
		namespace("edu.hofstra.map");
		
		for (i = 0; i < moduleList.length; i+=1)
		{
			jQuery.getScript(moduleList[i].replace(/\./g, "/") + ".js", success);
		}		
	}; 														  /* Method main */
	
	return {
		main: main
	};
}()); 													/* Class Application */

$(document).ready(Application.main);
