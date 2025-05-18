import { Link } from "react-router-dom"

export const Banner = () => {
    return(
    <div className="banner mb-6">
        <h1 className="uppercase h-full text-white flex  flex-col items-center justify-center">
            <span className="text-banner-headline animate-moveInRight">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
            <Link to="#free-consultation" className="text-banner-subheadline px-8 py-4 rounded-sm bg-amber hover:bg-amber-light">Free consultation</Link>
        </h1>
    </div>
    )
}
