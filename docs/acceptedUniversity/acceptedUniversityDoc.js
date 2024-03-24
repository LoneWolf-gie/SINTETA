const acceptedUniversity = {
    "/acceptedUniversity/add-acceptedUniversity": {
        post: {
            summary: "Add AcceptedUniversity",
            description: "This endpoint is used for adding individuals who have been accepted by the university, and this action is performed by an admin. To do so, the system requires a token obtained from the login process to verify whether the user is indeed an admin. Please include the token in the ‘Bearer’ authentication header.",
            tags: ["AcceptedUniversity"],
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
                                graduatedFrom: { type: "string" },
                                acceptedSchool: { type: "string" },
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


    "/acceptedUniversity/": {
        get: {
            summary: "Get acceptedUniversity",
            description: "This endpoint is used for get all acceptedUniversity. Every users can use this endpoint",
            tags: ["AcceptedUniversity"],
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
                                            graduatedFrom: { type: "string" },
                                            acceptedSchool: { type: "string" },
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


    "/acceptedUniversity/update-acceptedUniversity/{uuid}": {
        put: {
            summary: "Update AcceptedUniversity",
            description: "This endpoint is used for update AcceptedUniversity by admin. The requirements are same with add-acceptedUniversity",
            tags: ["AcceptedUniversity"],
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
                                graduatedFrom: { type: "string" },
                                acceptedSchool: { type: "string" },
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

    "/acceptedUniversity/delete-acceptedUniversity/{uuid}": {
        delete: {
            summary: "Delete acceptedUniversity",
            description: "This endpoint is used for Delete acceptedUniversity by admin. The requirements are same with add-acceptedUniversity",
            tags: ["AcceptedUniversity"],
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


module.exports = acceptedUniversity;