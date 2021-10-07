import express from 'express';
import mongoose from 'mongoose';
import contactRoutes from './routes/contactRoutes';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json({
  limit: '5mb'
}));
app.use(bodyParser.urlencoded({
  extended: false,
  limit: '5mb',
  parameterLimit: 50000
}));

const uri = "mongodb+srv://admin:Byf980726@cluster0.vlpuo.mongodb.net/blog?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('error', () => {
  console.log("Something goes wrong while connecting mongodb!");
});
mongoose.connection.once('open', () => {
  console.log("Connected with mongodb!");
});

app.use('/contacts', contactRoutes);

module.exports = {
  path: '/api',
  handler: app
};
