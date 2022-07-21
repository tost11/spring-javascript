import "./style.css";
import "./graphen.js";
import {fetchLatest, fetchWh, fetchDate} from "./requests";
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


  const myJson = await fetchDate();

  const min = new Date(myJson.dateTime);

  let month1 = "" + (min.getMonth() + 1);
  let day1 = "" + min.getDate();
  let year1 = min.getFullYear();
  if (month1.length < 2) month1 = "0" + month1;
  if (day1.length < 2) day1 = "0" + day1;
  dateControl.min = [year1, month1, day1].join("-");

}


