var React = require('react');
var {Link} = require('react-router');

var NavBarComponent = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
      <ul className="nav navbar-nav">
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      </div>
    );
  }
});

module.exports = NavBarComponent;
