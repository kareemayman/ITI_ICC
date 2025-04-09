$('button:first').click(function() {
    $( "div" ).animate({
        width: "70%",
        opacity: 0.4,
        marginLeft: "0.6in",
        fontSize: "3em",
        borderWidth: "10px"
      }, 1500 );
})

$('button:last').click(function() {
    $( "div" ).animate({
        width: "100px",
        opacity: 1,
        marginLeft: "0",
        fontSize: "1em",
        borderWidth: "2px"
      }, 1500 );
})