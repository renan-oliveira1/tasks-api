# Task Api

This is the documentation for the Tasks Api. The Api is a RESful API that provides access to a database of users that can control your owns tasks and boards that contains tasks.

## About the application

The application was developed with Yarn, TypeScript, SQLite, Express, TypeORM, and a flexible architecture based on SOLID principles. With this software, you can:

 - Register a user;
 - Log in to the user account;
 - Register, edit, complete, delete, and visualize the user's tasks;
 - Register and visualize the boards that the user is included in;
 - Register, edit, complete, delete, and visualize the tasks that the boards contain.

## Base URL

If you user de codes npm install o yarn install to use locally the api
 - http://localhost:3000/user

# API Endpoints

## Register User

Register a user to the database and receive a token.

<b>URL:</b> baseUrl + /user/register </br>
<b>METHOD:</b> POST </br>
<b>BODY REQUEST:</b>
```json
{
  "username": "NameUser",
  "email": "nameuser@example.com",
  "password": "123"
}
```
<b>BODY SUCCES RESPONSE:</b>
```json
{
	"user": {
		"username": "NameUser",
		"email": "nameuser@example.com",
		"id": "b9ce9b39-0bf4-42dc-bd7d-0b6eeb3d88ec"
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI5Y2U5YjM5LTBiZjQtNDJkYy1iZDdkLTBiNmVlYjNkODhlYyIsImlhdCI6MTY3ODgxOTYyMCwiZXhwIjoxNjc4OTA2MDIwfQ.9ebIP1x0c1e7bKz1ajPxWD7vVNC9QlMKvCpSTOUOMjw"
}
```

## Login User

Login(receive a token).

<b>URL:</b> baseUrl + /user/login </br>
<b>METHOD:</b> POST </br>
<b>BODY REQUEST:</b>
```json
{
  "email": "nameuser@example.com",
  "password": "123"
}
```
<b>BODY SUCCES RESPONSE:</b>
```json
{
	"user": {
		"username": "NameUser",
		"email": "nameuser@example.com",
		"id": "b9ce9b39-0bf4-42dc-bd7d-0b6eeb3d88ec"
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI5Y2U5YjM5LTBiZjQtNDJkYy1iZDdkLTBiNmVlYjNkODhlYyIsImlhdCI6MTY3ODgxOTYyMCwiZXhwIjoxNjc4OTA2MDIwfQ.9ebIP1x0c1e7bKz1ajPxWD7vVNC9QlMKvCpSTOUOMjw"
}
```

## Create Task

Create a task.

<b>URL:</b> baseUrl + /tasks </br>
<b>METHOD:</b> POST </br>
<b>AUTHORIZATION BEARER:</b> Yes(token)  </br>
<b>BODY REQUEST:</b>
```json
{
	"name": "Task Name Create",
	"description": "Description of a appointment",
	"date": "2023-05-05 16:09",
	"complete": false
}
```
<b>BODY SUCCES RESPONSE:</b>
```json
{
"id": "be985c02-6a91-428e-80bb-f8b389e927f2",
	"name": "Task Name Create",
	"description": "Description of a appointment",
	"date": "2023-05-05 16:09",
	"complete": false,
	"user": {
		"id": "22305ae6-dcdf-4628-8b19-956b9cee5fcd",
		"username": "Renan Oliveira",
		"email": "renan@gmail.com",
		"password": "$2b$10$..bsCUFTnOR2o.GrOJpgM.OCkuH2rACGUfW.mfOscznGSpca6dgd2"
	},
}
```
