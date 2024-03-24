const achievement = {
    "/achievment/add-achievment": {
        post: {
            summary: "Add achievement",
            description: "This endpoint is used for adding achievement for class by admin. To do so, the system requires a token obtained from the login process to verify whether the user is indeed an admin. Please put token in bearer authentication",
            tags: ["Achievement"],
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
                                courseClassId: { type: "integer" }
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


    "/achievement/": {
        get: {
            summary: "Get achievement",
            description: "This endpoint is used for get all achievement. Every users can use this endpoint",
            tags: ["Achievement"],
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
                                            courseClassId: { type: "integer" },
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


    "/achievement/update-achievement/{uuid}": {
        put: {
            summary: "Update achievement",
            description: "This endpoint is used for update a achievement by an admin. The requirements are same with add-achievement",
            tags: ["Achievement"],
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
                                courseClass: { type: "integer" }
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

    "/achievement/delete-achievement/{uuid}": {
        delete: {
            summary: "Delete Achievement",
            description: "This endpoint is used for Delete a achievement by an admin. The requirements are same with add-achievement",
            tags: ["Achievement"],
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


module.exports = achievement;