import Image from "next/image";
import Link from "next/link";

const TrustedCompany = ({ imgUrl, altText }) => {
  return (
    <div className="swiper-slide px-4">
      <Link href="#" className="">
        <Image
          src={imgUrl}
          width={0}
          height={0}
          alt={altText}
          priority
          className="w-full h-auto max-w-[80px] max-h-[60px] object-contain"
        />
      </Link>
    </div>
  );
};

export default TrustedCompany;
