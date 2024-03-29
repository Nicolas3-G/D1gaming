import HeaderCommunity from "../components/shared/HeaderCommunity";


export default function CommunityLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
             <HeaderCommunity />
            {children}
        </div>
    );
}