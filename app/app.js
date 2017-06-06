//sets up the routes for the rest of the app, utilizes react-router to do this

var React = require('react');
var ReactDOM = require('react-dom');

//properties associated with routes
var Router = require('react-router').Router;

var routes = require('./config/routes');

// This code here allows us to render our main component (in this case Main)
ReactDOM.render(
	<Router>{routes}</Router>,
	document.getElementById("app")
	);