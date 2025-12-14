import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

function TrainerProfile() {
  const { id } = useParams();
  const [trainer, setTrainer] = useState(null);

  useEffect(() => {
    api.get(`/users/${id}`).then(res => setTrainer(res.data));
  }, [id]);

  const handleFollow = async () => {
    await api.post(`/users/follow/${id}`);
    alert("Trainer followed");
  };

  const handleUnfollow = async () => {
    await api.post(`/users/unfollow/${id}`);
    alert("Trainer unfollowed");
  };

  if (!trainer) return <p>Loading...</p>;

  return (
    <div style={styles.container}>
      <h2>{trainer.name}</h2>
      <p>Email: {trainer.email}</p>

      <button onClick={handleFollow}>Follow</button>
      <button onClick={handleUnfollow}>Unfollow</button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "30px auto",
    color: "#fff"
  }
};

export default TrainerProfile;
