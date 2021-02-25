import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import ClassList from "./ClassList";

const TypeDetail = () => {
  const types = useSelector((state) => state.typeReducer.type);
  const allClasses = useSelector((state) => state.classReducer.clas);
  const { typeSlug } = useParams();

  // const types = useSelector((state) => state.typeReducer.type);
  console.log(types);
  const typez = types.find((type) => type.slug === typeSlug);
  console.log(typez);

  //if (!types) return <Redirect to="/type" />;

  const classes = typez.clas.map((clas) =>
    allClasses.find((_clas) => _clas.id === clas.id)
  );

  return (
    <>
      <h4>{typez.name}</h4>
      <ClassList classes={classes} />
      <Link to={`/type/${typez.id}/classes/new`}>
        <BsPlusCircle className="float-right" size="2em" />
      </Link>
    </>
  );
};
export default TypeDetail;
