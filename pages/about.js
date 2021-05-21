import Head from 'next/head'

import Layout from '../components/layout'

export default function About() {
    return (
        <Layout>
            <Head>
                <title>
                    About | Tyler VanBeveren
                </title>
                <meta name="description" content="An about page"/>
            </Head>
            <h1>About</h1>
        </Layout>
    )
}