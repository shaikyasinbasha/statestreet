import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListContainer from './components/list/ListContainer';
import DetailsContainer from './components/details/DetailsContainer';
import Modal from './components/common/Modal';
import LoadingSpinner from './components/common/LoadingSpinner';

class App extends React.Component {
  render () {
    return (
      <div>
        <Switch>
            <Route exact path="/list" component={ListContainer} />
            <Route path='/transcation/:account' component={DetailsContainer}/>
        </Switch>
        <Modal />
        <LoadingSpinner />
      </div>
    )
  }
}

export default App;