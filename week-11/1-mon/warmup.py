import math


def get_squares(arr):
    new_arr = []
    for element in arr:
        root = int(math.sqrt(element))
        if root*root == element and element not in new_arr:
            new_arr.append(element)
    return(sorted(new_arr))


print(get_squares([4, 1, 16, 1, 10, 35, 22]))
print(get_squares([10, 35, 22]))
print(get_squares([11, 38, 144, 998001]))
