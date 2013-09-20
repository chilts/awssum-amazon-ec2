#!/bin/bash
## ----------------------------------------------------------------------------
#
# All files were found here : http://s3.amazonaws.com/ec2-downloads/
#
## ----------------------------------------------------------------------------

FILES=(
    2006-10-01.ec2.wsdl
    2006-06-26.ec2.wsdl
    2007-01-03.ec2.wsdl
    2007-01-19.ec2.wsdl
    2007-03-01.ec2.wsdl
    2007-08-29.ec2.wsdl
    2008-02-01.ec2.wsdl
    2008-05-05.ec2.wsdl
    2008-08-08.ec2.wsdl
    2008-12-01.ec2.wsdl
    2009-03-01.ec2.wsdl
    2009-04-04.ec2.wsdl
    2009-04-04.ec2.wsdl.asc
    2009-07-15.ec2.wsdl
    2009-07-15.ec2.wsdl.asc
    2009-08-15.ec2.wsdl
    2009-08-15.ec2.wsdl.asc
    2009-10-31.ec2.wsdl
    2009-11-30.ec2.wsdl
    2010-06-15.ec2.wsdl
    2010-06-15.ec2.wsdl.asc
    2010-08-31.ec2.wsdl
    2010-08-31.ec2.wsdl.asc
    2010-11-15.ec2.wsdl
    2011-01-01.ec2.wsdl
    2011-01-01.ec2.wsdl.asc
    2011-02-28.ec2.wsdl
    2011-05-15.ec2.wsdl
    2011-05-15.ec2.wsdl.asc
    2011-07-15.ec2.wsdl
    2011-07-15.ec2.wsdl.asc
    2011-11-01.ec2.wsdl
    2011-11-01.ec2.wsdl.asc
    2011-12-01.ec2.wsdl
    2011-12-01.ec2.wsdl.asc
    2011-12-15.ec2.wsdl
    2011-12-15.ec2.wsdl.asc
    2012-03-01.ec2.wsdl
    2012-03-01.ec2.wsdl.asc
    2012-04-01.ec2.wsdl
    2012-04-01.ec2.wsdl.asc
    2012-05-01.ec2.wsdl
    2012-05-01.ec2.wsdl.asc
    2012-06-01.ec2.wsdl
    2012-06-01.ec2.wsdl.asc
    2012-06-15.ec2.wsdl
    2012-06-15.ec2.wsdl.asc
    2012-07-20.ec2.wsdl
    2012-07-20.ec2.wsdl.asc
    2012-08-15.ec2.wsdl
    2012-08-15.ec2.wsdl.asc
    2012-10-01.ec2.wsdl
    2012-10-01.ec2.wsdl.asc
    2012-12-01.ec2.wsdl
    2012-12-01.ec2.wsdl.asc
    2013-02-01.ec2.wsdl
    2013-02-01.ec2.wsdl.asc
    2013-06-15.ec2.wsdl
    2013-06-15.ec2.wsdl.asc
    2013-07-15.ec2.wsdl
    2013-08-15.ec2.wsdl
    2013-08-15.ec2.wsdl.asc
)

for FILE in ${FILES[*]}; do
    # echo $FILE
    wget http://s3.amazonaws.com/ec2-downloads/$FILE
done

# now get the latest
wget -O 2013-08-15.ec2.wsdl     http://s3.amazonaws.com/ec2-downloads/ec2.wsdl
wget -O 2013-08-15.ec2.wsdl.asc http://s3.amazonaws.com/ec2-downloads/ec2.wsdl.asc
