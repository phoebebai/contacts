import express from 'express';
import { contact_create, contact_update, contact_delete, contact_get, contact_getSingle} from '../controller/contactController';
const router = express();

router.post('/', contact_create);
router.patch('/:id', contact_update);
router.delete('/:id', contact_delete);
router.get('/', contact_get);
router.get('/:id', contact_getSingle);

module.exports = router;

