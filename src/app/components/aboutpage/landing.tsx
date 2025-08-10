export default function AboutLanding() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="bg-about h-[50vh] flex  items-center justify-center pb-5">
                <h1 className="text-white text-6xl relative z-20">GrandArch Architectural Design Studio</h1>
            </div>

            <div className="">
                <div className="flex max-w-[90rem] mx-auto h-full justify-between items-center">
                    <div className="flex flex-col h-full justify-between gap-6">
                        <h1 className="text-3xl">About GrandArch</h1>
                        <p className="w-[40rem] text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasi consectetur porro dolorum ullam repudiandae cumque aperiam, officia magnam nobis, nemo voluptas ipsam et ea vero ipsum? Fugit commodi quae enim quaerat ratione consequuntur nisi harum itaque, ex, doloremque non!
                        </p>
                        <a href="" className="">
                            Learn more
                        </a>
                    </div>
                    <div className="relative">
                        <img src="/img/image 16.png" alt="" className="" />
                        <div className="bg-gray-200 relative px-10 py-2 w-fit left-4 top-[-25px]">
                            <h1 className="text-2xl">Manila Office</h1>
                        </div>
                        <div className="h-[400px] w-[450px] bg-[transparent] border-2 border-black absolute top-20 left-20 z-[-999]"/>
                        <div className="h-[390px] w-[440px] bg-[transparent] border-2 border-black absolute top-21 left-21 z-[-999]"/>
                    </div>
                </div>
            </div>
        </div>
    );
}