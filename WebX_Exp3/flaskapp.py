from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        name = request.form.get('name')
        return f"""
            <html>
            <head>
                <style>
                    body {{ background-color: #f4f4f4; text-align: center; font-family: Arial, sans-serif; }}
                    h1 {{ color: #333; }}
                    h2 {{ color: #007bff; }}
                    form {{ background: white; padding: 20px; border-radius: 10px; display: inline-block; }}
                    input {{ margin: 5px; padding: 10px; border-radius: 5px; border: 1px solid #ccc; }}
                    a {{ text-decoration: none; color: white; background: #007bff; padding: 10px 15px; border-radius: 5px; }}
                </style>
            </head>
            <body>
                <h1>Homepage</h1>
                <h2>Welcome, {name}!</h2>
                <p><a href='/contact'>Go to Contact Form</a></p>
            </body>
            </html>
        """
    return '''
        <html>
        <head>
            <style>
                body { background-color: #f4f4f4; text-align: center; font-family: Arial, sans-serif; }
                h1 { color: #333; }
                form { background: white; padding: 20px; border-radius: 10px; display: inline-block; }
                input { margin: 5px; padding: 10px; border-radius: 5px; border: 1px solid #ccc; }
                input[type='submit'] { background: #28a745; color: white; border: none; cursor: pointer; }
            </style>
        </head>
        <body>
            <h1>Homepage</h1>
            <form method='post'>
                <label for='name'>Enter your name:</label>
                <input type='text' name='name' required>
                <input type='submit' value='Submit'>
            </form>
        </body>
        </html>
    '''

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        return f"""
            <html>
            <head>
                <style>
                    body {{ background-color: #f4f4f4; text-align: center; font-family: Arial, sans-serif; }}
                    h1 {{ color: #333; }}
                    p {{ color: #555; }}
                    a {{ text-decoration: none; color: white; background: #007bff; padding: 10px 15px; border-radius: 5px; }}
                </style>
            </head>
            <body>
                <h1>Thank You!</h1>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <a href='/'>Back to Home</a>
            </body>
            </html>
        """
    return '''
        <html>
        <head>
            <style>
                body { background-color: #f4f4f4; text-align: center; font-family: Arial, sans-serif; }
                h1 { color: #333; }
                form { background: white; padding: 20px; border-radius: 10px; display: inline-block; }
                input { margin: 5px; padding: 10px; border-radius: 5px; border: 1px solid #ccc; }
                input[type='submit'] { background: #007bff; color: white; border: none; cursor: pointer; }
            </style>
        </head>
        <body>
            <h1>Contact Page</h1>
            <form method='post'>
                Name: <input type='text' name='name' required><br>
                Email: <input type='email' name='email' required><br>
                <input type='submit' value='Submit'>
            </form>
        </body>
        </html>
    '''

if __name__ == '__main__':
    app.run(debug=True)