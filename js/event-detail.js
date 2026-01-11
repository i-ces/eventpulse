/**
 * EventPulse - Event Detail Module
 * Handles loading and displaying individual event details
 */

/**
 * Load event details based on URL parameter
 */
function loadEventDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const eventId = urlParams.get('id');
  
  if (!eventId) {
    console.error('No event ID provided');
    return;
  }
  
  // Find the event in the data
  const event = events.find(e => e.id === eventId);
  
  if (!event) {
    console.error('Event not found:', eventId);
    return;
  }
  
  // Format date for display
  const eventDate = new Date(event.date + 'T' + event.time);
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = eventDate.toLocaleDateString('en-US', dateOptions);
  
  // Format time
  const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
  const formattedTime = eventDate.toLocaleTimeString('en-US', timeOptions);
  
  // Update page title
  document.title = `${event.title} - EventPulse`;
  
  // Update hero image
  const heroImg = document.querySelector('.event-hero img');
  if (heroImg) {
    heroImg.src = event.image.replace('w=400&h=225', 'w=1200&h=500');
    heroImg.alt = event.title;
  }
  
  // Update category badge
  const badge = document.querySelector('.event-details-badge .badge');
  if (badge) {
    badge.textContent = event.category.charAt(0).toUpperCase() + event.category.slice(1);
    badge.className = `badge badge-${event.category}`;
  }
  
  // Update title
  const title = document.querySelector('.event-details-title');
  if (title) {
    title.textContent = event.title;
  }
  
  // Update date & time
  const dateValue = document.querySelector('.event-meta-item:nth-child(1) .event-meta-value');
  if (dateValue) {
    dateValue.textContent = `${formattedDate} • ${formattedTime}`;
  }
  
  // Update location
  const locationValue = document.querySelector('.event-meta-item:nth-child(2) .event-meta-value');
  if (locationValue) {
    locationValue.textContent = event.location;
  }
  
  // Update description
  const descSection = document.querySelector('.event-description');
  if (descSection && event.description) {
    descSection.innerHTML = `
      <h3>About This Event</h3>
      <p>${event.description}</p>
    `;
  }
  
  console.log('Event loaded:', event.title);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', loadEventDetails);
