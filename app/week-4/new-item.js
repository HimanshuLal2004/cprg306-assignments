import { useState } from "react";

export default function NewEvent() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("");
    const [listCreated, setListCreated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newEvent = {
            name,
            quantity,
            category
        };
        console.log(newEvent);

        setListCreated(true);

        setName("");
        setQuantity("");
        setCategory("");
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return(
        <div>
            <div className="min-h-[100px] flex justify-center items-center">
                {listCreated && 
                    (
                        <div className="absolute top-0 mt-8 mb-0 text-blue-400 text-2xl">
                            List Created
                        </div>
                    )
                }
            </div>

            <div className="w-full bg-white p-8 rounded-lg shadow-md">
                <h1 className = "text-2xl text-gray-800 font-bold mb-8">
                    create new item list
                </h1>
                <form onSubmit={handleSubmit}>
                    <label className="block mb-4">
                        <span className = "text-gray-800">item name: </span>
                        <input
                            required
                            onChange = {handleNameChange}
                            value={name}
                            className = "mt-1 p-2 block w-full rounded-md text-black bg-gray-100 focus:bg-white border border-gray-300"/>
                    </label>

                    <label className="block mb-4">
                        <span className = "text-gray-800">Quantity: </span>
                        <input
                            required
                            type="number" 
                            min="1"       
                            max="99"      
                            onChange = {handleQuantityChange}
                            value={quantity}
                            className = "mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white border border-gray-300"/>
                    </label>

                    <label className="block mb-4">
                        <span className = "text-gray-800">Category: </span>
                        <select
                            required
                            onChange = {handleCategoryChange}
                            value={category}
                            className = "mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white border border-gray-300">
                            
                            <option value="">Select a category</option>
                            <option value="Produce">Produce</option> 
                            <option value="Canned Goods">Canned Goods</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Meat">Meat</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Dry Goods">Dry Goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Frozen Foods">Frozen Foods</option>
                            <option value="Household">Household</option>
                            <option value="Other">Other</option>
                        </select>    
                    </label>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md">
                            +
                    </button>
                </form>
            </div>
        </div>
    );





}