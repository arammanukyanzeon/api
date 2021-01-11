import fetch from 'node-fetch';

const address = process.env.TWITTER_SERVICE_ADDRESS;

const model = {
    async getActive() {
        const response = await fetch(`http://${address}/topic/`);
        const data = await response.json();
        
        return data;
    },

    async add(name) {
        const response = await fetch(`http://${address}/topic/`, {
            method: 'POST',
            body: JSON.stringify({name: name}),
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        
        return data;
    },

    async delete(id) {
        const response = await fetch(`http://${address}/topic/${id}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        
        return data;
    },
};

export default model;
