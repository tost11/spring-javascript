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
   const myJson = await fetchLatest();

  const node = document.getElementById("AP")
  node.innerText ="Aktuelle Produktion: " + myJson.inputVoltage * myJson.inputAmpere + "W"
  const node1 = document.getElementById("AV")
  node1.innerText ="Aktueller Verbrauch: " + myJson.batteryVoltage * myJson.outputAmpere + "W"
  const node2 = document.getElementById("BV")
  node2.innerText ="Batteriespannung: " + myJson.batteryVoltage + "V"

}

setInterval(latestData , 10000 );






//
//------------ Funktionen für einzelde Werte
//


window.getProduktion = async () =>{

  const myJson = await fetchLatest()
  console.log("myJson:", myJson.inputVoltage * myJson.inputAmpere)
  return myJson.inputVoltage * myJson.inputAmpere
}

window.getBatteryVoltage = async () =>{

  const myJson = await fetchLatest()
  console.log("myJsom:", myJson.batteryVoltage)
  return myJson.batteryVoltage

}

window.getVerbrauch = async () =>{

  const myJson = await fetchLatest()
  console.log("myJsom:", myJson.batteryVoltage * myJson.outputAmpere)
  return myJson.batteryVoltage * myJson.outputAmpere

}








