import providers from "../config/providers.js";

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
                        if (providers[middleware] != null) {
                            providers[middleware](req, res, next);
                        }
                    });
                }

                next();
            } catch (err) {
                res.status(401).json(err);
            };
        };
    };
}

export default Kernel;