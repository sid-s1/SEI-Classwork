score_input = input('Enter 9 hole scores: ')
score_array = score_input.split(',')
total_score = 0
for score in score_array:
    score = int(score)
    total_score = total_score + score
print(f'Total score is -> {total_score}')
