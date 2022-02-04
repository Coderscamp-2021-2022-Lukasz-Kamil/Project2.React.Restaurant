import Modal from "./Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  return (
    <Modal>
      <div className={classes.total}>
        <span>Are you sure you want to permanently remove this item?</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          YES
        </button>
        <button className={classes.button} onClick={props.onClose}>
          NO
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
