// Controllers (route handlers)
import * as homeController from '../controllers/home';

import express from 'express';
const router = express.Router();

/**
 * @api {post} /getUrlCategory Request URL Category
 * @apiName getUrlCategory
 * @apiParam {String} url
 * @apiParamExample {json} Input
 *    {
 *      "url": "http://7code.ro"
 *    }
 *
 * @apiSuccess {Number} score Score of the URL.
 * @apiSuccess {String} label Category name of the URL.
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "score": 0.836333,
 *      "label": "/business and industrial/business software"
 *    }
 * @apiErrorExample {json} Validation error
 *    HTTP/1.1 422 Unprocessable Entity
 *    [{
 *      "location": "body",
 *      "param": "url",
 *      "msg": "URL is not valid",
 *      "value": "f"
 *    }]
 */
router.post('/getUrlCategory', homeController.getUrlCategory);

export default router;