

const Banner = () => {
    return (
        <div>
            <div className="h-screen bg-cover  bg-center bg-[url('/donation.jpeg')]">
                <div className="w-full h-full flex justify-center items-center text-center bg-white bg-opacity-95 -mt-1">
                    <div className="">
                        <h1 className="text-5xl font-bold mb-10">I Grow By Helping People In Need</h1>
                        <div className="join">
                            <div>
                               
                                <div >
                                    <input className="input w-96 input-bordered join-item" placeholder="Search" />
                                </div>
                            </div>
                            
                            <div className="indicator">
                                <button className="btn join-item bg-[#FF444A] text-white">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;