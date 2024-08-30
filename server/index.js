const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const taskRoutes = require("./routes/taskRoutes"); // Import the routes

const mongoURI =
  "mongodb+srv://sudoprogrammer:qPbpjqMo8vKuTZ7d@task-manager-cluster.5ekub.mongodb.net/?retryWrites=true&w=majority&appName=Task-Manager-Cluster";

const app = express();
app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:3000", // Replace with your frontend's origin
//     methods: "GET,POST,PUT,DELETE", // Specify allowed HTTP methods
//     allowedHeaders: "Content-Type,Authorization", // Specify allowed headers
//   })
// );

// Custom CORS middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.json());

// mongoose
//   .connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB Atlas");
//   })
//   .catch((err) => {
//     console.error("Failed to connect to MongoDB", err);
//   });

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(mongoURI, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//     serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
//     socketTimeoutMS: 45000, // Increase socket timeout to 45 seconds
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server (optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// Use task routes

app.listen(5001, () => {
  console.log("Server running on port 5001");
});

app.use("/api", taskRoutes);

// Example route
app.get("/", (req, res) => {
  res.send("Welcome to the Task Manager API").status(200);
});
