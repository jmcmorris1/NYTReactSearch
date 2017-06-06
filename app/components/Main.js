var axios = require('axios');

// Include React 
var React = require('react');
var Router = require('router');


// Helper Function
var helper = require('./utils/helper.js');


// This is the main component. 
var Main = React.createClass({

	render: function(){

    return(

    	<div className = "main-container">


        <div className = "container">

          <nav className = "navbar navbar-default" role = "navigation">
            <div className = "container-fluid">
              <div className = "navbar-header">
                <button type = "button" className = "navbar-toggle" data-toggle = "collapse" data-target = ".navbar-ex1-collapse">
                  <span className = "sr-only">Toggle navigation</span>
                  <span className = "icon-bar"></span>
                  <span className = "icon-bar"></span>
                  <span className = "icon-bar"></span>
                </button>
                <a className = "navbar-brand" href = "#">NYT-React</a>
              </div>

              <div className = "collapse navbar-collapse navbar-ex1-collapse">
                <ul className = "nav navbar-nav navbar-right">
                  <li>
                  
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className = "jumbotron">
            <h2 className = "text-center"><strong>New York Times Article Scrubber</strong></h2>
          </div>

          {this.props.children}

        </div>
      </div>
    )
  }
});

module.exports = Main;