import './App.scss';
import { useState, useEffect } from 'react';

import ListItems from './components/Contacts_List/ListItems'
import { Form } from './components/Form/Form'
import { Filter } from './components/Filter/Filter'

import store from './redux/store'
import { addContact, deleteContact, filter } from './redux/actions'
import { connect } from 'react-redux'

store.dispatch(addContact(10))

function App() {
    return (
      <div className="App">
        <Form addNewContact={addNewContact} existing={contacts}/>
        <h2>Contacts</h2>
        <h3>Find contacts by name</h3>
        <Filter handleSearch={handleSearch} filter={filter}/>
        <ul>
          <ListItems arr={contacts} filter={filter} deleteContact={ deleteContact }/>
        </ul>
      </div>
    )
}

export default connect()(App)