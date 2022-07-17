import bcrypt


def hash(string):
    return bcrypt.hashpw(string.encode(), bcrypt.gensalt()).decode()


def check(string, hashed_string):
    return bcrypt.checkpw(string.encode(), hashed_string.encode())


if __name__ == '__main__':
    password = '12qwaszx'
    hashed_password = hash(password)
    print(hashed_password)
    is_the_same = check(password, hashed_password)
    print(is_the_same)
