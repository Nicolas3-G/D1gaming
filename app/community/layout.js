import Header from "../components/shared/Header";


export default function CommunityLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
             <Header />
            {children}
        </div>
    );
}