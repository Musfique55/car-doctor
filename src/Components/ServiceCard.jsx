import { FaArrowRightLong } from "react-icons/fa6";
import PropTypes from 'prop-types';
const ServiceCard = ({item}) => {
    return (
        <div className="space-y-5 p-6 border rounded-xl">
            <img src={item.img} alt="" className="w-full rounded-lg h-[208px] object-cover"/>
            <h3 className="text-[#444444] font-bold text-2xl">{item.title}</h3>
            <div className="flex font-semibold text-xl text-[#FF3811] justify-between items-center">
                <p>Price: {item.price}</p>
                <FaArrowRightLong className="cursor-pointer"/>
            </div>
        </div>
    );
};

ServiceCard.propTypes ={
    item : PropTypes.object.isRequired
}
export default ServiceCard;