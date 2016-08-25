# Main application and route file
from flask import Flask, render_template



mysite = Flask(__name__)
  
@mysite.route('/')
def main():
	print('Launching website ')
	return render_template('/main.html')

if __name__ == '__main__':
	mysite.run()

