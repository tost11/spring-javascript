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

  const node = document.getElementById("AP")
  node.innerText ="Aktuelle Produktion: " + myJson.inputVoltage * myJson.inputAmpere + "W"
  const node1 = document.getElementById("AV")
  node1.innerText ="Aktueller Verbrauch: " + myJson.batteryVoltage * myJson.outputAmpere + "W"
  const node2 = document.getElementById("BV")
  node2.innerText ="Batteriespannung: " + myJson.batteryVoltage + "V"



}

setInterval(latestData , 10000 );

window.getProduktion = async () =>{
  const response = await fetch("/api/data/get/latest", {
    method: 'GET',

    headers: {
      'Conent-Type': 'application/json'

    }
  });
  const myJson = await response.json()
  console.log("myJsom:", myJson.inputVoltage * myJson.inputAmpere)
  const p = myJson.inputVoltage * myJson.inputAmpere

  return p;
}

window.getBatteryVoltage = async () =>{
  const response = await fetch("/api/data/get/latest", {
    method: 'GET',
    headers: {
      'Conent-Type': 'application/json'

    }
  });
  const myJson = await response.json()
  console.log("myJsom:", myJson.batteryVoltage)
  const bv = myJson.batteryVoltage

  return bv;
}

window.getVerbrauch = async () =>{
  const response = await fetch("/api/data/get/latest", {
    method: 'GET',
    headers: {
      'Conent-Type': 'application/json'

    }
  });
  const myJson = await response.json()
  console.log("myJsom:", myJson.batteryVoltage * myJson.outputAmpere)
  const v = myJson.batteryVoltage * myJson.outputAmpere

  return v;
}


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
      title: "Aktuelle Solardaten",
      hAxis: {
        title: "Time"

      },
      vAxis: {
        title: "Watt",
        maxValue: 15,
        minValue: 10
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
    let counter =0;
    setInterval(async function () {
      // instead of this random, you can make an ajax call for the current cpu usage or what ever data you want to display
      const wert1 = await getProduktion();
      const wert2 = await getVerbrauch();
      counter++;
      if(counter===400){
        graph1();
      }
      id2++;
          data.addRow([index, wert1, wert2]);
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
  let counter=0;
  setInterval(async function () {
    // instead of this random, you can make an ajax call for the current cpu usage or what ever data you want to display
    const wert = await getBatteryVoltage();
    console.log("BV:", wert)
    counter++;
    if (counter === 400) {
      graph2();
    }
    id3++;
    data.addRow([index, wert]);
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