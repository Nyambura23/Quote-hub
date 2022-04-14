export class Quote {
showDescription: boolean;
  upvote: number;
  downvote: number;
constructor(public id: number, public name: string,public description: string, public likes: number, public dislikes: number, public creationDate: Date){
  this.showDescription=false;

  
}

  // id: number;
  // name: string;
  // description: string;


}
