from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return '''
    <html>
    <head>
        <title>Home</title>
        <style>
            body { font-family: Arial, sans-serif; text-align: center; background-color: #f4f4f4; }
            .container { margin-top: 50px; }
            a { display: inline-block; margin: 10px; padding: 10px 20px; text-decoration: none; background: #007BFF; color: white; border-radius: 5px; }
            a:hover { background: #0056b3; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Welcome to the Homepage</h1>
            <a href="/profile/testuser">Go to Profile Page</a>
            <a href="/submit">Go to Submit Page</a>
            <p>Enter a username in the URL: <code>/profile/yourname</code></p>
        </div>
    </body>
    </html>
    '''

@app.route('/profile/<username>')
def profile(username):
    return f'''
    <html>
    <head>
        <title>Profile</title>
        <style>
            body {{ font-family: Arial, sans-serif; text-align: center; background-color: #f4f4f4; }}
            .container {{ margin-top: 50px; }}
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Profile Page</h1>
            <p>Welcome, <strong>{username}</strong>!</p>
            <a href="/">Back to Home</a>
        </div>
    </body>
    </html>
    '''

@app.route('/submit', methods=['GET', 'POST'])
def submit():
    if request.method == 'POST':
        name = request.form['name']
        age = request.form['age']
        return f'''
        <html>
        <head>
            <title>Submission Successful</title>
            <style>
                body {{ font-family: Arial, sans-serif; text-align: center; background-color: #f4f4f4; }}
                .container {{ margin-top: 50px; }}
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Submission Successful</h1>
                <p>Name: <strong>{name}</strong></p>
                <p>Age: <strong>{age}</strong></p>
                <a href="/">Back to Home</a>
            </div>
        </body>
        </html>
        '''
    return '''
    <html>
    <head>
        <title>Submit</title>
        <style>
            body { font-family: Arial, sans-serif; text-align: center; background-color: #f4f4f4; }
            .container { margin-top: 50px; }
            form { display: inline-block; background: white; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1); }
            input { margin: 10px 0; padding: 8px; width: 100%; border: 1px solid #ccc; border-radius: 5px; }
            input[type=submit] { background: #28a745; color: white; cursor: pointer; border: none; }
            input[type=submit]:hover { background: #218838; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Submit Your Details</h1>
            <form method="post">
                <input type="text" name="name" placeholder="Enter your name" required><br>
                <input type="number" name="age" placeholder="Enter your age" required><br>
                <input type="submit" value="Submit">
            </form>
            <br>
            <a href="/">Back to Home</a>
        </div>
    </body>
    </html>
    '''

if __name__ == '__main__':
    app.run(debug=True)
