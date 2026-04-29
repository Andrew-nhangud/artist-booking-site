import "./FeaturedArtist.css";
import ArtistData from "../../data/ArtistData";

export const FeaturedArtist = () => {
  // Destructuring the specific artist data
  const { image, name, location, genre } = ArtistData[4];

  // Safety check: if ArtistData[4] doesn't exist, the app won't crash
  if (!name) return null;

  return (
    <section className="featured">
      <div
        className="featured-image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {/* Overlay for the featured artist image */}
        <div className="overlay">
          <div className="ft-box">featured</div>

          {/* container for the whole feature profile */}
          <div className="ft-info">
            <p className="ft-name">{name}</p>

            {/* container for the artist information */}
            <div className="artist-info">
              <p>{location}</p>
              <p>{genre}</p>
            </div>

            <button className="ft-profile-btn">view profile</button>
          </div>
        </div>
      </div>
    </section>
  );
};
