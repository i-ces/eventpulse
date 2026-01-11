function createEventCard(event){
    const  savedClass = event.isSaved? 'saved': '';
    const  savedText = event.isSaved? 'Saved': 'Save Event';

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


function renderEvents(eventsArray){
  const eventsGrid = document.querySelector('.events-grids');

  if(!eventsGrid){
    console.error('Events grid element not found');
    return;
  }

  eventsGrid.innerHTML= '';

  if(eventsArray.length === 0){
    eventsGrid.innerHTML = `
    <div class="empty-state">
        <svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
          <line x1="9" y1="16" x2="15" y2="16"></line>
        </svg>
        <h3 class="empty-state-title">No Events Found</h3>
        <p class="empty-state-description">
          We couldn't find any events matching your criteria. 
          Try adjusting your search or filters.
        </p>
      </div>
    `;

    return;
  }

  const cardsHTML = eventsArray.map(event => createEventCard(event)).join('');
  eventsGrid.innerHTML = cardsHTML;
}