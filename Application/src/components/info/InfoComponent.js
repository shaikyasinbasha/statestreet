import React from 'react';
import { Link } from "react-router-dom";
import { LABEL_APP_DETAILS } from '../../constants/labels';

const InfoComponent = () => {
  return <div className="tranxlist">
  <section className="tranxlist__header">
    <label className="page-title">
      {`${LABEL_APP_DETAILS}`}
    </label>
  </section>
  <section className="tranxlist__body">
    <div className="tranxlist__filter">
      <ul>
        <li>
          <label className="title">
            <Link to="/list">Go To Transations Page</Link>
          </label>
        </li>
      </ul>
    </div>
    <div className="tranxlist__list">
        <div><label className="title">Assessment Info</label></div>
        <p>To get an understanding of your React.js, JavaScript and CSS skills we have provided you with designs for a fictional widget, and a JSON file to populate the widget with the correct data. Please do not hardcode the values from the designs.</p>
        <p>We are not looking for pixel perfect, but we are interested in good development practices. Feel free to add additional features to the design.</p>
        
        <div><label className="title">Additional Features implemented</label></div>
        <p>User <label class="title">Nod JS</label> and <label class="title">Express JS</label> for service integration</p>
        <p>Loding spinner while service calls</p>
        <p>Modal popup</p>
        <p>Manager FIlter - Dyanmically you can add or remove left side filter section</p>
        <p>Dynamic Grid component - configation will drive all the columns and filter - <label className="title">NO HARD CODES</label></p>
        <p>Grid component - Need to implemented LOCAL and SERVER side paganation</p>
        

        <div><label className="title">Assessment Specifications</label></div>
        <div style={{"display": 'flex'}}>
            <div style={{"flex": '1'}}>
                <p>REACT: 16.8.5 version</p>
                <p>react-dom: 16.8.5</p>
                <p>react-router-dom: 5.1.2</p>
                <p>react-redux: 7.1.1</p>
            </div>
            <div style={{"flex": '1'}}>                
                <p>redux: 4.0.4</p>
                <p>redux-thunk: 2.3.0</p>
                <p>webpack: 4.29.6</p>
                <p>babel: 7.4.0</p>
            </div>
        </div>
        <div style={{"text-align": 'center'}}>
            <Link to="/list">
              <button className="re-button">Go To Transations Page</button>
            </Link>
        </div>1
        
    </div>
  </section>
</div>
}

export default InfoComponent;