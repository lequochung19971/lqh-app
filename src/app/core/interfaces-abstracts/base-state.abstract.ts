export class BaseState {
  
  constructor(props?: any) {
    this.mappingProperties(props);
  }

  private mappingProperties(props: any): void {
    Object.assign(this, props);
  }

}
