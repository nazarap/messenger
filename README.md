MESSENGER [MESSENGER NAME WILL BE HERE]
=====================================================

Here you can see my messenger. Where I used a new and unfamiliar to me soldiers.

TECHNOLOGY ON PROJECT
------------------------

Please make sure the release file is unpacked under a Web-accessible
directory. You shall see the following files and directories:

    FRONT_END PATH
        - ES6
        - webpack
        - Redux
        - ReactJS
        - babel
       
    HTML TEMPLATES
        - CSS
        - HTML
        
    BACK-END PATH
         - Python
         - Django
         - Django REST
         - Sockets
     
    DATABASE
        - PostgreSQL

PROJECT STRUCTURE
------------------------

      api/                            directory with models and views for project api
      assets/                         front-end files
      django_react/                   django project settings and root url file
      node_modules/                   modules for front-end
      templates/                      directory for templates (index.html)
      .gitignore                      gitignore file
      manage.py                       root file for django project
      webpack.config.js               main config for webpack
      README                          this file


INSTALLATION
------------------------

BACK-END PATH

Install Django
```sh
$ sudo apt-get install python-django
```
Install Postgres
```sh
$ sudo apt-get install postgresql postgresql-contrib
```
Start Postgres in command line
```sh
$ sudo -i -u postgres
$ psql
```
Install package for django and postgres
```sh
$ sudo apt-get install python-pip python-dev libpq-dev postgresql postgresql-contrib
```
Tutorial install postgres and create user and role. Connect Django to Postgres

<a href="https://www.digitalocean.com/community/tutorials/how-to-use-postgresql-with-your-django-application-on-ubuntu-14-04">How to use PostgreSQL with Django application</a>

Install package for django and postgres
```sh
$ pip install --upgrade pip
$ pip install django-cors-headers
$ pip install djangorestframework
$ pip install flask
```
```sh
$ pip install vk
```
if your have error:
    "DEPRECATION: Uninstalling a distutils installed project (requests) has been deprecated and will be removed 
    in a future version. This is due to the fact that uninstalling a distutils project will only partially uninstall 
    the project."
    
Run this command
```sh
$ pip install --ignore-installed vk
```    
Run server
```sh
$ python manage.py runserver
```
Django migrate
```sh
$ python manage.py makemigrations api
$ python manage.py migrate
```

FRONT-END PATH

Install modules
```sh
$ npm i
$ npm i -g webpack
```
Build/run project
```sh
$ webpack
```
```sh
$ webpack-dev-server
```
If your have error:
    "SyntaxError: Use of const in strict mode."

```sh
$ nvm install stable
```

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