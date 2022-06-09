import { getProducts, Product } from '@stripe/firestore-stripe-payments';
import { format } from 'date-fns';
import Head from 'next/head';
import Link from 'next/link';
import Membership from '../components/Membership';
import useAuth from '../hooks/useAuth';
import useSubscription from '../hooks/useSubscription';
import payments from '../lib/stripe';

interface Props {
  products: Product[];
}

export default function Account({ products }: Props) {
  const { user, logout } = useAuth();
  const subscription = useSubscription(user);
  const date = subscription?.created;

  return (
    <div>
      <Head>
        <title>Account - Netflix clone</title>
      </Head>
      <header className="header bg-[#141414]">
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            alt="netflix"
            width={120}
            height={120}
            className="cursor-pointer object-contain"
          />
        </Link>
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </header>

      <main className="pt-24 mx-auto max-w-6xl px-5 pb-12 transition-all md:px-10">
        <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
          <h1 className="text-3xl md:text-4xl">Account</h1>
          <div className="-ml-0.5 flex items-center gap-x-1.5">
            <img src="https://rb.gy/4vfk4r" alt="" className="h-7 w-7" />
            <p className="text-xs font-semibold text-[#555]">
              Member since{' '}
              {date !== undefined ? format(new Date(date), 'MM/dd/yyyy') : null}
            </p>
          </div>
        </div>

        <Membership />

        <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0">
          <h4 className="">Plan Details</h4>
          <div className="col-span-2 font-medium">
            {
              products.filter(
                (product) => product.id === subscription?.product
              )[0]?.name
            }
          </div>
          <button className="block cursor-pointer text-blue-500 hover:underline text-left md:text-right cursor-not-allowed">
            Change plan
          </button>
        </div>

        <div className="t-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0 ">
          <h4 className="text-lg text-[gray]">Settings</h4>
          <button
            className="inline-block text-left cursor-pointer text-blue-500 hover:underline"
            onClick={logout}
          >
            Sign out of all devices
          </button>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const products = await getProducts(payments, {
    includePrices: true,
    activeOnly: true,
  })
    .then((res) => res)
    .catch((err) => console.log(err.message));

  return {
    props: {
      products,
    },
  };
};
