const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const WebSocket = require('ws');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const users = [
  { email: 'kiet', password: 'kiet' }
];

const secretKey = 'your_secret_key';

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    const token = jwt.sign({ email: user.email }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Tài khoản hoặc mật khẩu không đúng');
  }
});

const wss = new WebSocket.Server({ port: 8081 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    const parsedMessage = JSON.parse(message);
    console.log('Received from client:', parsedMessage);
    
    // Gửi lại tin nhắn đến tất cả các client khác
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN && client !== ws) {
        client.send(JSON.stringify(parsedMessage));
      }
    });

    // Logic trả lời tự động chỉ cho Employee
    let autoReply = '';
    
    if (parsedMessage.sender === 'Employee' && parsedMessage.text.toLowerCase().includes('hello')) {
        autoReply = 'Xin chào nhân viên!';
    }
    
    if (autoReply) {
      const autoReplyMessage = {
        sender: 'Employee',
        text: autoReply
      };

      ws.send(JSON.stringify(autoReplyMessage));
      console.log('Auto reply sent:', JSON.stringify(autoReplyMessage));
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`WebSocket server is running on ws://localhost:8081`);
});
