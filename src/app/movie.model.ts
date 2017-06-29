export class Movie {
  constructor(public _id: string,
              public id: number,
              public name: string,
              public year: string,
              public Director: string,
              public Stars: string[],
              public info: [{summary:string},
                      { rate: string},
                      {length: string[]}],
              public category: string[] ) {}
}
