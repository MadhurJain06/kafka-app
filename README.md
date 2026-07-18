# Kafka NodeJS Example

## What is Apache Kafka?

It is an open-source distributed event streaming platform. It helps in building real-time data pipelines and streaming applications. It is horizontally scalable, fault-tolerant, wicked fast, and runs in production in thousands of companies. Known for its high throughput, low latency, and durability, Kafka is widely used for building real-time data pipelines and streaming applications.

## Why not Database?

Since Databases are not designed for streaming data, they are not suitable for real-time data processing. Kafka is designed for high-throughput, low-latency, and fault-tolerant data streaming. It can handle large volumes of data and can process it in real-time, making it ideal for building real-time data pipelines and streaming applications.

## How to Install and Run the Example

### Install NodeJS and NPM

`npm i kafkajs` for installing KafkaJS library.

## How to Run

### Run the producer.js file to send messages to the Kafka topic.

Command:
`node producer.js`

Open another terminal to run consumer file

### Run the consumer.js file with the group name as an argument.

Command:
`node consumer.js <group name>`

Go back to the terminal where you ran the producer.js file to see the messages being sent to the Kafka topic. You should also see the messages being consumed in the terminal where you ran the consumer.js file.
Enter the message in syntax : <username> <location>

We obtain message on consumer terminal in the following syntax :
[group name] [topic name]: [Partition number] : [message in json format]

create more consumer files (at max 2, since our partitions are numbered as 2), then Partition 0 will be consumed by one consumer and Partition 1 will be consumed by the other consumer.

Enter another terminal to run another consumer file with the same group name as an argument.
as we enter another consumer with same group name, it will lead to self balancing and the messages will be consumed by both consumers in a round robin fashion.
