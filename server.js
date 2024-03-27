const express = require('express');
// dotenv
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
require('./database')
const usersRouter = require('./routes/users');
const auth = require('./middlewares/auth');


app.use(express.json());
app.use('/users', 
auth,
usersRouter);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// export the app
module.exports = app;