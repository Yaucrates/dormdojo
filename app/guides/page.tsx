import Image from "next/image";
import Link from "next/link";

export default function DormGuides() {
    return (
        <div className="flex flex-col min-[1000px]:flex-row justify-between items-center gap-1 min-[1000px]:gap-0">
            <div className="relative w-full min-[1000px]:w-[49.8%]">
                <Image
                    src="/LivingAwayFromHomeCrashCourse.webp"
                    alt="Photo of Dorm"
                    className="w-full"
                    width={(2760 * 11) / 40}
                    height={(2760 * 11) / 40}
                    priority
                />
                <div className="absolute bottom-16 md:bottom-32 left-0 right-0 flex flex-col items-center gap-4">
                    <h1 className="text-white text-center text-4xl font-black">
                        DORM LIVING
                        <br />
                        CRASH COURSE
                    </h1>
                    <Link
                        href="/guides/dorm-living-crash-course"
                        className="bg-white w-56 h-12
                                            text-black text-xl font-normal
                                            flex justify-center items-center text-center"
                    >
                        Read
                    </Link>
                </div>
            </div>

            <div className="relative w-full min-[1000px]:w-[49.8%]">
                <Image
                    src="/InteriorDesignCrashCourse.webp"
                    alt="Photo of Dorm"
                    className="w-full"
                    width={(2760 * 11) / 40}
                    height={(2760 * 11) / 40}
                    priority
                />
                <div className="absolute bottom-16 md:bottom-32 left-0 right-0 flex flex-col items-center gap-4">
                    <h1 className="text-white text-center text-4xl font-black">
                        INTERIOR DESIGN
                        <br />
                        CRASH COURSE
                    </h1>
                    <Link
                        href="/guides/interior-design-crash-course"
                        className="bg-white w-56 h-12
                                            text-black text-xl font-normal
                                            flex justify-center items-center text-center"
                    >
                        Read
                    </Link>
                </div>
            </div>
        </div>
    );
}
