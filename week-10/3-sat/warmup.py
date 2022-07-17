user_passwords = {
    'fred': 'hello123',
    'susan': 'password',
    'ming': 'shadow',
    'renee': 'asdfasdf'
}

username = input("Enter username: ")
password = input("Enter password: ")

if username in user_passwords:
    if user_passwords[username] == password:
        print(f"Correct! You are logged in as {username}.")
    else:
        print("Username or password is incorrect.")
else:
    print("Username or password is incorrect.")
