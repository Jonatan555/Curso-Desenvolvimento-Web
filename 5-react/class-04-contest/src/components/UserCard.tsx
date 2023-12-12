import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

 export function UserCard() {
    const {name} = useContext(UserContext);
    return (
        <>
        <h2>{name}</h2>
        <p> Web Developer </p>
        </>
    );
 }