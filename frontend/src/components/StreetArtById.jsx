import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function StreetArtById() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3310/api/streetArt/${id}`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails du Street Art :",
          error
        );
      }
    };

    fetchData();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{data.name}</h2>
      <img src={data.linkImage} alt={`StreetArt ${id}`} />
      <p>{data.description}</p>
    </div>
  );
}

export default StreetArtById;
