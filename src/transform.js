'use strict';

export default function transform(yaml, fs, render, swagger, markdown, config) {
    try {
        const swaggerDocument = yaml.safeLoad(swagger);

        if (swaggerDocument.swagger !== '2.0') {
            throw Error('Only swagger 2.0 is currently supported');
        }

        const md = render(swaggerDocument, config);

        fs.writeFileSync(markdown, md);
    } catch (e) {
        console.error(e);
        console.error(e.stack);
    }
};