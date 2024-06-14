const WebSocket = require('ws');
const readline = require('readline');

const ws = new WebSocket('ws://localhost:8081');

ws.on('open', () => {
  console.log('Đã kết nối với máy chủ dưới vai trò Admin');
  promptInput();
});

ws.on('message', (data) => {
  const message = JSON.parse(data);
  console.log(`Nhận: ${message.sender}: ${message.text}`);
});

ws.on('error', (error) => {
  console.error(`Lỗi WebSocket: ${error.message}`);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptInput() {
  rl.question('Nhập tin nhắn (Admin): ', (messageContent) => {
    const message = { sender: 'Admin', text: messageContent };
    ws.send(JSON.stringify(message));
    console.log(`Người gửi: ${message.sender}: ${message.text}`);
    promptInput();
  });
}
