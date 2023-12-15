import React, { createContext, useContext, useEffect, useState } from "react";
import { getById } from "../../services/api";
import ItemPage from "../../components/ItemPage/ItemPage"

type ItemContextType = {
    item: any;
    loading: boolean;
    setItem: React.Dispatch<React.SetStateAction<any>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  };
  
  const ItemContext = createContext<ItemContextType | undefined>(undefined);
  
  export const useItemContext = () => {
    const context = useContext(ItemContext);
    if (!context) {
      throw new Error("useItemContext must be used within an ItemContextProvider");
    }
    return context;
  };
  
  export const ItemContextProvider: React.FC<{ id: string }> = ({ id, children }) => {
    const [item, setItem] = useState<any>();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      (async () => {
        try {
          const data = await getById(id);
          setItem(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false);
        }
      })();
    }, [id]);
  
    return (
      <ItemContext.Provider value={{ item, loading, setItem, setLoading }}>
        {children}
      </ItemContext.Provider>
    );
  };