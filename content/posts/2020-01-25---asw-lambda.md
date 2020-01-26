---
title: aws lambda get
date: "2020-01-25T12:54:18"
template: "post"
draft: false
slug: "/posts/aws-lambda-get"
category: "aws"
description: "aws lambda get"
tags:
  - "aws"
---

What is AWS Lambda ?
https://aws.amazon.com/lambda/

## 1. Create users table from dynamo db

![db](../img/aws_lambda_get/db_1.png)

put data to the table for testing later like this

![db2](../img/aws_lambda_get/db_2.png)

![db3](../img/aws_lambda_get/db_3.png)

## 2. Create python lambda function to get data from dynamodb

Function name : getusers<br>
Runtime : Python 3.7

![1](../img/aws_lambda_get/1_create_function.png)

[Permissions] / Resource summary

![2](../img/aws_lambda_get/2_permissions.png)

AWS Lambda Runtimes<br>
https://docs.aws.amazon.com/lambda/latest/dg//lambda-runtimes.html

AWS Lambda Limits
https://docs.aws.amazon.com/lambda/latest/dg//limits.html

AWS X-Ray
https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html

![3](../img/aws_lambda_get/3_lambda_runtime.png)

db access using boto3

boto3 documentation
https://boto3.amazonaws.com/v1/documentation/api/latest/index.html

[Available Services] -> find "dynamo" / "table"
https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dynamodb.html#table

DynamoDB reference guide
https://boto3.amazonaws.com/v1/documentation/api/latest/reference/customizations/dynamodb.html#ref-valid-dynamodb-types

The following query syntax is used for this test.
```
    IndexName='string',
    Select='ALL_ATTRIBUTES'|'ALL_PROJECTED_ATTRIBUTES'|'SPECIFIC_ATTRIBUTES'|'COUNT',
    AttributesToGet=[
        'string',
    ],
    Limit=123,
    ConsistentRead=True|False,
    KeyConditions={
        'string': {
            'AttributeValueList': [
                'string'|123|Binary(b'bytes')|True|None|set(['string'])|set([123])|set([Binary(b'bytes')])|[]|{},
            ],
            'ComparisonOperator': 'EQ'|'NE'|'IN'|'LE'|'LT'|'GE'|'GT'|'BETWEEN'|'NOT_NULL'|'NULL'|'CONTAINS'|'NOT_CONTAINS'|'BEGINS_WITH'
        }
    },
    QueryFilter={
        'string': {
            'AttributeValueList': [
                'string'|123|Binary(b'bytes')|True|None|set(['string'])|set([123])|set([Binary(b'bytes')])|[]|{},
            ],
            'ComparisonOperator': 'EQ'|'NE'|'IN'|'LE'|'LT'|'GE'|'GT'|'BETWEEN'|'NOT_NULL'|'NULL'|'CONTAINS'|'NOT_CONTAINS'|'BEGINS_WITH'
        }
    },
    ConditionalOperator='AND'|'OR',
    ScanIndexForward=True|False,
    ExclusiveStartKey={
        'string': 'string'|123|Binary(b'bytes')|True|None|set(['string'])|set([123])|set([Binary(b'bytes')])|[]|{}
    },
    ReturnConsumedCapacity='INDEXES'|'TOTAL'|'NONE',
    ProjectionExpression='string',
    FilterExpression=Attr('myattribute').eq('myvalue'),
    KeyConditionExpression=Key('mykey').eq('myvalue'),
    ExpressionAttributeNames={
        'string': 'string'
    },
    ExpressionAttributeValues={
        'string': 'string'|123|Binary(b'bytes')|True|None|set(['string'])|set([123])|set([Binary(b'bytes')])|[]|{}
    }
)
```

Writing codes to get users from database

![4](../img/aws_lambda_get/4_code.png)

# 3. Writing Test case

[Configure test event]

![5](../img/aws_lambda_get/5_configure_test_events.png)

![6](../img/aws_lambda_get/6_test1.png)
![7](../img/aws_lambda_get/7_test2.png)

run test
![8](../img/aws_lambda_get/8_debugging.png)

need debugging
![9](../img/aws_lambda_get/9_debugging_code.png)


![10](../img/aws_lambda_get/10_test_success_.png)

print contest to see the content of LambdaContext object

![11](../img/aws_lambda_get/11_print.png)

![12](../img/aws_lambda_get/12_context.png)


![13](../img/aws_lambda_get/13_os_environ.png)

Cloud watch
![14](../img/aws_lambda_get/14_cloud_watch.png)
![15](../img/aws_lambda_get/15_cloud_watch_.png)

Test 2 succeed
![17](../img/aws_lambda_get/17_test2_success.png)

In summary, a get function using AWS lambda was made in Python 3.7 runtime environment.
