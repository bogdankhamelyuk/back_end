# Dialektsammler

Django-Based Web-Application, that collects people's audio speech and sends it to the HTTPS-Server using Fetch API and POST request.
## Getting Started

### Dependencies
For this project you need have Linux OS with installed ```pip```, ```virtualenv``` and ```Django```. 

### Installing
Firstly, install ```virtualenv``` using ```pip```:
```
sudo pip install virtualenv
```
Then clone the project and go inside of it. In the same folder, where ```back_end```file is, create your virtual environment:
```
virtualenv <name>
```
, where ```<name>``` is your name for the created virtual environment. 

This is recommended option, in order to avoid future problems with running the Django-Server. Alternatively, you can run the project without virtual environment, but future version conflicts may appear:

 Then activate the ```virtualenv```using following command:
 ```
 source <name>/bin/activate
 ```
 You will notice, that virtual environment is activated, as the ```<name>```will be inside of the brackets:
```
pi@raspberrypi:~/workspace/Dialektsammler $ source django-env/bin/activate
(django-env) pi@raspberrypi:~/workspace/Dialektsammler $ 
```
 
Now you can install ```Django```in it:
```
python -m pip install Django
```
As you've installed that, you're now able to the server locally on your machine. For that purpose, go inside of ```back_end``` folder and run ```manage.py``` with following command:
```
python manage.py runserver
```
After running that, you should see following output:
```
Watching for file changes with StatReloader
Performing system checks...

System check identified some issues:

WARNINGS:
?: (urls.W002) Your URL pattern '/recorder' has a route beginning with a '/'. Remove this slash as it is unnecessary. If this pattern is targeted in an include(), ensure the include() pattern has a trailing '/'.

System check identified 1 issue (0 silenced).
February 17, 2022 - 12:56:31
Django version 4.0.2, using settings 'back_end.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```
At this point the local server is successfully running on your machine.


