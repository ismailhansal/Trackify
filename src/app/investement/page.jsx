"use client"
import React, { useState, useEffect } from 'react';
import Sidebar from '../sidebar';
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

function Page() {
    const [invItems, setInvItems] = useState([]);
    const [invTotal, setInvTotal] = useState(0);
    const [invNewItem, setInvNewItem] = useState({ categorie: "", type: "inv", itemname: "", price: "" });
    const [showMessage, setShowMessage] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!invNewItem.itemname.trim() || !invNewItem.price.trim()) {
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 4000);
        } else {
            setShowMessage(false);
            addItem();
        }
    };

    // Add item to database
    const addItem = async () => {
        if (invNewItem.categorie !== "" && invNewItem.itemname !== "" && invNewItem.price !== "") {
            try {
                await addDoc(collection(db, "investment"), {
                    categorie: invNewItem.categorie,
                    type: "inv",
                    itemname: invNewItem.itemname,
                    price: parseFloat(invNewItem.price)
                });
                setInvNewItem({ categorie: "", type: "inv", itemname: "", price: "" });
                setShowSuccess(true);
                setTimeout(() => setShowSuccess(false), 4000);
            } catch (error) {
                console.error("Error adding item: ", error);
            }
        }
    };

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'investment'), (querySnapshot) => {
            let total = 0;
            querySnapshot.forEach((doc) => {
                const item = doc.data();
                total += parseFloat(item.price);
            });
            setInvTotal(total);
        });
        return () => unsubscribe();
    }, []);

    return (
        <>
            <Sidebar />
            <div className='p-4 sm:ml-64 '>
                <div className='flex flex-col md:flex-row items-center justify-center md:gap-2 rounded-xl bg-[#010101] py-6'>
                    <h1 className='text-white md:pr-4 text-center text-2xl font-medium mb-4 md:mb-0'>Total Investment :</h1>
                    <p className='text-[#7F5AF0] font-semibold text-2xl mt-1'>${invTotal}</p>
                </div>

                <div className="relative flex  text-gray-800 antialiased flex-col justify-center overflow-hidden  py-6 sm:py-12">
                    <div className="relative py-3 sm:w-[500px] mx-auto text-center">
                        <form className="mt-4 bg-[#010101] text-white shadow-md rounded-lg text-left" onSubmit={handleSubmit}>
                            <div className="h-2 bg-[#7F5AF0] rounded-t-md"></div>
                            <div className="px-8 py-6 ">

                            <label className="block font-semibold pb-2">Enter Category</label>
                            <select className=" focus:ring-indigo-500 focus:ring-1 rounded-md text-[#010101] w-full  px-4 py-3 focus:outline-none   focus:ring-offset-2 focus:ring-offset-gray-800"
                                value={invNewItem.categorie}
                                onChange={(e) => setInvNewItem({...invNewItem, categorie: e.target.value})}
                                >

                                    <option value="" disabled selected hidden>Category</option>
                                    <option value="💰" data-icon="💰" >💰Bonds</option>
                                    <option value="🏠" data-icon="🏠">🏠Real Estate</option>
                                    <option value="📊" data-icon="📊">📊Mutual Funds</option>
                                    <option value="🪙" data-icon="🪙">🪙Cryptocurrency</option>
                                    <option value="🏦" data-icon="🏦">🏦Savings Accounts</option>
                                    <option value="🌱" data-icon="🌱">🌱Startups</option>
                                </select>

                                <label className="block font-semibold mt-3">Enter Item</label>
                                <input
                                    type="text"
                                    placeholder="Enter Item"
                                    value={invNewItem.itemname}
                                    onChange={(e) => setInvNewItem({ ...invNewItem, itemname: e.target.value })}
                                    className="border w-full h-12 px-3 py-2 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md text-[#010101]"
                                />
                                <label className="block mt-3 font-semibold">Enter Price</label>
                                <input
                                    type="text"
                                    placeholder="Enter Price"
                                    value={invNewItem.price}
                                    onChange={(e) => setInvNewItem({ ...invNewItem, price: e.target.value })}
                                    className="border w-full h-12 px-3 py-2 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md text-[#010101]"
                                />
                                {showMessage && (
                                    <div id="alert-2" class="fixed top-4 right-4 z-50 flex items-center p-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                    <svg class="flex-shrink-0 w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                    </svg>
                                    <span class="sr-only">Info</span>
                                    <div class="text-sm font-medium">
                                        Please fill all the fields
                                    </div>
                                    <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-2" aria-label="Close">
                                        <span class="sr-only">Close</span>
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                    </button>
                                </div>
                                
                                
                                )}
                                {showSuccess && (
                                    <div id="alert-3" class="fixed top-4 right-4 z-50 flex items-center p-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                                    <svg class="flex-shrink-0 w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                    </svg>
                                    <span class="sr-only">Info</span>
                                    <div class="text-sm font-medium">
                                        Added successfuly
                                    </div>
                                    <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-3" aria-label="Close">
                                        <span class="sr-only">Close</span>
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                    </button>
                                </div>
                                
                                )}
                                <div className="flex justify-between items-baseline pt-3">
                                <button
                                    type="submit"
                                    className="rounded-lg relative w-36 h-10 cursor-pointer flex items-center border border-[#7F5AF0] bg-[#7F5AF0] group hover:bg-[#7F5AF0] active:bg-[#7F5AF0] active:border-[#7F5AF0]"
                                >
                                    <span className="text-gray-200 font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300">
                                        Add
                                    </span>
                                    <span className="absolute right-0 h-full w-10 rounded-lg bg-[#7F5AF0] flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
                                        <svg className="svg w-8 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="12" x2="12" y1="5" y2="19"></line>
                                            <line x1="5" x2="19" y1="12" y2="12"></line>
                                        </svg>
                                    </span>
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
