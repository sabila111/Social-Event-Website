import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const Root = () => {
    return (
        <div>
            <div className="max-w-[1300px] mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;