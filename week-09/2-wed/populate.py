import psycopg2

conn = psycopg2.connect("dbname=nba_db")
cur = conn.cursor()

# Below was to create initial table with NBA player data
# for line in open('nba_data.csv'):
#     player_data = line.strip().split(',')
#     name = player_data[0]
#     age = int(player_data[1])
#     team = player_data[2]
#     games_played = int(player_data[3])
#     points = int(player_data[4])

#     cur.execute("INSERT INTO players (name,age,team,games,points) VALUES (%s,%s,%s,%s,%s)",
#                 [name, age, team, games_played, points])

user_choice = input('Please enter the name of the team you want to see -> \n')

# cur.execute("SELECT * FROM players WHERE team ILIKE %s", (user_choice,))
# results = cur.fetchall()
# for player in results:
# Below was statement for part 1
# print(f'Player name -> {player[1]}\nPlayer points -> {player[-1]}')

cur.execute("SELECT COUNT(*) FROM players WHERE team ILIKE %s", (user_choice,))
number_of_players = cur.fetchall()[0][0]

cur.execute("SELECT SUM(points) FROM players WHERE team ILIKE %s",
            (user_choice,))
total_points = cur.fetchall()[0][0]

cur.execute("SELECT AVG(points) FROM players WHERE team ILIKE %s",
            (user_choice,))
average = cur.fetchall()[0][0]

cur.execute("SELECT MIN(age) FROM players WHERE team ILIKE %s",
            (user_choice,))
min_age = cur.fetchall()[0][0]
cur.execute("SELECT name FROM players WHERE team ILIKE %s AND age=%s",
            (user_choice, min_age))
youngest_player = cur.fetchall()[0][0]

cur.execute("SELECT MAX(age) FROM players WHERE team ILIKE %s", (user_choice,))
max_age = cur.fetchall()[0][0]
cur.execute("SELECT name FROM players WHERE team ILIKE %s AND age=%s",
            (user_choice, max_age))
oldest_player = cur.fetchall()[0][0]


cur.execute("SELECT MAX(points) FROM players WHERE team ILIKE %s",
            (user_choice,))
highest_points = cur.fetchall()[0][0]

cur.execute("SELECT name FROM players WHERE team ILIKE %s AND points=%s",
            (user_choice, highest_points))
player_highest_points = cur.fetchall()[0][0]

cur.execute("SELECT MAX(games) FROM players WHERE team ILIKE %s",
            (user_choice,))
most_games = cur.fetchall()[0][0]

cur.execute("SELECT name FROM players WHERE team ILIKE %s AND games=%s",
            (user_choice, most_games))
most_player = cur.fetchall()[0][0]

cur.execute("SELECT DISTINCT age FROM players ORDER BY age")
ages = cur.fetchall()
for selected_age in ages:
    cur.execute("SELECT AVG(points) FROM players WHERE age=%s",
                (selected_age[0],))
    average_points_for_age = round(cur.fetchall()[0][0], 2)
    print(
        f'Average points for people aged {selected_age[0]} are {average_points_for_age}')

# Below was to create new table with all points/game for each player
# cur.execute("SELECT name,team,points/games AS points_per_game FROM players")
# all_players = cur.fetchall()
# for player in all_players:
#     cur.execute("INSERT INTO p_per_g (name,team,points_per_game) VALUES (%s, %s, %s)", [
#                 player[0], player[1], player[2]])
# conn.commit()

print(f'See results below-> \n')
print(f'Number of players - {number_of_players}\nTotal Points - {total_points}\nAverage points per player - {round(average,2)}\nYoungest player name and age - {youngest_player},{min_age}\nOldest player name and age - {oldest_player},{max_age}\nHighest scoring player and points - {player_highest_points},{highest_points}\nPlayer who played the most games - {most_player},{most_games}')

cur.execute(
    "SELECT team,COUNT(*) FROM p_per_g WHERE points_per_game > 12 GROUP BY team ORDER BY COUNT(*) DESC")
extension_two = cur.fetchall()
for value in extension_two:
    print(
        f'Team name - {value[0]} - number of people who scored above 12 points per game - {value[1]}')

conn.close()
