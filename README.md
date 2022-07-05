# SheforShe

## Overview

SheforShe hopes to build a global community of female entrepreneurs and innovators. It is a platform that provides knowledge and ecosystem support for aspiring female entrepreneurs to help them set up and scale up their businesses. 

**Connect with fellow entrepreneurs and founders** - creating a community of women entrepreneurs so that you have a strong support system \
**Access resources you would need when starting a business** - whether you are finding a fellow startup co-founder or an experienced mentor, look no further. \
**Put a spotlight on the stories of women entrepreneurs** - attend spotlight sharing sessions where females share their personal stories and journeys when starting a business 

## Features
### Authentication

Users are able to sign up using their email accounts and password, or use Google Sign-In which was implemented using Google OAuth authentication. Users are also able to update their personal details through the profile page.  

### Partners section 
Users would be able to browse, search and filter for other women partner profiles according to their industry tags. Women profiles from similar industry of choice would also appear in the recommended section at the bottom of each women profile. If user is interested in connecting with a particular potential partner, she would be able to request for a connection with the other party. 

### Live instant messaging 
Users are able to chat with a partner in real-time through the instant messaging feature, implemented with socket.io. 

### Events section
Users are able to participate and host community events such as seminars for other females to learn new industry relevant knowledge and network with other females. Women can also empower one another through meaningful spotlight sessions organized through the platform. Users would be able to search and filter events with a map visualization of the event venues through the Google Maps API. Users can also pay for seminar events organized through thr Stripe payments system. 

## Components
This repo contains the following components:

| Component              | Folder            | Description                                                                                               |
| ---------------------- | ----------------- | --------------------------------------------------------------------------------------------------------- |
| Front-end              | /app/client       | React front-end to display the webpage to users                                                           |
| Back-end               | /app              | ExpressJS back-end supported by SQLite database                                                           |
| Chat service           | /socket           | Chat service implemented using Socket.io to allow for bidirectional and low-latency communication.        |

## Running the application 
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Deployment of application 
This application is deployed using a Linode server.

### Node.js setup
Install Node.js with curl using the following commands. Note that at the time which the app was built the node version is 16.3.2 and npm version is 8.1.2.
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Check to see if node was installed
node --version
npm --version
```

### Get the files on the server
Go to an empty directory in the server and clone the application.
```bash
git clone https://github.com/yuenkm40/sheforshe.git
```

### App setup and running the app
Download dependencies, create built file and run the application on the server.
```bash
cd app

# App will be served on port 5000
npm run prod
```

### PM2 Setup
PM2 is a production process manager from Node.js. It allows us to keep Node apps running without having to have terminal open with npm start, etc like we do for development.

First install PM2 globally with NPM
```bash
sudo npm install -g pm2
```
Run with PM2
```bash
pm2 start app/server.js
```

### Firewall setup
Setup a firewall so that people can not directly access any port except ports for ssh, http and https.

```bash
sudo ufw enable
sudo ufw allow ssh (Port 22)
sudo ufw allow http (Port 80)
sudo ufw allow https (Port 443)
```

### Nginx Setup
Nginx, stylized as NGIИX, is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.

Install nginx on server.
```bash
sudo apt install nginx
```
Configure a proxy for our MERN app by changing config file.
```bash
sudo nano /etc/nginx/sites-available/default
```
Find location area in file and replace with
```bash
location / {
        proxy_pass http://localhost:5000;    # or which other port your app runs on
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
```

## Technology Stack

SheforShe is a MERN stack application built using React, Redux, Node.js, Express.js, MongoDB and will be hosted on the Google Cloud Platform. 


