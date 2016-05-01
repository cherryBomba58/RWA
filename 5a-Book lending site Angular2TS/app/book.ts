export class Book {
  constructor(
    public ISBN: string,
    public writer: string,
    public title: string,
    public year: number,
    public publisher: string,
    public p_year: number
  ) {  }
}