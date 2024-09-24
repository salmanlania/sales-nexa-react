import React from 'react'
import './home.css';

export default function Home() {

  return (
    // <section style={{margin : '0' , padding : '0'}}>
    //   <div>
    //     <section>
    //       <h1>Welcome to</h1>
    //     </section>
    //     <section style={{display : 'flex' , justifyContent : 'center'}}>
    //       <h1>SALES</h1>
    //       <h1 style={{fontFamily: 'Bakbak One', fontSize: '40px', fontWeight: '400', lineHeight: '350px', textAlign: 'center' , color : '#0088CC'}}>NEXA</h1>
    //     </section>
    //     <section>
    //       <h1>Your Gateway to Automation</h1>
    //     </section>
    //   </div>
    // </section>
    <div>
      <section style={{ background: 'linear-gradient(180deg, #EEEEEE 0%, #F5F5F5 100%)' }}>
        <div>
          <section>
            <p class="welcomeTo">Welcome To</p>
          </section>
          <section class="flex justify-center mb-8 gap-4">
            <h1 class="uppercase text-[250px] bakbak-one-regular font-bold">sales</h1>
            <h1 class="text-[#0088CC] uppercase text-[250px] bakbak-one-regular font-bold">nexa</h1>
          </section>
        </div>
        {/* <div class="flex justify-between ">
          <section class="list-none flex flex-col justify-around" style={{ maxWidth: '300px', marginLeft: '2rem' }}>
            <li style={{ fontSize: '18px' }}>SalesNexa is a revolutionary suite of software tools designed to automate
              and streamline your sales
              process. With our powerful, user-friendly platform.</li>
            <li style={{ fontSize: '18px' }}>Dive into a world where generating leads. </li>
          </section>
          <section>
            <img src="" alt="" class="max-w-full h-auto"
              style={{ height: '45rem' }} />
          </section>
          <section class="list-none flex flex-col justify-around" style={{ maxWidth: '300px', marginRight: '2rem' }}>
            <li style={{ fontSize: '18px' }}>Sales professionals can now bid farewell to the cumbersome manual work that
              slows down efficiency.
            </li>
            <li style={{ fontSize: '18px' }}>Managing email campaigns, and engaging potential clients via WhatsApp is
              not just easier, but
              smarter and more effective.</li>
          </section>
        </div>
        <div>
          <li class="bg-[#0088CC] text-[#ffffff] font-normal pl-9 pr-9 pt-2 pb-2 rounded-3xl list-none"
            style={{ width: 'fit-content', margin: 'auto', marginTop: '1rem', marginLeft: '47%' }}>
            <button style={{ width: '11rem' }}>Login</button>
          </li>
        </div> */}

      </section>
      <br />
      {/* <section style={{ background: 'linear-gradient(180deg, #EEEEEE 0%, #F5F5F5 100%)' }}>
        <div class="flex flex-col items-center gap-4">
          <h1 class="font-bold text-xl">Efficiency at you Finger Tips</h1>
          <p class="text-base font-normal">SalesNexa automates the most time-consuming parts of the sales process.</p>
          <img src="{% static 'myapp/images/second-img-landing.png' %}" alt="" class="max-w-full h-auto" />
        </div>
      </section> */}
    </div>
  )
}
