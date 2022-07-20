import {fetchWithSeconds} from "./requests";


//
//--------------  Funktionen für 1. Graphen
//


function graph1() {
    google.charts.load('current', {
        packages: ["corechart", "line"]
    });
    google.charts.setOnLoadCallback(drawChart);
}



async function drawChart() {

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
    let counter =0;
    setInterval(async function () {
        // instead of this random, you can make an ajax call for the current cpu usage or what ever data you want to display
        const wert1 = await getProduktion();
        const wert2 = await getVerbrauch();
        counter++;
        if(counter===400){
            graph1();
        }
        data.addRow([index, wert1, wert2]);
        chart.draw(data, options);
        index++;
    }, 500);



}






//
//--------------  Funktionen für 2. Graphen
//



function graph2() {
    google.charts.load('current', {
        packages: ["corechart", "line"]
    });
    google.charts.setOnLoadCallback(batteryChart);
}

async function batteryChart() {

    let data = google.visualization.arrayToDataTable([
        ["Year", "Batteriespannung"],
        [0, 0],

    ]);

  //
  // ------- Options
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
    let counter=0;
    setInterval(async function () {
        const wert = await getBatteryVoltage();

        counter++;
        if (counter === 400) {
            graph2();
        }
        data.addRow([index, wert]);
        chart.draw(data, options);
        index++;
    }, 500);
}








//
//--------------  Funktionen für 3. Graphen
//

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

    const myJson = await fetchWithSeconds(document.getElementById('zeitraum').selectedOptions[0].value)


    let data = google.visualization.arrayToDataTable([
        ["Year", "Produktion", "Verbrauch"],
        [0, 0, 0],

    ]);

    //
    // ------- Options
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

    // interval for adding new data
    let index = 0;

    for(let wert of myJson){
        data.addRow([index, wert.inputVoltage * wert.inputAmpere, wert.batteryVoltage * wert.outputAmpere])
        chart.draw(data, options)
        index++;
    }
}


export {graph1, graph2, graph3}