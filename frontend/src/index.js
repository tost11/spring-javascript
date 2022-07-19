import "./style.css";

let id=0;
let id2=0;

window.onload = function () {
  console.log("Hello World!")
  pageValues();
  graph1();
}

window.getProduktion=async()=> {


  const response=await fetch("/api/data/get/"+id2, {
    method: 'GET',

    headers: {
      'Conent-Type': 'application/json'

    }
  });

  const myJson = await response.json();
  console.log((myJson.datenlist[id2].inputVoltage) * (myJson.datenlist[id2].inputAmpere))
  return (myJson.datenlist[id2].inputVoltage) * (myJson.datenlist[id2].inputAmpere);
}

window.pageValues=async()=> {

  const response = await fetch("/api/data/get/" + id, {
    method: 'GET',

    headers: {
      'Conent-Type': 'application/json'

    }
  });
  id ++;
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
  function graph1() {
    google.charts.load('current', {
      packages: ["corechart", "line"]
    });
    google.charts.setOnLoadCallback(drawChart);
  }



  function drawChart() {

    let data = google.visualization.arrayToDataTable([
      ["Year", "Produktion"],
      [0, 0]
    ]);
    // create options object with titles, colors, etc.
    let options = {
      title: "Solardaten",
      hAxis: {
        title: "Time"
      },
      vAxis: {
        title: "Watt"
      }
    };
    // draw chart on load
    let chart = new google.visualization.LineChart(
        document.getElementById("myChart")
    );
    chart.draw(data, options);
    // interval for adding new data every 250ms
    let index = 0;
    setInterval(function () {
      // instead of this random, you can make an ajax call for the current cpu usage or what ever data you want to display
      let random = getProduktion();
      id2++;
          data.addRow([index, random]);
      chart.draw(data, options);
      index++;
    }, 1000);



  }