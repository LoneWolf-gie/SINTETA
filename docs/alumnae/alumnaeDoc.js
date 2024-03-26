const alumnae = {
    "/alumnae/add-alumnae": {
        post: {
            summary: "Add Alumnae",
            description: "This endpoint is used for adding individuals who have been graduated, and this action is performed by an admin. To do so, the system requires a token obtained from the login process to verify whether the user is indeed an admin. Please include the token in the ‘Bearer’ authentication header.",
            tags: ["Alumnae"],
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
                                currentSchool: { type: "string" },
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


    "/alumnae/": {
        get: {
            summary: "Get Alumnae",
            description: "This endpoint is used for get all alumnae. Every users can use this endpoint",
            tags: ["Alumnae"],
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
                                            currentSchool: { type: "string" },
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


    "/alumnae/update-alumnae/{uuid}": {
        put: {
            summary: "Update alumnae",
            description: "This endpoint is used for update alumnae by admin. The requirements are same with add-alumnae",
            tags: ["Alumnae"],
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
                                currentSchool: { type: "string" },
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

    "/alumnae/delete-alumnae/{uuid}": {
        delete: {
            summary: "Delete alumnae",
            description: "This endpoint is used for Delete alumnae by admin. The requirements are same with add-alumnae",
            tags: ["Alumnae"],
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


module.exports = alumnae;