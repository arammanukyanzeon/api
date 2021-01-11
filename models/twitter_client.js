import fetch from 'node-fetch';

const address = process.env.TWITTER_SERVICE_ADDRESS;

const model = {
    async get() {
        const response = await fetch(`http://${address}/twitter-client/`);
        const data = await response.json();
        
        return data;
    },
    
    async add(data) {
        const response = await fetch(`http://${address}/twitter-client/`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });
        return await response.json();
    },
};

export default model;
