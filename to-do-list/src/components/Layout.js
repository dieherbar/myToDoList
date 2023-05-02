import Footer from "./Footer";
import Navigation from "./Navigation";
import CustomMain from "./Main";


export default function Layout(props) {
    return (
      <div >
        <header>Este es el encabezado</header>
        <Navigation ></Navigation>
        <CustomMain></CustomMain>
        <main>{props.children}</main>
        <Footer />
      </div>
    );
  }