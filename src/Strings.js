/*	Created on Jan 31, 2017
 *
 *	@file: Strings.js
 *	@author: dsalex1
 *	@about: main strings file 
 */
SERVER_UP_MSG=function(SP){
	return 'server up and running at '+SP+' port'; 
}

CLIENT_CN_UNKNOWN_ERR=function(CN){
     return "<b>403.10 - invalid configuration</b> <br/>" +
	 "If this error persists, please contact the system administrator. <br/><br/>"+
     "Additional information: <br/>"+"" +
     "Client's Common Name ("+CN+") couldnt be found in configuration.";
}

CLIENT_CERT_UNTRUSTED_ERR=function(){
	return "<b>403.16 - client certificate is untrusted</b> <br/>" +
	"If this error persists, please contact the system administrator.";
}

NO_ASSINGMENT_FOR_KEYCODE_ERR=function(KC){
	return "<b>404.4 – no handler configured.</b> <br/>" +
	"The requested key ("+KC+") has not been assigned to a resource.<br/>" +
	"redirecting..." +
	"<script>" +
	"	setTimeout(function(){" +
	"    window.location.replace('./');" +
	"  },1500);"+
	"</script>";
}