import React, { Component } from 'react'
import Dashboard from '../../components/Dashboard/Dashboard'
import { FeedProvider } from "../../contexts/FeedContext";

class DashboardRoute extends Component {


  render() {
    return (
      <section>
        <FeedProvider>
          <Dashboard />
        </FeedProvider>
      </section>
    );
  }
}

export default DashboardRoute
