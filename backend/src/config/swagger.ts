// src/config/swagger.ts

import { Options } from 'swagger-jsdoc'

const swaggerOptions: Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Habit Tracker API',
            version: '1.0.0',
            description: 'API documentation for the Habit Tracker application',
        },
        servers: [
            {
                url: 'http://localhost:5000/api',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
            schemas: {
                Habit: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            example: 1,
                        },
                        title: {
                            type: 'string',
                            example: 'Exercise',
                        },
                        description: {
                            type: 'string',
                            example: 'Go for a run every morning',
                        },
                        userId: {
                            type: 'integer',
                            example: 1,
                        },
                        createdAt: {
                            type: 'string',
                            format: 'date-time',
                            example: '2023-10-05T14:48:00.000Z',
                        },
                        updatedAt: {
                            type: 'string',
                            format: 'date-time',
                            example: '2023-10-05T14:48:00.000Z',
                        },
                    },
                    required: [
                        'id',
                        'title',
                        'userId',
                        'createdAt',
                        'updatedAt',
                    ],
                },
                User: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            example: 1,
                        },
                        email: {
                            type: 'string',
                            format: 'email',
                            example: 'user@example.com',
                        },
                        createdAt: {
                            type: 'string',
                            format: 'date-time',
                            example: '2023-10-05T14:48:00.000Z',
                        },
                    },
                    required: ['id', 'email', 'createdAt'],
                },
                // Add the Health schema if needed (in this case, it's simple and may not require a schema)
                HealthResponse: {
                    type: 'object',
                    properties: {
                        status: {
                            type: 'string',
                            example: 'OK',
                        },
                        timestamp: {
                            type: 'string',
                            format: 'date-time',
                            example: '2023-10-05T14:48:00.000Z',
                        },
                    },
                    required: ['status', 'timestamp'],
                },
            },
        },
        tags: [
            {
                name: 'Auth',
                description: 'Authentication endpoints',
            },
            {
                name: 'Habits',
                description: 'Habit management endpoints',
            },
            {
                name: 'Health',
                description: 'API health check endpoint',
            },
        ],
    },
    apis: ['./src/routes/*.ts', './src/controllers/*.ts'],
}

export default swaggerOptions
