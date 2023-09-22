export interface HeroItemType {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  buttonText: string;
  bigImageUrl: string;
  smallImageUrl: string;
}

export type HeroType = HeroItemType[];
