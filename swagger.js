import dotenv from 'dotenv';
dotenv.config();

export default
    {
        "swagger": "2.0",
        "info": {
            "version": "1.0.0",
            "title": "Project Priotix Task",

        },
        "host": `http://${process.env.TWITTER_SERVICE_ADDRESS}`,
        "basePath": "/",
        "tags": [
            {
                "name": "API",
                "description": "API"
            }
        ],
        "schemes": [
            "http"
        ],
        "consumes": [
            "application/json"
        ],
        "produces": [
            "application/json"
        ],
        "paths": {
            "/:topicId": {
                "get": {
                    "tags": [
                        "Subject"
                    ],
                    "summary": "Get all sobjects for topic",
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/Subject"
                            }
                        },
                        "404": {
                            "description": "Not found",
                            "schema": {
                                "$ref": "#/definitions/Subject"
                            }
                        },
                        "500": {
                            "description": "Error",
                            "schema": {
                                "$ref": "#/definitions/Subject"
                            }
                        }
                    }
                }
            },
            "/a": {
                "post": {
                    "tags": [
                        "Topic"
                    ],
                    "summary": "Add topic",
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/Topic"
                            }
                        },
                        "500": {
                            "description": "Error",
                            "schema": {
                                "$ref": "#/definitions/Topic"
                            }
                        }
                    }
                }
            },
            "/b": {
                "get": {
                    "tags": [
                        "Topic"
                    ],
                    "summary": "Get active topics",
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/Topic"
                            }
                        },
                        "404": {
                            "description": "Not found",
                            "schema": {
                                "$ref": "#/definitions/Subject"
                            }
                        },
                        "500": {
                            "description": "Error",
                            "schema": {
                                "$ref": "#/definitions/Topic"
                            }
                        }
                    }
                }
            },
            "/:id": {
                "delete": {
                    "tags": [
                        "Topic"
                    ],
                    "summary": "Delete topic by id",
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/Topic"
                            }
                        },
                        "500": {
                            "description": "Error",
                            "schema": {
                                "$ref": "#/definitions/Topic"
                            }
                        }
                    }
                }
            },
            "/c": {
                "post": {
                    "tags": [
                        "Twitter Client"
                    ],
                    "summary": "Add twitter client",
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/Twitter Client"
                            }
                        },
                        "500": {
                            "description": "Error",
                            "schema": {
                                "$ref": "#/definitions/Twitter Client"
                            }
                        }
                    }
                }
            },
            "/d": {
                "get": {
                    "tags": [
                        "Twitter Client"
                    ],
                    "summary": "Get twitter clients",
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/Twitter Client"
                            }
                        },
                        "404": {
                            "description": "Not found",
                            "schema": {
                                "$ref": "#/definitions/Twitter Client"
                            }
                        },
                        "500": {
                            "description": "Error",
                            "schema": {
                                "$ref": "#/definitions/Twitter Client"
                            }
                        }
                    }
                }
            },
        },


        "definitions": {
            "Subject": {
                "required": [
                    "topic_id",
                ],
                "properties": {
                    "topic_id": {
                        "type": "integer",
                    },
                }
            },
            "Topic": {
                "required": [
                    "name",
                    "id",
                ],
                "properties": {
                    "name": {
                        "type": "string",
                    },
                    "id": {
                        "type": "integer",
                    },
                }
            },
            "Twitter Client": {
                "required": [
                    "api_key",
                    "api_key_secret",
                    "access_token_key",
                    "acces_token_secret",
                    "expire_date",
                    "limit",
                ],
                "properties": {
                    "api_key": {
                        "type": "string",
                    },
                    "api_key_secret": {
                        "type": "string",
                    },
                    "access_token_key": {
                        "type": "string",
                    },
                    "acces_token_secret": {
                        "type": "string",
                    },
                    "expire_date": {
                        "type": "string",
                        "format": "date"
                    },
                    "limit": {
                        "type": "integer",
                    },
                }
            },
        },

    }