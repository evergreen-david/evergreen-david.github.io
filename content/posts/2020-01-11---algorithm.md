---
title: algorithm for sorting
date: "2020-01-12T18:24:17"
template: "post"
draft: false
slug: "/posts/algorithm-for-sorting"
category: "algorithm"
description: "algorithm for sorting"
tags:
  - "algorithm"
---

# 1. 선택 정렬
선택정렬은 정렬되지 않은 데이터 중 가장 작은 데이터를 선택해서맨 앞에서부터 순서대로 정렬해 나가는 알고리즘이다.
예를 들어 아래와 같이 선택정렬을 구현하게 되면 처음 min값을 찾고, min값의 인덱스로 스왑해서 구현하게 됩니다.
O(n2) 의 time complexity 의 성능이며 많은 양의 데이터를 정렬하기에는 적합하지 않음.
 
```python
def selectionSort(nums):

    min = 0
    min_index = 0 
    for i in range(0, len(nums)-1):
        
        min = nums[i]

        for j in range(i+1, len(nums) ):

            if min > nums[j]:
                min = nums[j]
                min_index = j

        temp = nums[i]
        nums[i] = min
        nums[min_index] = temp


    print(nums)

    return nums


test_list = [7,5,4,2]


print("start of program")
re_nums = selectionSort(test_list)

print(re_nums)
```

# 2. 버블 정렬
버블 정렬은 인접한 데이터를 교환해서 정렬하는 알고리즘이며,
만약 배열로 구현하게 되면 한번 정렬이 될때 배열의 마지막 자리에 정렬된 값을 위치 시키게 되며 비교하는 과정에서 1번,2번 인덱스
2번,3번 인덱스 연속적으로 비교하게 되고 이를 스왑해주게 되는데 이런 스왑이 일어나는 모습이 거품과 같이 보여 붙여진 알고리즘 이다.
성능은 정렬알고리즘중에서 삽입정렬이나 Quicksort 과같은 알고리즘 보다는 느리므로 많은 양의 데이터를 정렬하기에는 좋지 않다.

```python
def bubbleSort(arr):

    for i in range(0, len(arr)):

        for j in range(0, len(arr)-i-1):

            if arr[j] > arr[j+1]:

                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp

    print(arr)

    return arr


print('start of program')

test_arr = [6, 5, 3, 8, 2]

bubbleSort(test_arr)
```
