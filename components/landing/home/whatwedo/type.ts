import { ComponentType } from "react";

export interface Feature {
  title: string;
  description: string;
  icon: ComponentType;
  hoverClassName: string;
}