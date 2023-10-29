interface Middleware {
    handler(req, res, next): void;
}

export default Middleware;