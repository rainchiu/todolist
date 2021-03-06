var App = {};
//init todo list data structure
App.init = function(){
  this.data = []; 

  $('.container').delegate('#addbtn','click',function(event){
    App.add($(event.target).prev().val());
    $(event.target).prev().val("");
  });
};
//Add function to add list
App.add = function(str){
  this.data.push(str);
  App.render();
};
//remove
App.remove = function(index){
  this.data.splice(data.length-1-index, 1);
  App.render();
};
//render
App.render = function(){
  data= this.data;
  console.log(data);
  html = "";
  for(var i=data.length-1; i>=0; i--){
    html += '<li>'+$('#todo-list').text(data[i]).html()+'</li>';
  }

  $('#todo-list').html(html);
};

App.init();



