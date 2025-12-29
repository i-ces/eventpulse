// js/storage.js
// LocalStorage helper functions for persisting application state

/**
 * Storage key constant for localStorage
 */
const STORAGE_KEY = 'eventpulse_state';

/**
 * Saves the current application state to localStorage
 * @param {Object} state - The state object containing events and filters
 */
function saveStateToLocalStorage(state) {
  try {
    // Convert state object to JSON string and save
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serializedState);
  } catch (error) {
    console.error('Error saving state to localStorage:', error);
  }
}

/**
 * Loads the application state from localStorage
 * @returns {Object|null} The saved state object or null if not found
 */
function loadStateFromLocalStorage() {
  try {
    // Retrieve and parse stored state
    const serializedState = localStorage.getItem(STORAGE_KEY);
    
    // Return null if no state exists
    if (serializedState === null) {
      return null;
    }
    
    return JSON.parse(serializedState);
  } catch (error) {
    console.error('Error loading state from localStorage:', error);
    return null;
  }
}

/**
 * Clears all EventPulse data from localStorage
 */
function clearStorage() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
}

/**
 * Initializes state from localStorage or returns default events
 * @returns {Array} Array of events with persisted saved states
 */
function initializeState() {
  // Try to load saved state from localStorage
  const savedState = loadStateFromLocalStorage();
  
  if (savedState && savedState.events) {
    // Merge saved states with default events (in case new events were added)
    return events.map(event => {
      const savedEvent = savedState.events.find(e => e.id === event.id);
      return savedEvent ? { ...event, isSaved: savedEvent.isSaved } : event;
    });
  }
  
  // Return default events if no saved state exists
  return [...events];
}
