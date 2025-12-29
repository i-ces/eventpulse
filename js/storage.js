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
