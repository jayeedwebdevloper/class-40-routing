import { Outlet } from "react-router-dom";
import Header from "./Header";

const Controller = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Controller;