import "./style.css";
import "./graphen.js";
import {fetchLatest} from "./requests";
import {graph1, graph2} from "./graphen";



//
//------- Aufruf der ersten zwei Graphen
//


window.onload = function () {
  console.log("Hello World!")
  latestData()
  //graph1();
  //pageValues();
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

setInterval(latestData , 10000 );






//
//------------ Funktionen für einzelde Werte
//


window.getProduktion = async () =>{

  try {
    const myJson = await fetchLatest()
    if (myJson.isEmpty())
      return myJson.inputVoltage * myJson.inputAmpere
  }catch{
    console.log("Keine Daten vorhanden!")
  }
}

window.getBatteryVoltage = async () =>{
  try {
  const myJson = await fetchLatest()
  if (myJson.isEmpty())
    return 0;
  return myJson.batteryVoltage
  }catch{
    console.log("Keine Daten vorhanden!")
  }
}

window.getVerbrauch = async () =>{
  try {
  const myJson = await fetchLatest()
  if(myJson.isEmpty())
    return 0;
  return myJson.batteryVoltage * myJson.outputAmpere
  }catch{
    console.log("Keine Daten vorhanden!")
  }
}








