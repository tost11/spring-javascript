import "./style.css";

let id=0;
let id2=0;
let id3=0;
let id4=0;
let zeitraum=0;

window.onload = function () {
  console.log("Hello World!")
    latestData()
  //graph1();
  //pageValues();
  graph1();
  graph2();
}

window.latestData = async () => {
    const response = await fetch("/api/data/get/latest", {
        method: 'GET',
        headers: {
            'Conent-Type': 'application/json'

        }
    });
    const myJson = await response.json()
    console.log("Daten:", myJson)

    const node = document.getElementById("AP").innerHTML ="Aktuelle Produktion: " + myJson.inputVoltage * myJson.inputAmpere + "W"
    const node1 = document.getElementById("AV").innerHTML ="Aktueller Verbrauch: " + myJson.batteryVoltage * myJson.outputAmpere + "W"
    const node2 = document.getElementById("BV").innerHTML ="Batteriespannung: " + myJson.batteryVoltage + "V"


    const lu = document.getElementById("werte")
    lu.appendChild(node)
    lu.appendChild(node1)
    lu.appendChild(node2)

}

setInterval(latestData , 10000 );






 /*
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
*/




  function graph1() {
    google.charts.load('current', {
      packages: ["corechart", "line"]
    });
    google.charts.setOnLoadCallback(drawChart);
  }



  function drawChart() {

    let data = google.visualization.arrayToDataTable([
      ["Year", "Produktion", "Verbrauch"],
      [0, 0, 0],

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
    id2=0;
    setInterval(function () {
      // instead of this random, you can make an ajax call for the current cpu usage or what ever data you want to display
      let random = Math.random() * 30 + 20;
      let random2=Math.random()*10+5;
      id2++;
          data.addRow([index, random, random2]);
      chart.draw(data, options);
      index++;
    }, 500);



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
      title: "Volt"
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
  setInterval(function () {
    // instead of this random, you can make an ajax call for the current cpu usage or what ever data you want to display
    let random = Math.random() * 30 + 20;

    id3++;
    data.addRow([index, random]);
    chart.draw(data, options);
    index++;
  }, 500);
}

const btn = document.getElementById("wahl")
btn.onclick=()=>{
  var getValue = document.getElementById('zeitraum').selectedOptions[0].value;
  console.log(getValue);
  graph3();
}

function graph3() {

  google.charts.load('current', {
    packages: ["corechart", "line"]
  });
  google.charts.setOnLoadCallback(oldValues);
}

function oldValues() {

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
  setInterval(function () {
    // instead of this random, you can make an ajax call for the current cpu usage or what ever data you want to display
    let random = Math.random() * 30 + 20;
    let random2 = Math.random() * 10 + 5;
    id4++;
    data.addRow([index, random, random2]);
    chart.draw(data, options);
    index++;
  }, 500);
}
