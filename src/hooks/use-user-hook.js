import { useContext } from "react";
import userContext from "../context/users";

function useUserHook () {
    return useContext(userContext);
}

export default useUserHook;