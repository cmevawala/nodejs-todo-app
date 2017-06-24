var bodyparser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds135532.mlab.com:35532/todolist');

// Create Schema
var todoschema = new mongoose.Schema({
  item: String
});

// Create Model
var TodoModel = mongoose.model("Todo", todoschema);

// Save Item in Model
// var firstItem = TodoModel({ item: "Sachin Tendular"}).save(function(error) {
//   if(error) throw error;
//
//   console.log("Item Saved");
// })


var urlencodedparser = bodyparser.urlencoded({ extended: false}); // ??


module.exports = function(app) {

app.get('/todo', function(request, response) {
  // Get todos from MongoDB
  TodoModel.find({}, function(error, data) {
    if(error) throw error

    response.render("todo", {todos: data});
  });

  // Im Memory
  // response.render("todo", {todos: data});
});

app.post('/todo', urlencodedparser, function(request, response) {
  // Insert todo into MongoDB
  var newTodo = TodoModel(request.body).save(function(error, data){
    if(error) throw error

    response.json(data);
    // Variants
    //     response.send() // ?
    //     response.render() // ?
  });

  // In Memory
  // data.push(request.body)
  // response.json(data);
});

app.delete('/todo/:item', function(request, response) {
  // Delete todo from MongoDB
  TodoModel.find({item: request.params.item.replace(/\-/g, ' ')}).remove(function(error, data) {
    if(error) throw error

    response.json(data);
  });

  // In Memory
  // data = data.filter(function(todo) {
  //   return todo.item.replace(/ /g, '-') !== request.params.item;
  // });
  //
  // response.json(data); // ?
});

};
