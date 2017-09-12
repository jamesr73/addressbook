export function getOrganisations() {
  return fetch('/api/organisations', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })
    .then(checkStatus)
    .then(parseJSON)
}

export function addOrganisation(organisation) {
  return fetch('/api/organisations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(organisation),
  })
    .then(checkStatus)
    .then(parseJSON)
}

export function updateOrganisation(organisation) {
  return fetch(`/api/organisations/${organisation.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(organisation),
  })
    .then(checkStatus)
    .then(parseJSON)
}

export function deleteOrganisation(id) {
  return fetch(`/api/organisations/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
    },
  }).then(checkStatus)
}

export function addContact(contact) {
  return fetch('/api/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(contact),
  })
    .then(checkStatus)
    .then(parseJSON)
}

export function updateContact(contact) {
  return fetch(`/api/contacts/${contact.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(contact),
  })
    .then(checkStatus)
    .then(parseJSON)
}

export function deleteContact(id) {
  return fetch(`/api/contacts/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
    },
  }).then(checkStatus)
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(`HTTP Error ${response.statusText}`)
  error.status = response.statusText
  error.response = response
  console.log(error)
  throw error
}

function parseJSON(response) {
  return response.json()
}

export default {
  getOrganisations,
  addOrganisation,
  updateOrganisation,
  deleteOrganisation,
  addContact,
  updateContact,
  deleteContact,
}
