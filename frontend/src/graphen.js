import {fetchWithSeconds} from "./requests";
import {getWerte} from "./requests";



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

        const json = await getWerte();
        //console.log(json)
        const wert1=json.inputVoltage*json.inputAmpere
        const wert2=json.batteryVoltage*json.outputAmpere
        //console.log("p: ", wert1)
        counter++;
        if(counter===400){
            graph1();
        }

        data.addRow([index, wert1, wert2]);
        chart.draw(data, options);
        index++;
    }, 5000);



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
        const json = await getWerte();
        const wert=json.batteryVoltage;

        counter++;
        if (counter === 400) {
            graph2();
        }
        data.addRow([index, wert]);
        chart.draw(data, options);
        index++;
    }, 5000);
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
export {graph1, graph2, graph3, graph4}