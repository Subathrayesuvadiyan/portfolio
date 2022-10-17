const express = require('express');
const path = require("path");
const app = express();

const publicDirPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");

app.set("view engine", "hbs");
app.set("views", viewPath);
app.use(express.static(publicDirPath));

app.get('/users/add', function (req, res) {
  res.render('addUsers',{
    title:"AddUser"
  });
});

app.get('/user', function (req, res) {
  res.render('users');
});

app.get('/vendor/add', function (req, res) {
  res.render('addvendor',{
    title:"Addvendor"
  });
});


app.get('/vendor', function (req, res) {
  res.render('vendor');
});

app.get('/product/add', function (req, res) {
  res.render('addProduct',{
    title:"AddProduct"
  });
});


//  app.get('/product/add', function (req, res) {
//    res.render('product');
//  })


app.get('/product', function (req, res) {
  res.render('product');
});

app.get('/admin', function (req, res) {
  res.render('admin');
});

app.get('/admin/add', function (req, res) {
  res.render('addAdmin',{
    title:"AddAdmin"
  });
});

app.get('/home', function (req, res) {
  res.render('home');
});

app.get('/fwd', function (req, res) {
  res.render('forget');
});


app.get('/reg', function (req, res) {
    res.render('registration');
  });

app.get('/', function (req, res) {
  res.render('login');
});

app.listen(8081,function(){
    console.log("The server is up on port 8081");
});