import { Request, Response } from 'express';
import { NaturalLanguageUnderstandingV1 } from 'watson-developer-cloud';

import { IBM_CLOUD_API_KEY, IBM_CLOUD_API_URL } from '../util/secrets';
import logger from '../util/logger';

export const getUrlCategory = (req: Request, res: Response) => {

    // Validate the data
    req.assert('url', 'URL is not valid').isURL();
    const errors = req.validationErrors();

    if (errors) {
        res.status(422).json(errors);
        return;
    }

    const url = req.body.url;

    // Authenticate to IMB Cloud API
    const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
      version: '2018-11-16',
      iam_apikey: IBM_CLOUD_API_KEY,
      url: IBM_CLOUD_API_URL
    });

    const parameters = {
        'url': url,
        'features': {
            'categories': {
                'limit': 1
            }
      }
    };

    // Make the request for retrieving the Category of the URL
    naturalLanguageUnderstanding.analyze(parameters, function(err, response) {
        if (err) {
            logger.error(err);
            res.status(err.code).send(err);
        } else {
            const topCategory = response.categories[0];
            res.send(topCategory);
        }
    });
};
