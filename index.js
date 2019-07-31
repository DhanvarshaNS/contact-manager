const server = require("express")();
const config = require("./config/config");
const middleware = require("./middleware/middleware");
const contactRouter = require("./router/contact");
const userRouter = require("./router/user");


var cors = require('cors');
// const upload = require('./upload');
server.use(middleware);
server.use("/contact", contactRouter);
server.use("/user", userRouter);


// server.post('/upload', upload);
var corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200
  };

  server.use(cors(corsOptions));
server.use(cors({origin: 'http://localhost:4200'}));
server.listen(config.app.port, () => {
	console.log(`Service is listening to ${config.app.port}`);
});
