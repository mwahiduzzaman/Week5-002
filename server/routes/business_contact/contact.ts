import express from 'express';
import { DisplayContactEditPage, DisplayContactListPage } from '../../controllers/business_contact/contact';

const router = express.Router();

//Get localhost/contact/list
router.get('/list', DisplayContactListPage)

//get localhost/contact/edit
router.get('/edit/:id', DisplayContactEditPage);
//POST Loalhost/conatct/edit
export default router;