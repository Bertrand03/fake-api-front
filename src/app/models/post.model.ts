export class Post {

  private _id: number;
  private _title: string;
  private _body: string;


  constructor(title: string, body: string, id?: number ) { // ? pour le "optionnel"
    // En JS 0 && 1 correspondent à false et true
    if (typeof id === 'number') {
      this._id = id;
    }
    this._title = title;
    this._body = body;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get body(): string {
    return this._body;
  }

  set body(value: string) {
    this._body = value;
  }

  // Serializer
  toJSON(): any {
    return {
      id: this.id,
      title: this.title,
      body: this.body
    }
  }

  // Deserializer
  static fromJSON(postAsJSON: any): Post { // static -> on a qu'a appeler le nom de la methode et on y accès partout dans le projet.
    return new Post(
      postAsJSON.title,
      postAsJSON.body,
      postAsJSON.id
    );
  }

}
