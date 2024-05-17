import express, {Express, Request, Response} from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const app: Express = express();

const port = process.env.PORT || 3000;

const swaggerOptions = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'Nihongo API',
      version: '1.0.0',
      description: 'Nihongo API',
    },
    servers: [{url: `http://localhost:${port}`}],
  },
  apis: ['**/*.ts'],
};

const specs = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /:
 *  get:
 *    summary: Returns 'Hello world!'
 *    responses:
 *      200:
 *        description: The string "Hello world!"
 *        content:
 *          text/plain:
 *            schema:
 *              type: string
 */
app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

export default app;
