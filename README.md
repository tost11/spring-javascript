
TABLE OF CONTENTS
---------------------

* Introduction
* Requirements
* Installation
* Configuration
* Maintainers

INTRODUCTION
-------------
Die Solar-Monitoring Website ist mit einem Solarpanel verbunden und zeigt die 
aktuellen Solardaten an. Außerdem werden die aktuellen Werte von Produktion und Verbrauch, sowie die der Batteriespannung,
durch Graphen visualisiert. Auch hat man die Möglichkeit sich nach einer Auswahl, die mit zwei Dropdown-Menüs erfolgt,
die Daten innerhalb des ausgewählten Zeitraums bzw. die Daten eines Tages mit einem 
Graphen anzeigen zu lassen.

REQUIREMENTS
----------------
Diese Anwendung benötigt die folgenden Module:

* postgres Datenbank
* springboot
* Java
* bootstrap
* Maven
* Javascript
* Python


INSTALLATION
-------------

### Getting Started
* Öffne das Projekt spring-javascript

### Gebe diese Commands in der Konsole ein:
* ls
* cd frontend
* sudo chown -R $(whoami) /usr/local/etc/bash_completion.d /usr/local/share/doc /usr/local/share/zsh /usr/local/share/zsh/site-functions /usr/local/var/homebrew/locks
* brew install git
* xcode-select --install
* ssh-keygen
* cat .ssh/id_rsa.pub
* git clone git@github.com:tost11/spring-javascript.git
* cd spring-javascript
* mvn clean install
* npm install


### Um die Datenbank verwenden zu können gib Folgendes in der Konsole ein:
* docker start SolarPostgres
* docker run --name SolarPostgres -p 5432:5432  -e POSTGRES_PASSWORD=mysecretpassword -d postgres

### Python über die Konsole installieren:
* brew install python
* brew install pip3
* pip3 install pymodbus
* pip3 install requests
* python3 text.py


CONFIGURATION
-------------
Das Modul hat kein Menü oder veränderbare Einstellungen. 
Es gibt keine Konfiguration. 


MAINTAINERS
---------------

* Lukas Hagenauer
* Daniel Szumski
* Helen Noske

Gesponsert von:
* Micromata, besuche https://www.micromata.de/ für mehr Informationen