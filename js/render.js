/**
 * EventPulse - Render Module
 * Handles dynamic rendering of event cards
 */

/**
 * Creates the HTML for a single event card
 * @param {Object} event - The event object
 * @returns {string} HTML string for the event card
 */
function createEventCard(event) {
  const savedClass = event.isSaved ? 'saved' : '';
  const savedText = event.isSaved ? 'Saved' : 'Save Event';
  
  return `
    <article class="event-card" data-id="${event.id}" data-category="${event.category}">
      <figure class="event-card-image">
        <img src="${event.image}" alt="${event.title}">
        <span class="event-card-badge">
          <span class="badge badge-${event.category}">${event.category.charAt(0).toUpperCase() + event.category.slice(1)}</span>
        </span>
      </figure>
      <div class="event-card-content">
        <h2 class="event-card-title">${event.title}</h2>
        <div class="event-card-meta">
          <p class="event-card-date">
            <svg class="event-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>${event.date} • ${event.time}</span>
          </p>
          <p class="event-card-location">
            <svg class="event-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>${event.location}</span>
          </p>
        </div>
        <div class="event-card-actions">
          <a href="event.html?id=${event.id}" class="btn btn-primary">View Details</a>
          <button type="button" class="btn btn-outline ${savedClass}" data-event-id="${event.id}">${savedText}</button>
        </div>
      </div>
    </article>
  `;
}

/**
 * Renders all events to the events grid container
 * @param {Array} eventsArray - Array of event objects to render
 */
function renderEvents(eventsArray) {
  const eventsGrid = document.querySelector('.events-grid');
  
  if (!eventsGrid) {
    console.error('Events grid container not found');
    return;
  }
  
  // Clear existing content
  eventsGrid.innerHTML = '';
  
  // Show message if no events
  if (eventsArray.length === 0) {
    eventsGrid.innerHTML = '<p class="no-events">No events found matching your criteria.</p>';
    return;
  }
  
  // Render each event card
  const cardsHTML = eventsArray.map(event => createEventCard(event)).join('');
  eventsGrid.innerHTML = cardsHTML;
}

/**
 * Updates the save button appearance for a specific event
 * @param {string} eventId - The ID of the event
 * @param {boolean} isSaved - Whether the event is saved
 */
function updateSaveButton(eventId, isSaved) {
  const button = document.querySelector(`[data-event-id="${eventId}"]`);
  
  if (!button) return;
  
  const icon = button.querySelector('.save-icon');
  
  if (isSaved) {
    button.classList.add('saved');
    icon.textContent = '♥';
    button.innerHTML = `<span class="save-icon">♥</span> Saved`;
  } else {
    button.classList.remove('saved');
    icon.textContent = '♡';
    button.innerHTML = `<span class="save-icon">♡</span> Save`;
  }
}