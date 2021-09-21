import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>
        hello world
      </h1>
      <ul>
        <li>
          <Link href="/about"><a >Sobre</a></Link>
        </li>
        <li>
          <Link href="/categories/products"><a >Produtos</a></Link>
        </li>
      </ul>
    </>
  )
}
