import Head from 'next/head'

export default function CheckoutPage() {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <main className="min-h-screen flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
          <h1 className="text-2xl font-bold mb-4">Checkout (Demo)</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            This is a placeholder checkout page. Implement payment integration or order flow here.
          </p>
        </div>
      </main>
    </>
  )
}
