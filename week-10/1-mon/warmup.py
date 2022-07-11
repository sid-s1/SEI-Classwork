import random


def makeFakeMap(z):
    main_list = []
    n = 0
    x = random.randint(0, z-1)
    y = random.randint(0, z-1)
    while n < z:
        n_sub = 0
        newArr = []
        while n_sub < z:
            if n == x and n_sub == y:
                newArr.append('X')
            else:
                newArr.append('A')
            n_sub += 1
        main_list.append(newArr)
        n += 1
    return main_list


print(makeFakeMap(3))
