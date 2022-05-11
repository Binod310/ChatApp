
const app = require('express')();
var cors=require('cors');
var mongoose = require('mongoose');

const httpServer = require('http').createServer(app);
// var urlencodedParser = express.urlencoded({ extended: false })
var RoomModel = require("./models/schema");
const io = require('socket.io')(httpServer, {
  cors: { origin: '*' }
});


mongoose.connect('mongodb+srv://Binod1:6370293398@cluster0.45a9f.mongodb.net/test').then(() => {
  console.log("Mongodb connected ")
}).catch(err => console.log(err));
app.use(cors());
var messages = []
const port = process.env.PORT || 3000;

app.get("/past_messages", async (req, res) => {
  const roomData = await RoomModel.find({});
  res.send(roomData[0].messages);
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('message', async (message) => {
    messages.push(message);
    await RoomModel.updateOne({ roomId: 1 }, { $push: { messages: message } });
    // io.emit('message', `${message.name} :: ${message.message}`);
    io.emit('message', {"name":message.name,"message":message.message});
  });

 

  socket.on('disconnect', () => {
    console.log('a user disconnected!');
  });
});

httpServer.listen(port, () => console.log(`listening on port ${port}`));