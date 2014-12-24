/******************************************************************************
* Module: Class MapEngine
*
* Created: 12/22/14
*
* Last Updated: 12/22/14
*
* Fields: provider.
*
* Methods: getProvider(), setProvider().
*
* Description: This is the primary map management class.
******************************************************************************/
edu.hofstra.map.MapEngine = (function()
{ 														  /* Class MapEngine */
	/* Fields */
	var provider,
	
	/* Methods */
	getProvider, setProvider;
	
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
	
	return {
		getProvider:getProvider,
		setProvider:setProvider
	};
	
}()); 													  /* Class MapEngine */