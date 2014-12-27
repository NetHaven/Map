/******************************************************************************
* Module: Class Marker
*
* Package: edu.hofstra.map
*
* Created: 12/23/14
*
* Last Updated: 12/23/14
*
* Fields: icon, position, title.
*
* Methods: setIcon(), setPosition(), setTitle().
*
* Description: This class represents a marker on the map.
******************************************************************************/
edu.hofstra.map.Marker = function()
{ 															 /* Class Marker */
	"use strict";
	
	/* Fields */
	var icon, position, title,
	
	/* Methods */
	setIcon, setPosition, setTitle;
	
	/**************************************************************************
	* Module: Method setIcon
	*
	* Created: 12/23/14
	*
	* Last Updated: 12/23/14
	*
	* Passed Parameters: markerIcon.
	*
	* Local Variables: None.
	*
	* Methods Called: None.
	*
	* Returned Value: None.
	*
	* Description: Sets the icon used for this marker.
	**************************************************************************/
	setIcon = function(markerIcon)
	{ 													   /* Method setIcon */
		icon = markerIcon;
	}; 													   /* Method setIcon */
	
	/**************************************************************************
	* Module: Method setPosition
	*
	* Created: 12/23/14
	*
	* Last Updated: 12/23/14
	*
	* Passed Parameters: markerPosition.
	*
	* Local Variables: None.
	*
	* Methods Called: None.
	*
	* Returned Value: None.
	*
	* Description: Sets the position(coordinates) of this marker.
	**************************************************************************/
	setPosition = function(markerPosition)
	{ 												   /* Method setPosition */
		position = markerPosition;
	}; 												   /* Method setPosition */
	
	/**************************************************************************
	* Module: Method setTitle
	*
	* Created: 12/23/14
	*
	* Last Updated: 12/23/14
	*
	* Passed Parameters: markerTitle.
	*
	* Local Variables: None.
	*
	* Methods Called: None.
	*
	* Returned Value: None.
	*
	* Description: Sets the title used for this marker.
	**************************************************************************/
	setTitle = function(markerTitle)
	{ 													  /* Method setTitle */
		title = markerTitle;
	}; 													  /* Method setTitle */
	
	return {
		setIcon:setIcon,
		setPosition:setPosition,
		setTitle:setTitle
	};
}; 															 /* Class Marker */
