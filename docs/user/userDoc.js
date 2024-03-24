const User = {
    "/login": {
        post: {
            summary: "Login User",
            description: "This endpoint is used for admin login and get a token that will be used for authentication",
            tags: ["Auth"],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                email: { type: "string" },
                                password: { type: "string" },
                            },
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: "Successful operation",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    success: { type: "boolean", default: true },
                                    data: {
                                        type: "object",
                                        properties: {
                                            token: { type: "string" }
                                        }
                                    },
                                },
                            },
                        },
                    },
                },
            },
        }
    },

    "/forgot-password": {
        post: {
            summarry: "Forgot Password",
            description: "This endpoint can be used by admins if they forget their password by entering the email address registered in the database. After entering the appropriate email, a verification code will be sent for the next step.",
            tags: ['Auth'],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            type: 'object',
                            properties: {
                                email: { type: "string" }
                            }
                        }
                    }
                }
            },
            responses: {
                200: {
                    description: "Successful operation",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {type: "string"}
                                },
                            },
                        },
                    },
                },
            },
        }
    },
    
    "/confirm-password": {
        post: {
            summarry: "Forgot Password",
            description: "This endpoint is intended to confirm a password change by filling in the requirements as listed below. A verification code can be found in gmail after success hit endpoint forgot-password ",
            tags: ['Auth'],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            type: 'object',
                            properties: {
                                new_password: { type: "string" },
                                confirm_password: {type: "string"},
                                verificationCode: {type: "string"}
                            }
                        }
                    }
                }
            },
            responses: {
                200: {
                    description: "Successful operation",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {type: "string"}
                                },
                            },
                        },
                    },
                },
            },
        }
    }
}

module.exports = User;