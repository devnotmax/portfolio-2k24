import Image from "next/image";

export const Quote = () => {
  return (
    <div className="p-8 flex justify-center items-center">
      <div className="flex justify-center w-[80%]">
        <div className="text-white font-fira-code font-medium text-3xl h-[300px] flex items-center">
          <Image src="/quote.png" alt="quote" width={1000} height={300}>
          </Image>
        </div>
      </div>
    </div>
  );
};

export default Quote;
