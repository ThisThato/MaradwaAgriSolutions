const transactions = [
  {
    type: "dr",
    category: "Inventory",
    description: "Bought 100 day olds from Poultek",
    amount: 840,
    unitPrice: 8.4,
    qty: 100,
    lineTotal: 840,
  },

  {
    type: "dr",
    category: "Feeds",
    description: "Bought 50 Kg classic starter feeds from Poultek",
    amount: 342,
    qty: 1,
    lineTotal: 342,
  },
  {
    type: "cr",
    category: "Sales",
    description: "Sold 5 chickens to Moropa EM",
    amount: 325,
    unitPrice: 65,
    qty: 5,
    lineTotal: 325,
  },
  {
    type: "dr",
    category: "Operating Expenses",
    description: "Bought Petrol",
    amount: 300,
    qty: 1,
    lineTotal: 300,
  },
  {
    type: "cr",
    category: "Sales",
    description: "Sold 10 chickens to Mothiba LM",
    amount: 650,
    unitPrice: 65,
    qty: 10,
    lineTotal: 650,
  },
  {
    type: "dr",
    category: "Feeds",
    description: "Bought 50 kg classic grower feeds from Poultek",
    amount: 337,
    qty: 2,
    lineTotal: 674,
  },
];

export default transactions;
