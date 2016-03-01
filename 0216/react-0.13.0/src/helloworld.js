var InputState = React.createClass({
  getInitialState: function(){
    return {enable: false};
  },
  handleClick: function(event){
    this.setState({enable: !this.state.enable});
  },
  render: function(){
    return {
      <p>
        <input type="text" disabled={this.state.enable} />
        <button onClick="{this.handleClick}">Change State</button>
      </p>
    }
  }
})

React.render(
  <InputState />,
  document.getElementById('box')
);
