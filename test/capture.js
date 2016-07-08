/**
 * Mocha Basic capture setups
 *
 */
"use strict";

var NodeWebcam = require( __dirname + "/../index.js" );

var Path = require( "path" );

var FS = require( "fs" );


//Main capture sequence

describe("Capture", function() {


    //Default webcam capture using global API

    it( "Should capture from default webcam", function( done ) {

        this.timeout( 6000 );

        var url = Path.resolve( __dirname, "output", "test_image" );

        var Webcam = NodeWebcam.capture( url, {}, function( url ) {

            console.log( "Image saved to " + url );

            FS.unlinkSync( url );

            done();

        });

    });

});
