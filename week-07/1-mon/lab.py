bottles_left = int(input('How many bottles are left? '))
while bottles_left > 0:
    if bottles_left != 1:
        print(
            f'{bottles_left} bottles of beer on the wall! {bottles_left} bottles of beer!')
        if bottles_left == 2:
            print(
                f'You take one down, pass it around, {bottles_left-1} bottle of beer on the wall!')
        else:
            print(
                f'You take one down, pass it around, {bottles_left-1} bottles of beer on the wall!')
    else:
        print(
            f'{bottles_left} bottle of beer on the wall! {bottles_left} bottle of beer!')
        print('You take one down, pass it around, no more bottles of beer on the wall!')
    bottles_left -= 1
