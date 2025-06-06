import React, {useState} from 'react'
function MyComOnChange(){
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPlayment] =useState("Visa")
    const [shipping, setShipping] = useState("Pick UP")
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"])

    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }

    function handleCommentChange(event){
        setComment(event.target.value)
    }

    function handlePaymentChange(event){
        setPlayment(event.target.value)
    }

    function handleShippingChange(event){
        setShipping(event.target.value)
    }

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods(f => [...foods, newFood]);
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((element, i) => i !== index));
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange}></input>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"></input>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instruction'></textarea>
            <p>Payment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type='radio' value="Pick UP" checked={shipping === "Pick UP"} onChange={handleShippingChange}></input>
                Pick Up
            </label>
            <label>
            <input type='radio' value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}></input>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>

            <h2>List of Foods</h2>
            <ul>
                {foods.map((food,index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                </li>)}
            </ul>

            <input type="text" id="foodInput" placeholder='Enter food name'></input>
            <button onClick={handleAddFood}>Add Food</button>
        </div>

        
    )
}

export default MyComOnChange