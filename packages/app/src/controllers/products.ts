import { RequestHandler } from "express";
import { productItems } from "@dev/api/products";

export const getProductsData: RequestHandler = (_req, res) =>
  productItems
    .find({})
    .then((results: any) =>
      results.map(({ image, ...item }: { image: string[] }) => ({
        ...item,
        images: image.filter((src: string) => !src.match(/product-mini/)),
        srcSet: image
          .filter((src: string) => src.match(/product-small/))
          .map((image) => image.replace(/product-small/, "product-large")),
      }))
    )
    .then((results) => res.json({ results }));
