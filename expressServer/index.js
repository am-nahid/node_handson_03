const express = require('express')

const app = express();

// const {data}=require('./controller/api');
const route  = require('./routes/routes');
const commonMiddleware = require('./middleware/commonMiddleware');

app.get('/', (req,res)=>{
    res.write("<html>");
    res.write("<head><title>Node</title></head>");
    res.write("<body>");
    res.write('</br>')

    res.write("<h2>Express.js</h2>");
    res.write(
      "<div>Node JS is a fast JavaScript runtime environment that we use to build server-side applications, but it does not know how to perform serving files, handling requests, and handling HTTP methods, so this is where express js comes in.</div>"
    );
    res.write('</br>')
    res.write(
      "<div>Express JS is a Node.js framework designed to build API's web applications cross-platform mobile apps quickly and make node js easy.</div>"
    );
    res.write('</br>')
    res.write('<h3>What is Express js</h3>')
    res.write(
      "<div>Express.js is a minimalistic and flexible web application framework for Node.js. It provides a set of features and tools to build web applications and APIs easily and efficiently. Express.js is known for its simplicity and intuitive API design, making it a popular choice among developers.</div>"
    );
    res.write('</br>')
    res.write('</br>')
    res.write("<form method='GET' action='/api/main'>")
 res.write("<button type='submit'>Hit API</button>")
    res.write("</form>")
    res.write("</body>");
    res.write("</html>");
    return res.end()
})

app.use('/user',commonMiddleware,route)


app.listen(3060,()=>{
    console.log("Server is running fine");
})