import React from 'react'


const Sidebar = () => {

   
    return (
        <div>
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto  bg-[#010101]">
      <a href="/dashbord" class="flex items-center ps-2.5 mb-5 pt-4">
         <svg id="Layer_1" enable-background="new 0 0 468 468" height="40" viewBox="0 0 468 468" width="40" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m395.887 311.073h-285.448v-286.606c0-13.513 10.955-24.467 24.467-24.467h295.643l-34.662 36.544z" fill="#e0e9ef"/></g><g><path d="m345.075 56.017h-183.442c-2.762 0-5-2.239-5-5s2.238-5 5-5h183.442c2.762 0 5 2.239 5 5s-2.238 5-5 5z" fill="#9bb6c6"/></g><g><path d="m345.075 106.99h-95.813c-2.762 0-5-2.239-5-5s2.238-5 5-5h95.813c2.762 0 5 2.239 5 5s-2.238 5-5 5z" fill="#9bb6c6"/></g><g><path d="m464.746 34.305c0-18.946-15.415-34.305-34.43-34.305s-34.429 15.359-34.429 34.305v47.098h68.858v-47.098z" fill="#9bb6c6"/></g><g><g><g><path d="m167.846 89.292c7.984-5.353 21.833-6.857 30.622-2.966 39.835 17.632-24.397 89.178-24.397 89.178h-91.376s-64.649-72.543-23.115-89.529c9.589-3.957 20.684-2.726 29.304 2.91 8.917 5.652 43.378 24.262 78.962.407z" fill="#6262f4"/></g><g><path d="m141.28 207.223h-25.403c-56.959 0-103.932 44.624-106.849 101.506l-5.713 111.375c-1.335 26.046 19.416 47.896 45.488 47.896h159.551c26.072 0 46.823-21.85 45.487-47.896l-5.712-111.375c-2.917-56.882-49.89-101.506-106.849-101.506z" fill="#6262f4"/></g><path d="m159.702 374.924c0-15.099-12.342-27.383-27.512-27.383h-7.225c-9.656 0-17.512-7.798-17.512-17.383s7.855-17.383 17.512-17.383h24.465c2.762 0 5-2.239 5-5s-2.238-5-5-5h-15.853v-14.319c0-2.761-2.238-5-5-5s-5 2.239-5 5v14.354c-14.528.722-26.124 12.712-26.124 27.348 0 15.099 12.342 27.383 27.512 27.383h7.225c9.656 0 17.512 7.798 17.512 17.383s-7.855 17.383-17.512 17.383h-24.465c-2.762 0-5 2.239-5 5s2.238 5 5 5h15.853v14.318c0 2.761 2.238 5 5 5s5-2.239 5-5v-14.354c14.528-.72 26.124-12.711 26.124-27.347z" fill="#fff"/><path d="m179.343 168.816h-101.463c-14.452 0-26.167 11.715-26.167 26.167 0 12.876 10.438 23.313 23.313 23.313h39.348l-13.239 36.71c-1.218 3.177 1.321 6.755 4.703 6.698 2.048 0 3.969-1.268 4.703-3.305l14.463-40.102h8.909l14.463 40.102c.933 2.624 3.87 3.939 6.399 3.007 2.598-.937 3.944-3.802 3.007-6.4l-13.239-36.71h37.655c12.876 0 23.313-10.438 23.313-23.313-.001-14.451-11.716-26.167-26.168-26.167z" fill="#ac9ef9"/></g><g><g><g><path d="m187.211 190.012h115.946v115.9h-115.946z" fill="#35c9ad"/></g><path d="m274.431 245.885h-24.247v-23.975c0-2.761-2.238-5-5-5s-5 2.239-5 5v23.975h-23.727c-2.762 0-5 2.239-5 5s2.238 5 5 5h23.727v23.975c0 2.761 2.238 5 5 5s5-2.239 5-5v-23.975h24.247c2.762 0 5-2.239 5-5s-2.239-5-5-5z" fill="#fff"/></g><g><g><path d="m187.211 305.912h115.946v115.9h-115.946z" fill="#f761a6"/></g><g><path d="m274.17 368.862h-57.973c-2.762 0-5-2.239-5-5s2.238-5 5-5h57.973c2.762 0 5 2.239 5 5s-2.238 5-5 5z" fill="#fff"/></g></g><g><g><path d="m303.157 190.012h115.946v115.9h-115.946z" fill="#fdbf38"/></g><path d="m368.277 251.069 17.145-17.145c1.953-1.953 1.953-5.119 0-7.071-1.951-1.952-5.119-1.952-7.07 0l-17.146 17.145-16.953-16.953c-1.951-1.952-5.119-1.952-7.07 0-1.953 1.953-1.953 5.119 0 7.071l16.953 16.953-16.777 16.777c-1.953 1.953-1.953 5.119 0 7.071 1.952 1.952 5.119 1.952 7.07 0l16.777-16.777 16.953 16.953c1.952 1.952 5.119 1.952 7.07 0 1.953-1.953 1.953-5.119 0-7.071z" fill="#fff"/></g><g><g><path d="m303.157 305.912h115.946v115.9h-115.946z" fill="#9bb6c6"/></g><g><path d="m386.616 386.702h-50.973c-2.762 0-5-2.239-5-5s2.238-5 5-5h50.973c2.762 0 5 2.239 5 5s-2.238 5-5 5z" fill="#fff"/></g><g><path d="m386.616 351.021h-50.973c-2.762 0-5-2.239-5-5s2.238-5 5-5h50.973c2.762 0 5 2.239 5 5s-2.238 5-5 5z" fill="#fff"/></g></g></g></g></g></svg>
         <span  class="self-center text-3xl font-bold whitespace-nowrap pl-2 dark:text-white">Trackify</span>
      </a>
      <ul class="space-y-2 font-medium pt-7" aria-label="Main navigation">
         <li>
            <a href="/dashbord" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#7F5AF0] group">
               <svg class="w-5 h-5 text-gray-00 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span class="ms-3 ">Dashboard</span>
            </a>
         </li>
        
         <li>
            <a href="/income" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#7F5AF0] group">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-bell-dollar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 17h-9a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 3.911 5.17" /><path d="M9 17v1a3 3 0 0 0 4.02 2.822" /><path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" /><path d="M19 21v1m0 -8v1" /></svg>

               <span class=" flex-1 ms-3 whitespace-nowrap">Income</span>
            </a>
         </li>
         <li>
            <a href="/expenses" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#7F5AF0] group">
               <svg id="Layer_1" enable-background="new 0 0 100 100" height="28" viewBox="0 0 100 100" width="28" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#a0aec0" d="m80 36.667h-6.667c-1.842 0-3.333-1.491-3.333-3.334h-.003.003c0-1.842 1.491-3.333 3.333-3.333v-.003.003h6.667c1.843 0 3.333 1.491 3.333 3.333h6.667c0-5.521-4.479-10-10-10v-6.666h-6.667v6.666c-5.521 0-10 4.477-10 10 0 5.521 4.479 10 10 10h6.667c1.843 0 3.333 1.491 3.333 3.334h-.006c0 1.842-1.491 3.333-3.334 3.333h-6.66c-1.842 0-3.333-1.491-3.333-3.333h-6.667c0 5.521 4.479 10 10 10v6.666h6.667v-6.666c5.521-.007 9.997-4.479 9.997-10h.003c0-5.521-4.479-10-10-10z"/>
                  <path fill="#a0aec0" d="m23.333 23.333h13.334v6.667h-13.334z"/>
                  <path fill="#a0aec0" d="m23.333 36.667h20v6.666h-20z"/>
                  <path fill="#a0aec0" d="m23.333 50h20v6.667h-20z"/>
                  <path fill="#a0aec0" d="m56.667 70v-60h-46.667v66.667c0 7.363 5.97 13.333 13.333 13.333h43.334c7.363 0 13.333-5.97 13.333-13.333v-6.667zm-40 6.667v-60h33.333v53.333h-20v6.667c0 3.682-2.985 6.666-6.667 6.666s-6.666-2.984-6.666-6.666zm50 6.666h-31.85c1.146-1.969 1.85-4.225 1.85-6.666h36.666c0 3.682-2.984 6.666-6.666 6.666z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Expenses</span>
            </a>
         </li>
         <li>
            <a href="/Savings" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#7F5AF0] group">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-businessplan"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 6m-5 0a5 3 0 1 0 10 0a5 3 0 1 0 -10 0" /><path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" /><path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" /><path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" /><path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" /><path d="M5 15v1m0 -8v1" /></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Savings</span>
            </a>
         </li>
         
         <li>
            <a href="/investement" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#7F5AF0] group">
            <svg className="svg-investment" clipRule="evenodd" fillRule="evenodd" height="25" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 32 32" width="25" xmlns="http://www.w3.org/2000/svg">
               <path fill="#a0aec0" d="m5 6.937-1.299 1.276c-.394.387-1.027.382-1.414-.012s-.382-1.027.012-1.414l3.053-3c.389-.383 1.013-.383 1.402 0l2.983 2.931c.393.386.399 1.02.012 1.414-.387.393-1.02.399-1.414.012l-1.335-1.312v5.668c0 .552-.448 1-1 1s-1-.448-1-1zm5.157 5.29c.838-4.674 4.929-8.227 9.843-8.227 5.519 0 10 4.481 10 10 0 3.471-1.772 6.532-4.461 8.325-.163.109-.328.212-.497.311-1.481.867-3.204 1.364-5.042 1.364-4.497 0-8.304-2.975-9.56-7.062-.286-.929-.44-1.916-.44-2.938 0-.605.054-1.197.157-1.773zm8.843 6.559v.214c0 .552.448 1 1 1s1-.448 1-1v-.181c.804-.156 1.491-.538 1.941-1.139.341-.455.559-1.044.559-1.797 0-1.488-1.051-2.223-2.48-2.64-.678-.197-1.443-.323-2.037-.585-.25-.11-.483-.227-.483-.525 0-.652.47-.932 1.013-1.008.805-.113 1.771.129 2.414.578.453.316 1.077.206 1.393-.247.316-.452.205-1.076-.247-1.392-.575-.402-1.311-.699-2.073-.85v-.214c0-.552-.448-1-1-1s-1 .448-1 1v.183c-1.425.275-2.5 1.198-2.5 2.95 0 1.489 1.051 2.224 2.48 2.64.678.198 1.443.324 2.037.586.25.11.483.227.483.524 0 .649-.469.921-1.009.994-.81.109-1.783-.135-2.432-.573-.457-.308-1.079-.187-1.388.27-.309.458-.188 1.08.27 1.388.571.386 1.302.675 2.059.824zm4.422 6.718c-.497.529-1.054 1.001-1.66 1.405-1.507 1.005-3.317 1.591-5.262 1.591-4.272 0-7.889-2.826-9.082-6.709-.272-.883-.418-1.82-.418-2.791 0-1.542.368-2.998 1.021-4.286.057.972.231 1.914.507 2.812 1.507 4.904 6.076 8.474 11.472 8.474 1.189 0 2.338-.173 3.422-.496z"/>
            </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Investment</span>
            </a>
         </li>


         <li>
            <a href="/alert-credit" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#7F5AF0] group">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-credit-card-pay"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" /><path d="M3 10h18" /><path d="M16 19h6" /><path d="M19 16l3 3l-3 3" /><path d="M7.005 15h.005" /><path d="M11 15h2" /></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Claims</span>
            </a>
         </li>
         <li>
            <a href="/alert-creance" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#7F5AF0] group">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-tax"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.487 21h7.026a4 4 0 0 0 3.808 -5.224l-1.706 -5.306a5 5 0 0 0 -4.76 -3.47h-1.71a5 5 0 0 0 -4.76 3.47l-1.706 5.306a4 4 0 0 0 3.808 5.224" /><path d="M15 3q -1 4 -3 4t -3 -4z" /><path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" /><path d="M12 10v1" /><path d="M12 17v1" /></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Debts</span>
            </a>
         </li>
         <li>
            <a href="/chatbot" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#7F5AF0] group">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-robot"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /><path d="M12 2v2" /><path d="M9 12v9" /><path d="M15 12v9" /><path d="M5 16l4 -2" /><path d="M15 14l4 2" /><path d="M9 18h6" /><path d="M10 8v.01" /><path d="M14 8v.01" /></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">AI Assistant</span>
            </a>
         </li>
         <li>
            <a href="/edu-finance" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#7F5AF0] group">
            <svg id="Layer_1" height="25" width="25" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path fill="#a0aec0" d="m84.308 156.824-75.508-26.565 244.178-85.949 244.2 85.949-11.267 3.965a10.677 10.677 0 0 1 .109 1.465v83.324h1.9a.7.7 0 0 1 .748.6l11.22 47.387c.1.425.044.5-.157.738a.569.569 0 0 1 -.6.29h-41.861a.585.585 0 0 1 -.614-.29.564.564 0 0 1 -.134-.659l11.193-47.432a.753.753 0 0 1 .793-.637h1.866v-79.32l-48.725 17.145a4.212 4.212 0 0 0 -.525.179l-.29.112-167.856 59.049-167.822-59.049h-.01a6.77 6.77 0 0 0 -.838-.302zm142.128 189.739a113.218 113.218 0 1 1 -113.229-113.229 113.346 113.346 0 0 1 113.229 113.229zm-16.555 0a96.663 96.663 0 1 0 -96.674 96.652 96.78 96.78 0 0 0 96.674-96.652zm-15.639 0a81.018 81.018 0 1 1 -81.035-81.034 81.11 81.11 0 0 1 81.035 81.034zm-49.723 23.47a31.329 31.329 0 0 0 -31.312-31.289 15.673 15.673 0 1 1 14.757-20.944 7.822 7.822 0 1 0 14.745-5.228 31.358 31.358 0 0 0 -21.682-19.817v-10.155a7.82 7.82 0 0 0 -15.64 0v10.143a31.321 31.321 0 0 0 7.82 61.642 15.662 15.662 0 1 1 -14.735 20.946 7.824 7.824 0 0 0 -14.745 5.239 31.331 31.331 0 0 0 21.66 19.784v10.176a7.82 7.82 0 0 0 15.64 0v-10.167a31.378 31.378 0 0 0 23.492-30.33zm367.481-52.671v150.217c-36.484-15.74-73.739-15.7-111.05.111v-150.261a147.62 147.62 0 0 1 24.162-9.1h.011a6.815 6.815 0 0 0 1.6-.425c.011 0 .022 0 .022-.011 28.73-7.511 56.87-4.36 85.255 9.469zm-97.065 22.655a7.836 7.836 0 0 0 7.395 5.25 7.681 7.681 0 0 0 2.57-.435c20.32-7.083 41.277-7.049 64.088.078a7.819 7.819 0 0 0 4.669-14.925c-25.771-8.065-50.638-8.031-73.907.079a7.82 7.82 0 0 0 -4.815 9.953zm0 32.809a7.836 7.836 0 0 0 7.395 5.251 7.969 7.969 0 0 0 2.57-.436c20.32-7.083 41.277-7.06 64.088.078a7.824 7.824 0 0 0 4.669-14.935c-25.76-8.055-50.638-8.032-73.907.078a7.836 7.836 0 0 0 -4.815 9.964zm78.722 55.542c-25.76-8.054-50.638-8.032-73.907.079a7.819 7.819 0 0 0 2.58 15.2 7.681 7.681 0 0 0 2.57-.435c20.32-7.083 41.277-7.049 64.088.078a7.819 7.819 0 0 0 4.669-14.925zm.012-32.775c-25.727-8.077-50.594-8.055-73.919.078a7.825 7.825 0 0 0 2.58 15.215 7.673 7.673 0 0 0 2.57-.447c20.365-7.094 41.321-7.06 64.077.078a7.822 7.822 0 1 0 4.692-14.924zm-108.359-78.164v150.261q-28.067-11.88-55.978-11.886a138.329 138.329 0 0 0 -55.107 11.775v-150.206c36.854-17.951 73.282-17.918 111.085.056zm-19.047 110.939c-25.76-8.054-50.638-8.032-73.907.079a7.821 7.821 0 0 0 2.58 15.2 7.681 7.681 0 0 0 2.57-.435c20.32-7.083 41.288-7.049 64.088.078a7.819 7.819 0 1 0 4.669-14.925zm-78.71-22.733a7.809 7.809 0 0 0 7.383 5.251 7.673 7.673 0 0 0 2.57-.447c20.365-7.094 41.321-7.071 64.088.078a7.82 7.82 0 0 0 4.681-14.924c-25.727-8.077-50.594-8.043-73.919.078a7.812 7.812 0 0 0 -4.803 9.964zm78.71-42.851c-25.76-8.055-50.638-8.032-73.907.078a7.828 7.828 0 0 0 2.58 15.215 7.969 7.969 0 0 0 2.57-.436c20.32-7.083 41.288-7.06 64.088.078a7.824 7.824 0 1 0 4.669-14.935zm0-32.8c-25.76-8.065-50.626-8.031-73.907.079a7.821 7.821 0 0 0 2.58 15.2 7.681 7.681 0 0 0 2.57-.435c20.32-7.083 41.277-7.049 64.088.078a7.819 7.819 0 1 0 4.669-14.925zm49.789-154.606-160.482 56.459a7.768 7.768 0 0 1 -5.194 0l-160.45-56.458v44.427a128.031 128.031 0 0 1 23.281-2.122c71.059 0 128.879 57.821 128.879 128.879a128.628 128.628 0 0 1 -1.027 16.288c5.831.055 11.685 0 17.516-.168v-50.124a7.83 7.83 0 0 1 4.2-6.937c42.718-22.342 86.553-22.946 130.355-1.8a164.117 164.117 0 0 1 22.922-9.071z"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Financial education</span>
            </a>
         </li>
      </ul>
   </div>
</aside>
        </div>
)
}

export default Sidebar


