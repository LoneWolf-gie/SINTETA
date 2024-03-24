const bulletin = {
    "/bulletin/add-bulletin": {
        post: {
            summary: "Add Bulletin",
            description: "This endpoint is used for adding a bulletin by an admin. To do so, the system requires a token obtained from the login process to verify whether the user is indeed an admin. Please put token in bearer authentication",
            tags: ["Bulletin"],
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
                                description: { type: "string" },
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

    "/bulletin/": {
        get: {
            summary: "Get Bulletin",
            description: "This endpoint is used for get all bulletin. Every users can use this endpoint",
            tags: ["Bulletin"],
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
                                            description: { type: "string" },
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

    "/bulletin/{uuid}": {
        get: {
            summary: "Get Bulletin",
            description: "This endpoint is used for get bulletin specifically. Every users can use this endpoint",
            tags: ["Bulletin"],
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
                                            description: { type: "string" },
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

    "/bulletin/update-bulletin/{uuid}": {
        put: {
            summary: "Update bulletin",
            description: "This endpoint is used for update a bulletin by an admin. The requirements are same with add-bulletin",
            tags: ["Bulletin"],
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
                                description: { type: "string" },
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
    
    "/bulletin/delete-bulletin/{uuid}": {
        delete: {
            summary: "Delete Bulletin",
            description: "This endpoint is used for delete a bulletin by an admin. The requirements are same with add-bulletin",
            tags: ["Bulletin"],
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


module.exports = bulletin;