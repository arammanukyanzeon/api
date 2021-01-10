import fetch from 'node-fetch';

const model = {
    async get() {
        const response = await fetch('http://localhost:8080/twitter-client/');
        const data = await response.json();
        
        return data;
    },
    
    async add(data) {
        const response = await fetch('http://localhost:8080/twitter-client/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });
        return await response.json();
    },
};

export default model;
