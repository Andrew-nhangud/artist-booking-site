import "./Browser.css";
import ArtistData from "../../data/ArtistData.js";
import { Navbar } from "../../components/Navbar/Navbar.jsx";
import { FeaturedArtist } from "../../components/FeaturedArtist/FeaturedArtist.jsx";

export const Browser = () => {
  return (
    <section>
      <Navbar /> {/* calling the navbar */}
      <FeaturedArtist />
      <div className="align">
        <h1 className="title">Artists</h1>
        <p className="browser-info">
          Explore our curated roster of extraordinary talent. Select an artist
          to view their full profile and submit a booking request.
        </p>
        <div className="card-container">
          {ArtistData.map((artist, id) => (
            <div className="card" key={artist.id}>
              <div className="available-container">
                <img
                  className="artist-img"
                  src={artist.image}
                  alt="Artist images"
                />
                <div className="visibility">
                  {artist.isAvailable === true ? (
                    <p className="indicator ">
                      <span className="green"></span>Available
                    </p>
                  ) : (
                    <p className="indicator">
                      <span className="red"></span>Unavailable
                    </p>
                  )}
                </div>
              </div>
              <p className="artist-name">{artist.name} </p>
              <div className="basicInfo">
                <p>{artist.genre}</p>
                <p>{artist.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
