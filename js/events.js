/**
 * EventPulse - Events Module
 * Handles user interactions and event handlers
 */

// App state
let appState = {
  events: [],
  filters: {
    category: 'all',
    date: 'all',
    location: '',
    search: '',
    savedOnly: false
  }
};

/**
 * Toggles the saved state of an event
 * @param {string} eventId - The ID of the event to toggle
 */
function toggleSaveEvent(eventId) {
  const eventIndex = appState.events.findIndex(e => e.id === eventId);
  
  if (eventIndex === -1) return;
  
  // Toggle the saved state
  appState.events[eventIndex].isSaved = !appState.events[eventIndex].isSaved;
  
  // Update the UI
  updateSaveButton(eventId, appState.events[eventIndex].isSaved);
  
  // Persist to localStorage
  saveStateToLocalStorage({ events: appState.events });
}