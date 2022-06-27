import re
user_input = input('Enter a sentence please! \n')
words = re.split(r'[.,\s;-]', user_input)
word_dict = {}
count_arr = []
max = 0
most_frequent_word = ''
for word in words:
    if word != ' ' and word != '':
        word_dict[word] = words.count(word)
        if word_dict[word] > max:
            max = word_dict[word]
            max_word = word
for value in word_dict.values():
    count_arr.append(value)
for key in word_dict:
    if word_dict[key] == 1:
        print(f'{key} appears {word_dict[key]} time')
    else:
        print(f'{key} appears {word_dict[key]} times')
    if count_arr.count(word_dict[key]) == 1 and key == max_word:
        most_frequent_word = key

if most_frequent_word:
    print(f'{most_frequent_word} is the most frequent word')
