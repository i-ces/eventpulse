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