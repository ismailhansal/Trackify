"use client"
import React ,{useEffect,useState} from 'react'
import Sidebar from '../sidebar'
import { collection, addDoc,deleteDoc,doc,getDoc,querySnapshot, query,onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

import { Doughnut,Bar } from 'react-chartjs-2';
import 'chart.js/auto';





  

const page = () => { 

    // affichage 

    const[items, setItems] = useState([]);
    const[expenses, setExpenses] = useState([]);
    const[investment, setInvestment] = useState([]);
    const[Savings, setSavings] = useState([]);

    // totale 

    const [total, setTotale] = useState(0);
    const [etotal, setETotale] = useState(0);
    const [itotal, setITotale] = useState(0);
    const [stotal, setSTotale] = useState(0);



useEffect(() => {
    const newChartData = {
        labels: ['Income', 'Expense', 'Investment','Savings'],
        datasets: [
        {
            label: 'Total',
            data: [total, etotal, itotal,stotal],
            backgroundColor: ['#B38AFF', '#513DBE', '#8E7FF8','#F0FFFF'],
            borderRadius :5,
        },
    ],
    
    };
    setChartData(newChartData);
  }, [total, etotal, itotal,stotal]);

  const [chartData, setChartData] = useState({
    labels: ['Income', 'Expense', 'Investment','Savings'],
    datasets: [
    {
        label: 'Total',
        data: [total, etotal, itotal,stotal],
        backgroundColor: ['#7F5AF0', '#FF0000', '#FFFF00','#F0FFFF'],
        
    },
    
    ],
    options: {
        plugins:{
            datalabels: false
        
        },
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1,
        
    },
  });
  
// Total Income
useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'items'), (querySnapshot) => {
        
        let  tempItems=[];

        querySnapshot.forEach((doc)=>{
            tempItems.push({...doc.data(),id : doc.id});
        });

        setItems(tempItems);
        
        // Total 
        let total1 = 0;
        querySnapshot.forEach((doc) => {
            const item = doc.data();
            total1 += parseFloat(item.price);
        });
        setTotale(total1); // Update total state with total1
    });
    return () => unsubscribe();
}, []);

// Total Expense
useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'expenses'), (querySnapshot) => {
        
        let  tempItems=[];

        querySnapshot.forEach((doc)=>{
            tempItems.push({...doc.data(),id : doc.id});
        });

        setExpenses(tempItems);
        
        // Total 
        let total2 = 0;
        querySnapshot.forEach((doc) => {
            const item = doc.data();
            total2 += parseFloat(item.price);
        });
        setETotale(total2); // Update etotal state with total2
    });
    return () => unsubscribe();
}, []);

// Total Investment
useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'investment'), (querySnapshot) => {
        
        let  tempItems=[];

        querySnapshot.forEach((doc)=>{
            tempItems.push({...doc.data(),id : doc.id});
        });

        setInvestment(tempItems);
        
        // Total
        let total3 = 0;
        querySnapshot.forEach((doc) => {
            const item = doc.data();
            total3 += parseFloat(item.price);
        });
        setITotale(total3); // Update itotal state with total3
    });
    return () => unsubscribe();
}, []);

// Total Savings
useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'Savings'), (querySnapshot) => {
        
        let  tempItems=[];

        querySnapshot.forEach((doc)=>{
            tempItems.push({...doc.data(),id : doc.id});
        });

        setSavings(tempItems);
        
        // Total
        let total4 = 0;
        querySnapshot.forEach((doc) => {
            const item = doc.data();
            total4 += parseFloat(item.price);
        });
        setSTotale(total4); // Update itotal state with total3
    });
    return () => unsubscribe();
}, []);

//delete item
const removeItem = async (id) => {
    try {
        await deleteDoc(doc(db, 'items', id));
    } catch (error) {
        console.error("Error removing document: ", error);
    }
}

//delete item
const removeExpenses = async (id) => {
    try {
        await deleteDoc(doc(db, 'expenses', id));
    } catch (error) {
        console.error("Error removing document: ", error);
    }
}

//delete item
const removeInvestment = async (id) => {
    try {
        await deleteDoc(doc(db, 'investment', id)); // Here, it should be 'investments' instead of 'investment'
    } catch (error) {
        console.error("Error removing document: ", error);
    }
}

//delete item
const removeSavings = async (id) => {
    try {
        await deleteDoc(doc(db,'Savings', id)); 
    } catch (error) {
        console.error("Error removing document: ", error);
    }
}



// Total of all incomes, expenses, and investments and Savings
const alltotale = total - etotal + itotal + stotal; // Calculate total of all incomes, expenses, and investments



    return (
        <div>
            <Sidebar/>
            <div class="p-4 sm:ml-64 " >
<div class="grid grid-cols-12 gap-6 mt-5">
  <a class="transform text-white hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-[#010101]"
      href="#">
      <div class="p-5">
          <div class="flex justify-between">
          
          <svg className="ml-4" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="45" height="45"><path fill="#7F5AF0" d="M21,6H5c-.859,0-1.672-.372-2.235-.999,.55-.614,1.349-1.001,2.235-1.001H23c.553,0,1-.448,1-1s-.447-1-1-1H5C2.239,2,0,4.239,0,7v10c0,2.761,2.239,5,5,5H21c1.657,0,3-1.343,3-3V9c0-1.657-1.343-3-3-3Zm1,13c0,.551-.448,1-1,1H5c-1.654,0-3-1.346-3-3V6.998c.854,.639,1.904,1.002,3,1.002H21c.552,0,1,.449,1,1v10Zm-2-5c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z"/></svg>

          </div>
          <div class="ml-2 w-full flex-1">
              <div>
                  <div class="mt-3 text-3xl font-bold leading-8">${alltotale} </div>

                                                  <div class="mt-1 text-base text-[#7F5AF0]">Total balance</div>
                                              </div>
                                          </div>
                                      </div>
                                  </a>
                                  <a class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y text-white bg-[#010101]"
                                      href="#">
                                      <div class="p-5">
                                          <div class="flex justify-between">
                                            {/* svg */}
                                          <svg clip-rule="evenodd" fill-rule="evenodd" height="45" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 32 32" width="45" xmlns="http://www.w3.org/2000/svg"><path fill="#7F5AF0" d="m5 6.937-1.299 1.276c-.394.387-1.027.382-1.414-.012s-.382-1.027.012-1.414l3.053-3c.389-.383 1.013-.383 1.402 0l2.983 2.931c.393.386.399 1.02.012 1.414-.387.393-1.02.399-1.414.012l-1.335-1.312v5.668c0 .552-.448 1-1 1s-1-.448-1-1zm5.157 5.29c.838-4.674 4.929-8.227 9.843-8.227 5.519 0 10 4.481 10 10 0 3.471-1.772 6.532-4.461 8.325-.163.109-.328.212-.497.311-1.481.867-3.204 1.364-5.042 1.364-4.497 0-8.304-2.975-9.56-7.062-.286-.929-.44-1.916-.44-2.938 0-.605.054-1.197.157-1.773zm8.843 6.559v.214c0 .552.448 1 1 1s1-.448 1-1v-.181c.804-.156 1.491-.538 1.941-1.139.341-.455.559-1.044.559-1.797 0-1.488-1.051-2.223-2.48-2.64-.678-.197-1.443-.323-2.037-.585-.25-.11-.483-.227-.483-.525 0-.652.47-.932 1.013-1.008.805-.113 1.771.129 2.414.578.453.316 1.077.206 1.393-.247.316-.452.205-1.076-.247-1.392-.575-.402-1.311-.699-2.073-.85v-.214c0-.552-.448-1-1-1s-1 .448-1 1v.183c-1.425.275-2.5 1.198-2.5 2.95 0 1.489 1.051 2.224 2.48 2.64.678.198 1.443.324 2.037.586.25.11.483.227.483.524 0 .649-.469.921-1.009.994-.81.109-1.783-.135-2.432-.573-.457-.308-1.079-.187-1.388.27-.309.458-.188 1.08.27 1.388.571.386 1.302.675 2.059.824zm4.422 6.718c-.497.529-1.054 1.001-1.66 1.405-1.507 1.005-3.317 1.591-5.262 1.591-4.272 0-7.889-2.826-9.082-6.709-.272-.883-.418-1.82-.418-2.791 0-1.542.368-2.998 1.021-4.286.057.972.231 1.914.507 2.812 1.507 4.904 6.076 8.474 11.472 8.474 1.189 0 2.338-.173 3.422-.496z"/></svg>

                                          </div>
                                          <div class="ml-2 w-full flex-1">
                                              <div>
                                                  <div class="mt-3 text-3xl font-bold leading-8">${total}</div>
                                                  <div class="mt-1 text-base  text-[#7F5AF0]">Total Income</div>
                                              </div>
                                          </div>
                                      </div>
                                  </a>
                                  <a class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y text-white bg-[#010101]"
                                      href="#">
                                      <div class="p-5">
                                          <div class="flex justify-between">
                                          <svg id="Layer_1" enable-background="new 0 0 100 100" height="45" viewBox="0 0 100 100" width="45" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="#7F5AF0" d="m80 36.667h-6.667c-1.842 0-3.333-1.491-3.333-3.334h-.003.003c0-1.842 1.491-3.333 3.333-3.333v-.003.003h6.667c1.843 0 3.333 1.491 3.333 3.333h6.667c0-5.521-4.479-10-10-10v-6.666h-6.667v6.666c-5.521 0-10 4.477-10 10 0 5.521 4.479 10 10 10h6.667c1.843 0 3.333 1.491 3.333 3.334h-.006c0 1.842-1.491 3.333-3.334 3.333h-6.66c-1.842 0-3.333-1.491-3.333-3.333h-6.667c0 5.521 4.479 10 10 10v6.666h6.667v-6.666c5.521-.007 9.997-4.479 9.997-10h.003c0-5.521-4.479-10-10-10z"/>
                                                <path fill="#7F5AF0" d="m23.333 23.333h13.334v6.667h-13.334z"/>
                                                <path fill="#7F5AF0" d="m23.333 36.667h20v6.666h-20z"/>
                                                <path fill="#7F5AF0" d="m23.333 50h20v6.667h-20z"/>
                                                <path fill="#7F5AF0" d="m56.667 70v-60h-46.667v66.667c0 7.363 5.97 13.333 13.333 13.333h43.334c7.363 0 13.333-5.97 13.333-13.333v-6.667zm-40 6.667v-60h33.333v53.333h-20v6.667c0 3.682-2.985 6.666-6.667 6.666s-6.666-2.984-6.666-6.666zm50 6.666h-31.85c1.146-1.969 1.85-4.225 1.85-6.666h36.666c0 3.682-2.984 6.666-6.666 6.666z"/>
                                              </svg>
                                          </div>
                                          <div class="ml-2 w-full flex-1">
                                              <div>
                                                  <div class="mt-3 text-3xl font-bold leading-8">${etotal} </div>

                                                    <div class="mt-1 text-base text-[#7F5AF0]">Total Expenses</div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y text-white bg-[#010101]"
                                        href="#">
                                        <div class="p-5">
                                            <div class="flex justify-between">
                                                <svg className="ml-2" id="Layer_1" enable-background="new 0 0 512 512" height="45" viewBox="0 0 512 512" width="45" xmlns="http://www.w3.org/2000/svg"><path fill="#7F5AF0" d="m.031 77.078c-.614-14.472 4.704-28.342 14.972-39.055 6.917-7.216 15.635-12.415 25.097-15.18v-6.843c0-8.837 7.164-16 16-16s16 7.163 16 16v6.966c14.276 4.33 26.419 14.289 33.488 28.092 4.028 7.866.917 17.507-6.949 21.534-7.866 4.028-17.507.916-21.534-6.948-4.133-8.072-12.275-13.086-21.25-13.086-6.646 0-13.117 2.772-17.75 7.607-4.176 4.356-6.343 9.882-6.103 15.557.453 10.688 9.502 15.775 30.042 24.837 20.744 9.152 49.153 21.686 50.213 55.01.463 14.57-4.979 28.477-15.325 39.156-6.863 7.084-15.488 12.195-24.832 14.924v6.829c0 8.837-7.164 16-16 16s-16-7.163-16-16v-6.991c-14.24-4.343-26.351-14.291-33.406-28.068-4.028-7.865-.917-17.507 6.949-21.534 7.866-4.028 17.507-.916 21.534 6.948 4.133 8.072 12.276 13.087 21.25 13.087 6.543 0 12.929-2.719 17.521-7.46 4.265-4.401 6.511-10.039 6.326-15.873-.38-11.946-9.783-17.325-31.146-26.75-20.153-8.892-47.753-21.068-49.097-52.759zm85.029 199.294c3.14 4.224 7.965 6.455 12.853 6.455 3.318 0 6.665-1.028 9.533-3.16l103.072-76.622 73.689 52.484c6.391 4.553 15.141 3.798 20.658-1.781l92.688-93.716-.255 17.36c-.13 8.836 6.927 16.104 15.763 16.233.081.001.16.002.24.002 8.727 0 15.864-7.01 15.993-15.765l.836-56.864c.063-4.264-1.58-8.377-4.562-11.425-2.982-3.049-7.058-4.779-11.323-4.81l-58.955-.418c-.039-.001-.077-.001-.116-.001-8.783 0-15.935 7.089-15.997 15.887-.063 8.836 7.05 16.05 15.886 16.112l20.764.147-84.144 85.077-72.086-51.343c-5.654-4.026-13.258-3.946-18.828.191l-112.415 83.57c-7.091 5.273-8.566 15.295-3.294 22.387zm426.184 133.593c-1.303 4.039-4.156 7.395-7.933 9.329l-177.54 90.946c-2.257 1.156-4.758 1.76-7.294 1.76h-302.461c-8.836 0-16-7.163-16-16v-106.223c0-8.837 7.164-16 16-16h42.256v-.625c0-31.84 25.904-57.744 57.745-57.744h108.064c43.922 0 80.642 31.441 88.836 72.997l90.516-46.367c34.19-17.516 76.257-3.946 93.772 30.244l13.051 25.477c1.935 3.777 2.29 8.168.988 12.206zm-479.228 70.035h26.256v-74.223h-26.256zm442.465-81.892-5.756-11.236c-9.47-18.487-32.215-25.823-50.703-16.354l-112.104 57.426c-2.257 1.156-4.758 1.76-7.294 1.76h-124.613c-8.836 0-16-7.163-16-16s7.164-16 16-16h108.034c-4.021-28.389-28.483-50.296-57.964-50.296h-108.064c-14.196 0-25.745 11.549-25.745 25.744v106.848h224.345z"/></svg>
                                            </div>
                                            <div class="ml-2 w-full flex-1">
                                                <div>
                                                    <div class="mt-3 text-3xl font-bold leading-8">${itotal}</div>

                                                    <div class="mt-1 text-base text-[#7F5AF0]">Total Investment </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y text-white bg-[#010101]"
                                        href="#">
                                        <div class="p-5">
                                            <div class="flex justify-between">
                                                <svg className="ml-2" id="Layer_1" enable-background="new 0 0 512 512" height="45" viewBox="0 0 512 512" width="45" xmlns="http://www.w3.org/2000/svg"><path fill="#7F5AF0" d="m.031 77.078c-.614-14.472 4.704-28.342 14.972-39.055 6.917-7.216 15.635-12.415 25.097-15.18v-6.843c0-8.837 7.164-16 16-16s16 7.163 16 16v6.966c14.276 4.33 26.419 14.289 33.488 28.092 4.028 7.866.917 17.507-6.949 21.534-7.866 4.028-17.507.916-21.534-6.948-4.133-8.072-12.275-13.086-21.25-13.086-6.646 0-13.117 2.772-17.75 7.607-4.176 4.356-6.343 9.882-6.103 15.557.453 10.688 9.502 15.775 30.042 24.837 20.744 9.152 49.153 21.686 50.213 55.01.463 14.57-4.979 28.477-15.325 39.156-6.863 7.084-15.488 12.195-24.832 14.924v6.829c0 8.837-7.164 16-16 16s-16-7.163-16-16v-6.991c-14.24-4.343-26.351-14.291-33.406-28.068-4.028-7.865-.917-17.507 6.949-21.534 7.866-4.028 17.507-.916 21.534 6.948 4.133 8.072 12.276 13.087 21.25 13.087 6.543 0 12.929-2.719 17.521-7.46 4.265-4.401 6.511-10.039 6.326-15.873-.38-11.946-9.783-17.325-31.146-26.75-20.153-8.892-47.753-21.068-49.097-52.759zm85.029 199.294c3.14 4.224 7.965 6.455 12.853 6.455 3.318 0 6.665-1.028 9.533-3.16l103.072-76.622 73.689 52.484c6.391 4.553 15.141 3.798 20.658-1.781l92.688-93.716-.255 17.36c-.13 8.836 6.927 16.104 15.763 16.233.081.001.16.002.24.002 8.727 0 15.864-7.01 15.993-15.765l.836-56.864c.063-4.264-1.58-8.377-4.562-11.425-2.982-3.049-7.058-4.779-11.323-4.81l-58.955-.418c-.039-.001-.077-.001-.116-.001-8.783 0-15.935 7.089-15.997 15.887-.063 8.836 7.05 16.05 15.886 16.112l20.764.147-84.144 85.077-72.086-51.343c-5.654-4.026-13.258-3.946-18.828.191l-112.415 83.57c-7.091 5.273-8.566 15.295-3.294 22.387zm426.184 133.593c-1.303 4.039-4.156 7.395-7.933 9.329l-177.54 90.946c-2.257 1.156-4.758 1.76-7.294 1.76h-302.461c-8.836 0-16-7.163-16-16v-106.223c0-8.837 7.164-16 16-16h42.256v-.625c0-31.84 25.904-57.744 57.745-57.744h108.064c43.922 0 80.642 31.441 88.836 72.997l90.516-46.367c34.19-17.516 76.257-3.946 93.772 30.244l13.051 25.477c1.935 3.777 2.29 8.168.988 12.206zm-479.228 70.035h26.256v-74.223h-26.256zm442.465-81.892-5.756-11.236c-9.47-18.487-32.215-25.823-50.703-16.354l-112.104 57.426c-2.257 1.156-4.758 1.76-7.294 1.76h-124.613c-8.836 0-16-7.163-16-16s7.164-16 16-16h108.034c-4.021-28.389-28.483-50.296-57.964-50.296h-108.064c-14.196 0-25.745 11.549-25.745 25.744v106.848h224.345z"/></svg>
                                            </div>
                                            <div class="ml-2 w-full flex-1">
                                                <div>
                                                    <div class="mt-3 text-3xl font-bold leading-8">${stotal}</div>

                                                    <div class="mt-1 text-base text-[#7F5AF0]">Total Savings </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

<div className='flex flex-col gap-2 md:flex-row items-center justify-center md:gap-2 rounded-xl mt-14'>
    <div className='bg-[#010101] rounded-xl py-6  px-12 w-full '>
        <Bar data={chartData} />
    </div>
    <div className='bg-[#010101] rounded-xl py-6 px-6 '>
        <Doughnut data={chartData} />
    </div>
</div>

{/* table */}

<div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-16">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 bg-[#010101]">
        <thead class="text-xs text-white uppercase bg-[#010101] dark:bg-[#010101] dark:text-[#7F5AF0]">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Categorie
                </th>
                <th scope="col" class="px-6 py-3">
                    Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            {items.map((item, index) => (
                <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.itemname}
                    </th>
                    <td class="px-3 py-4">
                        {item.categorie}
                    </td>
                    <td class="px-3 py-4">
                        {item.type}
                    </td>
                    <td class="px-3 py-4">
                        ${item.price}
                    </td>
                    <td class="px-3 py-4 text-right">
                        <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x hover:stroke-red-600"
                            onClick={() => removeItem(item.id)}>
                        <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                        </svg>
                    </td>
                </tr>
            ))}
            {expenses.map((expense, index) => (
                <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {expense.itemname}
                    </th>
                    <td class="px-3 py-4">
                        {expense.categorie}
                    </td>
                    <td class="px-3 py-4">
                        {expense.type}
                    </td>
                    <td class="px-3 py-4">
                        ${expense.price}
                    </td>
                    <td class="px-3 py-4 text-right">
                        <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x hover:stroke-red-600"
                            onClick={() => removeExpenses(expense.id)}>
                        <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                        </svg>                    </td>
                </tr>
            ))}
            {investment.map((inv, index) => (
                <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {inv.itemname}
                    </th>
                    <td class="px-3 py-4">
                        {inv.categorie}
                    </td>
                    <td class="px-3 py-4">
                        {inv.type}
                    </td>
                    <td class="px-3 py-4">
                        ${inv.price}
                    </td>
                    <td class="px-3 py-4 text-right">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x hover:stroke-red-600"
                            onClick={() => removeInvestment(inv.id)}>
                        <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                        </svg>
                    </td>
                </tr>
            ))}
            {Savings.map((inv, index) => (
                <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {inv.itemname}
                    </th>
                    <td class="px-3 py-4">
                        {inv.categorie}
                    </td>
                    <td class="px-3 py-4">
                        {inv.type}
                    </td>
                    <td class="px-3 py-4">
                        ${inv.price}
                    </td>
                    <td class="px-3 py-4 text-right">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x hover:stroke-red-600"
                            onClick={() => removeSavings(inv.id)}>
                        <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                        </svg>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>


</div>

        </div>
  )
}

export default page
