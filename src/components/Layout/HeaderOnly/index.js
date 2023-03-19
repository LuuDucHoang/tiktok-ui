import Header from '../Components/Header';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="Container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
