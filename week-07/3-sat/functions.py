def run_twice(func):
    print(f'About to decorate {func.__name__}')

    def inner():
        print('Running decorated function')
        func()
        func()
    return inner


@run_twice  # this also calls function run_twice, but in its inner function must be returned & you must
# pass a function like greeting through run_twice to have it run
def greeting():
    print("Henlo")


greeting()
