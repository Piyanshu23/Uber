# User Logout API

Logout the currently authenticated user.

## Logout User

### Request

```http
POST /api/users/logout
Authorization: Bearer {token}
```

### Response

```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

### Error Response

```json
{
  "success": false,
  "message": "Invalid or expired token"
}
```
