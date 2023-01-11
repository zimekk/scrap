import React from "react";
import { createAsset } from "use-asset";
import { Json } from "../../../components/Json";

import type { LeclercType } from "@dev/cli/src/services/LeclercService/types";

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (version) => {
  const res = await fetch(`api/leclerc/data.json?${version}`);
  return await res.json().then<LeclercType[]>((result) => result);
});

function Data({ version = "v1" }) {
  const results = asset.read(version); // As many cache keys as you need

  console.log({ results });

  return <Json>{results}</Json>;
}

export default function Section() {
  return <Data />;
}
