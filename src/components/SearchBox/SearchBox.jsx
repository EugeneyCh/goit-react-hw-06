import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { setFilter } from "../../redux/filtersSlice";

function SearchBox() {
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={(e) => dispatch(setFilter(e.target.value))}
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBox;
