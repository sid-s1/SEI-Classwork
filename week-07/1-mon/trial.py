print('Server: What can I get for you today? ')
order = input('You: ').lower()
latte = 0
cappuccino = 0
mocha = 0

while order != 'nope':
    if 'latte' in order:
        latte += 1
    elif 'cappuccino' in order:
        cappuccino += 1
    elif 'mocha' in order:
        mocha += 1
    print('Anything else? ')
    order = input('You: ').lower()

print('Lattes ->> ', latte)
print('Cappuccinos ->> ', cappuccino)
print('Mochas ->> ', mocha)
