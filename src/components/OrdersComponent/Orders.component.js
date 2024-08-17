import { getOrders } from "../../utils/Firebase/Firebase.utils.js";
import { useEffect, useContext, useState } from "react";
import { Usercontext } from "../../contexts/user.context.js";

const OrdersComponent = () => {
  const [ordersObj, setOrdersObj] = useState([]); // Initialize with an empty array
  const { currentUser } = useContext(Usercontext);
  console.log("current user in orders", currentUser);

  const getOrdersInComponent = async () => {
    if (currentUser?.uid) {
      try {
        const orders = await getOrders(currentUser.uid);
        setOrdersObj(orders);
        console.log(orders, "obj");
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    }
  };

  useEffect(() => {
    getOrdersInComponent();
  }, [currentUser]);

  return (
    <div className="orders">
      <h1 style={{ color: "black" }}>Here are your orders</h1>
      {ordersObj.length > 0 ? (
        ordersObj.map((order, index) => (
          <div key={index}>
            <h2>Order Date: {order.orderDate.toDate().toLocaleString()}</h2>
            <div style={{ display: "flex", gap: "20px" }}>
              {order.cartItems.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    style={{ width: "100px" }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No orders found</p>
      )}
    </div>
  );
};

export default OrdersComponent;
