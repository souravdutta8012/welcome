import { createContext, useContext, useEffect, useReducer } from "react";
import { Identities } from "../Constant";
import { getLight } from "./Function";

type Action = { type: "setUserAuth"; payload: { auth: any } };
type Dispatch = (action: Action) => void;
type Props = { children: React.ReactNode };

export type State = {
    auth: any;
};

export const UserStateContext = createContext<State | undefined>(
    undefined
);

export const UserDispatchContext = createContext<Dispatch | undefined>(
    undefined
);

export const userReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "setUserAuth": {
            const auth = { ...action.payload.auth };

            return {
                ...state,
                auth,
            };
        }
    }
};

const findUser = (name: string) => {
    let user = undefined;
    Identities?.forEach((i: any) => {
        if (i?.name?.toLowerCase()?.replaceAll(" ", "") === name?.toLowerCase().replaceAll(" ", "")) {
            localStorage.setItem("name", name?.toLowerCase().replaceAll(" ", ""));
            user = i;
        }
    });
    return user;
};

export const UserProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(userReducer, {
        ...initialUserState,
    });

    useEffect(() => {
        async function getUser() {
            let name: any = window?.location?.pathname?.split("/");
            name = name.pop();
            name = decodeURIComponent(name);
            const auth = findUser(name);
            if (auth === undefined) return;
            dispatch({ type: "setUserAuth", payload: { auth: auth } });

            let light = getLight();
            const root: HTMLElement = window.document.documentElement;
            root.removeAttribute("class");
            root.classList.add(light ? "light" : "dark");
            localStorage.setItem("theme", light ? "light" : "dark");
        }
        getUser();
    }, []);

    return (
        <UserStateContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    );
};

export const useUserDispatch = () => {
    const context = useContext(UserDispatchContext);
    if (context === undefined) {
        throw new Error("useUserDispatch must be used within a UserProvider");
    }
    return context;
};

export const useUserState = () => {
    const context = useContext(UserStateContext);
    if (context === undefined) {
        throw new Error("useUserState must be used within a UserProvider");
    }
    return context;
};

const initialUserState: State = {
    auth: {
        firstname: "",
        lastname: "",
        email: "",
        name: "",
        image: "",
        video: "",
    },
};
