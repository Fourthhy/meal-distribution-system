import HeaderBar from "./reusableComponents/HeaderBar"

function LandingPage() {
    return (
        <>
        <HeaderBar />
        <div 
            className="h-[calc(100vh-145px)] w-[100%] bg-cover bg-center relative"
            style={{'backgroundImage': 'url(/background-image.svg)'}}>
            <div className="absolute inset-0 bg-[rgba(31,52,99,0.8)]"></div>
            <div
                className="grid grid-cols-2 grid-rows-auto z-10 relative">
                    <div className="h-[calc(100vh-145px)] flex justify-center items-center">
                        <div className="w-[75%] min-h-[400px] max-h-[calc(100%-400px)]">
                            <p className="text-[2.5em] text-white font-roboto font-bold text-center pb-[45px]">
                                FREE LUNCH SYSTEM
                            </p>

                            <p className="text-[1.5em] text-white font-roboto font-bold text-center pb-[50px]">
                                Designed to streamline the delivery of nutritious meals to students during their term in La Verdad Christian College. The system aims to improve student health and engagement by providing a reliable and user-friendly platform for meal access within the school environment.
                            </p>

                            <div className="flex justify-center items-center mb-[25px] gap-[15px]"> 
                                <button className="w-[120px] h-[40px] bg-[#3B82F6] text-white font-roboto text-[1rem] rounded-[20px]">Admin</button>
                                <button className="w-[120px] h-[40px] border-[2px] border-white rounded-[20px] text-white font-roboto">Kitchen Staff</button>
                            </div>
                        </div>
                    </div>
                    <div className="h-[calc(100vh-145px)] w-[100%] flex justify-start items-center">
                        <img src="/hero-image.svg" alt="" className="ml-[10px]"/>
                    </div>
                </div>
        </div>
        </>
    )
}

export default LandingPage