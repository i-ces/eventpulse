/**
 * EventPulse - Filters Module
 * Handles filtering and searching of events
 */

/**
 * Filters events by category
 * @param {Array} eventsArray - Array of events to filter
 * @param {string} category - Category to filter by (empty string for all)
 * @returns {Array} Filtered array of events
 */
function filterByCategory(eventsArray, category) {
  if (!category || category === 'all') {
    return eventsArray;
  }
  
  return eventsArray.filter(event => 
    event.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Filters events by date range
 * @param {Array} eventsArray - Array of events to filter
 * @param {string} dateFilter - Date filter type ('today', 'week', 'month', 'all')
 * @returns {Array} Filtered array of events
 */
function filterByDate(eventsArray, dateFilter) {
  if (!dateFilter || dateFilter === 'all') {
    return eventsArray;
  }
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return eventsArray.filter(event => {
    const eventDate = new Date(event.date);
    eventDate.setHours(0, 0, 0, 0);
    
    const diffTime = eventDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    switch (dateFilter) {
      case 'today':
        return diffDays === 0;
      case 'week':
        return diffDays >= 0 && diffDays <= 7;
      case 'month':
        return diffDays >= 0 && diffDays <= 30;
      default:
        return true;
    }
  });
}

/**
 * Filters events by location
 * @param {Array} eventsArray - Array of events to filter
 * @param {string} location - Location to filter by (empty string for all)
 * @returns {Array} Filtered array of events
 */
function filterByLocation(eventsArray, location) {
  if (!location || location === 'all') {
    return eventsArray;
  }
  
  return eventsArray.filter(event => 
    event.location.toLowerCase().includes(location.toLowerCase())
  );
}