import res from "./setup.jsx"
import styles from '../styles/cart.module.css'

let cartfn = res.cartFunctionality;

export default function Cart() {
  return (
    <div className={styles.cart}>
      <div className={styles.heading}>
        <div>{cartfn.getLength()} Games</div>
        <button onClick={() => {cartfn.clearCart()}}>Clear</button>
      </div>
      <main>
        {
          cartfn.getCart().map((obj) => {
            return (
              <div key={obj.id} className={styles.cartitem}>
                <div className={styles.itemimage}></div>
                <div>
                  <span>{obj.name}</span>
                  <span>${obj.price}</span>
                </div>
                <button onClick={() => {cartfn.removeFromCart(obj.id)}}>X</button>
              </div>
            );
          })
        }
      </main>
      <div className={styles.bottom}>Total: ${cartfn.getTotalPrice()}</div>
    </div>
  );
}