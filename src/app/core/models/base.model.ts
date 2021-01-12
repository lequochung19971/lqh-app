export class BaseModel {
  constructor(props?: any) {
    if (props) {
      this.mappingProperties(props)
    }
  }

  private mappingProperties?(props: any) {
    Object.assign(this, props);
  }
}