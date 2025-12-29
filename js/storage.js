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
