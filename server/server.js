// declaring these are what's required to make the code work in server
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

// declare the globals we need (i.e. port and output array)
const port = 5000;
let quotes = [];

// below is what the server/app will use for communicating (handshake)
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
// spin up the server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}); // end server spin

// get the route of the request and response
app.get( '/quotes', ( req, res )=>{
    console.log( 'in GET hit for /quotes route:', req.body );
    res.send( quotes );
}); // end GET

// post output
app.post( '/quotes', (req, res)=>{
    console.log( 'in POST hit for /quotes route', req.body );
    quotes.push( req.body.quote.name );
    res.sendStatus( 200 );
}); // end POST