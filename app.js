const express = require('express');
const WebSocket = require('ws')
const APIKEY = process.env.POLY_API_KEY || 'slItgdlk8bR20E2SnvItY_x7b7lXE0SB'
const ws = new WebSocket('wss://socket.polygon.io/crypto') 
var msgd = []
const server = express()
  .use((req, res) => res.sendFile('/home.html', { root: __dirname }))
  .listen(process.env.PORT || 3000, () => console.log(`Listening on ${3000}`));

  const { Server } = require('ws');

const ws_server = new Server({ server });
ws.on('open', () => {
    console.log('Connected!')
    ws.send(`{"action":"auth","params":"${APIKEY}"}`)
    ws.send(`{"action":"subscribe","params":"XT.BTC-USD"}`)
})


ws.on('error', console.log)
ws_server.on('connection', (ws) => {
    
    
    console.log('New client connected!');
  
    ws.on('close', () => console.log('Client has disconnected!'));
  });
i=0
  setInterval(() => {
    ws.on('message', ( data ) => {
        data = JSON.parse( data )
        data.map(( msg ) => {
            if( msg.ev === 'status' ){
                return console.log('Status Update:', msg.message)
            }
           // console.log(msg)
            msgd = msg
            console.log(i++)
          //  console.log(msg)
          //  console.log(typeof msg)
          //  console.log("Pair: "+msg.pair)
          //  console.log("Price: "+msg.p)
           // console.log("Timestamp: "+msg.t)
           // console.log("Size: "+msg.s)
           // console.log(msg.c)
           // console.log("ID: "+msg.i)
           // console.log("Exchange ID: "+msg.x)
           // console.log(msg.r)
        })
    })
    ws_server.clients.forEach((client) => {
     // client.send(new Date().toTimeString());
   // client.send("Object: "+i+" {Pair: "+msgd.pair+" Price: "+msgd.p+" Timestamp: "+msgd.t+" Size: "+msgd.s+" ID: "+msgd.i+"}");
     // client.send();
     client.send(msgd.p);
    });
  }, 1000);
