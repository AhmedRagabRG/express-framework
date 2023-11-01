import multer from 'multer';

class Multer {
    private diskStorage;

    constructor() {
        this.diskStorage = multer.diskStorage({});
    }

    public upload() {
        return multer({ storage: this.diskStorage })
    }
}

export default Multer;