def sort(arr):
    for index in range(len(arr)-1):
        for index_two in range(len(arr)-1, index, -1):
            if arr[index] > arr[index_two]:
                sub = arr[index]
                arr[index] = arr[index_two]
                arr[index_two] = sub
    print(arr)


sort([5, 2, 3, 4])
print(['A']*676)
