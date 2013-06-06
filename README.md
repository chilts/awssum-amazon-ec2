# awssum-amazon-s3 #

This is an ```AwsSum``` plugin!

You'll need to add [awssum-amazon-ec2](https://github.com/awssum/awssum-amazon-ec2/) to your package.json
dependencies. Both [awssum](https://github.com/awssum/awssum/) and
[awssum-amazon](https://github.com/awssum/awssum-amazon/) are pulled in as peer dependencies so do not directly depend
on those:

e.g.

```
dependencies : {
    "awssum-amazon-ec2" : "1.x",
},
```

## Example ##

List all your instances:

```
var fmt = require('fmt');
var amazonEc2 = require('awssum-amazon-ec2');

var ec2 = new amazonEc2.Ec2({
    'accessKeyId'     : process.env.ACCESS_KEY_ID,
    'secretAccessKey' : process.env.SECRET_ACCESS_KEY,
    'region'          : amazonEc2.US_EAST_1,
});

ec2.DescribeInstances(function(err, data) {
    fmt.dump(err, 'err');
    fmt.dump(data, 'data');
});
```

## Operations ##

ToDo.

# Author #

Written by [Andrew Chilton](http://chilts.org/) - [Blog](http://chilts.org/blog/) -
[Twitter](https://twitter.com/andychilton).

# License #

* [Copyright 2011-2013 Apps Attic Ltd.  All rights reserved.](http://appsattic.mit-license.org/2011/)
* [Copyright 2013 Andrew Chilton.  All rights reserved.](http://chilts.mit-license.org/2013/)

(Ends)
