/******************************************************************************
* Module: Class Location
*
* Package: edu.hofstra.map
*
* Created: 12/20/14
*
* Last Updated: 12/23/14
*
* Fields: name, outline, position.
*
* Methods: getName(), getOutline(), getPosition().
*
* Description: This class stores location name and position information.
******************************************************************************/
edu.hofstra.map.Location = function(params)
{ 														   /* Class Location */
	"use strict";
	
	var Constructor,
	
	/* Properties */
	name, outline, position,

	/* Methods */
	getName, getOutline, getPosition;

	/**************************************************************************
	* Module: Constructor Location
	*
	* Created: 12/20/14
	*
	* Last Updated: 12/23/14
	*
	* Passed Parameters: position, name, outline.
	*
	* Local Variables: None.
	*
	* Methods Called: None.
	*
	* Returned Value: None.
	*
	* Description: Initializes the Location class.
	**************************************************************************/
	Constructor = function()
	{ 												 /* Constructor Location */
		position = params.position ? params.position : new edu.hofstra.map.Coordinate(0, 0);
		name = params.name ? params.name : "No Location Name Specified";
		outline = params.outline ? params.outline : null;
	}; 												 /* Constructor Location */
	
	/**************************************************************************
	* Module: Method getPosition
	*
	* Created: 12/20/14
	*
	* Last Updated: 12/23/14
	*
	* Passed Parameters: None.
	*
	* Local Variables: None.
	*
	* Methods Called: None.
	*
	* Returned Value: position.
	*
	* Description: Retrieves the position of this location.
	**************************************************************************/
	getPosition = function()
	{ 												   /* Method getPosition */
		return position;
	}; 												   /* Method getPosition */
	
	/**************************************************************************
	* Module: Method getName
	*
	* Created: 12/20/14
	*
	* Last Updated: 12/20/14
	*
	* Passed Parameters: None.
	*
	* Local Variables: None.
	*
	* Methods Called: None.
	*
	* Returned Value: name.
	*
	* Description: Retrieves the name of this location.
	**************************************************************************/
	getName = function()
	{ 													   /* Method getName */
		return name;
	}; 													   /* Method getName */
	
	/**************************************************************************
	* Module: Method getOutline
	*
	* Created: 12/20/14
	*
	* Last Updated: 12/20/14
	*
	* Passed Parameters: None.
	*
	* Local Variables: None.
	*
	* Methods Called: None.
	*
	* Returned Value: outline.
	*
	* Description: Retrieves an array of coordinates representing the outline 
	*			   of this location.
	**************************************************************************/
	getOutline = function()
	{ 													/* Method getOutline */
		return outline;
	}; 													/* Method getOutline */
	
	Constructor();
	
	return {
		getPosition: getPosition,
		getName: getName,
		getOutline: getOutline
	};
}; 														   /* Class Location */
