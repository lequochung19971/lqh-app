import { MappingProfile } from "@automapper/types";
import { Address, AddressModel } from "@core/models/address.model";

export const addressInfoMapperProfile: MappingProfile = (mapper) => {
  mapper.createMap(AddressModel, AddressModel)
  mapper.createMap(Address, Address)
}