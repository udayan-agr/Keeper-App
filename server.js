//jshint esversion:6

const express = require("express");
const mongoose = require("mongoose");
const body = require("body-parser");

const app = express();
app.use(body.urlencoded({
  extended: true
}));

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/notesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const noteSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Note = mongoose.model("Note", noteSchema);


app.get("/getNotes", function(req, res) {
  Note.find({}, function(err, notes) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(notes);
    }
  });
});

app.post("/addNote",function(req,res){
  console.log("body",req.body);
  const newNote = new Note({
    title: req.body.title,
    content: req.body.content
  });
  newNote.save(()=>res.redirect("/getNotes"));
});

app.post("/deleteNote",function (req,res){
  const id = req.body._id;
  Note.findByIdAndDelete(id,()=>res.redirect("/getNotes"));
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
