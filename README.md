# Basic Nodejs Server

Basic Nodejs Server is a basic example of how a Nodejs Server can be implemented. Among their functionalities:

  - Basic GET returning a static file index.html
  - Basic POST extracting data sent to the server a returning it back to the client on the index.html
  - Response code
  - Checking url paths are corretcs

### Version
1.0.0

Basic Nodejs Server is an example of a server of Nodejs with a [public repository](https://github.com/ackuser/node_basic_server) on GitHub.

### Installation

You need :

```sh
$ git clone [git-repo-url] node_basic_server
$ cd node_basic_server
$ npm install
```
Run server:
```sh
$ node index.js
```
Run client or going to http://localhost:3000, different get and post requests
```sh
$ curl http://localhost:3000
$ curl http://localhost:3000/index.html
$ curl -d 'this a post request' http://localhost:3000
$ curl -d 'this a post request' http://localhost:3000/index.html
```

License
----

GPL-3.0


**Si lo que vas a decir no es más bello que el silencio: no lo digas (Proverbio árabe)**

- [@ackuser](http://twitter.com/ackuser)
