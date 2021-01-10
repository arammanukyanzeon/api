import fetch from 'node-fetch';

const model = {
    async get(topicId) {
        const response = await fetch('http://localhost:8081/subject/' + topicId);
        const data = await response.json();

        return data;
    },
};

export default model;
