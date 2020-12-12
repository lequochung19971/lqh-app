export interface BuilderConfig {
  metadata?: MetadataBuilderConfig;
  components?: ComponentConfig[];
}

export interface MetadataBuilderConfig {
  cssClass?:ClassNameConfig;
}

export interface ComponentConfig {
  type: string;
  layoutDefinition?: LayoutDefinition;
  cssClass?:ClassNameConfig;
}

export interface ClassNameConfig {
  container?: string;
  col?: string;
  row?: string;
}

export interface LayoutDefinition {
  col_sm?: number;
  col_md?: number;
  col_lg?: number;
  col_xl?: number;
}