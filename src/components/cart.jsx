import res from "./setup.jsx"
import styles from '../styles/cart.module.css'
import { useState } from "react";

let cartfn = res.cartFunctionality;

export default function Cart() {

  const [num, setNum] = useState(cartfn.getLength());
  let reference = cartfn.getLength();

  return (
    <div className={styles.cart}>
      <div className={styles.heading}>
        <div>{num == reference ? num : reference} Games</div>
        <button onClick={() => {
          cartfn.clearCart();
          setNum((prev) => {return prev + 1});
          }}>Clear</button>
      </div>
      <main>
        {
          cartfn.getCart().map((obj) => {
            return (
              <div key={obj.id} className={styles.cartitem}>
                <div className={styles.itemimage} style={{backgroundImage: 'url(' + obj.image + ')'}}></div>
                <div>
                  <button onClick={() => {
                    cartfn.removeFromCart(obj.id);
                    setNum(cartfn.getLength());
                    }}>X</button>
                  <span>{obj.name}</span>
                  <span>${obj.price}</span>
                </div>
              </div>
            );
          })
        }
      </main>
      <div className={styles.bottom}>Total: ${cartfn.getTotalPrice()}</div>
    </div>
  );
}