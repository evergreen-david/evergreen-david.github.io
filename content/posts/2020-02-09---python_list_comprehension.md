---
title: python-list-comprehension
date: "2020-02-08T21:22:40"
template: "post"
draft: false
slug: "/posts/python-list-comprehension"
category: "python-list-comprehension"
description: "python-list-comprehension"
tags:
  - "python"
  - "list-comprehension"
---

# 1. List comprehension
let's compare (print_list_with_comprehension) with (print_list_with_for) functions.

As you can see, the code readability of (print_list_with_comprehension) is better than (print_list_with_for).

So, I will consider using the list comprehension to do same thing.

```Python
v_list = [1,2,3]

v_dict_key = ["korea", "japan", "china"]
v_dict_value = [10, 20, 30]


def print_list_with_comprehension():
    v_list_comprehension = [x*x for x in v_list ]
    print( v_list_comprehension)

def print_list_with_for():
    result = []
    for v in v_list:
        result.append(v*v)
    print(result)

def print_dict_with_comprehension():
    v_dict_comprehension = { k:v for k,v in zip(v_dict_key, v_dict_value) }
    print(v_dict_comprehension)

def main():
    print("===print list===")
    print_list_with_comprehension()
    print_dict_with_comprehension()

if __name__ == "__main__":
    main()


```

Reference
https://github.com/kssim/python_effective_flow_control