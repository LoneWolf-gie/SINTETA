const promo = {
    "/promo/add-promo": {
        post: {
            summary: "Add Promo",
            description: "This endpoint is used for adding promo for class by admin. To do so, the system requires a token obtained from the login process to verify whether the user is indeed an admin. Please put token in bearer authentication",
            tags: ["Promo"],
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
                                expired: { type: "string", format: "date" },
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


    "/promo/": {
        get: {
            summary: "Get Promo",
            description: "This endpoint is used for get all promo. Every users can use this endpoint",
            tags: ["Promo"],
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
                                            about: { type: "string" },
                                            description: { type: "string" },
                                            expired: { type: "string", format: "date" },
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

    "/promo/{uuid}": {
        get: {
            summary: "Get Promo By Id",
            description: "This endpoint is used for update promo by admin. The requirements are same with add-promo",
            tags: ["Promo"],
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
                                            about: { type: "string" },
                                            description: { type: "string" },
                                            expired: { type: "string", format: "date" },
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

    "/promo/update-promo/{uuid}": {
        put: {
            summary: "Update Promo",
            description: "This endpoint is used for update promo by admin. The requirements are same with add-promo",
            tags: ["Promo"],
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
                                expired: { type: "string", format: "date" },
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

    "/promo/delete-promo/{uuid}": {
        delete: {
            summary: "Delete Promo",
            description: "This endpoint is used for Delete promo by admin. The requirements are same with add-promo",
            tags: ["Promo"],
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


module.exports = promo;