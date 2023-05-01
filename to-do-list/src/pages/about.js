import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Boton from '@/components/button';
import Layout from '@/components/Layout';

export default function about() {
    return (
        <>
            <Head>
                <title>To Do List</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>

                <Layout >
                    <div className={styles.container}>
                        <h1>Este es el sitio about de mi sitio del about.js</h1>
                        <p>Este es el texto del about page</p>
                        <p>Because React-Bootstrap doesn't depend on a very precise version of Bootstrap, we don't ship with any included CSS. However, some stylesheet is required to use these components.</p>
                        
                    </div>
                </Layout>


            </main>
        </>
    )
}