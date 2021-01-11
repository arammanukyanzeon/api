import dotenv from 'dotenv';
dotenv.config();

export default
{
    "swagger": "2.0",
    "info": {
      "version": "1.0.0",
      "title": "Project Priotix Task"
    },
    "basePath": "/",
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "paths": {
      "/subject/{topicId}": {
        "get": {
          "tags": [
            "Subject"
          ],
          "summary": "Get all sobjects for topic",
          "parameters": [
            {
              "name": "topicId",
              "in": "path",
              "required": true,
              "type": "integer"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/definitions/Subject"
                }
              }
            },
            "404": {
              "description": "Not found",
              "schema": {
                "$ref": "#/definitions/Error"
              }
            },
            "500": {
              "description": "Error",
              "schema": {
                "$ref": "#/definitions/Error500"
              }
            }
          }
        }
      },
      "/topic": {
        "post": {
          "tags": [
            "Topic"
          ],
          "summary": "Add topic",
          "parameters": [
            {
              "name": "body",
              "in": "body",
              "required": true,
              "schema": {
                "$ref": "#/definitions/Topic"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "schema": {
                "$ref": "#/definitions/Success"
              }
            },
            "500": {
              "description": "Error",
              "schema": {
                "$ref": "#/definitions/Error500"
              }
            }
          }
        },
        "get": {
          "tags": [
            "Topic"
          ],
          "summary": "Get active topics",
          "responses": {
            "200": {
              "description": "OK",
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/definitions/Topic"
                }
              }
            },
            "404": {
              "description": "Not found",
              "schema": {
                "$ref": "#/definitions/Error"
              }
            },
            "500": {
              "description": "Error",
              "schema": {
                "$ref": "#/definitions/Error500"
              }
            }
          }
        }
      },
      "/topic/{id}": {
        "delete": {
          "tags": [
            "Topic"
          ],
          "summary": "Delete topic by id",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "integer"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "schema": {
                "$ref": "#/definitions/Success"
              }
            },
            "500": {
              "description": "Error",
              "schema": {
                "$ref": "#/definitions/Error500"
              }
            }
          }
        }
      },
      "/twitter-client": {
        "post": {
          "tags": [
            "Twitter Client"
          ],
          "summary": "Add twitter client",
          "parameters": [
            {
              "name": "body",
              "in": "body",
              "required": true,
              "schema": {
                "$ref": "#/definitions/TwitterClient"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "schema": {
                "$ref": "#/definitions/Success"
              }
            },
            "500": {
              "description": "Error",
              "schema": {
                "$ref": "#/definitions/Error500"
              }
            }
          }
        },
        "get": {
          "tags": [
            "Twitter Client"
          ],
          "summary": "Get twitter clients",
          "responses": {
            "200": {
              "description": "OK",
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/definitions/TwitterClient"
                }
              }
            },
            "404": {
              "description": "Not found",
              "schema": {
                "$ref": "#/definitions/Error"
              }
            },
            "500": {
              "description": "Error",
              "schema": {
                "$ref": "#/definitions/Error500"
              }
            }
          }
        }
      }
    },
    "definitions": {
      "Success": {
        "properties": {
          "message": {
            "type": "string"
          }
        }
      },
      "Error": {
        "properties": {
          "message": {
            "type": "string"
          }
        }
      },
      "Error500": {
        "properties": {
          "message": {
            "type": "string"
          },
          "error": {
            "type": "string"
          }
        }
      },
      "Subject": {
        "required": [
          "topic_id"
        ],
        "properties": {
          "id": {
            "type": "integer"
          },
          "topic_id": {
            "type": "integer"
          },
          "term": {
            "type": "string"
          },
          "created_at": {
            "type": "string",
            "format": "date"
          },
          "probability": {
            "type": "number"
          }
        }
      },
      "Topic": {
        "required": [
          "name",
          "id"
        ],
        "properties": {
          "name": {
            "type": "string"
          },
          "id": {
            "type": "integer"
          }
        }
      },
      "TwitterClient": {
        "required": [
          "api_key",
          "api_key_secret",
          "access_token_key",
          "acces_token_secret",
          "expire_date",
          "limit"
        ],
        "properties": {
          "id": {
            "type": "integer"
          },
          "api_key": {
            "type": "string"
          },
          "api_key_secret": {
            "type": "string"
          },
          "access_token_key": {
            "type": "string"
          },
          "acces_token_secret": {
            "type": "string"
          },
          "expire_date": {
            "type": "string",
            "format": "date"
          },
          "limit": {
            "type": "integer"
          }
        }
      }
    }
  }