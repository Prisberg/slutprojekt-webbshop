import { createContext, FC, useContext, useState } from "react";
import { CartContext } from './Context';
import { fakeFetch } from "./ConfirmationFetch";





 export interface ContextValue {
    isLoading: boolean;
    confirm: () => void;
}

export const ConfirmationContext = createContext<ContextValue>({
    isLoading: false,
    confirm: () => {},
});

const UserProvider: FC = (props) => {
    const [isLoading, setLoading] = useState(false);
    const { removeallpructs } = useContext(CartContext);

    const confirm = async () => {
        setLoading(true);
        await fakeFetch("api/confirm");
        // removeallpructs();
        setLoading(false);
    } 

return (
    <ConfirmationContext.Provider value= {{ isLoading, confirm }}>
        {props.children}
    </ConfirmationContext.Provider>
);

};
export default UserProvider;

export const useUser = () => useContext(ConfirmationContext); 