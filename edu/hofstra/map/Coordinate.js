/******************************************************************************
* Module: Class Coordinate 
*
* Created: 12/20/14
*
* Last Updated: 12/20/14
*
* Fields: latitude, longitude.
*
* Methods: getLatitude(), getLongitude().
*
* Description: Encapsulates a coordinate's latitude and longitude.
*******************************************************************************
edu.hofstra.map.Coordinate = function(lat, long)
{ 														 /* Class Coordinate */
	var Constructor,
	
	/* Properties */
	latitude, longitude,
	
	/* Methods */
	getLatitude, getLongitude;
	
	/**************************************************************************
	* Module: Constructor Coordinate
	*
	* Created: 12/20/14
	*
	* Last Updated: 12/20/14
	*
	* Passed Parameters: lat, long.
	*
	* Local Variables: None.
	*
	* Methods Called: None.
	*
	* Returned Value: None.
	*
	* Description: Initializes the Coordinate class.
	***************************************************************************
	Constructor = function()
	{ 											   /* Constructor Coordinate */
		latitude = lat;
		longitude = long;
	}; 											   /* Constructor Coordinate */
	
	/**************************************************************************
	* Module: Method getLatitude
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
	* Returned Value: latitude.
	*
	* Description: Returns the latitude of this coordinate pair.
	***************************************************************************
	getLatitude = function()
	{ 												   /* Method getLatitude */
		return latitude;
	}; 												   /* Method getLatitude */
	
	/**************************************************************************
	* Module: Method getLongitude
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
	* Returned Value: longitude.
	*
	* Description: Returns the longitude of this coordinate pair.
	***************************************************************************
	getLongitude = function()
	{ 												  /* Method getLongitude */
		return longitude;
	}; 												  /* Method getLongitude */
	
	Constructor();

	return {
		getLatitude:getLatitude,
		getLongitude:getLongitude
	};
};		 												 /* Class Coordinate */
