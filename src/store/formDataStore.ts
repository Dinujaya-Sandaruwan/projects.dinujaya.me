import { create } from "zustand";

// interface FormData {
//   title: string;
//   createdDate: string;
//   technologies: string[];
//   livePageUrl: string;
//   sourceCodeUrl: string;
//   caption: string;
//   filePath: string;
// }
interface FormData {
  title: string;
  setTitle: (title: string) => void;
  date: string;
  setDate: (date: string) => void;
  technologies: string[];
  setTechnologies: (technologies: string[]) => void;
  livePageUrl: string;
  setLivePageUrl: (livePageUrl: string) => void;
  sourceCodeUrl: string;
  setSourceCodeUrl: (sourceCodeUrl: string) => void;
  caption: string;
  setCaption: (caption: string) => void;
  filePath: string;
  setFilePath: (filePath: string) => void;
}

const useFormDataStore = create<FormData>((set) => ({
  title: "",
  setTitle: (title: string) => set({ title }),
  date: "",
  setDate: (date: string) => set({ date }),
  technologies: [],
  setTechnologies: (technologies: string[]) => set({ technologies }),
  livePageUrl: "",
  setLivePageUrl: (livePageUrl: string) => set({ livePageUrl }),
  sourceCodeUrl: "",
  setSourceCodeUrl: (sourceCodeUrl: string) => set({ sourceCodeUrl }),
  caption: "",
  setCaption: (caption: string) => set({ caption }),
  filePath: "",
  setFilePath: (filePath: string) => set({ filePath }),
}));

export default useFormDataStore;
