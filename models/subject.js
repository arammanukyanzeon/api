import fetch from 'node-fetch';

const model = {
    async get(topicId) {
        const response = await fetch(`http://${process.env.SUBJECT_SERVICE_ADDRESS}/subject/${topicId}`);
        const data = await response.json();

        return data;
    },
};

export default model;
