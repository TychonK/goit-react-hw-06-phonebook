import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {contacts: [], filter: ''}

const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'form/addContact':
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            };

        case 'form/deleteContact':
            const contactsList = state.contacts.filter(contact => contact.name !== action.payload.target.id);
            return {
                ...state,
                contacts: contactsList
            };
        
        case 'filter/changeFilter':
            return {
                ...state,
                filter: action.payload.target.value
            };
        
        case 'page/pageLoaded':
            return {
                ...state,
                contacts: action.payload
            }
        
        default:
            return state;
    }
};

const store = createStore(reducer, composeWithDevTools());


export default store;