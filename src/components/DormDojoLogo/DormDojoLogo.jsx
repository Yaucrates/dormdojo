import Image from "next/image";

const DormDojoLogo = () => {
    return (
        <Image
            src="/logo.webp"
            alt="DormDojo Logo"
            className="m-8"
            width={358 * 0.6}
            height={54 & 0.6}
        />
    );
};

export default DormDojoLogo;
