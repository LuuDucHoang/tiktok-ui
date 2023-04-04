import Header from '../Components/Header';
function HeaderOnly({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="Container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
