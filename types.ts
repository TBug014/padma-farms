export interface SectionProps {
  id?: string;
}

export interface ProduceItem {
  id: number;
  name: string;
  category: string;
  image: string;
}

export enum SectionType {
  HERO = 'hero',
  PRODUCE = 'produce',
  STORY = 'story',
  CONTACT = 'contact',
}