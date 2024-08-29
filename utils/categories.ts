import { IconType } from "react-icons";
import { MdCabin } from "react-icons/md";

import { TbCaravan, TbTent, TbBuildingCottage } from "react-icons/tb";

import { GiWoodCabin, GiMushroomHouse } from "react-icons/gi";
import { PiWarehouse, PiLighthouse, PiVan } from "react-icons/pi";
import { FaHotel } from "react-icons/fa";
import { HiHomeModern } from "react-icons/hi2";
import { GoContainer } from "react-icons/go";

type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export type CategoryLabel =
  | "cabin"
  | "luxe"
  | "Tinyhome"
  | "tent"
  | "airstream"
  | "cottage"
  | "container"
  | "caravan"
  | "tiny"
  | "magic"
  | "warehouse"
  | "lodge";

export const categories: Category[] = [
  {
    label: "cabin",
    icon: MdCabin,
  },
  {
    label: "luxe",
    icon: FaHotel,
  },
  {
    label: "Tinyhome",
    icon: HiHomeModern,
  },
  {
    label: "airstream",
    icon: PiVan,
  },
  {
    label: "tent",
    icon: TbTent,
  },
  {
    label: "warehouse",
    icon: PiWarehouse,
  },
  {
    label: "cottage",
    icon: TbBuildingCottage,
  },
  {
    label: "magic",
    icon: GiMushroomHouse,
  },
  {
    label: "container",
    icon: GoContainer,
  },
  {
    label: "caravan",
    icon: TbCaravan,
  },

  {
    label: "tiny",
    icon: PiLighthouse,
  },
  {
    label: "lodge",
    icon: GiWoodCabin,
  },
];
