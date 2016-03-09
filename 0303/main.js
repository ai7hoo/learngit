window.onload = function(){
  _.each({
    'aa':'aa',
    'bb':'bb'
  },count);

  var hasName = _.contains({'user':'name'},'name');
  console.log('hasName:%s',hasName);

  var hasSize = _.size({'a':'a','b':'b'});
  console.log('size:%s',hasSize);

  var hasFirst = _.first(['c','d','m']);
  console.log('hasFirst:%s',hasFirst);

  username = 'ai7hoo';
  function hasBind(){
    console.log(this.username);
  }
  hasBind = _.bind(hasBind,{username:'quinn'});
  hasBind();
};
function count(str){
  $("#example").append(str+'<br>');
}