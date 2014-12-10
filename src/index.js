/**
*
* This class helps to easily build up events for dynamically generated elements and will have a name '@'
*
**/

var $ = require('jquery');

module.exports = function(element) {
	return {
		/**
		 * This takes an element and callback and delegates it to click event via body element
		 *
		 * @param string element Element to which an event has to be attached
		 * @param callback function Callback function to be called once event is successfuly triggered
		 */	
		click: function(callback) {	
			$(document.body).on('click', element, callback);
		}
	};
};
