const baseUrl = "https://findfalcone.herokuapp.com/";

export async function fetchGet(url) {
   let response = await fetch(baseUrl + url);
   let data = await response.json();
   return data;
}

export async function fetchPost(url, requestData = {}){
    let response  = await fetch(baseUrl + url, 
    { 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method : 'POST',
        body: JSON.stringify(requestData)
    });
    let data = await response.json();
    return data;
}