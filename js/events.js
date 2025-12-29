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

/**
 * Refreshes the events display based on current filters
 */
function refreshEventsDisplay() {
  const filteredEvents = applyFilters(appState.events, appState.filters);
  renderEvents(filteredEvents);
}

/**
 * Handles save button clicks using event delegation
 * @param {Event} event - The click event
 */
function handleSaveButtonClick(event) {
  const saveButton = event.target.closest('.btn--save');
  
  if (!saveButton) return;
  
  event.preventDefault();
  
  const eventId = saveButton.dataset.eventId;
  
  if (eventId) {
    toggleSaveEvent(eventId);
  }
}

/**
 * Handles category filter changes
 * @param {Event} event - The change event
 */
function handleCategoryFilter(event) {
  appState.filters.category = event.target.value;
  refreshEventsDisplay();
}

/**
 * Handles date filter changes
 * @param {Event} event - The change event
 */
function handleDateFilter(event) {
  appState.filters.date = event.target.value;
  refreshEventsDisplay();
}

/**
 * Handles search input
 * @param {Event} event - The input event
 */
function handleSearch(event) {
  appState.filters.search = event.target.value;
  refreshEventsDisplay();
}