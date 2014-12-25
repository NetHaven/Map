/******************************************************************************
* Module: Class Building
*
* Package: edu.hofstra.map
*
* Created: 12/20/14
*
* Last Updated: 12/21/14
*
* Fields: location, name, outline.
*
* Methods: getName(), getLocation(), getOutline().
*
* Description: This class stores building name and location information.
******************************************************************************/
edu.hofstra.map.Building = function(params)
{ 														   /* Class Building */
	var Constructor,
	
	/* Properties */
	location, name, outline

	/* Methods */
	getLocation, getName, getOutline;

	/**************************************************************************
	* Module: Constructor Building
	*
	* Created: 12/20/14
	*
	* Last Updated: 12/21/14
	*
	* Passed Parameters: location, name, outline.
	*
	* Local Variables: None.
	*
	* Methods Called: None.
	*
	* Returned Value: None.
	*
	* Description: Initializes the Building class.
	**************************************************************************/
	Constructor = function()
	{ 												 /* Constructor Building */
		location = params.location ? params.location : new edu.hofstra.map.Coordinate(0, 0);
		name = params.name ? params.name : "No Building Name Specified";
		outline = params.outline ? params.outline : null;
	}; 												 /* Constructor Building */
	
	/**************************************************************************
	* Module: Method getLocation
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
	* Returned Value: location.
	*
	* Description: Retrieves the location of this building.
	**************************************************************************/
	getLocation = function()
	{ 												   /* Method getLocation */
		return location;
	}; 												   /* Method getLocation */
	
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
	* Description: Retrieves the name of this building.
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
	*			   of this building.
	**************************************************************************/
	getOutline = function()
	{ 													/* Method getOutline */
		return outline;
	}; 													/* Method getOutline */
	
	Constructor();
	
	return {
		getLocation: getLocation,
		getName: getName,
		getOutline: getOutline
	};
}; 														   /* Class Building */
