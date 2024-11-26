"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBailDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_bail_dto_1 = require("./create-bail.dto");
class UpdateBailDto extends (0, swagger_1.PartialType)(create_bail_dto_1.CreateBailDto) {
}
exports.UpdateBailDto = UpdateBailDto;
//# sourceMappingURL=update-bail.dto.js.map