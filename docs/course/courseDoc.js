const course = {
    "/course/add-course": {
        post: {
            summary: "Add Course",
            description: "This endpoint is used for adding a course by an admin. To do so, the system requires a token obtained from the login process to verify whether the user is indeed an admin. The token should be placed in the ‘Bearer’ header for the system to validate it. <br>Please note that fields such as ‘discount’, ‘totalPrice’, ‘about’, ‘description’, ‘expired’, ‘grade’, and ‘tag’ can be nullable. Additionally, for the ‘totalPrice’ field, the admin can either input a value or omit it, as the system will handle it automatically. Remember not to send an empty string.",
            tags: ["Course"],
            parameters: [
                {
                    name: "image",
                    in: "formData",
                    description: "Image file to upload",
                    required: true,
                    schema: {
                        type: "string",
                        format: "binary",
                        contentMediaType: "image/*"
                    }
                }
            ],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                name: { type: "string" },
                                price: { type: "integer" },
                                discount: { type: "integer" },
                                totalPrice: { type: "integer" },
                                about: { type: "string" },
                                description: { type: "string" },
                                expired: { type: "string", format: "date-time" },
                                grade: { type: "string", enum: ["sma", "smp", "sd"] },
                                tag: { type: "string", nullable: true }
                            },
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: "Successful operation",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {type: "string"},
                                },
                            },
                        },
                    },
                },
            },
        }
    },

    "/course/search?name={value}": {
        post: {
            summary: "Get Course",
            description: "This endpoint is used for get course specifically. Every users can use this endpoint",
            tags: ["Course"],
            responses: {
                200: {
                    description: "Successful operation",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    data: {
                                        type: "object",
                                        properties: {
                                            id: { type: "integer" },
                                            uuid: { type: "string" },
                                            name: { type: "string" },
                                            picture: { type: "string" },
                                            price: { type: "integer" },
                                            discount: { type: "integer" },
                                            totalPrice: { type: "integer" },
                                            about: { type: "string" },
                                            description: { type: "string" },
                                            expired: { type: "string", format: "date-time" },
                                            grade: { type: "string", enum: ["sma", "smp", "sd"] },
                                            tag: { type: "string", nullable: true },
                                            createdAt: { type: "string", format: "date-time" },
                                            updatedAt: { type: "string", format: "date-time" },
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

    "/course/pagination?page={value}&limit={value}": {
        post: {
            summary: "Get Course",
            description: "This endpoint is used to retrieve courses with specific limits. Any user can utilize this endpoint. Please input a value with the data type integer, otherwise an error will occur.",
            tags: ["Course"],
            responses: {
                200: {
                    description: "Successful operation",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    data: {
                                        type: "object",
                                        properties: {
                                            id: { type: "integer" },
                                            uuid: { type: "string" },
                                            name: { type: "string" },
                                            picture: { type: "string" },
                                            price: { type: "integer" },
                                            discount: { type: "integer" },
                                            totalPrice: { type: "integer" },
                                            about: { type: "string" },
                                            description: { type: "string" },
                                            expired: { type: "string", format: "date-time" },
                                            grade: { type: "string", enum: ["sma", "smp", "sd"] },
                                            tag: { type: "string", nullable: true },
                                            createdAt: { type: "string", format: "date-time" },
                                            updatedAt: { type: "string", format: "date-time" },
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

    "/course/": {
        get: {
            summary: "Get Course",
            description: "This endpoint is used for get all course. Every users can use this endpoint",
            tags: ["Course"],
            responses: {
                200: {
                    description: "Successful operation",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    data: {
                                        type: "object",
                                        properties: {
                                            id: { type: "integer" },
                                            uuid: { type: "string" },
                                            name: { type: "string" },
                                            picture: { type: "string" },
                                            price: { type: "integer" },
                                            discount: { type: "integer" },
                                            totalPrice: { type: "integer" },
                                            about: { type: "string" },
                                            description: { type: "string" },
                                            expired: { type: "string", format: "date-time" },
                                            grade: { type: "string", enum: ["sma", "smp", "sd"] },
                                            tag: { type: "string", nullable: true },
                                            createdAt: { type: "string", format: "date-time" },
                                            updatedAt: { type: "string", format: "date-time" },
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

    "/course/{uuid}": {
        get: {
            summary: "Get Course",
            description: "This endpoint is used for get course specifically. Every users can use this endpoint",
            tags: ["Course"],
            responses: {
                200: {
                    description: "Successful operation",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    data: {
                                        type: "object",
                                        properties: {
                                            id: { type: "integer" },
                                            uuid: { type: "string" },
                                            name: { type: "string" },
                                            picture: { type: "string" },
                                            price: { type: "integer" },
                                            discount: { type: "integer" },
                                            totalPrice: { type: "integer" },
                                            about: { type: "string" },
                                            description: { type: "string" },
                                            expired: { type: "string", format: "date-time" },
                                            grade: { type: "string", enum: ["sma", "smp", "sd"] },
                                            tag: { type: "string", nullable: true },
                                            createdAt: { type: "string", format: "date-time" },
                                            updatedAt: { type: "string", format: "date-time" },
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

    "/course/update-course/{uuid}": {
        put: {
            summary: "Update Course",
            description: "This endpoint is used for update a course by an admin. The requirements are same with add-course",
            tags: ["Course"],
            parameters: [
                {
                    name: "image",
                    in: "formData",
                    description: "Image file to upload",
                    required: true,
                    schema: {
                        type: "string",
                        format: "binary",
                        contentMediaType: "image/*"
                    }
                }
            ],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                name: { type: "string" },
                                price: { type: "integer" },
                                discount: { type: "integer" },
                                totalPrice: { type: "integer" },
                                about: { type: "string" },
                                description: { type: "string" },
                                expired: { type: "string", format: "date-time" },
                                grade: { type: "string", enum: ["sma", "smp", "sd"] },
                                tag: { type: "string", nullable: true }
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
                                    message: {type: "string"},
                                },
                            },
                        },
                    },
                },
            },
        }
    },
    
    "/course/delete-course/{uuid}": {
        delete: {
            summary: "Delete Course",
            description: "This endpoint is used for Delete a course by an admin. The requirements are same with add-course",
            tags: ["Course"],
            responses: {
                200: {
                    description: "Successful operation",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {type: "string"},
                                },
                            },
                        },
                    },
                },
            },
        }
    },
    
}


module.exports = course;