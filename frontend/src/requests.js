

async function fetchLatest(){
    const response = await fetch("/api/data/get/latest", {
        method: 'GET',
        headers: {
            'Conent-Type': 'application/json'

        }
    });
    return await response.json();
}

async  function fetchWithSeconds(seconds){
    const response = await fetch("/api/data/get/" + seconds, {
        method: 'GET',
        headers: {
            'Conent-Type': 'application/json'

        }
    });
    return await response.json()
}


export {fetchLatest, fetchWithSeconds}

