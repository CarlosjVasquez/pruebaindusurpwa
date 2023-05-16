export interface SalesEntities {
  units: number;
  percent: number;
  total: number;
  goal: number;
  utility: number;
  margin: number;
  details: any[];
}

export class SalesRequest {
  enterprice_id: number;
  year: number;
  month: number;

  constructor() {
    this.enterprice_id = 0;
    this.year = 0;
    this.month = 0;
  }
}

export type SalesResponse = {
  error?: any;
  data?: any;
};
