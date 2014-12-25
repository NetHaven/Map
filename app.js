var application = (function() 
{ 														/* Class Application */
	/* Methods */
	var main, namespace;
	
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

$(document).ready(application.main);
