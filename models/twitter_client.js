import fetch from 'node-fetch';

const model = {
    async get() {
        const response = await fetch(`http://${process.env.TWITTER_SERVICE_ADDRESS.env.TWITTER_SERVICE_ADDRESSess}/twitter-client/`);
        const data = await response.json();
        
        return data;
    },
    
    async add(data) {
        const response = await fetch(`http://${process.env.TWITTER_SERVICE_ADDRESS}/twitter-client/`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });
        return await response.json();
    },
};

export default model;
