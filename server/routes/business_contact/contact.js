"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contact_1 = require("../../controllers/business_contact/contact");
const router = express_1.default.Router();
router.get('/list', contact_1.DisplayContactListPage);
router.get('/edit/:id', contact_1.DisplayContactEditPage);
exports.default = router;
//# sourceMappingURL=contact.js.map