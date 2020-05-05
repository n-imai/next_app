import Link from 'next/link';
import Layout from '../components/Layout';
import Image from '../static/Image'

export default () => (
  <Layout header="Next" title="Top page.">
    <p>Welcome to next.js!</p>
    <Image fname="image.jpg" size="250" />
    <ht />
    <Link href="./other"><button>
      go to Other &gt;&gt;
    </button></Link>
  </Layout>
);