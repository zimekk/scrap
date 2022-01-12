import { z } from "zod";

export const prepareItem = (item: object) =>
  z
    .object({
      address: z.record(z.string(), z.union([z.string(), z.number()])),
      id: z.string(),
      information: z
        .array(
          z.object({
            label: z.string(),
            unit: z.string(),
            values: z.array(z.string()),
          })
        )
        .optional(),
      location: z.array(z.string()),
      parameters: z.array(
        z.object({
          label: z.string(),
          value: z.string(),
        })
      ),
    })
    .transform(({ parameters, ...item }) => ({
      parameters: parameters.concat(
        item.information
          ? item.information
              .filter(({ values }) => values.length > 0)
              .map(({ label, values, unit }) => ({
                label,
                value: values.join(", ").concat(unit),
              }))
          : []
      ),
      ...item,
    }))
    .transform((item) => ({
      ...item,
      _information: item.information
        ? item.information
            .filter(({ values }) => values.length > 0)
            .reduce(
              (result, { label, values }) =>
                Object.assign(result, { [label]: values }),
              {}
            )
        : null,
      _parameters: item.parameters.reduce(
        (result, { label, value }) => Object.assign(result, { [label]: value }),
        {}
      ),
    }))
    .transform(
      (item: {
        address: any;
        location: any[];
        _information: any;
        _parameters: any;
      }) =>
        // Boolean(console.log(item)) ||
        ({
          _area: Number(
            item._information?.area?.length
              ? item._information.area[0]
              : item._parameters["Powierzchnia w m2"]
                  ?.replace(/^([\d\s]+) m2$/g, "$1")
                  .replace(/\s/, "") || 0
          ),
          _terrain_area: Number(
            item._information?.terrain_area?.length
              ? item._information.terrain_area[0]
              : item._parameters["Powierzchnia działki w m2"]
                  ?.replace(/^([\d\s]+) m2$/g, "$1")
                  .replace(/\s/, "") || 0
          ),
          _address: item.address
            ? [
                "lokalizacja_kraj",
                "lokalizacja_region",
                "lokalizacja_powiat",
                "lokalizacja_gmina",
                "lokalizacja_miejscowosc",
              ]
                .map((key) => item.address[key])
                .filter(Boolean)
            : null,
          _location: item.location.join(", "),
          road: item._information?.access_types?.length
            ? item._information.access_types?.map(
                (value: string) =>
                  ({
                    "access_types::asphalt": "asfaltowa",
                    "access_types::hard_surfaced": "utwardzana",
                    "access_types::soft_surfaced": "nieutwardzona",
                  }[value] || console.log({ value }))
              )[0]
            : item._parameters["Droga dojazdowa"],
          building: item._information?.building_type?.length
            ? item._information.building_type?.map(
                (value: string) =>
                  ({
                    "building_type::detached": "wolnostojący",
                    "building_type::ribbon": "szeregowy",
                    "building_type::semi_detached": "bliźniak",
                    "building_type::residence": "pałac/dworek/willa",
                  }[value] || console.log({ value }))
              )[0]
            : item._parameters["Typ budynku"],
          parameters: item.parameters,
        })
    )
    .parse(item);
