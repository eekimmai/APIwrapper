//Below is fetch function calling URL

const api_url = 'https://cat-fact.herokuapp.com/facts';

async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();
    
    console.log(data);
}

getData();