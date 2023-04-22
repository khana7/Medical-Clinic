// import React from 'react'
// import { NavLink } from 'react-router-dom'


// const Header = ({ setIsShow }) => {

//     return (
//         <div>
//             <header>
//                 <input type="checkbox" name="hbr" id="hbr" classNameName="hbr peer" hidden aria-hidden="true"></input>
//                 <nav classNameName="fixed z-20 w-full bg-gradient-to-r from-cyan-500 to-blue-500 backdrop-blur navbar shadow-2xl shadow-gray-600/5 border-b border-gray-100 dark:border-gray-800 peer-checked:navbar-active dark:shadow-none">
//                     <div classNameName="xl:container m-auto px-6 md:px-12 lg:px-6">
//                         <div classNameName="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5">
//                             <a classNameName="relative z-10" href="#" aria-label="logo">
//                                 MedicalClinic
//                             </a>
//                             <div classNameName="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
//                                 <div classNameName="text-gray-600 dark:text-gray-300 lg:pr-4">

//                                     <NavLink to="/">
//                                         Главная
//                                     </NavLink>

//                                     <NavLink to="/personal">
//                                         Персонал
//                                     </NavLink>

//                                     <NavLink to="/" >
//                                         Подробнее
//                                     </NavLink>

//                                 </div>

//                                 <div classNameName="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">


//                                     <button type="button" classNameName="border border-blue-500 bg-blue-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline" onClick={() => setIsShow(true)}>
//                                         Login
//                                     </button>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </nav>
//             </header>



//         </div>
//     )
// }

// export default Header




import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = ({setIsShow}) => {
    return (
        <div>
             
<nav className="bg-white px-2 sm:px-4 py-2.5 white:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-blue-600">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  
  <NavLink to="/">
    <svg width="201" height="47" viewBox="0 0 201 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.22677 34C3.01587 34 2.83661 33.9262 2.68898 33.7786C2.54135 33.6309 2.46753 33.4517 2.46753 33.2408V12.6464C2.46753 12.4144 2.5308 12.2246 2.65734 12.0769C2.80497 11.9293 2.99478 11.8555 3.22677 11.8555H6.10556C6.33755 11.8555 6.51681 11.9293 6.64335 12.0769C6.79098 12.2246 6.8648 12.4144 6.8648 12.6464V20.8082H16.1971V12.6464C16.1971 12.4144 16.2604 12.2246 16.3869 12.0769C16.5346 11.9293 16.7244 11.8555 16.9564 11.8555H19.8035C20.0355 11.8555 20.2253 11.9293 20.3729 12.0769C20.5206 12.2246 20.5944 12.4144 20.5944 12.6464V33.2408C20.5944 33.4727 20.5206 33.6626 20.3729 33.8102C20.2253 33.9367 20.0355 34 19.8035 34H16.9564C16.7455 34 16.5662 33.9262 16.4186 33.7786C16.2709 33.6309 16.1971 33.4517 16.1971 33.2408V24.7626H6.8648V33.2408C6.8648 33.4517 6.79098 33.6309 6.64335 33.7786C6.51681 33.9262 6.33755 34 6.10556 34H3.22677ZM27.2734 34C27.0625 34 26.8832 33.9262 26.7356 33.7786C26.5879 33.6309 26.5141 33.4517 26.5141 33.2408V12.6464C26.5141 12.4144 26.5774 12.2246 26.7039 12.0769C26.8516 11.9293 27.0414 11.8555 27.2734 11.8555H41.1928C41.4248 11.8555 41.6146 11.9293 41.7622 12.0769C41.9098 12.2246 41.9836 12.4144 41.9836 12.6464V14.7343C41.9836 14.9663 41.9098 15.1561 41.7622 15.3037C41.6146 15.4303 41.4248 15.4935 41.1928 15.4935H30.7848V21.0929H40.4968C40.7288 21.0929 40.9186 21.1667 41.0662 21.3144C41.2139 21.4409 41.2877 21.6202 41.2877 21.8522V23.8135C41.2877 24.0455 41.2139 24.2353 41.0662 24.383C40.9186 24.5095 40.7288 24.5728 40.4968 24.5728H30.7848V30.362H41.4458C41.6778 30.362 41.8676 30.4358 42.0153 30.5834C42.1629 30.731 42.2367 30.9209 42.2367 31.1528V33.2408C42.2367 33.4727 42.1629 33.6626 42.0153 33.8102C41.8676 33.9367 41.6778 34 41.4458 34H27.2734ZM45.833 34C45.6643 34 45.5061 33.9367 45.3585 33.8102C45.2319 33.6836 45.1687 33.5255 45.1687 33.3357L45.2319 33.0509L52.856 12.6464C53.0036 12.1191 53.3727 11.8555 53.9632 11.8555H57.4114C57.9598 11.8555 58.3288 12.1191 58.5186 12.6464L66.1427 33.0509C66.1638 33.1142 66.1743 33.2091 66.1743 33.3357C66.1743 33.5255 66.111 33.6836 65.9845 33.8102C65.858 33.9367 65.7103 34 65.5416 34H62.7894C62.5152 34 62.3043 33.9367 62.1567 33.8102C62.009 33.6836 61.9141 33.5466 61.872 33.3989L60.3851 29.5395H50.9895L49.5027 33.3989C49.334 33.7996 49.0281 34 48.5853 34H45.833ZM59.2779 25.9014L55.6715 16.1262L52.0967 25.9014H59.2779ZM70.887 34C70.6761 34 70.4968 33.9262 70.3492 33.7786C70.2016 33.6309 70.1277 33.4517 70.1277 33.2408V12.6147C70.1277 12.3827 70.2016 12.2035 70.3492 12.0769C70.4968 11.9293 70.6761 11.8555 70.887 11.8555H73.829C74.061 11.8555 74.2403 11.9293 74.3668 12.0769C74.5145 12.2035 74.5883 12.3827 74.5883 12.6147V30.2354H84.6166C84.8486 30.2354 85.0384 30.3092 85.186 30.4569C85.3336 30.6045 85.4074 30.7943 85.4074 31.0263V33.2408C85.4074 33.4727 85.3336 33.6626 85.186 33.8102C85.0384 33.9367 84.8486 34 84.6166 34H70.887ZM91.5259 34C91.315 34 91.1357 33.9262 90.9881 33.7786C90.8405 33.6309 90.7667 33.4517 90.7667 33.2408V15.7466H84.9142C84.7033 15.7466 84.524 15.6728 84.3764 15.5252C84.2288 15.3775 84.1549 15.1983 84.1549 14.9874V12.6464C84.1549 12.4144 84.2182 12.2246 84.3447 12.0769C84.4924 11.9293 84.6822 11.8555 84.9142 11.8555H101.048C101.28 11.8555 101.47 11.9293 101.617 12.0769C101.765 12.2246 101.839 12.4144 101.839 12.6464V14.9874C101.839 15.1983 101.765 15.3775 101.617 15.5252C101.47 15.6728 101.28 15.7466 101.048 15.7466H95.2272V33.2408C95.2272 33.4517 95.1534 33.6309 95.0057 33.7786C94.8581 33.9262 94.6683 34 94.4363 34H91.5259ZM114.189 34.3164C111.278 34.3164 109.022 33.5677 107.419 32.0703C105.837 30.5729 104.993 28.4639 104.888 25.7433C104.867 25.1738 104.856 24.2459 104.856 22.9594C104.856 21.6518 104.867 20.7028 104.888 20.1122C104.993 17.4127 105.848 15.3143 107.45 13.8169C109.074 12.2984 111.32 11.5391 114.189 11.5391C116.066 11.5391 117.7 11.866 119.092 12.5198C120.484 13.1525 121.56 14.0278 122.319 15.1455C123.078 16.2422 123.479 17.4865 123.521 18.8785V18.9417C123.521 19.1105 123.447 19.2581 123.3 19.3846C123.173 19.4901 123.025 19.5428 122.857 19.5428H119.851C119.598 19.5428 119.408 19.4901 119.282 19.3846C119.155 19.2792 119.05 19.0788 118.966 18.7836C118.628 17.4549 118.069 16.5269 117.289 15.9997C116.509 15.4513 115.465 15.1772 114.157 15.1772C111.12 15.1772 109.538 16.8749 109.412 20.2704C109.391 20.8398 109.38 21.7151 109.38 22.8961C109.38 24.0772 109.391 24.9735 109.412 25.5851C109.538 28.9806 111.12 30.6783 114.157 30.6783C115.465 30.6783 116.509 30.4042 117.289 29.8558C118.09 29.3075 118.649 28.3795 118.966 27.0719C119.029 26.7767 119.124 26.5763 119.25 26.4709C119.398 26.3654 119.598 26.3127 119.851 26.3127H122.857C123.046 26.3127 123.205 26.376 123.331 26.5025C123.479 26.629 123.542 26.7872 123.521 26.977C123.479 28.369 123.078 29.6238 122.319 30.7416C121.56 31.8383 120.484 32.7135 119.092 33.3673C117.7 34 116.066 34.3164 114.189 34.3164ZM126.665 34C126.497 34 126.338 33.9367 126.191 33.8102C126.064 33.6836 126.001 33.5255 126.001 33.3357L126.064 33.0509L133.688 12.6464C133.836 12.1191 134.205 11.8555 134.795 11.8555H138.244C138.792 11.8555 139.161 12.1191 139.351 12.6464L146.975 33.0509C146.996 33.1142 147.007 33.2091 147.007 33.3357C147.007 33.5255 146.943 33.6836 146.817 33.8102C146.69 33.9367 146.543 34 146.374 34H143.622C143.347 34 143.137 33.9367 142.989 33.8102C142.841 33.6836 142.746 33.5466 142.704 33.3989L141.217 29.5395H131.822L130.335 33.3989C130.166 33.7996 129.86 34 129.418 34H126.665ZM140.11 25.9014L136.504 16.1262L132.929 25.9014H140.11ZM151.719 34C151.508 34 151.329 33.9262 151.181 33.7786C151.034 33.6309 150.96 33.4517 150.96 33.2408V12.6464C150.96 12.4144 151.023 12.2246 151.15 12.0769C151.297 11.9293 151.487 11.8555 151.719 11.8555H159.913C162.486 11.8555 164.5 12.4566 165.955 13.6587C167.431 14.8608 168.169 16.5691 168.169 18.7836C168.169 20.3231 167.79 21.6202 167.031 22.6747C166.292 23.7081 165.259 24.4568 163.93 24.9208L168.549 32.9877C168.612 33.1142 168.644 33.2302 168.644 33.3357C168.644 33.5255 168.57 33.6836 168.423 33.8102C168.296 33.9367 168.148 34 167.98 34H165.101C164.763 34 164.5 33.9262 164.31 33.7786C164.141 33.6309 163.983 33.42 163.835 33.1459L159.755 25.6484H155.357V33.2408C155.357 33.4517 155.283 33.6309 155.136 33.7786C155.009 33.9262 154.83 34 154.598 34H151.719ZM159.818 22.0736C161.083 22.0736 162.032 21.7889 162.665 21.2195C163.319 20.65 163.646 19.8275 163.646 18.7519C163.646 17.6763 163.319 16.8433 162.665 16.2528C162.032 15.6622 161.083 15.367 159.818 15.367H155.357V22.0736H159.818ZM174.005 34C173.794 34 173.615 33.9262 173.467 33.7786C173.319 33.6309 173.246 33.4517 173.246 33.2408V12.6464C173.246 12.4144 173.309 12.2246 173.435 12.0769C173.583 11.9293 173.773 11.8555 174.005 11.8555H187.924C188.156 11.8555 188.346 11.9293 188.494 12.0769C188.641 12.2246 188.715 12.4144 188.715 12.6464V14.7343C188.715 14.9663 188.641 15.1561 188.494 15.3037C188.346 15.4303 188.156 15.4935 187.924 15.4935H177.516V21.0929H187.228C187.46 21.0929 187.65 21.1667 187.798 21.3144C187.945 21.4409 188.019 21.6202 188.019 21.8522V23.8135C188.019 24.0455 187.945 24.2353 187.798 24.383C187.65 24.5095 187.46 24.5728 187.228 24.5728H177.516V30.362H188.177C188.409 30.362 188.599 30.4358 188.747 30.5834C188.894 30.731 188.968 30.9209 188.968 31.1528V33.2408C188.968 33.4727 188.894 33.6626 188.747 33.8102C188.599 33.9367 188.409 34 188.177 34H174.005Z" fill="#40A3F8"/>
<rect x="194" y="29" width="7" height="7" rx="3.5" fill="#40A3F8"/>
</svg>
</NavLink>


  <div className="flex md:order-2">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setIsShow(true)}>Login</button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 mt-4 ml-10 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-white-900 dark:border-gray-700">
      <li>
        <NavLink to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white " aria-current="page">Главная</NavLink>
      </li>
      <li>
        <NavLink to="/personal" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ">Персонал</NavLink>
      </li>
      <li>
        <NavLink to="/about" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Подробнее</NavLink>
      </li>
      <li>
        <NavLink to="/categories" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Категории</NavLink>
      </li>
    </ul>
  </div>
  </div>
</nav>

        </div>
    )
}

export default Header