import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Grid } from 'react-bootstrap'

import Header from './components/Header'
import Organisations from './routes/Organisations'
import Organisation from './routes/Organisation'
import NewOrganisation from './routes/NewOrganisation'
import EditOrganisation from './routes/EditOrganisation'
import NewContact from './routes/NewContact'
import EditContact from './routes/EditContact'

class App extends Component {
  render() {
    return (
      <Grid>
        <Header />
        <Switch>
          <Route
            path="/organisations/:organisationId/contacts/new"
            component={NewContact}
          />
          <Route
            path="/organisations/:organisationId/contacts/:id/edit"
            component={EditContact}
          />
          <Route path="/organisations/new" component={NewOrganisation} />
          <Route path="/organisations/:id/edit" component={EditOrganisation} />
          <Route path="/organisations/:id" component={Organisation} />
          <Route path="/organisations" component={Organisations} />
          <Redirect to="/organisations" />
        </Switch>
      </Grid>
    )
  }
}

export default App
