require('dotenv').config();
const { Kafka } = require("kafkajs");

let host = process.env.IP;
exports.kafka = new Kafka({
  brokers: ["host:9092"],
  clientId: "my-app",
});
