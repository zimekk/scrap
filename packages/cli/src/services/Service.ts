export default class {
  summary: {
    created: any[];
    checked: any[];
    updated: any[];
    request: Record<string, number>;
  };
  constructor({ summary }: any) {
    this.summary = summary;
  }
}
