import React, { Component } from 'react'
import Dashboard from '../../components/Dashboard/Dashboard'
import { DashProvider } from "../../contexts/DashContext";

class DashboardRoute extends Component {


  render() {
    return (
      <section>
        {/* <DashProvider> */}
          <Dashboard />
        {/* </DashProvider> */}
      </section>
    );
  }
}

export default DashboardRoute
