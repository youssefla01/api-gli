"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLocataireDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_locataire_dto_1 = require("./create-locataire.dto");
class UpdateLocataireDto extends (0, swagger_1.PartialType)(create_locataire_dto_1.CreateLocataireDto) {
}
exports.UpdateLocataireDto = UpdateLocataireDto;
//# sourceMappingURL=update-locataire.dto.js.map