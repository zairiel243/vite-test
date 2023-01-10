import { createContext, FC, useEffect, useState } from "react";

import BaseComponentProps from "../interfaces/BaseComponentProps";

const initialGlobalState: BaseComponentProps = {
  isDarkMode: false,
  setIsDarkMode: () => {}
}

type Props = {
  children: JSX.Element | JSX.Element[]
}

export type GlobalContextType = {
  isDarkMode: Boolean,
  setIsDarkMode: Function
}

export const GlobalContext = createContext<BaseComponentProps>(initialGlobalState);

export const GlobalContextProvider: FC<Props> = ({ children }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const contextValues: BaseComponentProps = {
    isDarkMode, setIsDarkMode
  }

  return(
    <GlobalContext.Provider
      value={contextValues}
    >
      {children}
    </GlobalContext.Provider>
  )
}