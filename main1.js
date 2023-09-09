const express = require('express');
const WebSocket = require('ws')
const APIKEY = process.env.POLY_API_KEY || 'slItgdlk8bR20E2SnvItY_x7b7lXE0SB'
const ws = new WebSocket('wss://socket.polygon.io/crypto') 
var fs = require('fs');
var app = express();
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')));
var msgd = []
const server = express()
  .use((req, res) => res.sendFile('/main1.html', { root: __dirname }))
  .listen(process.env.PORT || 3000, () => console.log(`Listening on ${3000}`));

  
  const { Server } = require('ws');

const ws_server = new Server({ server });


ws.on('open', () => {
    console.log('Connected!')
    ws.send(`{"action":"auth","params":"${APIKEY}"}`)
 //   ws.send(`{"action":"subscribe","params":"XA.BTC-USD"}`)
   ws.send(`{"action":"subscribe","params":"XT.BTC-USD"}`)
})


ws.on('error', console.log)
ws_server.on('connection', (ws) => {
    
    
    console.log('New client connected!');
  
    ws.on('close', () => console.log('Client has disconnected!'));
  });




var i=0;

  setInterval(() => {
    



    ws.on('message', ( data ) => {
        data = JSON.parse( data )
        
        data.map(( msg ) => {
            if( msg.ev === 'status' ){
                return console.log('Status Update:', msg.message)
            }
            
          // j= j+5;
           // console.log(msg)
            msgd = msg
            console.log(i)
            console.log(msg)
          // const date = new Date();
          // var time = moment(date).format("DD-MM-YYYY h:mm:ss");
           var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds(); 
    if(month.toString().length == 1) {
         month = '0'+month-1;
    }
    if(day.toString().length == 1) {
         day = '0'+day;
    }   
    if(hour.toString().length == 1) {
         hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
         minute = '0'+minute;
    }
    if(second.toString().length == 1) {
         second = '0'+second;
    }   
    var dateTime = year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second;   
   
           
           console.log(dateTime);
           let bd = "var dprice = "+ msg.p+";";
         console.log(bd);
          let datas =bd;
            fs.writeFileSync("list23.js", datas)

            let bd1= '{"time":' + '"'+dateTime+'"' + ',"open":' + msg.p + ',"high":' + msg.p + ',"low":' + msg.p + ',"close":' + msg.p+'}';
       //     let bd1= '{"time":' + '"'+msg.t/1000+'"' + ',"open":' + msg.p + ',"high":' + msg.p + ',"low":' + msg.p + ',"close":' + msg.p+'}';
            let datas1 = JSON.stringify(bd1).replace(/\\"/g, '"')
            datas1= datas1.slice(1, -1);
            if(i<1){
            fs.writeFileSync("list1.json", "["+datas1+"]")
              i++;
            }
        })
    })

    ws_server.clients.forEach((client) => {        
     // client.send(new Date().toTimeString());
    //client.send("Object: "+i+" {Pair: "+msgd.pair+" Price: "+msgd.p+" Timestamp: "+msgd.s+" Size: "+msgd.s+" ID: "+msgd.h+"}");
   //   client.send();
     client.send(msgd.p);
    });
  }, 1000);
