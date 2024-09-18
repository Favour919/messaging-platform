# User Management Endpoints

## Register a new user
**POST /api/users/register**
- Request Body: 
  ```json
  {
    "username": "string",
    "password": "string",
    "email": "string"
  }

  Response

  {
  "userId": "string",
  "username": "string",
  "email": "string"
}
