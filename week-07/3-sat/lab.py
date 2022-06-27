import re
# item_dict = {
#     'banana': {
#         'price': 1,
#         'gst': 0
#     },
#     'apple': {
#         'price': 0.5,
#         'gst': 0
#     },
#     'weetbix': {
#         'price': 3,
#         'gst': 0
#     },
#     'milk': {
#         'price': 2,
#         'gst': 0
#     },
#     'cookies': {
#         'price': 4.5,
#         'gst': 0.1 * 4.5
#     },
#     'chips': {
#         'price': 4,
#         'gst': 0.1 * 4
#     },
#     'bbqchicken': {
#         'price': 7,
#         'gst': 0.1 * 7
#     }
# }

new_dict = {}

from_file = open(
    '/Users/sid/Courses/GA-SEI/sei-course/classwork/siddharth-singh/week-07/3-sat/item_info.txt', 'r')
for line in from_file:
    words = re.split('\s|\t|\n', line)
    new_dict[words[0]] = {}
    new_dict[words[0]]['price'] = words[1]
    new_dict[words[0]]['gst'] = words[2]

user_list = []
gst_component = 0

print(new_dict)


def calculate_price(list_of_items):
    global gst_component
    total_cost = 0
    for item in list_of_items:
        if item in new_dict:
            total_cost += float(new_dict[item]['price'])
            if new_dict[item]['gst'] == 'True':
                gst_component += (float(new_dict[item]['price']) * 0.1)
        else:
            print(f'{item.upper()} not in our system!')
    return total_cost


def choice(user_choice):
    global gst_component
    if user_choice == '1':
        user_input = input(
            'Hello! Welcome to our shopping center! Please start entering your items below \nWhen you are done, enter DONE: \n').lower()

        while user_input.lower() != 'done':
            user_list.append(user_input)
            user_input = input().lower()

        cost = calculate_price(user_list)
        print(f'Total price of shopping cart is -> {cost}')
        print(
            f'Total GST component of shopping cart is -> {str(round(gst_component,2))}')

    elif user_choice == '2':
        cost = 0
        user_input = input(
            'Scan the items (separated by a comma) and press enter when done: ')
        for item in re.split(',|\s', user_input):
            item = item.lower()
            if item in new_dict:
                cost += float(new_dict[item]['price'])
                if new_dict[item]['gst'] == 'True':
                    gst_component += (float(new_dict[item]['price']) * 0.1)
        print(f'Total price of shopping cart is -> {cost}')
        print(
            f'Total GST component of shopping cart is -> {str(round(gst_component,2))}')

    else:
        user_choice = input(
            'Please enter a valid choice!\n1. Enter items one by one \n2. Enter items separated by a comma\nEnter number 1 or 2\n')
        choice(user_choice)


user_enters = input(
    'Choose one of the following \n1. Enter items one by one \n2. Enter items separated by a comma\nEnter number 1 or 2\n')
choice(user_enters)
