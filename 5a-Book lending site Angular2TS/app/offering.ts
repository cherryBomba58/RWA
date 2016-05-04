export class Offering {
  constructor(
    public offerid: number,
    public lender: string,
    public borrower: string,
    public writer: string,
    public title: string,
    public year: number,
    public publisher: string,
    public p_year: number,
    public ISBN: string
  ) {  }
}