/*	Created on Jan 31, 2017
 *
 *	@file: Config.js
 *	@author: dsalex1
 *	@about: this file contains several utility/helper functions
 */
onChange =function(interval,url,callback){
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

buildLog=function(){
	var ncp = require('ncp').ncp;

	fs.readFile('./Main.js', "utf-8", function read(err, data) {
	    if (err) {
	    	console.log("ERROR while version addaptoin:");
	    	console.error(err);
	    	return;
	        //throw err;
	    }
		version=/\w*\s*\d*.\d*.\d*-\d\d\d\d/.exec(data)[0];
		newVersion=version.slice(0,-4)+("000" + (parseInt(version.slice(-4))+1)).slice(-4);
		snapshot=/@snapshot:\s*\w*/.exec(data)[0];
		newSnapshot=snapshot
		if (snapshot.slice(-4)==="true"){
			newSnapshot=snapshot.split(':')[0]+": false"
			ncp("./", "../snapshots/"+version+"/", function (err) {  
			  if (err) {
				console.log("ERROR while version addaptoin:");
			    console.error(err);
			  }});
		}
		data=data.replace(snapshot,newSnapshot)
		if (/@autoincrement:\s*true/.test(data))
			data=data.replace(version,newVersion)
	    fs.writeFile('./Main.js', data, null)
	});
}

var querystring = require('querystring'); //used to decode query strings

recurQueryStringify=function(obj){
	for (var key in obj) {
	  if (obj.hasOwnProperty(key)) {
	    if (typeof obj[key]== typeof {}){
	    	obj[key]=recurQueryStringify(obj[key])
	    }
	  }
	}
	return querystring.stringify(obj);
}

