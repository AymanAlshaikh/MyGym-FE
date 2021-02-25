import { Redirect, useParams } from "react-router-dom";

// Styling

import { useSelector } from "react-redux";

const GymDetail = () => {
  const { gymSlug } = useParams();
  //const gym = useSelector((state) => state.gymReducer.gym);
  const gyms = useSelector((state) =>
    state.gymReducer.gym.find((gyms) => gyms.slug === gymSlug)
  );
  const typez = useSelector((state) => state.typeReducer.type);
  console.log(typez);
  if (!gyms) {
    return <Redirect to="/gym" />;
  }
  //   const types = gyms.type.map((no3) =>
  //     typez.find((no32) => no3.id === no32.id)
  //   );

  return (
    <div>
      <h1>{gyms.name}</h1>
    </div>
  );
};

export default GymDetail;
