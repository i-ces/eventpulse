const STORAGE_KEY = 'eventpulse_state';

function saveStateToLocalStorage(state){
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(STORAGE_KEY, serializedState);
    }catch(error){
        console.error(`Error saving the state to localStorage: ${error}`)
    }
}

function loadStateFromLocalStorage(){
    try{
        const serializedState = localStorage.getItem(STORAGE_KEY);
        if(serializedState === null){
            return null;
        }
        return JSON.parse(serializedState);
    }catch(error){
        console.error(`Error loading the state from localStorage: ${error}`)
        return null;
    }
}


function initializeState(){
    const savedState = loadStateFromLocalStorage();

    if(savedState && savedState.events){
        return events.map(event=>{
            const savedEvent = savedState.events.find(e=>e.id === event.id);
            return savedEvent ? { ...event, isSaved: savedEvent.isSaved}: event;
        })
    }
}