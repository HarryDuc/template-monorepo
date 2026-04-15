# Gateway Service

API Gateway service that routes requests to appropriate microservices.

## Features

- Routes authentication requests to auth service
- Centralized API endpoint management
- Request/response transformation
- Error

## API Endpoints

All endpoints are prefixed with `/api`

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/user?email=...` - Get user by email

## Environment Variables

- `PORT` - Gateway port (default: 4000)
- `AUTH_SERVICE_URL` - Auth service URL (default: http://localhost:3001)

## Running the service

```bash
pnpm install
pnpm start:dev
```

The service will run on http://localhost:4000

## Architecture

The gateway acts as a reverse proxy, forwarding requests to the appropriate microservices:

- Authentication requests → Auth Service (port 3001)
- User requests → User Service (future)
- Course requests → Course Service (future)

## Flow

1. Client makes request to gateway (`http://localhost:4000/api/auth/login`)
2. Gateway receives request and forwards to auth service (`http://localhost:3001/auth/login`)
3. Auth service processes request and returns response
4. Gateway returns response to client
