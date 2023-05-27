import FooterBar from "./Footer";
import Header from "./Header";

export default function Layout({children}){
    return <div>
        <Header></Header>
        {children}
        <FooterBar></FooterBar>
    </div>
}