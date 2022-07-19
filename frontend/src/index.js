import "./style.css";



window.onload = function () {
  console.log("Hello World!")
  pageValues();
  //graph1();
}

window.pageValues=async()=> {
  let id = 1;
  const response = await fetch("/api/data/get/" + id, {
    method: 'GET',

    headers: {
      'Conent-Type': 'application/json'

    }
  });

  const myJson = await response.json();
  console.log("Daten:", myJson);

  for (let i = 0; i < myJson.datenlist.length; i++) {

    const node = document.createElement("li")
    const node1 = document.createElement("li")
    const node2 = document.createElement("li")
    const node3 = document.createElement("li")

    const text = document.createTextNode((myJson.datenlist[i].inputVoltage) * (myJson.datenlist[i].inputAmpere))
    const text1 = document.createTextNode((myJson.datenlist[i].batteryVoltage) * (myJson.datenlist[i].outputAmpere))
    const text2 = document.createTextNode(myJson.datenlist[i].batteryVoltage)


    const schrift = document.createTextNode("Aktuelle Produktion: ")
    const schrift1 = document.createTextNode("Aktueller Verbrauch: ")
    const schrift2 = document.createTextNode("Batteriespannung: ")
    const text3 = document.createTextNode("Graph: ")

    node.appendChild(schrift);
    node1.appendChild(schrift1)
    node2.appendChild(schrift2)

    node.appendChild(text)
    node1.appendChild(text1)
    node2.appendChild(text2)
    node3.appendChild(text3)

    document.getElementById("werte").appendChild(node);
    document.getElementById("werte").appendChild(node1);
    document.getElementById("werte").appendChild(node2);
    document.getElementById("werte").appendChild(node3);

  }


}