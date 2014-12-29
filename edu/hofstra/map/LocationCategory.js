/******************************************************************************
* Module: Class LocationCategory
*
* Package: edu.hofstra.map
*
* Created: 12/23/14
*
* Last Updated: 12/23/14
*
* Fields: name.
*
* Methods: getName().
*
* Description: This class represents a category of locations.
******************************************************************************/
edu.hofstra.map.LocationCategory = function()
{ 												   /* Class LocationCategory */
	"use strict";
	
	var Constructor,
	
	/* Fields */
	name,
	
	/* Methods */
	getName;
	
	/**************************************************************************
	* Module: Constructor LocationCategory
	*
	* Created: 12/23/14
	*
	* Last Updated: 12/23/14
	*
	* Passed Parameters: params.name.
	*
	* Local Variables: None.
	*
	* Methods Called: None.
	*
	* Returned Value: None.
	*
	* Description: Initializes the LocationCategory class.
	**************************************************************************/
	Constructor = function(params)
	{ 										 /* Constructor LocationCategory */
		name = params.name ? name : "";
	}; 										 /* Constructor LocationCategory */

	/**************************************************************************
	* Module: Method getName
	*
	* Created: 12/23/14
	*
	* Last Updated: 12/23/14
	*
	* Passed Parameters: None.
	*
	* Local Variables: None.
	*
	* Methods Called: None.
	*
	* Returned Value: name.
	*
	* Description: Returns the name of this location category.
	**************************************************************************/
	getName = function()
	{ 													   /* Method getName */
		return name;
	}; 													   /* Method getName */
	
	Constructor();
	
	return {
		getName:getName
	};
}; 												   /* Class LocationCategory */
