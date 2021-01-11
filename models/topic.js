import fetch from 'node-fetch';

const model = {
    async getActive() {
        const response = await fetch(`http://${process.env.TWITTER_SERVICE_ADDRESS}/topic/`);
        const data = await response.json();
        
        return data;
    },

    async add(name) {
        const response = await fetch(`http://${process.env.TWITTER_SERVICE_ADDRESS}/topic/`, {
            method: 'POST',
            body: JSON.stringify({name: name}),
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        
        return data;
    },

    async delete(id) {
        const response = await fetch(`http://${process.env.TWITTER_SERVICE_ADDRESS}/topic/${id}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        
        return data;
    },
};

export default model;
