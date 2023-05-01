import Footer from "./Footer";
import Navigation from "./Navigation";
import styles from '@/styles/Home.module.css';

export default function Layout(props) {
    return (
      <div >
        <header>Este es el encabezado</header>
        <Navigation ></Navigation>
        <main>{props.children}</main>
        <Footer />
      </div>
    );
  }