const banner = {
    "/banner/add-banner": {
        post: {
            summary: "Add Banner",
            description: "This endpoint is used for adding banner, and this action is performed by an admin. To do so, the system requires a token obtained from the login process to verify whether the user is indeed an admin. Please include the token in the ‘Bearer’ authentication header. Addition, tag for banner only allow home, class, graduate, facility, promoStudy, and aboutus",
            tags: ["Banner"],
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
                                tag: { type: "string" },
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

    "/banner/filter?tag={value}": {
        post: {
            summary: "Filter Banner",
            description: "tag for banner only allow home, class, graduate, facility, promoStudy, and aboutus",
            tags: ["Banner"],
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
                                            tag: { type: "string" },
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


    "/banner/": {
        get: {
            summary: "Get banner",
            description: "This endpoint is used for get all banner. Every users can use this endpoint",
            tags: ["Banner"],
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
                                            tag: { type: "string" },
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


    "/banner/update-banner/{uuid}": {
        put: {
            summary: "Update banner",
            description: "This endpoint is used for update banner by admin. The requirements are same with add-banner",
            tags: ["Banner"],
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
                                tag: { type: "string" },
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

    "/banner/delete-banner/{uuid}": {
        delete: {
            summary: "Delete banner",
            description: "This endpoint is used for Delete banner by admin. The requirements are same with add-banner",
            tags: ["Banner"],
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


module.exports = banner;