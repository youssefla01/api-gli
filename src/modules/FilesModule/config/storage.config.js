"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStorage = void 0;
const multer_1 = require("multer");
const file_helper_util_1 = require("../utils/file-helper.util");
const createStorage = (subFolder) => {
    return (0, multer_1.diskStorage)({
        destination: (req, file, callback) => {
            const path = `./uploads/${subFolder}`;
            callback(null, path);
        },
        filename: (req, file, callback) => {
            const fileName = file_helper_util_1.FileHelper.generateFileName(file);
            console.log(`Saving file: ${fileName} (${file.mimetype})`);
            callback(null, fileName);
        }
    });
};
exports.createStorage = createStorage;
//# sourceMappingURL=storage.config.js.map