var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  var posts = fs.readFileSync('data/posts.json', 'utf8');

  res.render('index', {
    title: 'Home',
    bg: 'images/home.jpg',
    heading: 'Clean Blog',
    subHeading: 'A Clean Blog',
    posts: JSON.parse(posts)
  });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  var text = fs.readFileSync('data/aboutInfo.json', 'utf8');

  res.render('about', {
    title: 'About',
    bg: 'images/about.jpg',
    heading: 'About Me',
    subHeading: 'This is what I do',
    text: JSON.parse(text)
  });
});

/* GET post page. */
router.get('/post', function(req, res, next) {
  var text = fs.readFileSync('data/postInfo.json');

  res.render('post', {
    title: 'Post',
    bg: 'images/post.jpg',
    heading: 'Man must explore, and this is exploration at its greatest',
    subHeading: 'Problems look mighty small from 150 miles up',
    text: JSON.parse(text)
  });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {
    title: 'Contact',
    bg: 'images/contact.jpg',
    heading: 'Contact Me',
    subHeading: 'Have questions? I have answers (maybe).'
  });
});

module.exports = router;
