import Banner from "../../Components/Hero/Banner";
import Container from "../../Shared/Container";
import Navbar from "../../Shared/Navbar/Navbar";
import Topbar from "../../Shared/Navbar/Topbar";

const Home = () => {
    return (
        <div>
            <Topbar></Topbar>
            <div className="sticky top-0 z-50 ">
                <Navbar></Navbar>
            </div>
            <div>
                <Container>
                    <div className="">
                        <label className="input input-bordered items-center gap-2 md:hidden flex mb-5 pr-0">
                            <input type="text" className="grow" placeholder="Search in ZenMarket" />
                            <div className="bg-[#51AA1B] rounded-r-md p-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="#ffff"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                        </label>
                    </div>
                </Container>
            </div>
            <div>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;