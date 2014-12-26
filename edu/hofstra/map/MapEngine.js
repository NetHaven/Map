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
	"use strict";

	var Constructor,
	
	/* Fields */
	location, provider, zoomLevel,
	
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
	
	/**************************************************************************
	* Module: Method getLocation
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
	* Returned Value: location.
	*
	* Description: Retrieves the location of the currently displayed map.
	**************************************************************************/
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
	
	/**************************************************************************
	* Module: Method getZoomLevel
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
	* Returned Value: zoomLevel.
	*
	* Description: Retrieves the zoom level of the currently displayed map.
	**************************************************************************/
	getZoomLevel = function()
	{ 												  /* Method getZoomLevel */
		return zoomLevel;
	}; 												  /* Method getZoomLevel */

	/**************************************************************************
	* Module: Method render
	*
	* Created: 12/22/14
	*
	* Last Updated: 12/22/14
	*
	* Passed Parameters: element.
	*
	* Local Variables: None.
	*
	* Methods Called: None.
	*
	* Returned Value: None.
	*
	* Description: Renders the map at the currently selected location and zoom 
	* 			   level at the passed in HTML Element.
	**************************************************************************/
	render = function(element)
	{ 													    /* Method render */		
		var map, mapOptions;
		
		mapOptions = {
			center: new google.maps.LatLng(location.getLatitude(), location.getLongitude()),
			zoom: zoomLevel
		};

		map = new google.maps.Map(element, mapOptions);
   	}; 														/* Method render */

	/**************************************************************************
	* Module: Method setLocation
	*
	* Created: 12/22/14
	*
	* Last Updated: 12/22/14
	*
	* Passed Parameters: mapLocation.
	*
	* Local Variables: None.
	*
	* Methods Called: None.
	*
	* Returned Value: None.
	*
	* Description: Sets the location of the currently displayed map.
	**************************************************************************/
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
	
	/**************************************************************************
	* Module: Method setZoomLevel
	*
	* Created: 12/22/14
	*
	* Last Updated: 12/22/14
	*
	* Passed Parameters: mapZoomLevel.
	*
	* Local Variables: None.
	*
	* Methods Called: None.
	*
	* Returned Value: None.
	*
	* Description: Sets the zoom level of the currently displayed map.
	**************************************************************************/
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
