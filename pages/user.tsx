import Link from 'next/link'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>user</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
