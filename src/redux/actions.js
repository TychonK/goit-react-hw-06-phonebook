export const addContact = (value) => ({
    type: 'form/addContact',
    payload: value,
})

export const deleteContact = (value) => ({
    type: 'form/deleteContact',
    payload: value,
})

export const filter = (value) => ({
    type: 'filter/changeFilter',
    payload: value,
})