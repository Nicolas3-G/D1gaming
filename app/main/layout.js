import HeaderCommunity from "../components/shared/HeaderCommunity";
import NavFooter from "../components/shared/NavFooter";


export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            {children}
            <NavFooter />
        </div>
    );
}