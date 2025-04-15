export const getDashboard = (req, res) => {
  const cards = [
    { id: 1, title: "Mission Alpha", description: "Secure Zone A" },
    { id: 2, title: "Mission Bravo", description: "Survey Zone B" },
    { id: 3, title: "Mission Charlie", description: "Recon Zone C" },
    { id: 4, title: "Mission Echo ", description: "Secure Zone D" },
    { id: 5, title: "Mission Foxtrot ", description: "Survey Zone E" },
    { id: 6, title: "Mission Golf ", description: "Recon Zone F" },
  ];
  res.json(cards);
};
