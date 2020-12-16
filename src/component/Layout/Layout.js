import React from "react";
import Classes from "./Layout.module.scss";
import { Container } from "react-bootstrap";
import NavBar from "../../component/NavBar/Navigation";
import Footer from "../Footer/Footer";
function Layout(props) {
    return (
        <div className={Classes.AppContainer}>
            <NavBar />
            <Container className={Classes.SubContainer}>{props.children}</Container>
            <Footer />
        </div>
    );
}

export default Layout;
