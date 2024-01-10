import PropTypes from 'prop-types';
import {
  createContext, useContext, useMemo, useState,
} from 'react';

const defaultStore = {
  closeHeaderHandler: null,
};

export const AppContext = createContext();

export const CtxProvider = ({
  children,
}) => {
  const [store, setStore] = useState(defaultStore);

  const value = useMemo(() => ({
    store, setStore,
  }), [store]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

CtxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  return [ctx.store, ctx.setStore];
};
