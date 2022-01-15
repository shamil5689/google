
const getData = async (url) => {
    const result = await fetch(url, {
        method: "GET",
        "headers": {
            "x-user-agent": "desktop",
            "x-proxy-location": "US",
            "x-rapidapi-host": "google-search3.p.rapidapi.com",
            "x-rapidapi-key": "2adf3edd74msh2409729f9115d85p114e57jsn9098ebb2ed73"
    }});
    return await result.json();
}

export {getData}