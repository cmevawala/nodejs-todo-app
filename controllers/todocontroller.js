var bodyparser = require('body-parser');

module.exports = function(app) {

var data = [{
    item: "Sachin Tendular"
},
{
    item: "Virendar Shewag"
}]

var urlencodedparser = bodyparser.urlencoded({ extended: false}); // ??

app.get('/todo', function(request, response) {
  response.render("todo", {todos: data});
});

app.post('/todo', urlencodedparser, function(request, response) {
  data.push(request.body);
  response.json(data);
  // Variants
  //        response.send() // ?
  //        response.render() // ?
});

app.delete('/todo/:item', function(request, response) {
  data = data.filter(function(todo) {
    return todo.item.replace(/ /g, '-') !== request.params.item;
  });

  response.json(data); // ?
});

};
