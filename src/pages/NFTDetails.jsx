import { useParams, Link } from "react-router-dom";
import nftData from "../data/nftData";
import "./NFTDetails.css";

function NFTDetails() {
  const { id } = useParams();

  const nft = nftData.find((item) => item.id === Number(id));

  if (!nft) {
    return (
      <div className="not-found">
        <h1>NFT Not Found</h1>
        <Link to="/">
          <button>Back to Gallery</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="details-page">

      <div className="details-card">

        <img src={nft.image} alt={nft.name} />

        <div className="details-content">

          <h1>{nft.name}</h1>

          <p>
            <strong>Artist:</strong> {nft.artist}
          </p>

          <p>
            <strong>Price:</strong> {nft.price} ETH
          </p>

          <p>
            <strong>Category:</strong> {nft.category}
          </p>

          <p>
            <strong>Blockchain:</strong> {nft.blockchain}
          </p>

          <p>
            <strong>Owner:</strong> {nft.owner}
          </p>

          <p>
            <strong>Description:</strong>
          </p>

          <p>{nft.description}</p>

          <Link to="/">
            <button className="back-btn">
              ← Back to Gallery
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default NFTDetails;