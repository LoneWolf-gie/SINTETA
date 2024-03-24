const Class = {
    "/class/add-class": {
        post: {
            summary: "Add class",
            description: "This endpoint is used for adding a class by an admin. To do so, the system requires a token obtained from the login process to verify whether the user is indeed an admin. Please put token in bearer authentication",
            tags: ["Class"],
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
                                about: { type: "string" },
                                description: { type: "string" },
                                grade: { type: "string", enum: ["sma", "smp", "sd"] },
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
                                    message: { type: "string" },
                                },
                            },
                        },
                    },
                },
            },
        }
    },

    "/class/": {
        get: {
            summary: "Get class",
            description: "This endpoint is used for get all class. Every users can use this endpoint",
            tags: ["Class"],
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
                                            grade: { type: "string", enum: ["sma", "smp", "sd"] },
                                            about: { type: "string" },
                                            description: { type: "string" },
                                            achievement: {
                                                type: "object",
                                                properties: {

                                                }
                                            },
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

    "/class/{uuid}": {
        get: {
            summary: "Get class",
            description: "This endpoint is used for get class specifically. Every users can use this endpoint",
            tags: ["Class"],
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
                                            grade: { type: "string", enum: ["sma", "smp", "sd"] },
                                            about: { type: "string" },
                                            description: { type: "string" },
                                            achievement: {
                                                type: "object",
                                                properties: {

                                                }
                                            },
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

    "/class/update-class/{uuid}": {
        put: {
            summary: "Update class",
            description: "This endpoint is used for update a class by an admin. The requirements are same with add-class",
            tags: ["Class"],
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
                                picture: { type: "string" },
                                about: { type: "string" },
                                description: { type: "string" },
                                grade: { type: "string", enum: ["sma", "smp", "sd"] },
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
                                    message: { type: "string" },
                                },
                            },
                        },
                    },
                },
            },
        }
    },

    "/class/delete-class/{uuid}": {
        delete: {
            summary: "Delete class",
            description: "This endpoint is used for Delete a class by an admin. The requirements are same with add-class",
            tags: ["Class"],
            responses: {
                200: {
                    description: "Successful operation",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: { type: "string" },
                                },
                            },
                        },
                    },
                },
            },
        }
    },

}


module.exports = Class;