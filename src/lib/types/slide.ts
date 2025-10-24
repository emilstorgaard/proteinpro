interface SlideItem {
    icon: string;
    text: string;
}

export interface Slide {
    title: string;
    intro: string;
    content: string;
    items: SlideItem[];
  }