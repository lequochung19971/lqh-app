export class BaseState {
  
  constructor(props?: any) {
    this.mappingProperties(props)
  }

  private mappingProperties(props: any) {
    Object.assign(this, props);
  }

}
