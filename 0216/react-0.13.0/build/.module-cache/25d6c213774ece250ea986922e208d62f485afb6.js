var names = ['quinn','bob','Jana'];
React.render(
  React.createElement("div", null, 
    
      names.map(function(name){
        return React.createElement("div", null, "Hello, ", name, "!")
      })
    
  ),
  document.getElementById('example')
);