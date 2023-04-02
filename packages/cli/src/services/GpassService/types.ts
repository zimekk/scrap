import { z } from "zod";

export const Gpass = z
  .object({
    id: z.string(),
  })
  .passthrough();

export const DiffSchema = z.object({
  id: z.string(),
  details: z.object({}).passthrough().array(),
});

export interface DetailsType {
  link: {
    href: string;
    text: string;
  };
  intro: string;
  price: string;
  priceNumber: string;
  bullets: string[];
}

export type GpassType = z.infer<typeof Gpass> & {
  details: DetailsType[];
  _id: string;
  _created: number;
  _checked: number;
  _updated: number;
  _history: Record<
    string,
    {
      details: DetailsType[];
      _checked: number;
    }
  >;
};
