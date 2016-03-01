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
    
  ),
  document.getElementById('example3')
);

var girls = ['小明','小红','我不是小明','我就是小明'];
React.render(
  React.createElement("div", null, 
    
      girls.map(function(girl){
        return React.createElement("h4", null, "名称：", girl)
      })
    
  ),
  document.getElementById('example4')
);

var foods = ['蛋炒饭','红烧肉','铁锅鲇鱼'];
React.render(
  React.createElement("div", null, 
    
      foods.map(function(food){
        return React.createElement("div", null, "我想吃：", food)
      })
    
  ),
  document.getElementById('example5')
);