/*	Created on Dec 16, 2016
 *
 *	@file: Main.js
 *	@author: dsalex1
 *	@version: alpha 0.2.2
 *	@changelog:
 *	    0.1.x     - basic functionality
 *			0.1.1 - public folder added
 *			0.1.2 - websockets added
 *			0.1.3 - server authetification added
 *			0.1.4 - client authentification added
 *			0.1.5 - data file proxy added
 *			0.1.6 - onchange listener for db added
 *			0.1.7 - externalization of basic config
 *		0.2.x	  - refactoring
 *			0.2.1 - strings externalized
 *			0.2.2 - extracted further config
 *	@about: main server file handling client authentification, incoming requests,
 *			redirection and database access.
 */
var fs = require('fs');
var url = require('url');
var https = require('https');
var path = require('path');
var express = require('express');
var http = require('http');
var querystring = require('querystring');
var fs = require('fs');
eval(fs.readFileSync('Config.js')+'');
eval(fs.readFileSync('Strings.js')+'');


var options = {
  key: fs.readFileSync(config["ServerPrivateKey"]),
  cert: fs.readFileSync(config["ServerCert"]),
  ca: fs.readFileSync(config["RootCA"]), 
  requestCert: true , 
  rejectUnauthorized: true
};
var app = express();
var server = https.createServer(options, app);
var io = require('socket.io')(server);


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	 
	  // AUTHORIZED 
	  if(req.client.authorized){
	 
	    var subject = req.connection
	      .getPeerCertificate().subject;
		try{
		    entry = config["Clients"][subject.CN];
 		    res.writeHead(302, {'Location': (entry["Path"]+"?"+querystring.stringify(entry["Params"]))});
 		    res.end(); 
	    }catch(err){
		    res.send(CLIENT_CERT_UNKNOWN_ERR(subject.CN));
		}
	  // NOT AUTHORIZED
	  } else {
	  res.send(CLIENT_CERT_UNTRUSTED_ERR());
	  }
	});
app.get('/schuelerPlan.json', function(req, res){
	 
	  // AUTHORIZED 
	  if(req.client.authorized){
	   var externalReq = http.request({
	        hostname: "www.plaene.iks.bullencode.de",
	        path: "/json/schuelerPlan.json"
	    }, function(externalRes) {
	        externalRes.pipe(res);
	    });
	    externalReq.end();

	  // NOT AUTHORIZED
	  } else {
	  res.send(CLIENT_CERT_UNTRUSTED_ERR());
	  }
	});

app.get('/lehrerPlan.json', function(req, res){
	 
	  // AUTHORIZED 
	  if(req.client.authorized){
	   var externalReq = http.request({
	        hostname: "www.plaene.iks.bullencode.de",
	        path: "/json/lehrerPlan.json"
	    }, function(externalRes) {
	        externalRes.pipe(res);
	    });
	    externalReq.end();

	  // NOT AUTHORIZED
	  } else {
      res.send(CLIENT_CERT_UNTRUSTED_ERR());
	  }
	});
app.get('/keypress', function (req, res) {
	try{
	    entry=config["Keyboard"][""+req.query.keycode];
		    res.writeHead(302, {'Location': (entry["Path"]+"?"+querystring.stringify(entry["Params"]))});
		    res.end(); 
    }catch(err){
	    res.send(NO_ASSINGMENT_FOR_KEYCODE_ERR(req.query.keycode))
	}
});
io.on('connection', function(socket){
});

server.listen(config["ServerPort"], function() {
  console.log(SERVER_UP_MSG(config["ServerPort"]));
  onChange(function() {io.sockets.emit('reload');},url.parse('http://www.plaene.iks.bullencode.de/json/schuelerPlan.json'),10000)
  //setInterval(function(){io.sockets.emit('reload')}, 5000);
}); 


onChange =function(callback,url,interval){
	var oldDate= null;
	var options = {method: 'HEAD', host: url.hostname, port: 80, path: url.path};
	var req = http.request(options, function(res) {
	    oldDate=res.headers["last-modified"];
	  } 
	); 
	req.end();
	
	function pollForChange(){
		var options = {method: 'HEAD', host: url.host, port: 80, path: url.path};
		var req = http.request(options, function(res) {
			var newdate=res.headers["last-modified"];
		    if (oldDate!=newdate){
		    	console.log("this is 2 "+callback); 
		    	callback();
		    	oldDate=newdate;
		    }
		  } 
		);
		req.end();
	}
	
	setInterval(pollForChange, interval);
	 
}


