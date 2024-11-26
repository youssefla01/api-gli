"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBienDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_bien_dto_1 = require("./create-bien.dto");
class UpdateBienDto extends (0, swagger_1.PartialType)(create_bien_dto_1.CreateBienDto) {
}
exports.UpdateBienDto = UpdateBienDto;
//# sourceMappingURL=update-bien.dto.js.map