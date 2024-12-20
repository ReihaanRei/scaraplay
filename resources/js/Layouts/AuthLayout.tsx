import ApplicationLogo from "@/Components/ApplicationLogo";
import Footer from "@/Components/large-ui/Footer";
import Navbar from "@/Components/large-ui/Navbar";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex justify-center p-2 sm:justify-center items-center">
                <div className="bg-primary/90 flex gap-4 h-full p-8 w-1/2 rounded-xl">
                    <div className="w-full sm:max-w-md flex justify-between flex-col">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-4xl text-white font-extrabold">
                                SCARA STORE
                            </h1>
                            <h2 className="text-zinc-300 text-base font-medium">
                            Ingin tampil beda dan memukau? Selamat datang di 'Fashion Hub', tempat terbaik untuk mendapatkan kostum unik, langka, dan eksklusif yang dirancang khusus untuk berbagai gaya dan acara! Kami menyediakan beragam pilihan kostum berkualitas tinggi yang akan membuat Anda menjadi pusat perhatian. Temukan kostum impian Anda hanya di 'Fashion Hub'!
                            </h2>
                        </div>
                    </div>
                    <div className="w-full sm:max-w-md px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
