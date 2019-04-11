export interface IConfig {
  title: string;
  description: string;
  url: string;
  build_timestamp: string;
  google_analytics_id: string;
  outPath?: string;
  redirects: { [source: string]: string };
}

export interface IPage {
  date?: string;
  path: string;
  path_amp?: string;
  title: string;
  description: string;
}

export interface IStyle {
  name: string;
  content: string;
}

export interface ITemplateData {
  config: IConfig;
  template?: {
    assets: { [partialName: string]: IStyle };
  };
  content?: string;
  page?: IPage;
  pages?: Array<IPage>;
}

export interface IConstants {
  distDirectory: string;
  contentPath: string;
}
