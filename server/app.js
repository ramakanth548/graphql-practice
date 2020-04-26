const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross- origin requests
app.use(cors());

mongoose.connect("mongodb+srv://ramakanth548:Mongo1234@cluster0-dfdux.mongodb.net/test?retryWrites=true&w=majority");
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000, () => {
    console.log('now listening on 4000');
});