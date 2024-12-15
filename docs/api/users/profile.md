# User Profile API

Get or update the authenticated user's profile information.

## Get Profile

### Request

```http
GET /api/users/profile
Authorization: Bearer {token}
```

### Response

```json
{
  "success": true,
  "data": {
    "id": "string",
    "name": "string",
    "email": "string",
    "phone": "string",
    "role": "user|driver|admin",
    "createdAt": "timestamp"
  }
}
```

## Update Profile

### Request

```http
PUT /api/users/profile
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "string",
  "phone": "string"
}
```

### Response

```json
{
  "success": true,
  "message": "Profile updated successfully",
  "data": {
    "id": "string",
    "name": "string",
    "email": "string",
    "phone": "string",
    "role": "user|driver|admin",
    "updatedAt": "timestamp"
  }
}
```
