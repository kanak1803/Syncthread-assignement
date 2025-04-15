export const getDashboard = (req, res) => {
  const cards = [
    { id: 1, title: "Mission Alpha", description: "Secure Zone A" },
    { id: 2, title: "Mission Bravo", description: "Survey Zone B" },
    { id: 3, title: "Mission Charlie", description: "Recon Zone C" },
  ];
  res.json(cards);
};
