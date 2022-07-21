import "./style.css";
import "./graphen.js";
import {fetchLatest, fetchWh} from "./requests";
import {graph1, graph2} from "./graphen";



//
//------- Aufruf der ersten zwei Graphen
//


window.onload = function () {
  console.log("Hello World!")

  Datum();
  latestData()
  whanzeigen()
  graph1();
  graph2();
}



//
//----------- Update der angezeigten Daten
//

window.latestData = async () => {
  const node = document.getElementById("AP")
  const node1 = document.getElementById("AV")
  const node2 = document.getElementById("BV")

  try{
  const myJson = await fetchLatest();
  node.innerText ="Aktuelle Produktion: " + myJson.inputVoltage * myJson.inputAmpere + "W"
  node1.innerText ="Aktueller Verbrauch: " + myJson.batteryVoltage * myJson.outputAmpere + "W"
  node2.innerText ="Batteriespannung: " + myJson.batteryVoltage + "V"

}catch{
  console.log("Keine Daten vorhanden!")
    node.innerText ="Aktuelle Produktion: Keine Daten vorhanden"
    node1.innerText ="Aktueller Verbrauch: Keine Daten vorhanden"
    node2.innerText ="Batteriespannung: Keine Daten vorhanden"


}
}

async function whanzeigen(){
  const whV = document.getElementById("whV")
  const whP = document.getElementById("whP")
  try {
    const myJson = await fetchWh();
    whV.innerText = "Gesamte Produktion: " + myJson.wh_production + "Wh"
    whP.innerText = "Gesamter Verbrauch: " + myJson.wh_verbrauch + "Wh"
  }catch {
    whV.innerText = "Gesamte Produktion: Keine Daten vorhanden"
    whP.innerText = "Gesamter Verbrauch: Keine Daten vorhanden"
  }
}

setInterval(whanzeigen, 60000)
setInterval(latestData , 10000 );

window.getWerte = async () => {
  const response = await fetch("/api/data/get/latest", {
    method: 'GET',

    headers: {
      'Conent-Type': 'application/json'

    }
  });
  const myJson = await response.json()

}



//
//------------ Funktionen für einzelde Werte
//


window.getProduktion = async () =>{

  try {
    const myJson = await fetchLatest()
      return myJson.inputVoltage * myJson.inputAmpere
  }catch{
    console.log("Keine Daten vorhanden!")
  }
}

window.getBatteryVoltage = async () =>{
  try {
  const myJson = await fetchLatest()
  return myJson.batteryVoltage
  }catch{
    console.log("Keine Daten vorhanden!")
  }
}

  //Produktion: myJson.inputVoltage * myJson.inputAmpere
  //myJson.batteryVoltage
  //Verbrauch: myJson.batteryVoltage * myJson.outputAmpere

  //return myJson;
window.getVerbrauch = async () =>{
  try {
  const myJson = await fetchLatest()
  return myJson.batteryVoltage * myJson.outputAmpere
  }catch{
    console.log("Keine Daten vorhanden!")
  }
}
/*






    let index = 0;
    id2=0;
    let counter =0;
    setInterval(async function () {

      const json = await getWerte();
      const wert1=json.inputVoltage*json.inputAmpere
      const wert2=json.batteryVoltage*json.outputAmpere
      console.log("p: ", wert1)
      counter++;
      if(counter===400){
        graph1();
      }
      id2++;
          data.addRow([index, wert1, wert2]);
      chart.draw(data, options);
      index++;
    }, 5000);



  }


function graph2() {
  google.charts.load('current', {
    packages: ["corechart", "line"]
  });
  google.charts.setOnLoadCallback(batteryChart);
}

function batteryChart() {

  let data = google.visualization.arrayToDataTable([
    ["Year", "Batteriespannung"],
    [0, 0],

  ]);

  // create options object with titles, colors, etc.
  let options = {
    title: " ",
    hAxis: {
      title: "Time"
    },
    vAxis: {
      title: "Volt",
      viewWindowMode:'explicit',
      viewWindow: {
        max:15,
        min:10
      }
    }
  };
  // draw chart on load
  let chart = new google.visualization.LineChart(
      document.getElementById("myChart2")
  );
  chart.draw(data, options);

  // interval for adding new data every 250ms
  let index = 0;
  id3 = 0;
  let counter=0;
  setInterval(async function () {
    // instead of this random, you can make an ajax call for the current cpu usage or what ever data you want to display
    const json = await getWerte();
    const wert=json.batteryVoltage;
    counter++;
    if (counter === 400) {
      graph2();
    }
    id3++;
    data.addRow([index, wert]);
    chart.draw(data, options);
    index++;
  }, 5000);
}

const btn = document.getElementById("wahl")
btn.onclick=()=>{


  graph3();
}

function graph3() {

  google.charts.load('current', {
    packages: ["corechart", "line"]
  });
  google.charts.setOnLoadCallback(oldValues);
}

async function oldValues() {

  const response = await fetch("/api/data/get/" + document.getElementById('zeitraum').selectedOptions[0].value, {
    method: 'GET',
    headers: {
      'Conent-Type': 'application/json'

    }
  });
  const myJson = await response.json()


  let data = google.visualization.arrayToDataTable([
    ["Year", "Produktion", "Verbrauch"],
    [0, 0, 0],

  ]);

  // create options object with titles, colors, etc.
  let options = {
    title: "Zeitraum",
    hAxis: {
      title: "Time"
    },
    vAxis: {
      title: "Watt"
    }
  };
  // draw chart on load
  let chart = new google.visualization.LineChart(
      document.getElementById("myChart3")
  );
  chart.draw(data, options);
  // interval for adding new data every 250ms
  let index = 0;
  id4 = 0;

  for(let wert of myJson){
    data.addRow([index, wert.inputVoltage * wert.inputAmpere, wert.batteryVoltage * wert.outputAmpere])
    chart.draw(data, options)
    index++;
  }

}

async function Datum() {

  const heute = new Date();
  let month = "" + (heute.getMonth() + 1);
  let day = "" + heute.getDate();
  let year = heute.getFullYear();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  let aktuell = [year, month, day-1].join("-");


  const dateControl = document.getElementById("start");
  dateControl.value = aktuell;
  dateControl.max = aktuell;

  const response = await fetch("/api/data/get/oldestDate", {
    method: 'GET',
    headers: {
      'Conent-Type': 'application/json'

    }
  });
  const myJson = await response.json()

  const min = new Date(myJson.dateTime);

  let month1 = "" + (min.getMonth() + 1);
  let day1 = "" + min.getDate();
  let year1 = min.getFullYear();
  if (month1.length < 2) month1 = "0" + month1;
  if (day1.length < 2) day1 = "0" + day1;
  dateControl.min = [year1, month1, day1].join("-");

}

const button = document.getElementById("datumswahl")
  button.onclick = () => {
    graph4();

}

function graph4() {

  google.charts.load('current', {
    packages: ["corechart", "line"]
  });
  google.charts.setOnLoadCallback(WerteAbDatum);
}

async function WerteAbDatum() {

  console.log("auswahl: ", document.getElementById('start').value)
  const datum=new Date(document.getElementById('start').value);
  const aktuell= new Date();
  const jahrUnterschied=365*(aktuell.getFullYear()-datum.getFullYear());
  const monatUnterschied=30*(aktuell.getMonth()-datum.getMonth());
  const tagUnterschied=aktuell.getDay()-datum.getDay();
  const taganzahl=jahrUnterschied+monatUnterschied+tagUnterschied;
  console.log("unterschied: ", taganzahl);

  const response = await fetch("/api/data/get/tage/" + taganzahl, {
    method: 'GET',
    headers: {
      'Conent-Type': 'application/json'

    }
  });
  const myJson = await response.json()
  console.log("wert von datum: ", myJson)

  let data = google.visualization.arrayToDataTable([
    ["Year", "Produktion", "Verbrauch"],
    [0, 0, 0],

  ]);

  let options = {
    title: "Zeitraum",
    hAxis: {
      title: "Time"
    },
    vAxis: {
      title: "Watt"
    }
  };

  let chart = new google.visualization.LineChart(
      document.getElementById("myChart4")
  );
  chart.draw(data, options);

  let index = 0;

  for(let wert of myJson){
    data.addRow([index, wert.inputVoltage * wert.inputAmpere, wert.batteryVoltage * wert.outputAmpere])
    chart.draw(data, options)
    index++;
  }

}
*/