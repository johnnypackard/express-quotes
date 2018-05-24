$( document ).ready( readyNow );

function readyNow(){
    getQuotes();
    $( '#addQuoteButton').on( 'click', addQuote );
}

function addQuote(){
    console.log( 'in addQuote' );
    let objectToSend = {
        quote: $( '#quoteIn' ).val(),
        name: $( '#nameIn' ).val()
    }; // end addQuoteName
    console.log( 'sending', objectToSend );
    $.ajax({
        method: 'POST',
        url: '/quotes',
        data: objectToSend
    }).then( function( response ){
        console.log('back from server with:', response );
        getQuotes();
        
    }); // end Hey Ajax!
} // end addQuote

function displayQuotes( quote ){
    let el = $( '#quoteOut');
    el.empty();
    for (quote of quotes){
        el.append( '<li> + quote + </li>' );
    } // end quote for loop
}

function getQuotes(){
    console.log( 'in getQuotes' );
    $.ajax({
        method: 'GET',
        url: '/quotes'
    }).then( function( response ){
        console.log( 'back from server with:', response );
        displayQuotes( response );
    });
}