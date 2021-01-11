import fetch from 'node-fetch';

const address = process.env.SUBJECT_SERVICE_ADDRESS;

const model = {
    async get(topicId) {
        const response = await fetch(`http://${address}/subject/${topicId}`);
        const data = await response.json();

        return data;
    },
};

export default model;
