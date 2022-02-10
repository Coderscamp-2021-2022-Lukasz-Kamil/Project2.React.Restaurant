import {
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./DishForm.module.css";

const DishFormControl = (props) => {

    return (
        <FormControl
            className={`p-2 mb-3 shadow-none text-white ${styles.input}`}
            style={{ backgroundColor: "#5E5B5B", borderColor: "transparent" }}
            placeholder={props.placeholder}
            type="text"
            value={props.value}
            onChange={props.onChange}
            required
        />
    );
}

export default DishFormControl;

