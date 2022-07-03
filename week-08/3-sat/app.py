import flask
import movie_service

app = flask.Flask('__name__')


@app.route('/')
def search():
    return flask.render_template('search.html')


@app.route('/movie')
def movie():
    movie_name = flask.request.args['movie-name']
    movies = movie_service.fetch_movie(movie_name)
    return flask.render_template('movie.html', movie_list=movies)

# @app.route('/') instead of this, use the js functionality Ge was talking about


if __name__ == '__main__':
    app.run(debug=True)
