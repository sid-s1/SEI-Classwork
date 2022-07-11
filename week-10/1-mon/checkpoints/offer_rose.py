import string


def offer_rose(person):
    return f"Would you take this rose, {person}, in exchange for giving an old beggar woman shelter from the bitter cold?"


def data():
    data = {
        "town": {
            "residents": ["Maurice", "Belle", "Gaston"],
            "castle": {
                "num_rooms": 47,
                "residents": [
                    {
                        "name": "Robby Benson",
                        "year_of_birth": 1956
                    }
                ],
                "guests": ["birds"]
            }
        }
    }

    print(
        f'Number of rooms in the castle is {data["town"]["castle"]["num_rooms"]}')
    data["town"]["castle"]["guests"].insert(0, 'Belle')
    print(f'After adding guest - {data}')
    print(
        f'Year of birth for Robby - {data["town"]["castle"]["residents"][0]["year_of_birth"]}')
    data["town"]["castle"]["cook"] = "Mrs Potts"
    print(f"After adding cook to the castle - {data}")


def friends():
    friends = ["Chip Potts", "Cogsworth", "Lumière", "Mrs. Potts"]
    while friends:
        print(f"Belle is friends with {friends.pop()}")


def lost_boys():
    lost_boys = [
        {'name': 'Tootles', "age": '11'},
        {'name': 'Nibs', "age": '9'},
        {'name': 'Slightly', "age": '10'},
        {'name': 'Curly', "age": '8'},
        {'name': 'The Twins', "age": '9'}
    ]
    age_sum = 0
    for boy in lost_boys:
        age_sum += int(boy["age"])
    print(f"Sum of ages is - {age_sum}")


def darling_children():
    children = ['Wendy', 'John', 'Michael']
    insertion = 1
    for child in children:
        children[children.index(child)] = f"{insertion} {child} Darling"
        insertion += 1
    print(f"Darling children are - {children}")


def letter_reverse(sentence):
    words = sentence.split(' ')
    new_sentence = ""
    for word in words:
        new_word = ""
        for letter in word:
            new_word = letter + new_word
        new_sentence = new_sentence + new_word + " "
    print(f"New sentence is - {new_sentence}")


def scream(number_of_lols):
    sentence_to_print = "lol"
    addition_for_each_print = sentence_to_print[1:]
    if number_of_lols == 0:
        print("crickets")
    else:
        while number_of_lols > 1:
            number_of_lols -= 1
            sentence_to_print += addition_for_each_print
        print(sentence_to_print)


lost_boys()
friends()
data()
darling_children()
letter_reverse("Now I know what a TV dinner feels like")
scream(7)
