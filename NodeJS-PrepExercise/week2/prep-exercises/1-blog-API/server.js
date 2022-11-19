const express = require('express')
const app = express();
const fs = require("fs");

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/blogs', (req, res) => {
    // How to get the title and content from the request??
    const title = req.body.title;
    const content =req.body.content;
    fs.writeFileSync(title, content);
    res.end(`ok`);
})

app.put('/posts/:title', (req, res) => {
  // How to get the title and content from the request?
  // What if the request does not have a title and/or content?
  const title = req.body.title;
  const content =req.body.content;
  if (fs.existsSync(title)) {
    fs.writeFileSync(title, content);
    res.end('ok')
  }
  else {
    // Send response with error message
    res.end('This post does not exist!');
  }
})  

app.delete('/blogs/:title', (req, res) => {
  // How to get the title from the url parameters?
  const title = req.params.title;
  if (fs.existsSync(title)) { // Add condition here
    fs.unlinkSync(title);
    res.end(`${title} deleted!`);
  } else {
    // Respond with message here
    res.end('This title does not exist!');
  }
})

app.get('/blogs/:title', (req, res) => {
  // How to get the title from the url parameters?
  const title = req.params.title;
  // check if post exists
  if (fs.existsSync(title)){
    const post = fs.readFileSync(title);
    // send response
    res.send(post);
  } else {
    res.end('This post does not exist!');
  }
})
 
app.listen(3000)