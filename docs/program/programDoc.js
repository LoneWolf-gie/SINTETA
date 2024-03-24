const program = {
    "/program/add-program": {
        post: {
            summary: "Add Program",
            description: "This endpoint is used for adding program for class by admin. To do so, the system requires a token obtained from the login process to verify whether the user is indeed an admin. Please put token in bearer authentication",
            tags: ["Program"],
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
                                subName: { type: "string" },
                                about: { type: "string" },
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
                                    message: { type: "string" },
                                },
                            },
                        },
                    },
                },
            },
        }
    },


    "/program/": {
        get: {
            summary: "Get program",
            description: "This endpoint is used for get all program. Every users can use this endpoint",
            tags: ["Program"],
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
                                            subName: { type: "string" },
                                            about: { type: "string" },
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


    "/program/update-program/{uuid}": {
        put: {
            summary: "Update program",
            description: "This endpoint is used for update program by admin. The requirements are same with add-program",
            tags: ["Program"],
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
                                subName: { type: "string" },
                                about: { type: "string" },
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
                                    message: { type: "string" },
                                },
                            },
                        },
                    },
                },
            },
        }
    },

    "/program/delete-program/{uuid}": {
        delete: {
            summary: "Delete program",
            description: "This endpoint is used for Delete program by admin. The requirements are same with add-program",
            tags: ["Program"],
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


module.exports = program;