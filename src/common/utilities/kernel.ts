import providers from "../config/providers.js";
import validators from "../config/validators.js";

class Kernel {
    public static middleware(middlewares: string | string[]) {
        return (req, res, next) => {
            try {
                if (typeof middlewares === 'string') {
                    if (providers[middlewares] != null) {
                        providers[middlewares](req, res, next);
                    }
                }

                if (middlewares instanceof Array) {
                    middlewares.forEach(middleware => {
                        if (middleware.includes(':')) {
                            const middlewareParams = middleware.split(':')[1];
                            const middlewareParam = middlewareParams.split(',');

                            middlewareParam.forEach(param => {
                                console.log('ss');

                                validators[param]
                            });
                        }


                        if (providers[middleware] != null) {
                            providers[middleware](req, res, next);
                        }
                    });
                }

                next();
            } catch (err) {
                console.log(err);
            };
        };
    };
}

export default Kernel;