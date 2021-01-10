import fetch from 'node-fetch';

const model = {
    async getActive() {
        const response = await fetch('http://localhost:8080/topic/');
        const data = await response.json();
        
        return data;
    },

    async add(name) {
        const response = await fetch('http://localhost:8080/topic/', {
            method: 'POST',
            body: JSON.stringify({name: name}),
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        
        return data;
    },

    async delete(id) {
        const response = await fetch('http://localhost:8080/topic/' + id, {
            method: 'DELETE',
        });
        const data = await response.json();
        
        return data;
    },
};

export default model;
