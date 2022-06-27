import bisect

break_points = [100,  1000, 2500, 10000, 25000,
                50000, 100000, 350000, 750000, 1500000, 3000000]
values = ['Bell Pepper', 'Banana Pepper', 'Anaheim Pepper', 'Jalapeno Pepper', 'Serrano Pepper',
          'Cayenne Pepper', 'Birds eye chilli', 'Habanero Chilli', 'Red Savina Habanero', 'Ghost Pepper', 'Pepper Spray']

user_input = input('Enter level please: ')
index = bisect.bisect_left(break_points, int(user_input))

print(f'That is as spicy as a {values[index]}')
