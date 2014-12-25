/******************************************************************************
* Module: Class Application
*
* Package: None.
*
* Created: 12/22/14
*
* Last Updated: 12/22/14
*
* Fields: None.
*
* Methods: main(), namespace().
*
* Description: This is the main application class.
******************************************************************************/
var Application = (function() 
{ 														/* Class Application */
	/* Methods */
	var main, namespace;
	
	/**************************************************************************
	* Module: Method namespace
	*
	* Created: 12/22/14
	*
	* Last Updated: 12/22/14
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
		for (i = 0; i < nsList.length; i++)
		{
			parentElement[nsList[i]] = {};
			parentElement = parentElement[nsList[i]];
		}
	}; 													 /* Method namespace */
	
	/**************************************************************************
	* Module: Method main
	*
	* Created: 12/22/14
	*
	* Last Updated: 12/22/14
	*
	* Passed Parameters: None.
	*
	* Local Variables: i, moduleList.
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
		var i, moduleList;
		
		moduleList = [
			"edu.hofstra.map.Coordinate", 
			"edu.hofstra.map.Building",
			"edu.hofstra.map.MapProvider",
			"edu.hofstra.map.MapEngine"
		];
		
		namespace("edu.hofstra.map");
		
		for (i = 0; i < moduleList.length; i++)
		{
			jQuery.getScript(moduleList[i].replace(/\./g, "/") + ".js");
		}
	}; 														  /* Method main */
	
	return {
		main: main
	};
}()); 													/* Class Application */

$(document).ready(Application.main);
