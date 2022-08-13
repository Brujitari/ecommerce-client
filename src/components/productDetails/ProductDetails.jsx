import "./productdetails.scss"
import itemImage from "../../assets/img/Rectangle 37.png";
import { useForm } from "react-hook-form";



export const ProductDetails = () => {
  const { register, handleSubmit } = useForm();
  const rating = 5;

  const onSubmit = (d) => console.log(d);


  return (
    <div className="product-details">
      <div className="item-container">
        <div className="item-container_img">
          <img src={itemImage} alt="" />
        </div>
        <div className="item-container_info">

          <div className="item-container_info_text">
            <h2>Nombre Producto</h2>

            <p>Descripcion: amet consectetur adipisicing elit. Provident velit sint magnam error delectus beatae! Repellendus, eius suscipit dignissimos vel quam aut expedita doloremque placeat magnam, eligendi molestiae nisi labore minima. Accusamus ipsa beatae, reprehenderit, atque aspernatur, mollitia fugiat facere itaque nobis et labore. </p>

            <div className="rating">
            {Array(rating)
              .fill()
              .map((_, i)=>(
                <p>&#11088;</p>
              ))}
            </div>


            <h3>Eur 1200.00</h3>

          </div>

          <div className="item-container_info_action">

              <form onSubmit={handleSubmit(onSubmit)}>

                <input type="text" {...register("id")} value="Cambiar este valor por el product id" hidden/>

                <div className="quantity-input">
                    <label htmlFor="">Quantity</label>
                    <input type="text" {...register("quantity")} className="input-size" value="0"/>
                </div>

                <input type="submit" value="Add to Cart" className="input-size button-style" />
              </form>

          </div>
        </div>
      </div>
    </div>
  )
}
