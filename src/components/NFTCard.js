import { Link } from "react-router-dom";
import "./NFTCard.css";

function NFTCard({ nft }) {
  return (
    <div className="card">

      <img src={nft.image} alt={nft.name} />

      <div className="card-body">

        <h2>{nft.name}</h2>

        <p>
          Artist:
          <span>{nft.artist}</span>
        </p>

        <p>
          Price:
          <span>{nft.price} ETH</span>
        </p>

        <p>
          Category:
          <span>{nft.category}</span>
        </p>

        <Link to={`/nft/${nft.id}`}>
          <button>View Details</button>
        </Link>

      </div>

    </div>
  );
}

export default NFTCard;