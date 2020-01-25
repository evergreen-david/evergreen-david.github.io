---
title: How import statement finds modules and packages
date: "2019-12-09T19:34:17"
template: "post"
draft: false
slug: "/posts/modules-packages"
category: "terminal"
description: "How import statement finds modules and packages"
tags:
  - "python"
---

# 1. sys.modules 와 sys.path 의 차이점
sys.path 는 실제 package 를 포함하는 경로의 리스트 이다. 
sys.path 를 print 해보고 해당경로로 가보면 모듈들이 있음을 확인할 수 있음.
sys.modules는 이미 import된 모듈과 패키지들을 저장하고 있는 dictionary 이며 파이썬이 모듈/패키지를 찾기위해 가장 먼저 확인하는 dictionary 이며 전역 환경 변수의 성격을 가지고 있음.
예를 들어 내가 abc 라는 모듈을 임포트하려고 한다면 먼저 sys.modules에서 찾고 여기에 없으면 built-in 모듈들을 확인하고 마지막으로 sys.path 에서 찾는다.

# 2. 파이썬은 sys 모듈의 위치를 어떻게 찾을 수 있는지
파이썬에서 제공되는 sys.py 모듈의 __loader__ 클래스의 exec_module 메소드를 통해서 파이썬이 초기화 될때 로드해서 찾을 수 있게함.
```python
@classmethod
def load_module(cls, *args, **kwargs): # real signature unknown
    """
    Load the specified module into sys.modules and return it.
    
        This method is deprecated.  Use loader.exec_module instead.
    """
    pass

def module_repr(module): # reliably restored by inspect
    """
    Return repr for the module.
    
            The method is deprecated.  The import machinery does the job itself.
    """
    pass

def __init__(self, *args, **kwargs): # real signature unknown
    pass

__weakref__ = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default
"""list of weak references to the object (if defined)"""


__dict__ = None # (!) real value is "mappingproxy({'__module__': '_frozen_importlib', '__doc__': 'Meta path import for built-in modules.\\n\\n 
```

# 3. 3. Absolute path 와 relative path의 차이점
현재 파이썬 파일기준으로 경로를 설정할때 사용되며, 현재 위치를 표현할때 dot( .)으로 표시하며, 
absoulte path는 터미널에서 pwd로 확인할 수 있는 경로이지만 파이썬에서 사용할때는 / 대신 하위 디렉토리를 표현하기 위해 dot( .) 을 사용함
relative path는 모듈간의 참조하는 path가 얽혀있으면 모듈 파일의 위치를 변경할때 경로를 전부 수정해야하기 떄문에 모듈 임포트시에는 보통 absoulte path 사용하는게 권장됨.
