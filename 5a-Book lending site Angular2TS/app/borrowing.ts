export class Borrowing {
  constructor(
    public lender: string,
    public writer: string,
    public title: string,
    public year: number,
    public publisher: string,
    public p_year: number,
    public ISBN: string
  ) {  }
}