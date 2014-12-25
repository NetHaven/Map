/******************************************************************************
* Module: Class MapEngine
*
* Package: edu.hofstra.map
*
* Created: 12/22/14
*
* Last Updated: 12/22/14
*
* Fields: location, provider, zoomLevel.
*
* Methods: getLocation(), getProvider(), getZoomLevel(), render(), 
* 		   setLocation(), setProvider(), setZoomLevel().
*
* Description: This is the primary map management class.
******************************************************************************/
edu.hofstra.map.MapEngine = (function()
{ 														  /* Class MapEngine */
	var Constructor,
	
	/* Fields */
	location, provider, zoomLevel
	
	/* Methods */
	getLocation, getProvider, getZoomLevel, render, setLocation, setProvider, setZoomLevel;
	
	/**************************************************************************
	* Module: Constructor MapEngine
	*
	* Created: 12/22/14
	*
	* Last Updated: 12/22/14
	*
	* Passed Parameters: None.
	*
	* Local Variables: None.
	*
	* Methods Called: None.
	*
	* Returned Value: None.
	*
	* Description: Initializes the MapEngine class.
	**************************************************************************/
	Constructor = function()
	{ 												/* Constructor MapEngine */
		// Set Default Provider
		provider = edu.hofstra.map.MapProvider.GOOGLE;
	}; 												/* Constructor MapEngine */
	
	getLocation = function()
	{ 												   /* Method getLocation */
		return location;		
	}; 												   /* Method getLocation */
	
	/**************************************************************************
	* Module: Method getProvider
	*
	* Created: 12/22/14
	*
	* Last Updated: 12/22/14
	*
	* Passed Parameters: None.
	*
	* Local Variables: None.
	*
	* Methods Called: None.
	*
	* Returned Value: provider.
	*
	* Description: Retrieves the map provider.
	**************************************************************************/
	getProvider = function()
	{ 												   /* Method getProvider */
		return provider;
	}; 												   /* Method getProvider */
	
	getZoomLevel = function()
	{ 												  /* Method getZoomLevel */
		return zoomLevel;
	}; 												  /* Method getZoomLevel */

	render = function(element)
	{ 													    /* Method render */		
	}; 														/* Method render */

	setLocation = function(mapLocation)
	{ 												   /* Method setLocation */
		location = mapLocation;
	}; 												   /* Method setLocation */

	/**************************************************************************
	* Module: Method setProvider
	*
	* Created: 12/22/14
	*
	* Last Updated: 12/22/14
	*
	* Passed Parameters: mapProvider.
	*
	* Local Variables: None.
	*
	* Methods Called: None.
	*
	* Returned Value: None.
	*
	* Description: Sets the map provider.
	**************************************************************************/
	setProvider = function(mapProvider)
	{ 												   /* Method setProvider */
		provider = mapProvider;
	}; 												   /* Method setProvider */
	
	setZoomLevel = function(mapZoomLevel)
	{ 												  /* Method setZoomLevel */
		zoomLevel = mapZoomLevel;
	}; 												  /* Method setZoomLevel */
	
	Constructor();

	return {
		getLocation:getLocation,
		getProvider:getProvider,
		getZoomLevel:getZoomLevel,
		render:render,
		setLocation:setLocation,
		setProvider:setProvider,
		setZoomLevel:setZoomLevel
	};
}()); 													  /* Class MapEngine */
