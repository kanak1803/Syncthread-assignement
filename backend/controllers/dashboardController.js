const dummyCards = [
    { id: 1, title: "Card 1", description: "Description of Card 1" },
    { id: 2, title: "Card 2", description: "Description of Card 2" },
    { id: 3, title: "Card 3", description: "Description of Card 3" },
  ];
  
  exports.getDashboardData = (req, res) => {
    res.json(dummyCards);
  };
  