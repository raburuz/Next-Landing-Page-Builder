import { createContext } from 'react';
import { Website } from '../../interfaces';
import { Components } from '../../interfaces/components';

interface BuildProps extends Website {
  state: {};
  addComponent: (component: Components) => void;
  updateActiveComponent: (component: object) => void;
  activeComponent: (activeComponent: object) => void;
  updateLabelText: (label: string, id:string) => void;
  updateActiveItemList: (component: object) => void;
  changeColorPage: (backgroundColor: string) => void;
  changeTextElement: (component: object) => void;
  addUrlImage: (url: string, id:string) => void;
  deletedComponent: (id: string) => void;
}

export const BuildContext = createContext({} as BuildProps);
