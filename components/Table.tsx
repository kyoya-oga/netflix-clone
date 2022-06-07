import { CheckIcon, ClockIcon } from '@heroicons/react/solid';
import { Product } from '@stripe/firestore-stripe-payments';

interface Props {
  products: Product[];
  selectedPlan: Product | null;
}

export default function Table({ products, selectedPlan }: Props) {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="tableRow">
          <th className="tableDataTitle">Monthly price</th>
          {products.map((product) => (
            <td
              key={product.id}
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? 'text-[#e50914]'
                  : 'text-[gray]'
              }`}
            >
              JPY {product.prices[0].unit_amount}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <th className="tableDataTitle">Video quality</th>
          {products.map((product) => (
            <td
              key={product.id}
              className={`tableDataFeature capitalize ${
                selectedPlan?.id === product.id
                  ? 'text-[#e50914]'
                  : 'text-[gray]'
              }`}
            >
              {product.metadata.videoQuality}
            </td>
          ))}
        </tr>

        <tr className="tableRow">
          <th className="tableDataTitle">Resolution</th>
          {products.map((product) => (
            <td
              key={product.id}
              className={`tableDataFeature capitalize ${
                selectedPlan?.id === product.id
                  ? 'text-[#e50914]'
                  : 'text-[gray]'
              }`}
            >
              {product.metadata.resolution}
            </td>
          ))}
        </tr>

        <tr className="tableRow">
          <th className="tableDataTitle">
            Watch on your TV, computer, mobile phone and tablet
          </th>
          {products.map((product) => (
            <td
              key={product.id}
              className={`tableDataFeature capitalize ${
                selectedPlan?.id === product.id
                  ? 'text-[#e50914]'
                  : 'text-[gray]'
              }`}
            >
              {product.metadata.portability === 'true' ? (
                <CheckIcon className="inline-block h-8 w-8" />
              ) : (
                <ClockIcon className="inline-block h-8 w-8" />
              )}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
