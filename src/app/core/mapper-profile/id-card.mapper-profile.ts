import { MappingProfile } from "@automapper/types";
import { IDCardModel } from '../models/id-card.model';

export const idCardMapperProfile: MappingProfile = (mapper) => {
  mapper
    .createMap(IDCardModel, IDCardModel)
}