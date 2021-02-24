import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import ClassList from "./ClassList";

const TypeDetail = ({ types }) => {
  const allClasss = useSelector((state) => state.classReducer.clas);
  const { typeId } = useParams();

  //   const types = useSelector(
  //     (state) => state.typeReducer.type //.find((type) => type.id === typeId)
  //   );
  const type = types.find((type) => type.id === typeId);
  console.log(types);

  //if (!types) return <Redirect to="/type" />;

  const classes = type.clas.map((clas) =>
    allClasss.find((_clas) => _clas.id === clas.id)
  );

  return (
    <>
      <h4>{type.name}</h4>
      <ClassList classes={classes} />
      {/* <UpdateButton classes={type.classes} /> */}
      <Link to={`/type/${type.id}/classes/new`}>
        <BsPlusCircle className="float-right" size="2em" />
      </Link>
    </>
  );
};
export default TypeDetail;
