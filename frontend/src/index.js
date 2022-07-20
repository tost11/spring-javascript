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
  console.log("Daten:", myJson)

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

  /*
  setInterval(function () {
    // instead of this random, you can make an ajax call for the current cpu usage or what ever data you want to display
    let random = Math.random() * 30 + 20;
    let random2 = Math.random() * 10 + 5;
    id4++;
    data.addRow([index, random, random2]);
    chart.draw(data, options);
    index++;
  }, 1); */
}
