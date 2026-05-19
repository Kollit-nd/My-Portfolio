const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const mockDataPath = path.join(__dirname, "mock-data.json");
const products = JSON.parse(fs.readFileSync(mockDataPath, "utf-8"));

function findProduct(query) {
  const normalizedQuery = (query || "").toLowerCase();

  return products.find((item) => {
    return item.keywords.some((keyword) => normalizedQuery.includes(keyword));
  });
}

app.post("/api/check-stock", (req, res) => {
  const { query } = req.body || {};

  if (!query || typeof query !== "string") {
    return res.status(400).json({
      error: "Query is required and must be a string."
    });
  }

  const match = findProduct(query);

  if (!match) {
    return res.json({
      product: "Unknown Product",
      status: "Out of Stock",
      store: "Instamart Dark Store - Nearest Hub",
      distance: "N/A",
      eta: "Unavailable"
    });
  }

  return res.json({
    product: match.product,
    status: match.status,
    store: match.store,
    distance: match.distance,
    eta: match.eta
  });
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`ShelfCheck AI mock server running on http://localhost:${PORT}`);
});
