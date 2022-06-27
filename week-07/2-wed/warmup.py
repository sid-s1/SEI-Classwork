sentence = input('Enter a sentence pwease ->> ')
# countE = 0
# countT = 0

for char in sentence:
    if char != ' ':
        if sentence.count(char) == 1:
            print(f'Number of {char}\'s ->> 1')
        if sentence.count(char) > 1:
            print(f'Number of {char}\'s ->> {sentence.count(char)}')
            sentence = sentence.replace(char, "")

# print(f'Number of e\'s ->> {countE}')
# print(f'Number of t\'s ->> {countT}')

    # if char == 'e':
    #     countE += 1
    # if char == 't':
    #     countT += 1
