const congratulation = {
    "/congratulation/add-congratulation": {
        post: {
            summary: "Add Congratulation",
            description: "This endpoint is used for adding individuals who have been accepted by the university, and this action is performed by an admin. To do so, the system requires a token obtained from the login process to verify whether the user is indeed an admin. Please include the token in the ‘Bearer’ authentication header.",
            tags: ["Congratulation"],
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
                                major: { type: "string" },
                                yearAccepted: { type: "string" },
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


    "/congratulation/": {
        get: {
            summary: "Get Congratulation",
            description: "This endpoint is used for get all congratulation. Every users can use this endpoint",
            tags: ["Congratulation"],
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
                                            major: { type: "string" },
                                            yearAccepted: { type: "string" },
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


    "/congratulation/update-congratulation/{uuid}": {
        put: {
            summary: "Update Congratulation",
            description: "This endpoint is used for update Congratulation by admin. The requirements are same with add-congratulation",
            tags: ["Congratulation"],
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
                                major: { type: "string" },
                                yearAccepted: { type: "string" },
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

    "/congratulation/delete-congratulation/{uuid}": {
        delete: {
            summary: "Delete Congratulation",
            description: "This endpoint is used for Delete Congratulation by admin. The requirements are same with add-congratulation",
            tags: ["Congratulation"],
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


module.exports = congratulation;