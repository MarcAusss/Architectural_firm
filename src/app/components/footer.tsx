export default function Mainfooter() {
    return (
        <div className="max-w-[95vw] mx-auto">
            <div className="bg-linear-goldWhite h-50 flex justify-between px-52 items-center mb-10">
                <div className="">
                    <h2 className="text-xl ">Ready to get started?</h2>
                    <h2 className="text-xl font-bold">Talk to us today</h2>
                </div>
                <a href="" className="px-10 py-2 text-xl bg-[#F3ECDD]">Get started</a>
            </div>

            <div className="flex justify-between px-5">
                <img src="/img/group12.png" alt="" className="w-1/8" />
                <div className="flex gap-20">
                    <div className="flex flex-col gap-3">
                        <h2 className="font-bold mb-4 text-xl">Company</h2>
                        <a href="" className="text-lg">Home</a>
                        <a href="" className="text-lg">About GrandArch</a>
                        <a href="" className="text-lg">Terms and Conditions</a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h2 className="font-bold mb-4 text-xl">Features</h2>
                        <a href="" className="text-lg">Projects</a>
                        <a href="" className="text-lg">Blog</a>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-16">
                    <a href="" className="px-10 py-2 text-xl border-black border-2">Back to top</a>

                    <div className="flex gap-5">
                        <img src="/img/icons/2023_Facebook_icon.svg.png" alt="" className="rounded-full w-14" />
                        <img src="/img/icons/Instagram_icon.png" alt="" className="rounded-full w-14" />
                        <img src="/img/icons/google-mail-gmail-icon-logo-symbol-free-png.webp" alt="" className="rounded-full w-14" />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col ">
                <div className="border-t-2 border-gray-500 w-fit px-5 py-2">
                    Copyright © 2025 | GrandArch Design Studio
                </div>
            </div>
        </div>
    );
}