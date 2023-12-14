  import { appTheme } from "../styles/theme";
 
 type Apptheme = typeof appTheme;

 declare module "styled components" {
    export interface Defaulttheme extends Apptheme {}
 }