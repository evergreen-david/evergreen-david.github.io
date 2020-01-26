---
title: aws html file deployment
date: "2020-01-25T01:04:59"
template: "post"
draft: false
slug: "/posts/aws-html-deployment"
category: "aws"
description: "aws html file deployment"
tags:
  - "aws"
---

# 1. Deployment html file to AWS S3

In this article, the configuration of AWS S3 and CloudFront will be shown.
![s3](../img/aws_html_file_deployment/s3_cloud_front.png)

First, prepare for the source codes you want to deploy.

create bucket
![1](../img/aws_html_file_deployment/1.png)

check 2 red boxes if you want to lock the object, but it doesn't need to be checked in this example.
![2](../img/aws_html_file_deployment/2.png)

Upload html files
![3](../img/aws_html_file_deployment/3_upload.png)
![4](../img/aws_html_file_deployment/4_upload_result.png)

check the files using the aws cli

https://docs.aws.amazon.com/cli/latest/reference/s3api/list-objects.html

![5](../img/aws_html_file_deployment/5_aws_cli.png)

Currently, the following object url is not public. It means that the url is not permitted.

![6](../img/aws_html_file_deployment/6_object_url.png)
![6_2](../img/aws_html_file_deployment/6_2_object_url.png)

# 2. Setting permissions

I will not use the ACL, so I checked the 2 top boxes.

![7](../img/aws_html_file_deployment/7_permissions.png)

confirm the block access settings and go to Bucket Policy.

![7_2](../img/aws_html_file_deployment/7_2_permissions.png)
![7_3](../img/aws_html_file_deployment/7_3_policy_generator.png)

Input the following information and generate the policy.
```
Origin domain name : select a bucket you made
Object Caching : Customize
Default Root Object : index.html
```
![8](../img/aws_html_file_deployment/8_policy.png)

Copy the JSON and paste it to the policy editor.

![8_2](../img/aws_html_file_deployment/8_2_policy_save.png)

Now, I can access the website using the object url. We will combine S3 with the CloudFront and this access will be diabeld.
![8_3](../img/aws_html_file_deployment/8_3_check_object_url.png)

# 3. Static website hosting

Go to the Properties tab and Check "Use this bucket to host a website"

![99](../img/aws_html_file_deployment/9_static_website_hosting_.png)

Now we can use that endpoint.

Enable the versioning to manage the history.

This event option is important because we can use that to get some events and process it.
For example, an image is deleted on S3 and then we need to delete the related information on Dynamo DB.
In that case, this option will be useful for that.

![9_2](../img/aws_html_file_deployment/9_2_event_option.png)

# 4. CloudFront Distribution

https://aws.amazon.com/cloudfront/
https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html

[CloudFront] -> [Create Distribution] -> [Get Started]

https://docs.aws.amazon.com/lambda/latest/dg/lambda-edge.html

![10](../img/aws_html_file_deployment/10_cloud_front_.png)

```
Origin domain name : select a bucket you made
Object Caching : Customize
Default Root Object : index.html
```

![10_2](../img/aws_html_file_deployment/10_2_cloud_front_setting_.png)

[CloudFront] -> [ID] -> [Origins and Origin Groups] -> [Edit] -> [Restrict Bucket Access] -> [Yes]

![10_3](../img/aws_html_file_deployment/10_3_edit_restrict_.png)

![10_4](../img/aws_html_file_deployment/10_4_inprogress_.png)

After fishing deploying, go to the policy of the bucket permissions to check the modification.
Now it doesn't allow the access to the html file using the object URL and the endpoint of static website hosting.


![11](../img/aws_html_file_deployment/11_policy_change_.png)
![11_2](../img/aws_html_file_deployment/11_2_policy_change_.png)

Finally, the domain name of CloudFront can be used to connect the index html on S3.
![12](../img/aws_html_file_deployment/12_end_deploy.png)
