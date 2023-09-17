import { Dispatch, SetStateAction } from "react";

export interface Prompt {
  prompt: string;
}

export interface PromptProps {
  displayTime: number;
  data: Array<Prompt>;
  setStartMusic?: Dispatch<SetStateAction<boolean>>;
}

export interface StarterProps {
  silentDisplayTime: number;
  musicDisplayTime: number;
  setStartMusic: Dispatch<SetStateAction<boolean>>;
}
