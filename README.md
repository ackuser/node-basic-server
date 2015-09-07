# Basic Nodejs Server

Basic Nodejs Server is a basic example of how a Nodejs Server can be implemented. Among their functionalities:

  - Basic GET returning a static file index.html
  - Basic POST extracting data sent to the server a returning it back to the client on the index.html
  - Response code
  - Checking url paths are corretcg

Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email.  As [John Gruber] writes on the [Markdown site] [1]:

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

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
