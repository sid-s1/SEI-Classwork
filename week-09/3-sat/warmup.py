import numpy
array = []
user_input = input('Enter numbers, write \'done\' when you are done: \n')
while user_input != 'done':
    array.append(int(user_input))
    user_input = input()
if array:
    mean = numpy.mean(array)
    for element in array:
        array[array.index(element)] = int(mean)
    print(array)
else:
    print([])
