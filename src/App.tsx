import { FC } from "react";
import "./App.css";
import Card from "./components/Card";
import data from "./data.json";

interface cryptoCurrency {
  type: string;
  currentPrice: number;
  totalValue: number;
  icon: string;
  change: number;
  currency?: string;
  pairs: string[];
}

const App: FC = () => {
  return (
    <div className="bg-[#14172B] h-full">
      <p className="text-white font-bold p-2">Trending assets</p>
      <div className="flex flex-wrap">
        {data.cryptoCurrency.map((currentValue: cryptoCurrency, index: number) => (
          <Card
            key={index}
            type={currentValue.type}
            icon={currentValue.icon}
            currency={currentValue.currency}
            change={currentValue.change}
            currentPrice={currentValue.currentPrice}
            totalValue={currentValue.totalValue}
            pairs={currentValue.pairs}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
