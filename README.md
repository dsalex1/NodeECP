


# NodeECP
A node.js reimplementation and extension of the school internal subtitution system

![alt text](https://i.gyazo.com/69eb1a04aafad8cc7db37f5b7a0d6cb9.png " ")

## Setup
#### src outline:
|Path |Usage/Explanation |
|---|---|
/src
| &nbsp;&nbsp;&nbsp;&nbsp;/certs  | root folder for all certificate files |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ClientRootCA.* | certificate that client certs are checked against  |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ServerCert.*| cert authenficating the server  |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/clientCerts| root folder for client authentification certs  |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ClientTest?.pfx | packaged private key, public key and attributes  |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ClientTest?.key | private key of the cert  |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ClientTest?.crt | public key of the cert and other attributes (CN,...)  |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/command template.txt | template for creating new client certificates using the ClientRootCA  |
|&nbsp;&nbsp;&nbsp;&nbsp;/public/* | files that are publicly accessable by the server  |
|&nbsp;&nbsp;&nbsp;&nbsp;/main.js | main Module |
|&nbsp;&nbsp;&nbsp;&nbsp;/*.js | other modules  |

in order to test this application the following files have to be installed in the clients certification store:
1. /src/certs/clientCerts/ClientTest?.pfx
2. /src/certs/ServerCert.crt (optionally, only if the issuer's CA isn't already installed by default, like e.g. verisign is)

Google Chrome: https://support.globalsign.com/customer/portal/articles/1211541-install-client-digital-certificate---windows-using-chrome <br/>
Mozilla Firefox: https://support.globalsign.com/customer/portal/articles/1211486-install-client-digital-certificate---firefox-for-windows <br/>
Mac OS: https://support.globalsign.com/customer/portal/articles/1214936-install-pkcs-12-file---mac-osx-for-safari-chrome <br/>

the both examples provided in /src/certs/clientCerts ClientTest1.pfx and ClientTest2.pfx use the empty string '' as password.
