import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

import Button from '../components/button'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1>Tyler VanBeveren</h1>
        <p>Web developer.</p>
        <Button 
          label="View menu" 
          path="/menu" 
          type="primary"
        />
        <Button 
          label="View portfolio" 
          path="/portfolio" 
          type="primary"
        />
        <Button 
          label="About me"
          path="/about"
          type="secondary"
        />
      </section>
    </Layout>
  )
}