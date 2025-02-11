class DataFetcher {
    async fetchData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
            }
        
            const json = await response.json();
            return json;
        } catch (error) {
            console.error(`Fetch error: ${error.message}`);
            throw error; // ✅ Re-throw to allow further error handling in the chain
          }
    }

    processData(data) {
        // Example: Format data by mapping titles
        return data.map(item => `Title: ${item.title}`);
    }
}

const fetcher = new DataFetcher();
fetcher.fetchData('https://jsonplaceholder.typicode.com/posts')
       .then(data => fetcher.processData(data))
       .then(result => console.log(result))
       .catch(error => console.error(error));