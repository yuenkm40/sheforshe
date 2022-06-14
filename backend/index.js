import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import partnerRoutes from './routes/partners.js';
import userRoutes from './routes/users.js';
import conversationRoute from './routes/conversations.js';
import messageRoute from './routes/messages.js';
import eventRoute from './routes/events.js';
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use(cors());
app.use('/partners', partnerRoutes);
app.use('/user',userRoutes);
app.use('/conversations',conversationRoute);
app.use('/messages',messageRoute);
app.use('/events', eventRoute);

const CONNECTION_URL = 'mongodb+srv://root:root@cluster0.ewekcjr.mongodb.net/sheforshe?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
