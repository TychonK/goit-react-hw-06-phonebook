import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {contacts: [], filter: ''}

const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'form/addContact':
            return { contacts: [...state.contacts, action.payload] };

        case 'form/deleteContact':
            const contactsList = state.contacts.filter(contact => contact.name !== e.target.id);
            return { contacts: [contactsList] }
        
        case 'filter/changeFilter':
            return { filter: action.payload }
        
        default:
            return state;
    }
    return state
};

const store = createStore(reducer, composeWithDevTools());


export default store;