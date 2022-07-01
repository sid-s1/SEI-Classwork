house_listings = [
    {
        'address': '5 George St, Brisbane',
        'price': 1200000,
        'status': 'sold'
    },
    {
        'address': '30 Forest Drive, Cairns',
        'price': 700000,
        'status': 'for sale'
    },
    {
        'address': '6 Station Street, Bendigo',
        'price': 900000,
        'status': 'for sale'
    },
    {
        'address': '42 Wallaby Way, Sydney',
        'price': 1400000,
        'status': 'for sale'
    },
]

count = 0
max = 0
max_prop = ''
for house in house_listings:
    if house['status'] == 'for sale':
        count += 1
    if house['price'] > max:
        max = house['price']
        max_prop = house['address']
count_two = len(
    [house for house in house_listings if house['status'] == 'for sale'])
print(f'Number of houses for sale-> {count}')
print(f'{max_prop} is the most expensive property')
print(f'using second method \nNumber of houses for sale-> {count_two}')
