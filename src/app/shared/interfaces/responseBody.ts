export type Country = {
  name: {
    common: string;
    official: string;
    nativeName: {
      fra: {
        official: string;
        common: string;
      };
    };
  };
  independent: boolean;
  status: string;
  currencies: {
    XPF: {
      name: string;
      symbol: string;
    };
  };
  capital: string[];
  region: string;
  subregion: string;
  languages: {
    fra: string;
  };
  latlng: number[];
  landlocked: boolean;
  area: number;
  flag: string;
  population: number;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
};


export type GitHubUser = {
  login: string;
  id: number;
  avatar_url: string | null;
  html_url: string | null;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  bio: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}