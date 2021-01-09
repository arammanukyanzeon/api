// import express from 'express';
// import { addTwitterClient, getAllTwiterClients } from "../../priotix-twitter/src/twitter_client/model/twitter_client.model.js";
// import { addTopics, getAllTopics } from "../../priotix-twitter/src/topics/model/topics.js";

// const router = express.Router();

// // twitter
// router.post('/addtwitterclient', async (req, res) => {
//     await addTwitterClient(req.body);
//     res.send('client added')
// })

// router.get('/getalltwitterclients', async (req, res) => {
//     try {
//         const post = await getAllTwiterClients();

//         if (post) {
//             res.status(200).json(post)
//         } else {
//             res.status(404).json({ message: "Post not found" })
//         }
//     } catch (err) {
//         res.status(500).json({ message: "Error getting posts", error: err })
//     }
// })

// //topics
// router.post('/topics/add', async (req, res) => {
//     await addTopics(req.body);
//     res.send('client added')
// })

// router.get('/topics/getall', async (req, res) => {
//     try {
//         const post = await getAllTopics();

//         if (post) {
//             res.status(200).json(post)
//         } else {
//             res.status(404).json({ message: "Post not found" })
//         }
//     } catch (err) {
//         res.status(500).json({ message: "Error getting posts", error: err })
//     }
// })

// export default router;