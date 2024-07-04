import Image from "next/image";

const DormDojoLogo = () => {
    return (
        <Image
            src="/logo.webp"
            alt="DormDojo Logo"
            width={358 * 0.6}
            height={54 & 0.6}
        />
    );
};

export default DormDojoLogo;
