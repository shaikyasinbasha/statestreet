import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListContainer from './components/list/ListContainer';
import DetailsContainer from './components/details/DetailsContainer';
import Modal from './components/common/Modal';

class App extends React.Component {
  render () {
    return (
      <div>
        <Switch>
            <Route exact path="/list" component={ListContainer} />
            <Route path='/transcation/:account' component={DetailsContainer}/>
        </Switch>
        <Modal />
      </div>
    )
  }
}

export default App;