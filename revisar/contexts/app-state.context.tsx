// import { createContext, useContext, useReducer, useCallback, useMemo } from "react";
// import {CurrentPageReducerDTO, IAppStateContext, IAppStateProvider} from "@/revisar/contexts/app-state.models";
//
// const AppStateContext = createContext<IAppStateContext>({
//     currentPage: "",
//     changeCurrentPage: () => {}
// });
//
// const currentPageReducer = (state: string, action: CurrentPageReducerDTO) => {
//     switch (action.type) {
//         case "RETURN_HOME":
//             return "home";
//         case "UPDATE":
//             return action.payload;
//         default:
//             return state;
//
//     }
// }
// export const AppStateProvider = ({ children, initialPage }: IAppStateProvider) => {
//     const [currentPage, dispatchCurrentPage] = useReducer(currentPageReducer, initialPage);
//
//     const changeCurrentPage = useCallback((page: string) => {
//         dispatchCurrentPage({ type: "UPDATE", payload: page })
//     }, []);
//
//     const value = useMemo(() => {
//         currentPage,
//         changeCurrentPage
//     }, []);
//
//     return (
//         <AppStateContext.Provider value={value}>
//             {children}
//         </AppStateContext.Provider>
//     );
// };
//
// export const useAppState = () => {
//     return useContext(AppStateContext)
// }
