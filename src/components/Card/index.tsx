import { FC } from "react";
import data from "../../data.json";

export interface Props {
  type: string;
  currentPrice: number;
  totalValue: number;
  icon: string;
  change: number;
  currency?: string;
  pairs: string[];
}

const Card: FC<Props> = ({
  type,
  currentPrice,
  totalValue,
  icon,
  change,
  currency,
  pairs,
}) => {
  return (
    <div
      className="h-65 w-60 bg-[#3d3e42] mx-11 my-20 rounded-2xl border-5 p-2
    border-inherit"
    >
      <div className="flex justify-center">
        <div
          style={{
            background: "#3d3e42",
            borderRadius: "75px",
            height: "120px",
            width: "120px",
            position: "relative",
            bottom: "60px",
            border: "15px solid #14172B",
          }}
        >
          <img
            className="border-5 border-inherit"
            style={{ position: "relative", left: "20px", top: "17px" }}
            src={icon}
            alt="logo"
          />
        </div>
      </div>
      <p className="text-[#808ddb] text-center font-extrabold mb-3">{type}</p>
      <div className="flex px-3 bg-[#14172B] rounded-full py-2 ">
        <div className="text-white decoration-8 font-black ">
          {currency}
          {currentPrice}
        </div>
        {change < 0 ? (
          <div className="text-red-600 font-black ml-12">{change}%</div>
        ) : (
          <div className="text-green-500 font-black ml-12">+{change}%</div>
        )}
      </div>
      <p className="text-[#808ddb] text-center font-extrabold my-2">Price</p>
      <p className="text-white decoration-8 text-center font-black bg-[#14172B] py-2 rounded-full my-1">
        {currency}
        {totalValue}
      </p>
      <p className="text-[#808ddb] text-center font-extrabold my-2">TVL</p>
      <div className="flex justify-center mt-5 bg-[#14172B] py-2 rounded-full my-1">
        {pairs?.map((currentValue: string, index: number) => (
          <img
            key={index}
            className="mx-2 h-5"
            src={
              data.cryptoCurrency.find(
                (currentItem: Props) => currentItem.type === currentValue
              )?.icon
            }
            alt="pairs"
          />
        ))}
      </div>
      <p className="text-[#808ddb] text-center font-extrabold my-2">
        Popular pairs
      </p>
    </div>
  );
};

export default Card;
