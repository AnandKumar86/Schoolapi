# School API

A simple API to manage school data, built with Node.js, Express, and MySQL.

## Features
- Add a new school (`/addSchool` - POST)
- List schools sorted by proximity to a user location (`/listSchools` - GET)

## Setup
1. Clone the repository:  
   https://github.com/AnandKumar86/School_managementAPI.git
   
2. Navigate to the project directory
    cd schoolapi

3. Install dependencies:
    npm install
4. Set up the MySQL database:
 sql query:
 CREATE DATABASE SchoolsDB;

 USE SchoolsDB;

 CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
  );

5.Start the server:
   npm start

6.Endpoints
   Add School
   POST /addSchool
   sample data:
     {
  "name": "School Name",
  "address": "School Address",
  "latitude": 12.34,
  "longitude": 56.78
     }

   List Schools
     enter the coordinates of the the school to retrive the list;
     GET /listSchools?latitude=<latitude>&longitude=<longitude>