const { readFile, writeFile } = require('fs/promises');
const BlogPost = require('./lib/blogPost');

// TODO: Update the code below so that the exception is caught and a message is logged in the terminal.
// what if API blocks you? You'll never get to .then, so need a fail safe
// need something to catch the error

// The string to readFile is intentionally incorrect to force the error.
readFile('./data/post.json', 'utf-8') // read the file
  .then((json) => {
    const blogData = JSON.parse(json);
    const post = new BlogPost(
      blogData.title,
      blogData.text,
      blogData.author,
      blogData.createdOn
    );
    const html = post.render();
    return writeFile('./dist/post.html', html);
  })
  .then(() => {
    console.log('Created post.html');
  }).catch((error) => { // catch block at the end, to catch the error
    console.log(error);
    console.log("there was an error!");
}); 
