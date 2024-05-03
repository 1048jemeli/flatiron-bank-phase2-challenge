import { useState } from "react";
import "../src/App.css"
import Header from "./assets/components/header";
import Search from "./assets/components/search";
import Form from "./assets/components/form";
import TransTable from "./assets/components/TransTable";

function App() {
  const posts = [
    {
      Date: "2024-12-01",
      Description: "Heater",
      Category: "Electronics",
      Amount: "50",
    },
    {
      Date: "2024-12-02",
      Description: "Summer Dress",
      Category: "Fashion",
      Amount: "150",
    },
    {
      Date: "2024-12-03",
      Description: "Chicken",
      Category: "Food",
      Amount: "100",
    },
    {
      Date: "2019-12-04",
      Description: "Sunglasses, Urban Outfitters",
      Category: "Fashion",
      Amount: -24.99,
    },
    {
      Date: "2019-12-06",
      Description: "Venmo, Alice Pays you for Burrito",
      Category: "Food",
      Amount: 8.75,
    },
    {
      Date: "2019-12-06",
      Description: "Chipotle",
      Category: "Food",
      Amount: -17.59
    },
    {
      Date: "2019-12-07",
      Description: "Birthday Check from Grandma",
      Category: "Gift",
      Amount: 50
    },
    {
      Date: "2019-12-09",
      Description: "Lyft Ride",
      Category: "Transportation",
      Amount: -13.25
    },
    {
      Date: "2019-12-11",
      Description: "Paycheck from Bob's Burgers",
      Category: "Income",
      Amount: 1000
    },
    {
      Date: "2019-12-16",
      Description: "Tickets, Flatiron Multiplex Cinemas",
      Category: "Entertainment",
      Amount: -24
    },
    {
      Date: "2019-12-16",
      Description: "MTA Vending Machine: MetroCard",
      Category: "Transportation",
      Amount: -116.39
    },
    {
      Date: "2019-12-17",
      Description: "Venmo, Pay Roommate for Rent",
      Category: "Housing",
      Amount: -975
    },
    {
      Date: "2024-04-16",
      Description: "Entertaining",
      Category: "Movie",
      Amount: "12.55",
    },
    {
      Date: "2024-04-10",
      Description: "Entertaining",
      Category: "Movie",
      Amount: 12.24,
    },
    {
      Date: "2024-04-10",
      Description: "Entertaining",
      Category: "Movie",
      Amount: "12.24",
    },
    {
      Date: "2024-04-04",
      Description: "Entertaining",
      Category: "Movie",
      Amount: 0.32,
    },
    {
      Date: "2024-04-04",
      Description: "Entertaining",
      Category: "Movie",
      Amount: 0.32,
    },
    {
      Date: "2024-04-04",
      Description: "Entertaining",
      Category: "Movie",
      Amount: 0.32,
    },
    {
      Date: "2024-04-05",
      Description: "Entertaining",
      Category: "Movie",
      Amount: "0.01",
    }
  ];

  const [transactions, setTransactions] = useState(posts);

  const handleSearch = (filteredTransactions) => {
    setTransactions(filteredTransactions);
  };

  return (
    <div className="">
      <Header />
      <Search list={posts} setTransactions={handleSearch} />
      <Form transactions={transactions} setTransactions={setTransactions} />
      <TransTable transactions={transactions} />
    </div>
  );
}

export default App;
