// --------------------------------------------------------------------------------------------------------------------
//
// ec2.js - class for AWS Elastic Compute Cloud
//
// Copyright (c) 2011, 2012 AppsAttic Ltd - http://www.appsattic.com/
// Written by Andrew Chilton <chilts@appsattic.com>
//
// License: http://opensource.org/licenses/MIT
//
// --------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------
// requires

// built-ins
var util = require('util');

// dependencies
var _ = require('underscore');

// our own
var awssum = require('awssum');
var amazon = require('awssum-amazon');
var operations = require('./config.js');

// --------------------------------------------------------------------------------------------------------------------
// package variables

var MARK = 'ec2: ';

// From: http://docs.amazonwebservices.com/general/latest/gr/rande.html
var endPoint = {};
endPoint[amazon.US_EAST_1]      = "ec2.us-east-1.amazonaws.com";
endPoint[amazon.US_WEST_1]      = "ec2.us-west-1.amazonaws.com";
endPoint[amazon.US_WEST_2]      = "ec2.us-west-2.amazonaws.com";
endPoint[amazon.EU_WEST_1]      = "ec2.eu-west-1.amazonaws.com";
endPoint[amazon.AP_SOUTHEAST_1] = "ec2.ap-southeast-1.amazonaws.com";
endPoint[amazon.AP_SOUTHEAST_2] = "ec2.ap-southeast-2.amazonaws.com";
endPoint[amazon.AP_NORTHEAST_1] = "ec2.ap-northeast-1.amazonaws.com";
endPoint[amazon.SA_EAST_1]      = "ec2.sa-east-1.amazonaws.com";
endPoint[amazon.US_GOV_WEST_1]  = "ec2.us-gov-west-1.amazonaws.com";

var version = '2013-08-15';

// --------------------------------------------------------------------------------------------------------------------
// constructor

var Ec2 = function(opts) {
    var self = this;

    if (! _.isEmpty(opts.endPoint) ) {
      if (_.isObject(opts.endPoint)) {
          if (!  opts.endPoint.region) {
              throw MARK + "region not defined";
          }
          if (!  opts.endPoint.endpoint.host) {
              throw MARK + "host not defined for region'"+ opts.endPoint.region +"'";
          }
          endPoint[opts.endPoint.region] = opts.endPoint.endpoint;
      }
    }

    // call the superclass for initialisation
    Ec2.super_.call(this, opts);

    // check the region is valid
    if ( ! endPoint[opts.region] ) {
        throw MARK + "invalid region '" + opts.region + "'";
    }

    return self;
};

// inherit from Amazon
util.inherits(Ec2, amazon.AmazonSignatureV2);

// --------------------------------------------------------------------------------------------------------------------
// methods we need to implement from awssum.js/amazon.js

Ec2.prototype.protocol = function() {
    return endPoint[this.region()].protocol || "https";
};

Ec2.prototype.host = function() {
    return endPoint[this.region()].host || endPoint[this.region()];
};

Ec2.prototype.port = function() {
    var self = this;
    return endPoint[this.region()].port || ((self.protocol() === 'http') ? 80 :  443);
};

Ec2.prototype.path = function() {
    return endPoint[this.region()].path || "/";
};

Ec2.prototype.version = function() {
    return version;
};

// --------------------------------------------------------------------------------------------------------------------
// operations on the service

_.each(operations, function(operation, operationName) {
    Ec2.prototype[operationName] = awssum.makeOperation(operation);
});

// --------------------------------------------------------------------------------------------------------------------
// exports

// endpoints
exports.US_EAST_1      = amazon.US_EAST_1;
exports.US_WEST_1      = amazon.US_WEST_1;
exports.US_WEST_2      = amazon.US_WEST_2;
exports.EU_WEST_1      = amazon.EU_WEST_1;
exports.AP_SOUTHEAST_1 = amazon.AP_SOUTHEAST_1;
exports.AP_SOUTHEAST_2 = amazon.AP_SOUTHEAST_2;
exports.AP_NORTHEAST_1 = amazon.AP_NORTHEAST_1;
exports.SA_EAST_1      = amazon.SA_EAST_1;
exports.US_GOV_WEST_1  = amazon.US_GOV_WEST_1;

exports.Ec2 = Ec2;

// --------------------------------------------------------------------------------------------------------------------
