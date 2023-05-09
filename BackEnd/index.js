const express = require('express');
const app = express();

app.use(express.json());


//Fetch Data Route
app.get(`/api/users`, async function (req, res) {
	const url = 'https://jsonplaceholder.typicode.com/users';

	try {
		let response = await fetch(url);
		response = await response.json();
		res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
	}
});


//Testing Routes
app.get("/api/testing",(req, res) => {
    res.send("Testing Completed.")
})


//Default Route
app.get('/', (req,res) => {
    res.send(`<h1>Homepage</h1>`);
})

//Server Started
app.listen(3000, (req,res) => {
    console.log("Serever Started At 3000 Port");
})


// app.get("/users", (req, res) => {
//     const result = fetch(`https://jsonplaceholder.typicode.com/users`);
//     const ans = result.json();
//     console.log(ans);
// })












