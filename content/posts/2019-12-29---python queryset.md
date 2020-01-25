---
title: python queryset
date: "2019-12-29T18:24:17"
template: "post"
draft: false
slug: "/posts/study-python-queryset"
category: "terminal"
description: "python queryset"
tags:
  - "python"
  - "django"
---

# 1. QUERY SET 이란
데이터 베이스에서 읽어온 객체들의 집합이다.
파이썬 쉘에서 다음과 같이 테이블 자료 조회

![query_set](../img/query_set_select_all.png)

# 2. 특정 row만 가져오기 (MYSQL의 Where 구문)
```javascript
CarModels.objects.filter(model_name='Model S').values()
```
![filter](../img/objects_filter.png)

# 3. 읽어온 테이블에서 특정 키값만 필터링하기
value 함수에 원하는 키값을 전달해주면 다음과 같이 필터링 된다.

![values](../img/prefetch_related_values.png)

[Django reference]
> (https://docs.djangoproject.com/en/3.0/ref/models/querysets/)
