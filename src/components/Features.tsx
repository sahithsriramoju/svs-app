import { Link } from "react-router-dom"

export const Features = () => {
    return(
        <div className="flex flex-col lg:flex-row p-12">
        <div className="text-black">
            <h2 className="font-bold text-3xl my-0.5">No upfront fees or deposit. Enjoy low monthly payments.</h2>
            <p className="text-black font-extralight my-2">You don't have to worry about upfront fees or deposits with our low monthly payments. To get started, just request a consultation, and we will contact you.</p>
            <ul className="list-disc font-extralight mb-9">
                <li className="my-1">Save money on costly bills</li>
                <li className="my-1">Our installers are fully licensed, insured, and bonded</li>
                <li className="my-1">Proven track record of customer statisfaction rates of 98%</li>
            </ul>
            <Link to="#free-consultation" className="text-white cursor-pointer text-center text-xs px-8 py-6 my-9 bg-amber hover:bg-amber-light">Request Free Consultation</Link>
        </div>
        <div className="lg:w-1/2">
            <img src="https://res.cloudinary.com/dzvbnmljo/image/upload/v1747583775/nat-3-large_zm92lc.jpg"></img>
        </div>
        </div>
    )
}