var React = require('react');
var Navigation = require('Navigation');


var Main = (props) => {
  return (
    <div>
      <div>
        <Navigation/>
        <div>
          <h1>Timer Main component.</h1>
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
