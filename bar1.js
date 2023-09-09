const express = require('express');
const WebSocket = require('ws')
const APIKEY = process.env.POLY_API_KEY || 'slItgdlk8bR20E2SnvItY_x7b7lXE0SB'
const ws = new WebSocket('wss://socket.polygon.io/crypto') 
//const ws1 = new WebSocket('wss://socket.polygon.io/crypto') 
//const moment = require('moment');
var fs = require('fs');
var app = express();
const file = fs.readFileSync(__dirname +'/list2.json')
if (file.length == 0) {
    //add data to json file
   // fs.writeFileSync("student.json", JSON.stringify([data]))
   console.log("n")
}else{
    console.log("y")
}
//setting middleware
//app.use(express.static(__dirname + 'public')); //Serves resources from public folder
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')));
var msgd = []
const server = express()
  .use((req, res) => res.sendFile('/main.html', { root: __dirname }))
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
          //  console.log(typeof msg)
          //  console.log("Pair: "+msg.pair)
          //  console.log("Price: "+msg.p)
           // console.log("Timestamp: "+msg.t)
           // console.log("Size: "+msg.s)
           // console.log(msg.c)
           // console.log("ID: "+msg.i)
           // console.log("Exchange ID: "+msg.x)
           const date = new Date();
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
   // dateTime= Date.parse(dateTime)/1000;
   // var dateTime = hour+':'+minute+':'+second;  
           
           console.log(dateTime);
           
           //let bd= '{"time":' + j + ',"open":' + msg.o + ',"high":' + msg.h + ',"low":' + msg.l + ',"close":' + msg.c+'}';
         //  let bd= '{"time":' + '"'+time+'"' + ',"open":' + msg.o + ',"high":' + msg.h + ',"low":' + msg.l + ',"close":' + msg.c+'}';
          // let bd= '{"time":' + '"'+time+'"' + ',"open":' + msg.p + ',"high":' + msg.s + ',"low":' + msg.c + ',"close":' + msg.i+'}';
           let bd = "var dprice = "+ msg.p+";";
          // let datas = JSON.stringify(bd).replace(/\\"/g, '"')
          console.log(bd);
          let datas =bd;
          // datas= datas.slice(1, -1);
const file = fs.readFileSync(__dirname +'/list2.json')
        //   if (file.length == 0) {
            //add data to json file
            //fs.writeFileSync("list23.js", "["+datas+"]")
            fs.writeFileSync("list23.js", datas)

        //    time= time/1000;
            let bd1= '{"time":' + '"'+dateTime+'"' + ',"open":' + msg.p + ',"high":' + msg.p + ',"low":' + msg.p + ',"close":' + msg.p+'}';
       //     let bd1= '{"time":' + '"'+msg.t/1000+'"' + ',"open":' + msg.p + ',"high":' + msg.p + ',"low":' + msg.p + ',"close":' + msg.p+'}';
            let datas1 = JSON.stringify(bd1).replace(/\\"/g, '"')
            datas1= datas1.slice(1, -1);
            if(i<1){
            fs.writeFileSync("list1.json", "["+datas1+"]")
              i++;
            }
        ///} else {
            //append data to jso file
         //   datas= datas.slice(1, -1);
          //  fs.writeFile('list2.json', ','+JSON.stringify(data)+',', { flag: 'a+' }, (err) => {
           //     if (!err) {
             //     console.log('done');
              //  }
             // });
              
        //    const json1 = JSON.parse(msg.toString())
        //    fs.appendFile(__dirname +'/list.json', datas  + ',', (err) => {  
          //          if (err) throw err;
            //        console.log('Data written to file');
              //    });

            console.log('add')
          /*
            const json = JSON.parse(file.toString())
    //add json element to json object
    json.push(data);
    fs.writeFileSync("list.json", JSON.stringify(data))
    */
    
//}  
        
     //   const json = JSON.parse(msgd.toString())

    // var dataf = fs.readFileSync(__dirname +'/list.json');
    // var json = JSON.parse(dataf);
    // json.push(datas);
     
     //fs.writeFileSync("list.json", JSON.stringify(json))



     //Main
         //  fs.appendFile(__dirname +'/list.json', datas  + ',', (err) => {  
         //    if (err) throw err;
         //    console.log('Data written to file');
         //  });
          
           // console.log(msg.r)
        })
        
    })




/*
    ws.on('message', ( data ) => {
        data = JSON.parse( data )
        
        data.map(( msg ) => {
            if( msg.ev === 'status' ){
                return console.log('Status Update:', msg.message)
            }
           j= j+5;
           // console.log(msg)
            msgd = msg
            console.log(i)
            console.log(msg)
          //  console.log(typeof msg)
          //  console.log("Pair: "+msg.pair)
          //  console.log("Price: "+msg.p)
           // console.log("Timestamp: "+msg.t)
           // console.log("Size: "+msg.s)
           // console.log(msg.c)
           // console.log("ID: "+msg.i)
           // console.log("Exchange ID: "+msg.x)
           var time = moment(msg.s).format("DD-MM-YYYY h:mm:ss");
           
           console.log(time);
           
           //let bd= '{"time":' + j + ',"open":' + msg.o + ',"high":' + msg.h + ',"low":' + msg.l + ',"close":' + msg.c+'}';
         //  let bd= '{"time":' + '"'+time+'"' + ',"open":' + msg.o + ',"high":' + msg.h + ',"low":' + msg.l + ',"close":' + msg.c+'}';
          // let bd= '{"time":' + '"'+time+'"' + ',"open":' + msg.p + ',"high":' + msg.s + ',"low":' + msg.c + ',"close":' + msg.i+'}';
           let bd = "var dprice = "+ msg.p+";";
          // let datas = JSON.stringify(bd).replace(/\\"/g, '"')
          console.log(bd);
          let datas =bd;
          // datas= datas.slice(1, -1);
const file = fs.readFileSync(__dirname +'/list2.json')
        //   if (file.length == 0) {
            //add data to json file
            //fs.writeFileSync("list23.js", "["+datas+"]")
            fs.writeFileSync("list23.js", datas)
        ///} else {
            //append data to jso file
         //   datas= datas.slice(1, -1);
          //  fs.writeFile('list2.json', ','+JSON.stringify(data)+',', { flag: 'a+' }, (err) => {
           //     if (!err) {
             //     console.log('done');
              //  }
             // });
              
        //    const json1 = JSON.parse(msg.toString())
        //    fs.appendFile(__dirname +'/list.json', datas  + ',', (err) => {  
          //          if (err) throw err;
            //        console.log('Data written to file');
              //    });

            console.log('add')
          /*
            const json = JSON.parse(file.toString())
    //add json element to json object
    json.push(data);
    fs.writeFileSync("list.json", JSON.stringify(data))
    
    
//}  
        
     //   const json = JSON.parse(msgd.toString())

    // var dataf = fs.readFileSync(__dirname +'/list.json');
    // var json = JSON.parse(dataf);
    // json.push(datas);
     
     //fs.writeFileSync("list.json", JSON.stringify(json))



     //Main
         //  fs.appendFile(__dirname +'/list.json', datas  + ',', (err) => {  
         //    if (err) throw err;
         //    console.log('Data written to file');
         //  });
          
           // console.log(msg.r)
        })
        
    }) */
    ws_server.clients.forEach((client) => {

        
     // client.send(new Date().toTimeString());
    //client.send("Object: "+i+" {Pair: "+msgd.pair+" Price: "+msgd.p+" Timestamp: "+msgd.s+" Size: "+msgd.s+" ID: "+msgd.h+"}");
   //   client.send();
    // client.send(msgd.p);
   
    });
  }, 1000);

  //module.exports.ws = ws;
