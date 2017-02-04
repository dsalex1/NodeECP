/*	Created on Jan 31, 2017
 *
 *	@file: Config.js
 *	@author: dsalex1
 *	@about: main configuration file 
 */
config={
	"ServerPort":8000,                              //port to listen on
	"ServerPrivateKey":'./certs/ServerCert.key',   //private key corresponding to the cert
	"ServerCert":'./certs/ServerCert.crt',        //server certificate
	"RootCA":'./certs/ClientRootCA.crt',         //CA to check incoming client certs against
	"PollForChangesInterval":5,                 //interval to poll server db for changes
	"Clients":{                                     //storage of all associations between clients and the resource they shall get

		"KantHalle":{	                           //Common Name (CN) of the client
			"Path":"/doublePlanTemplate.html",    //resource to send
			"Params":{                           //params passed as http query string
				'db':'./schuelerPlan.json',
				'index1':0,
				'index2':1
			}
		},
		"ClientTest2":{
			"Path":"/doublePlanTemplate.html",
			"Params":{
				'db':'./schuelerPlan.json',
				'index1':0,
				'index2':1
			}
		},
		"Lehrer1":{
			"Path":"/singlePlanTemplate.html",
			"Params":{
				'db':'./lehrerPlan.json',
				'index1':0
			}
		},
		"Lehrer2":{
			"Path":"/singlePlanTemplate.html",
			"Params":{
				'db':'./lehrerPlan.json',
				'index1':1
			}
		},
		"ClientTest1":{
			"Path":"/multiplePlanTemplate.html",
			"Params":{
				'db':'./lehrerPlan.json',
				'index1':2
			}
		} 
		
	},
	"ScheduledCommands":[         //commands to be executed at a certain time (not implremented yet)
		{
			"Target":"All",
			"Time":"5:15",
			"Command":"CECOnOff",
			"Params":["On"]
		},
		{
			"Target":"All",
			"Time":"17:51",
			"Command":"CECOnOff",
			"Params":["Off"]
		}
	],
	"Keyboard":{                 //association between keycodes and resource a client shall get as answer
		"32": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'And','timeout':5000}},
		"33": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'BS','timeout':5000}},
		"34": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Ba','timeout':5000}},
		"35": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Bm','timeout':5000}},
		"36": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Bi','timeout':5000}},
		"37": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Bt','timeout':5000}},
		"38": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Bre','timeout':5000}},
		"39": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Bru','timeout':5000}},
		"40": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Dkl','timeout':5000}},
		"41": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Dw','timeout':5000}},
		"42": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Ft','timeout':5000}},
		"43": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Gh','timeout':5000}},
		"44": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Go','timeout':5000}},
		"45": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Gr','timeout':5000}},
		"46": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Gn','timeout':5000}},
		"47": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Hk','timeout':5000}},
		"48": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Ht','timeout':5000}},
		"49": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Ho','timeout':5000}},
		"50": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Hom','timeout':5000}},
		"51": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Hh','timeout':5000}},
		"52": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Jö','timeout':5000}},
		"53": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Jd','timeout':5000}},
		"54": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Ka','timeout':5000}},
		"55": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Ki','timeout':5000}},
		"56": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Kle','timeout':5000}},
		"57": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Kf','timeout':5000}},
		"58": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Km','timeout':5000}},
		"59": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Ks','timeout':5000}},
		"60": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Le','timeout':5000}},
		"61": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Lz','timeout':5000}},
		"62": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Ma','timeout':5000}},
		"63": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Mz','timeout':5000}},
		"64": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Me','timeout':5000}},
		"65": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Mll','timeout':5000}},
		"66": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Nm','timeout':5000}},
		"67": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Ni','timeout':5000}},
		"68": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Pe','timeout':5000}},
		"69": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Pm','timeout':5000}},
		"70": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Pp','timeout':5000}},
		"71": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Rad','timeout':5000}},
		"72": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Rm','timeout':5000}},
		"73": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Rei','timeout':5000}},
		"74": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Sa','timeout':5000}},
		"75": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Sh','timeout':5000}},
		"76": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Sz','timeout':5000}},
		"77": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Ste','timeout':5000}},
		"78": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Steffen','timeout':5000}},
		"79": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Stö','timeout':5000}},
		"80": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Tg','timeout':5000}},
		"81": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Ts','timeout':5000}},
		"82": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Wb','timeout':5000}},
		"83": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Wi','timeout':5000}},
		"95": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'05a','timeout':5000}},
		"96": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'05b','timeout':5000}},
		"97": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'05c','timeout':5000}},
		"98": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'05d','timeout':5000}},
		"99": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'06a','timeout':5000}},
		"100": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'06b','timeout':5000}},
		"101": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'06c','timeout':5000}},
		"102": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'06d','timeout':5000}},
		"103": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'07a','timeout':5000}},
		"104": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'07b','timeout':5000}},
		"105": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'07c','timeout':5000}},
		"106": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'07d','timeout':5000}},
		"107": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'08a','timeout':5000}},
		"108": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'08b','timeout':5000}},
		"109": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'08c','timeout':5000}},
		"110": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'08d','timeout':5000}},
		"111": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'09a','timeout':5000}},
		"112": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'09b','timeout':5000}},
		"113": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'09c','timeout':5000}},
		"114": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'09d','timeout':5000}},
		"115": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Ea','timeout':5000}},
		"116": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Eb','timeout':5000}},
		"117": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Ec','timeout':5000}},
		"118": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Ed','timeout':5000}},
		"119": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Q1a','timeout':5000}},
		"120": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Q1b','timeout':5000}},
		"121": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Q1c','timeout':5000}},
		"122": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Q1d','timeout':5000}},
		"123": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Q2a','timeout':5000}},
		"124": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Q2b','timeout':5000}},
		"125": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Q2c','timeout':5000}},
		"126": {"Path":"/multiplePlanTemplate.html","Params":{'db':'./lehrerPlan.json','index1':0,'filter':'Q2d','timeout':5000}},
		"144": {"Path":"/showPNG.html","Params":{'file':"/images/And.png",'timeout':5000}},
		"145": {"Path":"/showPNG.html","Params":{'file':"/images/BS.png",'timeout':5000}},
		"146": {"Path":"/showPNG.html","Params":{'file':"/images/Ba.png",'timeout':5000}},
		"147": {"Path":"/showPNG.html","Params":{'file':"/images/Bm.png",'timeout':5000}},
		"148": {"Path":"/showPNG.html","Params":{'file':"/images/Bi.png",'timeout':5000}},
		"149": {"Path":"/showPNG.html","Params":{'file':"/images/Bt.png",'timeout':5000}},
		"150": {"Path":"/showPNG.html","Params":{'file':"/images/Bre.png",'timeout':5000}},
		"151": {"Path":"/showPNG.html","Params":{'file':"/images/Bru.png",'timeout':5000}},
		"152": {"Path":"/showPNG.html","Params":{'file':"/images/Dkl.png",'timeout':5000}},
		"153": {"Path":"/showPNG.html","Params":{'file':"/images/Dw.png",'timeout':5000}},
		"154": {"Path":"/showPNG.html","Params":{'file':"/images/Ft.png",'timeout':5000}},
		"155": {"Path":"/showPNG.html","Params":{'file':"/images/Gh.png",'timeout':5000}},
		"156": {"Path":"/showPNG.html","Params":{'file':"/images/Go.png",'timeout':5000}},
		"157": {"Path":"/showPNG.html","Params":{'file':"/images/Gr.png",'timeout':5000}},
		"158": {"Path":"/showPNG.html","Params":{'file':"/images/Gn.png",'timeout':5000}},
		"159": {"Path":"/showPNG.html","Params":{'file':"/images/Hk.png",'timeout':5000}},
		"160": {"Path":"/showPNG.html","Params":{'file':"/images/Ht.png",'timeout':5000}},
		"161": {"Path":"/showPNG.html","Params":{'file':"/images/Ho.png",'timeout':5000}},
		"162": {"Path":"/showPNG.html","Params":{'file':"/images/Hom.png",'timeout':5000}},
		"163": {"Path":"/showPNG.html","Params":{'file':"/images/Hh.png",'timeout':5000}},
		"164": {"Path":"/showPNG.html","Params":{'file':"/images/Jö.png",'timeout':5000}},
		"165": {"Path":"/showPNG.html","Params":{'file':"/images/Jd.png",'timeout':5000}},
		"166": {"Path":"/showPNG.html","Params":{'file':"/images/Ka.png",'timeout':5000}}, 
		"167": {"Path":"/showPNG.html","Params":{'file':"/images/Ki.png",'timeout':5000}},
		"168": {"Path":"/showPNG.html","Params":{'file':"/images/Kle.png",'timeout':5000}},
		"169": {"Path":"/showPNG.html","Params":{'file':"/images/Kf.png",'timeout':5000}},
		"170": {"Path":"/showPNG.html","Params":{'file':"/images/Km.png",'timeout':5000}},
		"171": {"Path":"/showPNG.html","Params":{'file':"/images/Ks.png",'timeout':5000}},
		"172": {"Path":"/showPNG.html","Params":{'file':"/images/Le.png",'timeout':5000}},
		"173": {"Path":"/showPNG.html","Params":{'file':"/images/Lz.png",'timeout':5000}},
		"174": {"Path":"/showPNG.html","Params":{'file':"/images/Ma.png",'timeout':5000}},
		"175": {"Path":"/showPNG.html","Params":{'file':"/images/Mz.png",'timeout':5000}},
		"176": {"Path":"/showPNG.html","Params":{'file':"/images/Me.png",'timeout':5000}},
		"177": {"Path":"/showPNG.html","Params":{'file':"/images/Mll.png",'timeout':5000}},
		"178": {"Path":"/showPNG.html","Params":{'file':"/images/Nm.png",'timeout':5000}},
		"179": {"Path":"/showPNG.html","Params":{'file':"/images/Ni.png",'timeout':5000}},
		"180": {"Path":"/showPNG.html","Params":{'file':"/images/Pe.png",'timeout':5000}},
		"181": {"Path":"/showPNG.html","Params":{'file':"/images/Pm.png",'timeout':5000}},
		"182": {"Path":"/showPNG.html","Params":{'file':"/images/Pp.png",'timeout':5000}},
		"183": {"Path":"/showPNG.html","Params":{'file':"/images/Rad.png",'timeout':5000}},
		"184": {"Path":"/showPNG.html","Params":{'file':"/images/Rm.png",'timeout':5000}},
		"185": {"Path":"/showPNG.html","Params":{'file':"/images/Rei.png",'timeout':5000}},
		"186": {"Path":"/showPNG.html","Params":{'file':"/images/Sa.png",'timeout':5000}},
		"187": {"Path":"/showPNG.html","Params":{'file':"/images/Sh.png",'timeout':5000}},
		"188": {"Path":"/showPNG.html","Params":{'file':"/images/Sz.png",'timeout':5000}},
		"189": {"Path":"/showPNG.html","Params":{'file':"/images/Ste.png",'timeout':5000}},
		"190": {"Path":"/showPNG.html","Params":{'file':"/images/Steffen.png",'timeout':5000}},
		"191": {"Path":"/showPNG.html","Params":{'file':"/images/Stö.png",'timeout':5000}},
		"192": {"Path":"/showPNG.html","Params":{'file':"/images/Tg.png",'timeout':5000}},
		"193": {"Path":"/showPNG.html","Params":{'file':"/images/Ts.png",'timeout':5000}},
		"194": {"Path":"/showPNG.html","Params":{'file':"/images/Wb.png",'timeout':5000}},
		"195": {"Path":"/showPNG.html","Params":{'file':"/images/Wi.png",'timeout':5000}},
		"207": {"Path":"/showPNG.html","Params":{'file':"/images/05a.png",'timeout':5000}},
		"208": {"Path":"/showPNG.html","Params":{'file':"/images/05b.png",'timeout':5000}},
		"209": {"Path":"/showPNG.html","Params":{'file':"/images/05c.png",'timeout':5000}},
		"210": {"Path":"/showPNG.html","Params":{'file':"/images/05d.png",'timeout':5000}},
		"211": {"Path":"/showPNG.html","Params":{'file':"/images/06a.png",'timeout':5000}},
		"212": {"Path":"/showPNG.html","Params":{'file':"/images/06b.png",'timeout':5000}},
		"213": {"Path":"/showPNG.html","Params":{'file':"/images/06c.png",'timeout':5000}},
		"214": {"Path":"/showPNG.html","Params":{'file':"/images/06d.png",'timeout':5000}},
		"215": {"Path":"/showPNG.html","Params":{'file':"/images/07a.png",'timeout':5000}},
		"216": {"Path":"/showPNG.html","Params":{'file':"/images/07b.png",'timeout':5000}},
		"217": {"Path":"/showPNG.html","Params":{'file':"/images/07c.png",'timeout':5000}},
		"218": {"Path":"/showPNG.html","Params":{'file':"/images/07d.png",'timeout':5000}},
		"219": {"Path":"/showPNG.html","Params":{'file':"/images/08a.png",'timeout':5000}},
		"220": {"Path":"/showPNG.html","Params":{'file':"/images/08b.png",'timeout':5000}},
		"221": {"Path":"/showPNG.html","Params":{'file':"/images/08c.png",'timeout':5000}},
		"222": {"Path":"/showPNG.html","Params":{'file':"/images/08d.png",'timeout':5000}},
		"223": {"Path":"/showPNG.html","Params":{'file':"/images/09a.png",'timeout':5000}},
		"224": {"Path":"/showPNG.html","Params":{'file':"/images/09b.png",'timeout':5000}},
		"225": {"Path":"/showPNG.html","Params":{'file':"/images/09c.png",'timeout':5000}},
		"226": {"Path":"/showPNG.html","Params":{'file':"/images/09d.png",'timeout':5000}},
		"227": {"Path":"/showPNG.html","Params":{'file':"/images/Ea.png",'timeout':5000}},
		"228": {"Path":"/showPNG.html","Params":{'file':"/images/Eb.png",'timeout':5000}},
		"229": {"Path":"/showPNG.html","Params":{'file':"/images/Ec.png",'timeout':5000}},
		"230": {"Path":"/showPNG.html","Params":{'file':"/images/Ed.png",'timeout':5000}},
		"231": {"Path":"/showPNG.html","Params":{'file':"/images/Q1a.png",'timeout':5000}},
		"232": {"Path":"/showPNG.html","Params":{'file':"/images/Q1b.png",'timeout':5000}},
		"233": {"Path":"/showPNG.html","Params":{'file':"/images/Q1c.png",'timeout':5000}},
		"234": {"Path":"/showPNG.html","Params":{'file':"/images/Q1d.png",'timeout':5000}},
		"235": {"Path":"/showPNG.html","Params":{'file':"/images/Q2a.png",'timeout':5000}},
		"236": {"Path":"/showPNG.html","Params":{'file':"/images/Q2b.png",'timeout':5000}},
		"237": {"Path":"/showPNG.html","Params":{'file':"/images/Q2c.png",'timeout':5000}},
		"238": {"Path":"/showPNG.html","Params":{'file':"/images/Q2d.png",'timeout':5000}}
	} 
}