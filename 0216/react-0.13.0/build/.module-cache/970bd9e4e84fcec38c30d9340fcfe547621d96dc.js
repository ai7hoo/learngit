var box = React.createClass({displayName: "box",
  getInitialState: function(){
    return {enable: false}
  },
  handleClick: function(event){
    this.setState({enable: !this.state.enable})
  }
})
