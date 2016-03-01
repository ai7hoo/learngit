var Greet = React.createClass({displayName: "Greet",
  render: function(){
    return React.createElement("h1", null, "Name: ", this.props.name)
  }
});

function hehe(){
  React.render(
    React.createElement(Greet, {name: "Bob"}),
    document.getElementById('example10')
  );
}
