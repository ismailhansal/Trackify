"use client";

import { useState, useEffect } from "react";
import { addDoc, collection, getDocs, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import Sidebar from '../sidebar.jsx';

export default function AddClient() {
  const [clientName, setClientName] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      const q = query(collection(db, "Creance"), orderBy("DueDate"));
      const querySnapshot = await getDocs(q);
      const clientsList = [];
      querySnapshot.forEach((doc) => {
        clientsList.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setClients(clientsList);
    };

    fetchClients();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!clientName || !amount || !dueDate) {
      setError("All fields are required.");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "Creance"), {
        ClientName: clientName,
        Amount: amount,
        DueDate: dueDate,
      });

      setSuccess(true);
      setClientName("");
      setAmount("");
      setDueDate("");
      setError(null);
    } catch (error) {
      setError("Error while adding the credit.");
    }
  };

  const handlePaymentConfirmed = async (id, amountPaid) => {
    try {
      await deleteDoc(doc(db, "Creance", id));

      await addDoc(collection(db, "expenses"), {
        price: amountPaid,
      });

      setClients(clients.filter((client) => client.id !== id));
    } catch (error) {
      setError("Error while processing the payment: " + error.message);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="sm:ml-64 p-6 flex-1">
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-2 rounded-lg bg-gray-800 py-4">
          <h1 className="text-white text-center text-xl font-medium mb-2 md:mb-0">Add a Claim to Pay</h1>
        </div>

        {error && <div className="text-red-500 mb-4">{error}</div>}
        {success && <div className="text-green-500 mb-4">Credit added successfully!</div>}

        <form onSubmit={handleSubmit} className="mt-6 bg-[#010101] text-white shadow-md rounded-lg p-8 max-w-4xl mx-auto">
          <div className="mb-6">
            <label htmlFor="clientName" className="block font-semibold text-lg">I will Pay</label>
            <input
              type="text"
              id="clientName"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="border w-full h-14 px-4 py-3 mt-2 rounded-md text-[#010101] focus:outline-none focus:ring-2 focus:ring-[#7F5AF0]"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="amount" className="block font-semibold text-lg">Amount to Pay</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border w-full h-14 px-4 py-3 mt-2 rounded-md text-[#010101] focus:outline-none focus:ring-2 focus:ring-[#7F5AF0]"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="dueDate" className="block font-semibold text-lg">Due Date</label>
            <input
              type="date"
              id="dueDate"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="border w-full h-14 px-4 py-3 mt-2 rounded-md text-[#010101] focus:outline-none focus:ring-2 focus:ring-[#7F5AF0]"
              required
            />
          </div>

          <div className="flex justify-between items-baseline pt-4">
            <button
              type="submit"
              className="rounded-lg relative w-36 h-12 cursor-pointer flex items-center border border-[#7F5AF0] bg-[#7F5AF0] group hover:bg-[#7F5AF0] active:bg-[#7F5AF0] active:border-[#7F5AF0]"
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
        </form>
      </div>

      {/* Section à droite - Liste des clients */}
      <div className="sm:ml-4 p-6 w-full md:w-1/3 bg-[#2D2D2D] rounded-lg shadow-md mt-6 md:mt-0 ml-4">
        <h2 className="text-white text-xl font-semibold mb-4">Claims</h2>
        {clients.length === 0 ? (
          <div className="text-gray-300">No claims for now.</div>
        ) : (
          <ul className="space-y-4">
            {clients.map((client, index) => (
              <li key={index} className="bg-[#333333] p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="text-white text-lg">{client.ClientName}</h3>
                  <p className="text-gray-400">Amount: {client.Amount} $</p>
                  <p className="text-gray-400">Due Date: {client.DueDate}</p>
                </div>
                <button
                  onClick={() => handlePaymentConfirmed(client.id, client.Amount)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg"
                >
                  Mark as Paid
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
