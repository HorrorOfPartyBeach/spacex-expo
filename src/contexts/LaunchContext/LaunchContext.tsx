import {
  ReactNode,
  createContext,
  useContext,
  useState,
  FC,
  useCallback,
} from "react";

import { GetLaunchesAPI } from "../../api/GetLaunches";

interface Props {
  children?: ReactNode;
}

interface ILaunchContext {
  listLaunches: () => object;
  items: any[];
  sort: boolean;
  setSort: () => string;
  filter: string;
  setFilter: () => string;
}

const launchContextDefaults = {
  listLaunches: () => {},
  items: [],
  sort: false,
  setSort: () => "",
  filter: "",
  setFilter: () => "",
};

export const LaunchContext = createContext<ILaunchContext>(
  launchContextDefaults
);
export const useLaunchContext = () => useContext(LaunchContext);

export const LaunchProvider: FC = ({ children }: Props) => {
  const [items, setItems] = useState([]);
  const [sort, setSort] = useState<boolean>(false);
  const [filter, setFilter] = useState("");

  return (
    <LaunchContext.Provider
      value={{
        listLaunches: useCallback(async () => {
          setFilter("");
          const response = await GetLaunchesAPI();
          setItems(response);
        }, []),
        items,
        sort,
        setSort,
        filter,
        setFilter,
      }}
    >
      {children}
    </LaunchContext.Provider>
  );
};
