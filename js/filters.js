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