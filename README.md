
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
* mvn clean install (im Backendordner)
* npm install (im Frontendordner)
* npm run dev (im Frontendordner)


### Um die Datenbank verwenden zu können gib Folgendes in der Konsole ein:
* docker run --name SolarPostgres -p 5432:5432  -e POSTGRES_PASSWORD=mysecretpassword -d postgres
* docker start SolarPostgres (zum Neustarten)


### Python über die Konsole installieren:
* install python3
* install pip3
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

#### Gesponsert von:
* Micromata (besuche https://www.micromata.de/ für mehr Informationen.)