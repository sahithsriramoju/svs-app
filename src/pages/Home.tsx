import { Features } from "../components/Features";
import { Banner } from "../components/Banner"

export const Home = () => {
    return (
        <div className="container">
            <Banner/>
            <Features/>
        </div>
    )
}