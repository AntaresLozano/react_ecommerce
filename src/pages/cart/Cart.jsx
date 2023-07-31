import { ProductsContext } from '../../context/products.context';
import { useContext } from 'react';
import './Cart.css';

const Cart = () => {
  const { cartProducts } = useContext(ProductsContext);

  const uniqueProducts = [...new Set(cartProducts.map((product) => product))];

  const productQuantity = (id) => {
    let quantity = 0;
    cartProducts.forEach((product) => {
      if (product.id === id) {
        quantity += 1;
      }
    });
    return quantity;
  };

  const agregarCantidadRepetidos = (productos) => {
    const productosConCantidad = productos.map((product) => ({ ...product }));

    for (const producto of productosConCantidad) {
      const cantidad = productQuantity(producto.id);
      producto.quantity = cantidad;
    }

    return productosConCantidad;
  };

  const productosConCantidad = agregarCantidadRepetidos(uniqueProducts);
  const totalPrice = cartProducts.reduce((acumulador, elemento) => acumulador + elemento.price, 0);

  const columnsWide = {
    primera: { width: '100px' },
    segunda: { width: '330px' },
    tercera: { width: '20px' },
    cuarta: { width: '80px' },
    quinta: { width: '80px' },
  };

  console.log(productosConCantidad)
  return (
    <>
      <div className="cart_container">
        <table className="cart_table">
          <thead>
            <tr className="cart_columns">
              <th style={columnsWide.primera}>Producto</th>
              <th style={columnsWide.segunda}>Nombre del producto</th>
              <th style={columnsWide.tercera}>Cantidad</th>
              <th style={columnsWide.cuarta}>Precio</th>
              <th style={columnsWide.quinta}>Total</th>
            </tr>
          </thead>
          <tbody>
            {productosConCantidad.map((product) => {
              const total = product.price * product.quantity;
              return (
                <tr key={product.id} className="cart_product">
                  <td style={columnsWide.primera}><img src={product.image} alt={product.title} /></td>
                  <td style={columnsWide.segunda}>{product.title}</td>
                  <td style={columnsWide.tercera}>{product.quantity}</td>
                  <td style={columnsWide.cuarta}>${product.price}</td>
                  <td style={columnsWide.quinta}>${total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="order_summary">
            <div className="summary_title">
              <h1>Order summary</h1>
            </div>
            <div className="summary">
              <p>ITEMS {cartProducts.length}</p>
              <p>TOTAL ${totalPrice.toFixed(3)}</p>
            </div>
      </div>
    </>

  );
};

export default Cart;
