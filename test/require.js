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

// --------------------------------------------------------------------------------------------------------------------

test('Require EC2', function(t) {
    var amazonEc2 = require('../awssum-amazon-ec2.js');
    var Ec2 = amazonEc2.Ec2;

    t.ok(amazonEc2, 'module required ok');
    t.ok(Ec2, 'constructor exists');

    t.end();
});

// --------------------------------------------------------------------------------------------------------------------
