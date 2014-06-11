NOTE: AwsSum is now deprecated. Please use [aws-sdk](https://www.npmjs.org/package/aws-sdk) instead.

# awssum-amazon-ec2 #

This is an ```AwsSum``` plugin!

You'll need to add [awssum-amazon-ec2](https://github.com/awssum/awssum-amazon-ec2/) to your package.json
dependencies. Both [awssum](https://github.com/awssum/awssum/) and
[awssum-amazon](https://github.com/awssum/awssum-amazon/) are pulled in as peer dependencies.

```
dependencies : {
    "awssum-amazon-ec2" : "1.x",
},
```

## Example ##

Describe all your instances:

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

### AllocateAddress ###

Docs: [AllocateAddress on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-AllocateAddress.html)

### AssignPrivateIpAddresses ###

Docs: [AssignPrivateIpAddresses on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-AssignPrivateIpAddresses.html)

### AssociateAddress ###

Docs: [AssociateAddress on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-AssociateAddress.html)

### AssociateDhcpOptions ###

Docs: [AssociateDhcpOptions on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-AssociateDhcpOptions.html)

### AssociateRouteTable ###

Docs: [AssociateRouteTable on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-AssociateRouteTable.html)

### AttachInternetGateway ###

Docs: [AttachInternetGateway on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-AttachInternetGateway.html)

### AttachNetworkInterface ###

Docs: [AttachNetworkInterface on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-AttachNetworkInterface.html)

### AttachVolume ###

Docs: [AttachVolume on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-AttachVolume.html)

### AttachVpnGateway ###

Docs: [AttachVpnGateway on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-AttachVpnGateway.html)

### AuthorizeSecurityGroupEgress ###

Docs: [AuthorizeSecurityGroupEgress on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-AuthorizeSecurityGroupEgress.html)

### AuthorizeSecurityGroupIngress ###

Docs: [AuthorizeSecurityGroupIngress on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-AuthorizeSecurityGroupIngress.html)

### BundleInstance ###

Docs: [BundleInstance on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-BundleInstance.html)

### CancelBundleTask ###

Docs: [CancelBundleTask on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CancelBundleTask.html)

### CancelConversionTask ###

Docs: [CancelConversionTask on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CancelConversionTask.html)

### CancelExportTask ###

Docs: [CancelExportTask on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CancelExportTask.html)

### CancelReservedInstancesListing ###

Docs: [CancelReservedInstancesListing on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CancelReservedInstancesListing.html)

### CancelSpotInstanceRequests ###

Docs: [CancelSpotInstanceRequests on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CancelSpotInstanceRequests.html)

### ConfirmProductInstance ###

Docs: [ConfirmProductInstance on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-ConfirmProductInstance.html)

### CreateCustomerGateway ###

Docs: [CreateCustomerGateway on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CreateCustomerGateway.html)

### CreateDhcpOptions ###

Docs: [CreateDhcpOptions on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CreateDhcpOptions.html)

### CreateImage ###

Docs: [CreateImage on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CreateImage.html)

### CreateInstanceExportTask ###

Docs: [CreateInstanceExportTask on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CreateInstanceExportTask.html)

### CreateInternetGateway ###

Docs: [CreateInternetGateway on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CreateInternetGateway.html)

### CreateKeyPair ###

Docs: [CreateKeyPair on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CreateKeyPair.html)

### CreateNetworkAcl ###

Docs: [CreateNetworkAcl on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CreateNetworkAcl.html)

### CreateNetworkAclEntry ###

Docs: [CreateNetworkAclEntry on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CreateNetworkAclEntry.html)

### CreateNetworkInterface ###

Docs: [CreateNetworkInterface on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CreateNetworkInterface.html)

### CreateReservedInstancesListing ###

Docs: [CreateReservedInstancesListing on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CreateReservedInstancesListing.html)

### CreatePlacementGroup ###

Docs: [CreatePlacementGroup on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CreatePlacementGroup.html)

### CreateRoute ###

Docs: [CreateRoute on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CreateRoute.html)

### CreateRouteTable ###

Docs: [CreateRouteTable on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CreateRouteTable.html)

### CreateSecurityGroup ###

Docs: [CreateSecurityGroup on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CreateSecurityGroup.html)

### CreateSnapshot ###

Docs: [CreateSnapshot on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CreateSnapshot.html)

### CreateSpotDatafeedSubscription ###

Docs: [CreateSpotDatafeedSubscription on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CreateSpotDatafeedSubscription.html)

### CreateSubnet ###

Docs: [CreateSubnet on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CreateSubnet.html)

### CreateTags ###

Docs: [CreateTags on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CreateTags.html)

### CreateVolume ###

Docs: [CreateVolume on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CreateVolume.html)

### CreateVpc ###

Docs: [CreateVpc on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CreateVpc.html)

### CreateVpnConnection ###

Docs: [CreateVpnConnection on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CreateVpnConnection.html)

### CreateVpnConnectionRoute ###

Docs: [CreateVpnConnectionRoute on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CreateVpnConnectionRoute.html)

### CreateVpnGateway ###

Docs: [CreateVpnGateway on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-CreateVpnGateway.html)

### DeleteCustomerGateway ###

Docs: [DeleteCustomerGateway on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DeleteCustomerGateway.html)

### DeleteDhcpOptions ###

Docs: [DeleteDhcpOptions on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DeleteDhcpOptions.html)

### DeleteInternetGateway ###

Docs: [DeleteInternetGateway on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DeleteInternetGateway.html)

### DeleteKeyPair ###

Docs: [DeleteKeyPair on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DeleteKeyPair.html)

### DeleteNetworkAcl ###

Docs: [DeleteNetworkAcl on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DeleteNetworkAcl.html)

### DeleteNetworkAclEntry ###

Docs: [DeleteNetworkAclEntry on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DeleteNetworkAclEntry.html)

### DeleteNetworkInterface ###

Docs: [DeleteNetworkInterface on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DeleteNetworkInterface.html)

### DeletePlacementGroup ###

Docs: [DeletePlacementGroup on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DeletePlacementGroup.html)

### DeleteRoute ###

Docs: [DeleteRoute on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DeleteRoute.html)

### DeleteRouteTable ###

Docs: [DeleteRouteTable on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DeleteRouteTable.html)

### DeleteSecurityGroup ###

Docs: [DeleteSecurityGroup on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DeleteSecurityGroup.html)

### DeleteSnapshot ###

Docs: [DeleteSnapshot on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DeleteSnapshot.html)

### DeleteSpotDatafeedSubscription ###

Docs: [DeleteSpotDatafeedSubscription on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DeleteSpotDatafeedSubscription.html)

### DeleteSubnet ###

Docs: [DeleteSubnet on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DeleteSubnet.html)

### DeleteTags ###

Docs: [DeleteTags on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DeleteTags.html)

### DeleteVolume ###

Docs: [DeleteVolume on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DeleteVolume.html)

### DeleteVpc ###

Docs: [DeleteVpc on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DeleteVpc.html)

### DeleteVpnConnection ###

Docs: [DeleteVpnConnection on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DeleteVpnConnection.html)

### DeleteVpnConnectionRoute ###

Docs: [DeleteVpnConnectionRoute on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DeleteVpnConnectionRoute.html)

### DeleteVpnGateway ###

Docs: [DeleteVpnGateway on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DeleteVpnGateway.html)

### DeregisterImage ###

Docs: [DeregisterImage on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DeregisterImage.html)

### DescribeAddresses ###

Docs: [DescribeAddresses on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeAddresses.html)

### DescribeAvailabilityZones ###

Docs: [DescribeAvailabilityZones on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeAvailabilityZones.html)

### DescribeBundleTasks ###

Docs: [DescribeBundleTasks on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeBundleTasks.html)

### DescribeConversionTasks ###

Docs: [DescribeConversionTasks on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeConversionTasks.html)

### DescribeCustomerGateways ###

Docs: [DescribeCustomerGateways on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeCustomerGateways.html)

### DescribeDhcpOptions ###

Docs: [DescribeDhcpOptions on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeDhcpOptions.html)

### DescribeExportTasks ###

Docs: [DescribeExportTasks on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeExportTasks.html)

### DescribeImageAttribute ###

Docs: [DescribeImageAttribute on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeImageAttribute.html)

### DescribeImages ###

Docs: [DescribeImages on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeImages.html)

### DescribeInstanceAttribute ###

Docs: [DescribeInstanceAttribute on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeInstanceAttribute.html)

### DescribeInstances ###

Docs: [DescribeInstances on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeInstances.html)

### DescribeInstanceStatus ###

Docs: [DescribeInstanceStatus on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeInstanceStatus.html)

### DescribeInternetGateways ###

Docs: [DescribeInternetGateways on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeInternetGateways.html)

### DescribeKeyPairs ###

Docs: [DescribeKeyPairs on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeKeyPairs.html)

### DescribeNetworkAcls ###

Docs: [DescribeNetworkAcls on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeNetworkAcls.html)

### DescribeNetworkInterfaceAttribute ###

Docs: [DescribeNetworkInterfaceAttribute on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeNetworkInterfaceAttribute.html)

### DescribeNetworkInterfaces ###

Docs: [DescribeNetworkInterfaces on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeNetworkInterfaces.html)

### DescribePlacementGroups ###

Docs: [DescribePlacementGroups on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribePlacementGroups.html)

### DescribeRegions ###

Docs: [DescribeRegions on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeRegions.html)

### DescribeReservedInstances ###

Docs: [DescribeReservedInstances on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeReservedInstances.html)

### DescribeReservedInstancesListings ###

Docs: [DescribeReservedInstancesListings on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeReservedInstancesListings.html)

### DescribeReservedInstancesOfferings ###

Docs: [DescribeReservedInstancesOfferings on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeReservedInstancesOfferings.html)

### DescribeRouteTables ###

Docs: [DescribeRouteTables on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeRouteTables.html)

### DescribeSecurityGroups ###

Docs: [DescribeSecurityGroups on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSecurityGroups.html)

### DescribeSnapshotAttribute ###

Docs: [DescribeSnapshotAttribute on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshotAttribute.html)

### DescribeSnapshots ###

Docs: [DescribeSnapshots on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html)

### DescribeSpotDatafeedSubscription ###

Docs: [DescribeSpotDatafeedSubscription on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSpotDatafeedSubscription.html)

### DescribeSpotInstanceRequests ###

Docs: [DescribeSpotInstanceRequests on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSpotInstanceRequests.html)

### DescribeSpotPriceHistory ###

Docs: [DescribeSpotPriceHistory on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSpotPriceHistory.html)

### DescribeSubnets ###

Docs: [DescribeSubnets on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSubnets.html)

### DescribeTags ###

Docs: [DescribeTags on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeTags.html)

### DescribeVolumes ###

Docs: [DescribeVolumes on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeVolumes.html)

### DescribeVolumeAttribute ###

Docs: [DescribeVolumeAttribute on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeVolumeAttribute.html)

### DescribeVolumeStatus ###

Docs: [DescribeVolumeStatus on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeVolumeStatus.html)

### DescribeVpcs ###

Docs: [DescribeVpcs on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeVpcs.html)

### DescribeVpnConnections ###

Docs: [DescribeVpnConnections on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeVpnConnections.html)

### DescribeVpnGateways ###

Docs: [DescribeVpnGateways on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeVpnGateways.html)

### DetachInternetGateway ###

Docs: [DetachInternetGateway on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DetachInternetGateway.html)

### DetachNetworkInterface ###

Docs: [DetachNetworkInterface on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DetachNetworkInterface.html)

### DetachVolume ###

Docs: [DetachVolume on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DetachVolume.html)

### DetachVpnGateway ###

Docs: [DetachVpnGateway on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DetachVpnGateway.html)

### DisableVgwRoutePropagation ###

Docs: [DisableVgwRoutePropagation on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DisableVGWRoutePropagation.html)

### DisassociateAddress ###

Docs: [DisassociateAddress on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DisassociateAddress.html)

### DisassociateRouteTable ###

Docs: [DisassociateRouteTable on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-DisassociateRouteTable.html)

### EnableVgwRoutePropagation ###

Docs: [EnableVgwRoutePropagation on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-EnableVGWRoutePropagation.html)

### EnableVolumeIo ###

Docs: [EnableVolumeIo on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-EnableVolumeIO.html)

### GetConsoleOutput ###

Docs: [GetConsoleOutput on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-GetConsoleOutput.html)

### GetPasswordData ###

Docs: [GetPasswordData on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-GetPasswordData.html)

### ImportInstance ###

Docs: [ImportInstance on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-ImportInstance.html)

### ImportKeyPair ###

Docs: [ImportKeyPair on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-ImportKeyPair.html)

### ImportVolume ###

Docs: [ImportVolume on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-ImportVolume.html)

### ModifyImageAttribute ###

Docs: [ModifyImageAttribute on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-ModifyImageAttribute.html)

### ModifyInstanceAttribute ###

Docs: [ModifyInstanceAttribute on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-ModifyInstanceAttribute.html)

### ModifyNetworkInterfaceAttribute ###

Docs: [ModifyNetworkInterfaceAttribute on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-ModifyNetworkInterfaceAttribute.html)

### ModifySnapshotAttribute ###

Docs: [ModifySnapshotAttribute on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-ModifySnapshotAttribute.html)

### ModifyVolumeAttribute ###

Docs: [ModifyVolumeAttribute on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-ModifyVolumeAttribute.html)

### MonitorInstances ###

Docs: [MonitorInstances on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-MonitorInstances.html)

### PurchaseReservedInstancesOffering ###

Docs: [PurchaseReservedInstancesOffering on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-PurchaseReservedInstancesOffering.html)

### RebootInstances ###

Docs: [RebootInstances on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-RebootInstances.html)

### RegisterImage ###

Docs: [RegisterImage on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-RegisterImage.html)

### ReleaseAddress ###

Docs: [ReleaseAddress on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-ReleaseAddress.html)

### ReplaceNetworkAclAssociation ###

Docs: [ReplaceNetworkAclAssociation on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-ReplaceNetworkAclAssociation.html)

### ReplaceNetworkAclEntry ###

Docs: [ReplaceNetworkAclEntry on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-ReplaceNetworkAclEntry.html)

### ReplaceRoute ###

Docs: [ReplaceRoute on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-ReplaceRoute.html)

### ReplaceRouteTableAssociation ###

Docs: [ReplaceRouteTableAssociation on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-ReplaceRouteTableAssociation.html)

### ReportInstanceStatus ###

Docs: [ReportInstanceStatus on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-ReportInstanceStatus.html)

### RequestSpotInstances ###

Docs: [RequestSpotInstances on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-RequestSpotInstances.html)

### ResetImageAttribute ###

Docs: [ResetImageAttribute on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-ResetImageAttribute.html)

### ResetInstanceAttribute ###

Docs: [ResetInstanceAttribute on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-ResetInstanceAttribute.html)

### ResetNetworkInterfaceAttribute ###

Docs: [ResetNetworkInterfaceAttribute on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-ResetNetworkInterfaceAttribute.html)

### ResetSnapshotAttribute ###

Docs: [ResetSnapshotAttribute on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-ResetSnapshotAttribute.html)

### RevokeSecurityGroupEgress ###

Docs: [RevokeSecurityGroupEgress on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-RevokeSecurityGroupEgress.html)

### RevokeSecurityGroupIngress ###

Docs: [RevokeSecurityGroupIngress on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-RevokeSecurityGroupIngress.html)

### RunInstances ###

Docs: [RunInstances on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-RunInstances.html)

### StartInstances ###

Docs: [StartInstances on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-StartInstances.html)

### StopInstances ###

Docs: [StopInstances on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-StopInstances.html)

### TerminateInstances ###

Docs: [TerminateInstances on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-TerminateInstances.html)

### UnassignPrivateIpAddresses ###

Docs: [UnassignPrivateIpAddresses on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-UnassignPrivateIpAddresses.html)

### UnmonitorInstances ###

Docs: [UnmonitorInstances on AWS](http://docs.amazonwebservices.com/AWSEC2/latest/APIReference/ApiReference-query-UnmonitorInstances.html)



# Author #

Written by [Andrew Chilton](http://chilts.org/) - [Blog](http://chilts.org/blog/) -
[Twitter](https://twitter.com/andychilton).

# License #

* [Copyright 2011-2013 Apps Attic Ltd.  All rights reserved.](http://appsattic.mit-license.org/2011/)
* [Copyright 2013 Andrew Chilton.  All rights reserved.](http://chilts.mit-license.org/2013/)

(Ends)
