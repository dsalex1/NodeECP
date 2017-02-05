/*	Created on Dec 16, 2016
 *
 *	@file: Main.js
 *	@author: dsalex1 
 *	@version: alpha 0.3.1-0219
 *  @snapshot: false
 *  @autoincrement: true
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
 *			0.2.3 - basic documentation 
 *			0.2.4 - auto build numbering, build number set to 200
 *		0.3.x     - presentations
 *		    0.3.1 - basic functionality
 *	@about: main server file handling client authentification, incoming requests,
 *			redirection and database access.
 */

//######################imports################################################################

var url = require('url'); //used to pass URLs as object to functions rather than as String
var https = require('https'); //used to create the main server object
var path = require('path'); //used to pass paths as objects 
var express = require('express'); //used to serve public folders via https
var http = require('http'); //used to accquire files to check for changes
var fs = require('fs'); //used to import *.js files and to supply files
eval(fs.readFileSync('Config.js')+'');//import main configuration
eval(fs.readFileSync('Strings.js')+'');//import main strings
eval(fs.readFileSync('Util.js')+'');//import utilities 

//######################end of imports##########################################################


//######################version addaption#####################################################################################################"""
buildLog()
//#######################END OF VERSION ADDAPTION##############################################################################################"""


//######################instanciate main Server#################################################

var options = {
  key: fs.readFileSync(config["ServerPrivateKey"]),
  cert: fs.readFileSync(config["ServerCert"]),
  ca: fs.readFileSync(config["RootCA"]), 
  requestCert: true , 
  rejectUnauthorized: true
};//set up https server with client certification required and rejected invalid
var app = express();
var server = https.createServer(options, app);
var io = require('socket.io')(server);//set up socket io to transmit data back to client
//######################end of instanciate main Server##########################################



//######################define server behavior#################################################

app.use(express.static(path.join(__dirname, 'public')));//serve 'public' folder public as root

app.get('/', function(req, res){//accessing root 
    // AUTHORIZED 
    if(req.client.authorized){
	 
	    var subject = req.connection.getPeerCertificate().subject;
		if (config["Clients"][subject.CN]!=undefined){ //try to fetch default view path for client subject.CN and redirect there
			ClientPath=config["Clients"][subject.CN]["Path"];
			ClientQuery=config["Clients"][subject.CN]["Params"];
			if (config["Presentations"][subject.CN]!=undefined){ //see if there's a presentation scheduled and if so append params to query
				params=config["Presentations"][subject.CN]
				if (typeof params["Url"]== typeof {})
					params["Url"]=params["Url"]["Path"]+"?"+recurQueryStringify(params["Url"]["Params"]);
				ClientQuery=Object.assign(ClientQuery,config["Presentations"][subject.CN]);
			}
		    res.writeHead(302, {'Location': (ClientPath+"?"+recurQueryStringify(ClientQuery))});
		    res.end(); 
	    }else{ //if the client is unknown to us tell the client 
		    res.send(CLIENT_CN_UNKNOWN_ERR(subject.CN));
		}
	// NOT AUTHORIZED
    } else {
    	res.send(CLIENT_CERT_UNTRUSTED_ERR());
    }
});

app.get('/keypress', function (req, res) {
	try{  //try to fetch default view path for client subject.CN and redirect there
	    entry=config["Keyboard"][""+req.query.keycode];
		    res.writeHead(302, {'Location': (entry["Path"]+"?"+recurQueryStringify(entry["Params"]))});
		    res.end(); 
    }catch(err){  //if we ran into an error tell the client 
	    res.send(NO_ASSINGMENT_FOR_KEYCODE_ERR(req.query.keycode))
	}
});

//##########proxi file thru#########

app.get(/\/(lehrer|schueler)Plan\.json/, function(req, res){
	// AUTHORIZED 
    if(req.client.authorized){
	    var externalReq = http.request({
	        hostname: "www.plaene.iks.bullencode.de",
	        path: "/json"+req.url
	    }, function(externalRes) {
	        externalRes.pipe(res);
	    });
	    externalReq.end();
	
	  	// NOT AUTHORIZED
    } else {
		res.send(CLIENT_CERT_UNTRUSTED_ERR());
    }
});

app.get('(/static)?/presentation/*', function(req, res){
	// AUTHORIZED 
    if(req.client.authorized){ 
	    var externalReq = https.request({
	        hostname: "docs.google.com",
	        path: req.url
	    }, function(externalRes) {
	        externalRes.pipe(res);
	    });
	    externalReq.end();
	
	  	// NOT AUTHORIZED
    } else {
		res.send(CLIENT_CERT_UNTRUSTED_ERR());
    }
});
//##########end of proxi file thru#########

//io.on('connection', function(socket){
//});

//######################end of define server behavior##############################################



//######################start server and register onchange listener################################

server.listen(config["ServerPort"], function() {
    console.log(SERVER_UP_MSG(config["ServerPort"]));
    onChange(10000,url.parse('http://www.plaene.iks.bullencode.de/json/schuelerPlan.json'),
	    function() {
	    		io.sockets.emit('reload');
	    });
    //setInterval(function(){io.sockets.emit('reload')}, 5000);
}); 

//######################end of start server and register onchange listener########################

//EOF