"use client";
import Sidebar from '../sidebar';
import { useState, useEffect } from "react";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

function Page() {
    const [exptotal, setExpTotal] = useState(0);
    const [newexpItem, setExpNewItem] = useState({ categorie: "", type: "exp", itemname: "", price: "", date: "" });
    const [showMessage, setShowMessage] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!newexpItem.categorie.trim() || !newexpItem.itemname.trim() || !newexpItem.price.trim() || !newexpItem.date.trim()) {
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 4000);
        } else {
            setShowMessage(false);
            addItem();
        }
    };

    const addItem = async () => {
        if (newexpItem.categorie && newexpItem.itemname && newexpItem.price && newexpItem.date) {
            try {
                await addDoc(collection(db, "expenses"), {
                    categorie: newexpItem.categorie,
                    type: "exp",
                    itemname: newexpItem.itemname,
                    price: parseFloat(newexpItem.price),
                    date: newexpItem.date
                });
                setExpNewItem({ categorie: "", type: "exp", itemname: "", price: "", date: "" });
                setShowSuccess(true);
                setTimeout(() => setShowSuccess(false), 4000);
            } catch (error) {
                console.error("Error adding item: ", error);
            }
        }
    };

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'expenses'), (querySnapshot) => {
            let total = 0;
            querySnapshot.forEach((doc) => {
                const item = doc.data();
                total += parseFloat(item.price);
            });
            setExpTotal(total);
        });
        return () => unsubscribe();
    }, []);

    return (
        <>
            <Sidebar />
            <div className='p-4 sm:ml-64'>
                <div className='flex flex-col md:flex-row items-center justify-center md:gap-2 rounded-xl bg-[#010101] py-6'>
                    <h1 className='text-white md:pr-4 text-center text-2xl font-medium mb-4 md:mb-0'>Total Expenses :</h1>
                    <p className='text-[#7F5AF0] font-semibold text-2xl mt-1'>${exptotal}</p>
                </div>

                <div className="relative flex text-gray-800 antialiased flex-col justify-center overflow-hidden">
                    <div className="relative py-3 sm:w-[500px] mx-auto text-center">
                        <form className="mt-4 bg-[#010101] text-white shadow-md rounded-lg text-left" onSubmit={handleSubmit}>
                            <div className="h-2 bg-[#7F5AF0] rounded-t-md"></div>
                            <div className="px-8 py-6">
                                <label className="block font-semibold pb-2">Enter Category</label>
                                <select
                                    className="focus:ring-indigo-500 focus:ring-1 rounded-md text-[#010101] w-full px-4 py-3 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-800"
                                    value={newexpItem.categorie}
                                    onChange={(e) => setExpNewItem({ ...newexpItem, categorie: e.target.value })}
                                >
                                    <option value="" disabled selected hidden>Category</option>
                                    <option value="🍔">🍔 Food</option>
                                    <option value="🚗">🚗 Cars</option>
                                    <option value="🛒">🛒 Shopping</option>
                                    <option value="💡">💡 Electricity</option>
                                    <option value="✈️">✈️ Traveling</option>
                                    <option value="🏠">🏠 Housing</option>
                                    <option value="🏥">🏥 Health care</option>
                                    <option value="🍷">🍷 Entertainment</option>
                                </select>

                                <label className="block font-semibold pt-3">Enter Item</label>
                                <input
                                    type="text"
                                    placeholder="Enter Item"
                                    value={newexpItem.itemname}
                                    onChange={(e) => setExpNewItem({ ...newexpItem, itemname: e.target.value })}
                                    className="border w-full h-12 px-3 py-2 mt-2 rounded-md text-[#010101]"
                                />

                                <label className="block font-semibold pt-3">Enter Price</label>
                                <input
                                    type="text"
                                    placeholder="Enter Price"
                                    value={newexpItem.price}
                                    onChange={(e) => setExpNewItem({ ...newexpItem, price: e.target.value })}
                                    className="border w-full h-12 px-3 py-2 mt-2 rounded-md text-[#010101]"
                                />

                                <label className="block font-semibold pt-3">Enter Date</label>
                                <input
                                    type="date"
                                    value={newexpItem.date}
                                    onChange={(e) => setExpNewItem({ ...newexpItem, date: e.target.value })}
                                    className="border w-full h-12 px-3 py-2 mt-2 rounded-md text-[#010101]"
                                />

                                <div className="flex justify-between items-baseline pt-3">
                                    <button
                                        type="submit"
                                        className="rounded-lg w-36 h-10 cursor-pointer flex items-center border border-[#7F5AF0] bg-[#7F5AF0] hover:bg-[#7F5AF0] active:bg-[#7F5AF0]"
                                    >
                                        <span className="text-gray-200 font-semibold ml-8">Add</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
