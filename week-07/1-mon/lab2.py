print('Eliza: Eliza: Hi there, what would you like to talk about today?')
user_response = input('You: ')
words = user_response.split(' ')

while True:
    if user_response.startswith('I am'):
        user_response = user_response.removeprefix('I am')
        print(f'Eliza: How long have you been{user_response}')
    elif user_response.startswith('I\'m'):
        user_response = user_response.removeprefix('I\'m')
        print(f'Eliza: How long have you been{user_response}')
    elif 'you' in user_response:
        print('Eliza: We\'re here to talk about you, not me')
    elif user_response.startswith('I don\'t'):
        user_response = user_response.removeprefix('I don\'t')
        print(f'Eliza: Why don\'t you{user_response}?')
    elif user_response.lower() == 'no':
        print(f'Eliza: I think you are being a bit negative')
    elif user_response == '':
        break
    else:
        print('Please go on...')
    user_response = input('You: ')
