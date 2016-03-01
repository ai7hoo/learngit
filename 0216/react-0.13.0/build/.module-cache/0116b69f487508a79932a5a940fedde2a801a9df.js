React.render(
  React.createElement("h1", null, "Hello World!"),
  document.getElementById('example1')
);

var names = ['quinn','bob','Jana'];
React.render(
  React.createElement("div", null, 
    
      names.map(function(name){
        return React.createElement("div", null, "Hello, ", name, "!")
      })
    
  ),
  document.getElementById('example2')
);

var titles = ['dog','the truth that you leave','beautiful in white'];
React.render(
  React.createElement("div", null, 
    
      titles.map(function(title){
        return React.createElement("h2", null, "song name: ", title, "!")
      })
    
  )
);