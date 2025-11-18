import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import ProductGrid from "../components/ProductGrid";
import ThemeToggle from "../components/ThemeToggle";
import type { Product } from "./api/products";
import CartIcon from "../components/CartIcon";

type Props = {
  products: Product[];
};

const Home: NextPage<Props> = ({ products }) => {
  return (
    <>
      <Head>
        <title>Products — Product Card</title>
        <meta
          name="description"
          content="Product Card UI with Next.js & Tailwind"
        />
      </Head>

      <main className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <ThemeToggle />
        <CartIcon />
        <section className="max-w-7xl mx-auto mt-10">
          <div className="sticky top-0 z-40 bg-gray-50 dark:bg-gray-900 py-4">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
              Products
            </h1>
          </div>
          <ProductGrid products={products} />
        </section>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Build absolute URL to call our API route server-side
  const proto = context.req.headers["x-forwarded-proto"] ?? "http";
  const host = context.req.headers.host;
  const base = `${proto}://${host}`;

  const res = await fetch(`${base}/api/products`);
  const products: Product[] = await res.json();

  return {
    props: { products },
  };
};

export default Home;
