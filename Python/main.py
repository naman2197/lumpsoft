from flask import *
import json, time

app = Flask(__name__)


@app.route('/', methods=['GET'])
def home_page():
    return "Welcome to Python"


@app.route('/algorithm', methods=['GET'])
def get_data():
    n = 20
    nth_odd_number = 2 * n - 1
    input_string = "LuxPMsoft"
    i = 0
    final_str = ''
     #code is optimised by not implementing one loop for odd numbers and insert iteration rather than
     #  two loops  (one for getting odd numbers and one for iteration)
    for alp in input_string:
        final_str += alp
        if i < len(input_string) - 1:
            final_str += str(nth_odd_number)
        nth_odd_number -= 2
        i += 1

    i = 0
    while i < len(final_str) - 1:
        if final_str[i].isalpha() and final_str[i + 1].isdigit():
            a = final_str[:i+1]
            b = final_str[i+2:]
            final_str = a+b
        i += 1

    data = {
        'text': final_str
    }

    return json.dumps(data)


if __name__ == '__main__':
    app.run(port=5000)
