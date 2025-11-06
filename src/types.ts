export type StatusTheme = 'loading' | 'running' | 'stop' | 'warning' | 'unknown';

export interface StatusConfig {
  text: string;
  theme: StatusTheme;
  icon?: string;
}

export interface StatusMapConfig {
  [key: string]: StatusConfig;
}

export interface LocaleResources {
  [key: string]: {
    status: {
      loading: string;
      running: string;
      stop: string;
      warning: string;
      unknown: string;
    };
  };
}
