import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API book",
      version: "1.0.0",
      description: "API REST permettant de gérer l'application library",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        Author: {
          type: "object",
          required: ["firstName", "lastName"],
          properties: {
            id: {
              type: "integer",
              description: "L'identifiant unique de l'auteur",
            },
            firstName: {
              type: "string",
              description: "Le prénom de l'auteur",
            },
            lastName: {
              type: "string",
              description: "Le nom de famille de l'auteur",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "La date et l'heure de l'ajout d'un produit.",
            },
          },
        },
        Books: {
            type: "object",
            required: ["title", "pages"],
            properties: {
              id: {
                type: "integer",
                description: "L'identifiant unique du livre",
              },
              title: {
                type: "string",
                description: "Le titre du livre",
              },
              pages: {
                type: "integer",
                description: "Le nombre de page du livre",
              },
              extract: {
                type: "string",
                description: "Un extrait du livre",
              },
              summary: {
                type: "string",
                description: "Le résumé du livre",
              },
              cover: {
                type: "string",
                description: "La couverture du livre",
              },
              year: {
                type: "integer",
                description: "L'année du livre",
              },
              average: {
                type: "float",
                description: "La note moyenne du livre",
              },
              upload: {
                type: "float",
                description: "Le chemin relatif du livre",
              },
              fk_publisher: {
                type: "float",
                description: "L'identifiant de l'éditeur du livre",
              },
              fk_author: {
                type: "integer",
                description: "L'identifiant de l'auteur du livre",
              },
              fk_category: {
                type: "integer",
                description: "L'identifiant de la catégorie du livre",
              },
              fk_user: {
                type: "integer",
                description: "L'identifiant de l'utilisateur  du livre",
              },
            },
        },
        Category: {
          type: "object",
          required: ["name"],
          properties: {
            id: {
              type: "integer",
              description: "L'identifiant unique de la catégorie",
            },
            name: {
              type: "string",
              description: "Le nom de la catégorie",
            },
          },
        },
        Comment: {
          type: "object",
          required: ["note", "text", "fk_book", "fk_user"],
          properties: {
            id: {
              type: "integer",
              description: "L'identifiant unique du commentaire",
            },
            note: {
              type: "string",
              description: "La note du commentaire",
            },
            text: {
              type: "string",
              description: "Le texte du commentaire",
            },
            fk_book: {
              type: "integer",
              description: "L'identifiant du livre associé au commentaire",
            },
            fk_user: {
              type: "integer",
              description: "L'identifiant de l'utilisateur associé au commentaire",
            },
          },
        },
        Publisher: {
          type: "object",
          required: ["name"],
          properties: {
            id: {
              type: "integer",
              description: "L'identifiant unique de l'éditeur",
            },
            name: {
              type: "string",
              description: "Le nom de l'éditeur",
            },
          },
        },
        User: {
          type: "object",
          required: ["username", "password", "nbBooksOffer", "nbNote", "nbComment"],
          properties: {
            id: {
              type: "integer",
              description: "L'identifiant unique de l'utilisateur",
            },
            username: {
              type: "string",
              description: "Le nom d'utilisateur",
            },
            password: {
              type: "string",
              description: "Le mot de passe de l'utilisateur",
            },
            nbBooksOffer: {
              type: "integer",
              description: "Le nombre de livres offerts par l'utilisateur",
            },
            nbNote: {
              type: "integer",
              description: "Le nombre de notes de l'utilisateur",
            },
            nbComment: {
              type: "integer",
              description: "Le nombre de commentaires de l'utilisateur",
            },
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/router/*.mjs"], // Chemins vers vos fichiers de route
};

const swaggerSpec = swaggerJSDoc(options);
export { swaggerSpec };
