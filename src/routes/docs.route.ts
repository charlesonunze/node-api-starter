import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';

import { swaggerDocs } from '../docs';

const router = Router();

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocs));

export { router as swaggerRoute };
