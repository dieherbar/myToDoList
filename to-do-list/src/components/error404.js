import styles from '@/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function NotFound(props) {
    return (
        <>
            <main>
                
                    <div className={styles.containerError}>
                        <h1>{props.title}</h1>
                        <p>{props.message}</p>
                        {props.children}
                    </div>
                
            </main>

        </>

    );
}