var Greet = React.createClass({displayName: "Greet",
  render: function(){
    return React.createElement("h1", null, "Name: ", this.props.name)
  }
});
React.render(
  React.createElement(Greet, {name: "Bob"}),
  document.getElementById('example10')
);
function hehe(){
  alert('a');
}
