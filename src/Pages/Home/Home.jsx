import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../index.css';
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
import { useEffect, useState } from 'react';
import ServiceCard from '../../Components/ServiceCard';
const Home = () => {

    const [items,setItems] = useState([]);
    useEffect(() => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => {
            setItems(data);
        })
    },[])
    return (
        <div className="my-12 mx-5 md:mx-12 lg:mx-14">
            {/* sliders */}
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper relative"
            >
                <SwiperSlide className='sliders p-24 space-y-7'>
                    <h3 className=' text-white font-bold text-6xl'>Affordable <br /> Price For Car <br /> Servicing</h3>
                    <p className='text-white text-lg'>There are many variations of passages of  available, but <br />the majority have suffered alteration in some form</p>
                    <div className="flex gap-5">
                        <button className='bg-[#FF3811] px-6 py-4 text-white font-semibold text-lg '>Discover More</button>
                        <button className='bg-transparent border border-white font-semibold text-lg text-white px-6 py-4'>Latest Project</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='sliders1 p-24 space-y-7'>
                <h3 className=' text-white font-bold text-6xl'>Affordable <br /> Price For Car <br /> Servicing</h3>
                    <p className='text-white text-lg'>There are many variations of passages of  available, but <br />the majority have suffered alteration in some form</p>
                    <div className="flex gap-5">
                        <button className='bg-[#FF3811] px-6 py-4 text-white font-semibold text-lg '>Discover More</button>
                        <button className='bg-transparent border border-white font-semibold text-lg text-white px-6 py-4'>Latest Project</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='sliders2 p-24 space-y-7'>
                <h3 className=' text-white font-bold text-6xl'>Affordable <br /> Price For Car <br /> Servicing</h3>
                    <p className='text-white text-lg'>There are many variations of passages of  available, but <br />the majority have suffered alteration in some form</p>
                    <div className="flex gap-5">
                        <button className='bg-[#FF3811] px-6 py-4 text-white font-semibold text-lg '>Discover More</button>
                        <button className='bg-transparent border border-white font-semibold text-lg text-white px-6 py-4'>Latest Project</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='sliders3 p-24 space-y-7'>
                <h3 className=' text-white font-bold text-6xl'>Affordable <br /> Price For Car <br /> Servicing</h3>
                    <p className='text-white text-lg'>There are many variations of passages of  available, but <br />the majority have suffered alteration in some form</p>
                    <div className="flex gap-5">
                        <button className='bg-[#FF3811] px-6 py-4 text-white font-semibold text-lg '>Discover More</button>
                        <button className='bg-transparent border border-white font-semibold text-lg text-white px-6 py-4'>Latest Project</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='sliders4 p-24 space-y-7'>
                <h3 className=' text-white font-bold text-6xl'>Affordable <br /> Price For Car <br /> Servicing</h3>
                    <p className='text-white text-lg'>There are many variations of passages of  available, but <br />the majority have suffered alteration in some form</p>
                    <div className="flex gap-5">
                        <button className='bg-[#FF3811] px-6 py-4 text-white font-semibold text-lg '>Discover More</button>
                        <button className='bg-transparent border border-white font-semibold text-lg text-white px-6 py-4'>Latest Project</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='sliders5 p-24 space-y-7'>
                <h3 className=' text-white font-bold text-6xl'>Affordable <br /> Price For Car <br /> Servicing</h3>
                    <p className='text-white text-lg'>There are many variations of passages of  available, but <br />the majority have suffered alteration in some form</p>
                    <div className="flex gap-5">
                        <button className='bg-[#FF3811] px-6 py-4 text-white font-semibold text-lg '>Discover More</button>
                        <button className='bg-transparent border border-white font-semibold text-lg text-white px-6 py-4'>Latest Project</button>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* about section */}
            <div className='flex my-32'>
                <div className="w-1/2 relative">
                    <img src={person} alt="" className='h-[473px] w-[460px] object-cover rounded-lg'/>
                    <img src={parts} alt="" className='h-[327px] w-[332px] object-cover border-white border-8 absolute top-1/2 right-16'/>
                </div>
                <div className="w-1/2">
                    <p className='text-[#FF3811] font-bold text-xl mb-5'>About Us</p>
                    <h3 className='text-[#151515] font-bold text-5xl'>We are qualified <br /> & of experience <br /> in this field</h3>
                    <p className='text-[#737373] font-normal text-base mt-7 mb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                    <p className='text-[#737373] font-normal text-base'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className='mt-7 px-7 py-4 rounded-md bg-[#FF3811] font-semibold text-white'>Get More Info</button>
                </div>
            </div>
            {/* service section */}
            <div>
                <h3 className='text-[#FF3811] text-lg font-bold text-center'>Service</h3>
                <p className='text-[#151515] font-bold text-5xl text-center mt-5'>Our Service Area</p>
                <p className='text-[#737373] text-base text-center mt-5'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
                <div className='grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        items.map(item => {
                            return <ServiceCard key={item._id} item={item}></ServiceCard>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;