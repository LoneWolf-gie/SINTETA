const testimonial = {
    "/testimonial/add-testimonial": {
        post: {
            summary: "Add Testimonial",
            description: "This endpoint is used for adding a testimonial by an admin. To do so, the system requires a token obtained from the login process to verify whether the user is indeed an admin. Please put token in bearer authentication",
            tags: ["Testimonial"],
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
                                acceptedSchool: { type: "string" },
                                graduatedFrom: { type: "string" },
                                grade: { type: "string", enum: ["sma", "smp", "sd"] },
                                video: { type: "string" },
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

    "/testimonial/filter?grade={value}": {
        post: {
            summary: "Get testimonial",
            description: "This endpoint is used for get testimonial specifically. Every users can use this endpoint",
            tags: ["Testimonial"],
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
                                            acceptedSchool: { type: "string" },
                                            graduatedFrom: { type: "string" },
                                            grade: { type: "string", enum: ["sma", "smp", "sd"] },
                                            video: { type: "string" },
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

    "/testimonial/pagination?page={value}&limit={value}": {
        post: {
            summary: "Get Testimonial",
            description: "This endpoint is used to retrieve testimonials with specific limits. Any user can utilize this endpoint. Please input a value with the data type integer, otherwise an error will occur.",
            tags: ["Testimonial"],
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
                                            acceptedSchool: { type: "string" },
                                            graduatedFrom: { type: "string" },
                                            grade: { type: "string", enum: ["sma", "smp", "sd"] },
                                            video: { type: "string" },
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

    "/testimonial/": {
        get: {
            summary: "Get testimonial",
            description: "This endpoint is used for get all testimonial. Every users can use this endpoint",
            tags: ["Testimonial"],
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
                                            acceptedSchool: { type: "string" },
                                            graduatedFrom: { type: "string" },
                                            grade: { type: "string", enum: ["sma", "smp", "sd"] },
                                            video: { type: "string" },
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


    "/testimonial/update-testimonial/{uuid}": {
        put: {
            summary: "Update Testimonial",
            description: "This endpoint is used for update a testimonial by an admin. The requirements are same with add-testimonial",
            tags: ["Testimonial"],
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
                                acceptedSchool: { type: "string" },
                                graduatedFrom: { type: "string" },
                                grade: { type: "string", enum: ["sma", "smp", "sd"] },
                                video: { type: "string" },
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

    "/testimonial/delete-testimonial/{uuid}": {
        delete: {
            summary: "Delete testimonial",
            description: "This endpoint is used for Delete a testimonial by an admin. The requirements are same with add-testimonial",
            tags: ["Testimonial"],
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


module.exports = testimonial;