from flask import Flask, request, jsonify
import mysql.connector

app = Flask(__name__)

db_config = {
    'user': 'your_username',
    'password': 'your_password',
    'host': 'localhost',
    'database': 'myapp'
}

@app.route('/users', methods=['GET'])
def get_users():
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users")
    users = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(users)

@app.route('/users', methods=['POST'])
def add_user():
    new_user = request.json
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()
    cursor.execute("INSERT INTO users (name, email) VALUES (%s, %s)", (new_user['name'], new_user['email']))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify(new_user), 201

if __name__ == '__main__':
    app.run(debug=True)