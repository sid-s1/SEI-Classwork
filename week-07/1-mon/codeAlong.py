people_count = input('How many people are ordering? ')
people_count = int(people_count)
print('The number of people ordering is ->> ', people_count)

latte = 0
cappuccino = 0
mocha = 0

for i in range(people_count):
    order = input(f'What would person {i+1} like? ').lower()
    if 'latte' in order:
        latte += 1
    elif 'cappuccino' in order:
        cappuccino += 1
    elif 'mocha' in order:
        mocha += 1
    else:
        print('Enter something valid please!')

print('Lattes ->> ', latte)
print('Cappuccinos ->> ', cappuccino)
print('Mochas ->> ', mocha)
