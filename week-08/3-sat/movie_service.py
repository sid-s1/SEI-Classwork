from sys import api_version
import requests

api_Key = '2a46f224'
params = {
    'apikey': api_Key
}


def fetch_movie(name):
    params['s'] = name
    response = requests.get(
        f'https://www.omdbapi.com/', params=params)
    movie = response.json()
    return movie['Search']


if __name__ == '__main__':
    movie = fetch_movie('int')
    print(movie)
