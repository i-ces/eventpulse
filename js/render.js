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
  const savedIcon = event.isSaved ? '♥' : '♡';
  const savedText = event.isSaved ? 'Saved' : 'Save';
  
  return `
    <article class="event-card" data-id="${event.id}" data-category="${event.category}">
      <div class="event-card__image">
        <img src="${event.image}" alt="${event.title}">
        <span class="event-card__category">${event.category}</span>
      </div>
      <div class="event-card__content">
        <h3 class="event-card__title">${event.title}</h3>
        <div class="event-card__meta">
          <span class="event-card__date">📅 ${event.date}</span>
          <span class="event-card__time">🕐 ${event.time}</span>
        </div>
        <p class="event-card__location">📍 ${event.location}</p>
        <div class="event-card__actions">
          <a href="event.html?id=${event.id}" class="btn btn--primary">View Details</a>
          <button class="btn btn--save ${savedClass}" data-event-id="${event.id}">
            <span class="save-icon">${savedIcon}</span> ${savedText}
          </button>
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