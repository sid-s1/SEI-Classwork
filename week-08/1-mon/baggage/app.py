from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def main():
    return render_template('baggage-form.html')


@app.route('/check')
def check(check=None, weight_cond=None, height_cond=None, width_cond=None, depth_cond=None):
    weight = int(request.args['weight'])
    height = int(request.args['height'])
    width = int(request.args['width'])
    depth = int(request.args['depth'])
    type = request.args['type']
    violating1 = False
    violating2 = False
    violating3 = False
    violating4 = False
    if type == 'Cabin':
        if weight <= 10 and height <= 56 and width <= 36 and depth <= 23:
            allowed = True
        else:
            if weight > 10:
                violating1 = True
            if height > 56:
                violating2 = True
            if width > 36:
                violating3 = True
            if depth > 23:
                violating4 = True
            allowed = False
    else:
        if weight <= 32 and all(dimension <= 1000 for dimension in (height, width, depth)):
            allowed = True
        else:
            if weight > 32:
                violating1 = True
            if height > 1000:
                violating2 = True
            if width > 1000:
                violating3 = True
            if depth > 1000:
                violating4 = True
            allowed = False
    return render_template('check.html', check=allowed, weight_cond=violating1, height_cond=violating2, width_cond=violating3, depth_cond=violating4)
