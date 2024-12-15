# User API Documentation

This document provides details about the User API endpoints, models, and methods to help frontend developers integrate seamlessly.

## Table of Contents

1. [Register User](#Register-user)
2. [Login User](#Login-User)
3. [Profile User](#Profile-User)
4. [Logout User](#Logout-User)

---

## Register User

### Endpoint

`POST /users/register`

### Description

This endpoint allows new users to register by providing their first name, last name, email, and password.

### Request Body

The request should be sent as a JSON object with the following structure:

| Field                | Type   | Required | Description                           |
| -------------------- | ------ | -------- | ------------------------------------- |
| `fullname`           | Object | Yes      | Contains `firstname` and `lastname`.  |
| `fullname.firstname` | String | Yes      | User's first name (min 3 characters). |
| `fullname.lastname`  | String | No       | User's last name (min 3 characters).  |
| `email`              | String | Yes      | A valid email address.                |
| `password`           | String | Yes      | Password with at least 6 characters.  |

### Example Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

### Example Response Body

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzU4ZmEwZDYyYjQyYWRhNWI4Zjg1ZGIiLCJpYXQiOjE3MzM4ODQ0Mjl9.65a8rXJv-j4U1jcEbXrx6RlFRyK8sl638VDd1MZQETM",
  "user": {
    "fullname": {
      "firstname": "test_firstname",
      "lastname": "test_lastname"
    },
    "email": "test@test.com",
    "password": "$2b$10$qKEK/4fx2iSn6U38/m4wWeImhw0vquhZqDN0uHkrQFjne29vcJyLC",
    "_id": "6758fa0d62b42ada5b8f85db",
    "__v": 0
  }
}
```

## Login User

### Endpoint

`POST /users/login`

### Description

This endpoint allows new users to login by providing their email and password.

### Request Body

The request should be sent as a JSON object with the following structure:

| Field      | Type   | Required | Description                          |
| ---------- | ------ | -------- | ------------------------------------ |
| `email`    | String | Yes      | A valid email address.               |
| `password` | String | Yes      | Password with at least 6 characters. |

### Example Request Body

```json
{
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

### Example Response Body

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzU4MzA0ZWYxYWJiNGQ5ZGIyZThjNDMiLCJpYXQiOjE3MzM4ODQwMTJ9.ehwfBVIO61KC_zwfofZGsy3vp0TGVhW4YKvR7WAJ38E",
  "user": {
    "fullname": {
      "firstname": "test_firstname",
      "lastname": "test_lastname"
    },
    "_id": "6758304ef1abb4d9db2e8c43",
    "email": "test@test.com",
    "password": "$2b$10$kNlbsRpMKgnSfi8rPEGHnOpOBm4oDzsMKiozMPwbIjjEPIHaMZ/Yu",
    "__v": 0
  }
}
```

## Profile User

### Endpoint

`POST /users/profile`

### Description

This endpoint allows existing user to view their profile.

### Authentication

Require a valid JWT Token in the Authorization header:

`Authorization : Bearer <token>`

### Example Response Body

```json
{
  "fullname": {
    "firstname": "test_firstname",
    "lastname": "test_lastname"
  },
  "_id": "675f21c5b16d8d3ade52952c",
  "email": "test@test.com",
  "__v": 0
}
```

## Logout User

### Endpoint

`POST /users/logout`

### Description

This endpoint allows existing user to logout.

### Authentication

Require a valid JWT Token in the Authorization header:

`Authorization : Bearer <token>`

### Example Response Body

```json
{
  "message": "Logged out successfully",
  "message": "Unauthorized"
}
```
