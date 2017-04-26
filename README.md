
BACK-END PATH

Install Django
$ sudo apt-get install python-django

Install Postgres
$ sudo apt-get install postgresql postgresql-contrib

Start Postgres in command line
$ sudo -i -u postgres
$ psql

Install package for django and postgres
$ sudo apt-get install python-pip python-dev libpq-dev postgresql postgresql-contrib

Tutorial install postgres and create user and role. Connect Django to Postgres
https://www.digitalocean.com/community/tutorials/how-to-use-postgresql-with-your-django-application-on-ubuntu-14-04

$ python manage.py runserver

Django migrate
$ python manage.py makemigrations api
$ python manage.py migrate



FRONT-END PATH

 - ES6
 - webpack
 - CoreJS
 - ReactJS
 - babel

HTML TEMPLATES
 - CSS
 - sass
 - HTML

BACK-END
 - Python
 - Django
 - Sockets

DATABASE
 - MongoDB
 
CONTAINER 
 - Docker
 
Install and Run application

npm i
npm i -g webpack
webpack
webpack-dev-server

React components structure

route ->

    /login
    Login ->
        SignIn
        SignUp
        
    /create
    CreateAccount;
        
    /    
    ActionBar (    
    
    /messaging
    Messaging ->
    
        LeftBar ->
        
            ContactsList;
            
        MessageContent ->
        
            MessageList;
        
    }
