# User API Documentation

This document provides details about the User API endpoints, models, and methods to help frontend developers integrate seamlessly.

## Table of Contents

1. [Register User](#register-user)
2. [User Model](#user-model)
3. [Error Handling](#error-handling)

---

## Register User

### Endpoint

`POST /api/register`

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
