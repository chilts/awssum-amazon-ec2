// --------------------------------------------------------------------------------------------------------------------
//
// require.js
//
// Written by Andrew Chilton <andychilton@gmail.com>
//
// License: http://opensource.org/licenses/MIT
//
// --------------------------------------------------------------------------------------------------------------------
// requires

var fs = require('fs');
var test = require('tape');

// local
var amazonEc2 = require('../awssum-amazon-ec2.js');
var Ec2 = amazonEc2.Ec2;

var FAKE_ACCESS_KEY_ID = 'WHATEVER';
var FAKE_SECRET_ACCESS_KEY = 'WHATEVER';
// --------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------

test('Custom endpoint', function(t) {

    var ec2 = new Ec2({
        'accessKeyId'     : FAKE_ACCESS_KEY_ID,
        'secretAccessKey' : FAKE_SECRET_ACCESS_KEY,
        'region'          : 'myregion',
        'endPoint'        : { 'region' : 'myregion',
                              'endpoint' : {'protocol' : 'http', 'host' : 'localhost', 'port' : 8123, 'path' : '/path/to/service'}
                            }
    });

    t.ok(ec2, 'Ec2 instance created');
    t.equal('myregion', ec2.region(), 'Region set');
    t.equal('http', ec2.protocol(), 'Endpoint protocol set');
    t.equal('localhost', ec2.host(), 'Endpoint host set');
    t.equal(8123, ec2.port(), 'Endpoint port set');
    t.equal('/path/to/service', ec2.path(), 'Endpoint path set');

    t.end();
});

// --------------------------------------------------------------------------------------------------------------------
