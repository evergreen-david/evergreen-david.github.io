---
title: setting up django
date: "2019-12-20T18:24:17"
template: "post"
draft: false
slug: "/posts/setup-django"
category: "terminal"
description: "setting up django"
tags:
  - "django"
  - "python"
---

# 1. Make virtual environment
conda 가상 환경 만듬
`
conda create -n project python=3.7
`
제대로 만들어 졌는지 확인하고 activate
```
conda env list
conda activate project
```

# 2. Install Django
```javascript
pip install django
django-admin startproject mysql_setting
vi my_settings.py
```

Database 를 mysql로 세팅한다.
키정보도 생성해서 넣어줌

# 3. My Sql setting
기본적인 패키지들 설치해줌

```javascript
pip install mysql-connector-python
pip install bcrypt
pip install pyjwt
pip install django-cors-headers
pip install mysqlclient

```

# 4. Tips
설치된 패키지 확인
`pip freeze` 
asgiref==3.2.3
bcrypt==3.1.7
certifi==2019.11.28
cffi==1.13.2
Django==3.0.1
mysql-connector-python==8.0.18
protobuf==3.11.1
pycparser==2.19
PyJWT==1.7.1
pytz==2019.3
six==1.13.0
sqlparse==0.3.0

나중에 배포를 위해서 설치된 버전을 기록한다.
`pip freeze > requirements.txt` 

`pip install -r requirements.txt` 로 나중에 설치 가능, 이렇게 장고를 위한 실행 패키지들과 환경을 맞춰줌
