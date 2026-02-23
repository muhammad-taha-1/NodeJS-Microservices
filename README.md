🚀 Node.js Microservices Architecture (Event-Driven)

This project demonstrates a Microservices Architecture built using Node.js, MongoDB, RabbitMQ, and Docker.

The system consists of three independent services:

👤 User Service

📌 Task Service

🔔 Notification Service

All services are containerized using Docker and communicate asynchronously using RabbitMQ.

🏗️ Architecture Overview

User Service

Create User

Get User

Task Service

Create Task

Get Task

Publishes event when a task is created

Notification Service

Consumes task creation event

Processes notification asynchronously

MongoDB

Separate database connection for each service

RabbitMQ

Handles event-based communication between services

🧠 How It Works (Event Flow)

User creates a task via Task Service.

Task Service saves task in MongoDB.

Task Service publishes an event to RabbitMQ.

Notification Service consumes the event.

Notification Service processes notification logic.

This ensures:

Loose coupling

Scalability

Asynchronous communication

Better system design

🐳 Dockerized Setup

All services are containerized using Docker and orchestrated using Docker Compose.

docker-compose.yml
services:
  mongo:
    image: mongodb/mongodb-community-server:latest
    container_name: mongo
    ports:
      - "27017:27017"
    volumes:
      - "mongo_data:/data/db"

  rabbitmq:
    image: rabbitmq:3-management
    container_name: rabbitmq
    ports:
      - "5672:5672"
      - "15672:15672"

  user-service:
    build: ./user-service
    container_name: user-service
    ports:
      - "3001:3001"
    depends_on:
      - mongo

  task-service:
    build: ./task-service
    container_name: task-service
    ports:
      - "3002:3002"
    depends_on:
      - mongo
      - rabbitmq

  notification-service:
    build: ./notification-service
    container_name: notification-service
    ports:
      - "3003:3003"
    depends_on:
      - mongo
      - rabbitmq

volumes:
  mongo_data:
⚙️ Tech Stack

Node.js

Express.js

MongoDB

RabbitMQ

Docker

Docker Compose

▶️ How to Run the Project
1️⃣ Clone the repository
git clone <your-repo-url>
cd <repo-name>
2️⃣ Run Docker Compose
docker-compose up --build
3️⃣ Services will be available at:

User Service → http://localhost:3001

Task Service → http://localhost:3002

Notification Service → http://localhost:3003

RabbitMQ Dashboard → http://localhost:15672

Username: guest

Password: guest

📚 Learning Goals of This Project

✔ Understanding Microservices Architecture
✔ Event-Driven Communication
✔ Message Queues (RabbitMQ)
✔ Dockerizing Services
✔ Container Orchestration with Docker Compose

💡 Future Improvements

Add API Gateway

Add Authentication (JWT)

Add Logging & Monitoring

Implement Retry Mechanism

Add Centralized Config Service

Add CI/CD pipeline

👨‍💻 Author

Muhammad Taha
Full Stack Developer (Node.js, React, Angular)
