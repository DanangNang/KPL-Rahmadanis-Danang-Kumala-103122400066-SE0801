import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const option = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Film Pribadi",
            version: "1.0.0",
            description: "API untuk menyimpan data film pribadi"
        },
    },
    apis: ['app.js']
};

const specs = swaggerJSDoc(option);

export { specs, swaggerUi };