function flip_boolean( bool ) { // ( null || false ) ? true : false
 if( bool === true ) return( false );
 return( true );
}
function is_empty_or_null( object ) { // ( null || invalid object || length == 0 ) ? true : false
 object = object || null;
 return( object === null || object.length === null || object.length == 0 );
}
function is_hex_string( hex ) { // ( string is 0-9 Aa-Ff && string length is even && string is not empty ) ? true : false
 hex = hex || "";
 return( hex.toUpperCase().replace( /[0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F]/g, "" ).length == 0 && ( hex.length.toString().match( /[0,2,4,6,8]$/g ) ? true : false ) && hex.length > 0 );
}
function elem_hasClass( elem, className ) { // elem_hasClass( document.body, "A-Class" ) = true ? true : false
 var elem_class = "";
 try {
  elem_class = elem.getAttribute( "class" );
 }
 catch( ex ) {
  elem_class = "";
 }
 return( ( " " + elem_class + " " ).indexOf( " " + className + " " ) >= 0 );
}
function elem_classSwap( elem, class_from, class_to ) { // elem_classSwap( document.body, "replace_this", "with_this" )
 var elem_class = "";
 try {
  elem_class = elem.getAttribute( "class" );
 }
 catch( ex ) {
  elem_class = "";
 }
 var classes = ( " " + elem_class + " " ).replace( " " + class_from + " ", " " + class_to + " " );
 elem.setAttribute( "class", classes.substr( 1, classes.length - 2 ) );
}
function array_sub( array, start, length ) { // array_sub( [ 0x0D, 0x0A, 0xDE, 0xAD, 0xBE, 0xEF ], 2, 2 ) = [ 0xDE, 0xAD ]
 return( array.slice( start, start + length ) );
}
function array_toggle( array, toggle, method ) { // array_toggle( [ "BEEF" ], "DEAD", "unshift" ) = [ "DEAD", "BEEF" ]
 method = method || "push";
 method = method.toLowerCase();
 for( var i = 0; i < array.length; i++ ) {
  if( array[ i ] == toggle ) {
   array.splice( i, 1 );
   return( array );
  }
 }
 if( method == "unshift" ) {
  array.unshift( toggle );
  return( array );
 }
 array.push( toggle );
 return( array );
}
function byte2dataBlockLength( byte ) { // byte2dataBlockLength( 0x7F ) = 0x3F8
 return( byte * 8 );
}
function bytes2hex( bytes ) { // bytes2hex( [ 0x0D, 0x0A ] ) = "0D0A"
 return( Array.from( bytes, function( byte ) {
  return( ( "0" + ( byte & 0xFF ).toString( 16 ) ).slice( -2 ) );
 } ).join( "" ).toUpperCase() );
}
function bytes2int( bytes ) { // bytes2int( [ 0xDE, 0xAD ] ) = 0xDEAD
 return( bytes[ 1 ] | bytes[ 0 ] << 8 );
}
function bytes2string( bytes ) { // bytes2string( [ 0x0D, 0x0A ] ) = "\r\n"
 return( hex2string( bytes2hex( bytes ) ) );
}
function hex2bytes( hex ) { // hex2bytes( "0D0A" ) = [ 0x0D, 0x0A ]
 var bytes = new Array();
 hex = hex.toUpperCase();
 for( var i = 0; i < hex.length; i += 2 ) {
  bytes.push( parseInt( hex.substr( i, 2 ), 16 ) );
 }
 return( bytes );
}
function hex2string( hex ) { // hex2string( "0D0A" ) = "\r\n"
 var string = "";
 for( var i = 0; i < hex.length; i += 2 ) {
  string += String.fromCharCode( parseInt( hex.substr( i, 2 ), 16 ) );
 }
 return( string );
}
