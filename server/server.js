const express = require('express');
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: { origin: "*" }
});

const port = new SerialPort('COM7', {
  baudRate: 57600,
});

const parser = port.pipe(new Readline({ delimiter: '\n' }));

// Obsługa komunikacji szeregowej
parser.on('data', (data) => {
  console.log('Received data:', data);
});

// Obsługa połączenia z przeglądarką
io.on('connection', (socket) => {
  console.log('a user connected')
  socket.on('color0', (red, green, blue) => {
    console.log('Poszło')
    port.write(`0 ${red} ${green} ${blue} `, (err) => {
      if (err) {
        console.error('Error writing to port:', err);
      }
    });
  });
  socket.on('color1', (red, green, blue) => {
    console.log('Poszło')
    port.write(`1 ${red} ${green} ${blue} `, (err) => {
      if (err) {
        console.error('Error writing to port:', err);
      }
    });
  });
  socket.on('color2', (red, green, blue) => {
    console.log('Poszło')
    port.write(`2 ${red} ${green} ${blue} `, (err) => {
      if (err) {
        console.error('Error writing to port:', err);
      }
    });
  });
  socket.on('color3', (red, green, blue) => {
    console.log('Poszło')
    port.write(`3 ${red} ${green} ${blue} `, (err) => {
      if (err) {
        console.error('Error writing to port:', err);
      }
    });
  });
  socket.on('color4', (red, green, blue) => {
    console.log('Poszło')
    port.write(`4 ${red} ${green} ${blue} `, (err) => {
      if (err) {
        console.error('Error writing to port:', err);
      }
    });
  });
  socket.on('color5', (red, green, blue) => {
    console.log('Poszło')
    port.write(`5 ${red} ${green} ${blue} `, (err) => {
      if (err) {
        console.error('Error writing to port:', err);
      }
    });
  });
  socket.on('color6', (red, green, blue) => {
    console.log('Poszło')
    port.write(`6 ${red} ${green} ${blue}`, (err) => {
      if (err) {
        console.error('Error writing to port:', err);
      }
    });
  });
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});