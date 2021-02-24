import { Redirect, useParams } from "react-router-dom";

// Styling

import { useSelector } from "react-redux";

const ClassDetail = () => {
  const { classSlug } = useParams();

  //   const claz = useSelector((state) =>
  //     state.classReducer.clas.find((cls) => cls.slug === clasSlug)
  //   );
  const saf = useSelector((state) =>
    state.classReducer.clas.find((saf) => saf.slug === classSlug)
  );
  //if (!clas) return <Redirect to="/class" />;

  return (
    <div>
      <h1>{saf.name}</h1>
      <p>{saf.type}</p>
      <p>{saf.price} </p>
      <p>{saf.type}</p>
      <p>{saf.date}</p>
      <p>{saf.time}</p>
      <p>{saf.numberofseats}</p>
      <p>{saf.seatsbooked}</p>
    </div>
  );
};

export default ClassDetail;
