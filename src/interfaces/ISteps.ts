import { ReactNode } from "react";

export interface IStep {
  title: string;
  description: string;
  moreinfo?: string;
  subTitle?: string;
  date?: Date;
  status?: "wait" | "process" | "finish" | "error"
  icon?: ReactNode
  coords:{
    lat:number,
    lng:number
  }
}
