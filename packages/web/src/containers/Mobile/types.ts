export interface Operation {
  date: string;
  number: string;
  amount: number;
  net?: number | string;
  min?: number;
  mms?: number;
  sms?: number;
  package?: string;
}

export interface Item {
  date: string;
  number: string;
  amount: number;
  net: number;
  min: number | string;
  sms: number;
  roaming?: number;
  operations?: Omit<Operation, "date" | "number">[];
}
