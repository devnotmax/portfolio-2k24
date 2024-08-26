
interface TitleHeaderProps {
  title: string;
}

export const TitleHeader = ({ title }: TitleHeaderProps) => {
  return (
    <header className="grid grid-cols-2 md:grid-cols-[20%_80%] items-center w-full mb-10">
      <div className="text-center md:text-left">
        <p className="text-white text-2xl font-fira-code font-semibold">
          <span className="text-[#C778DD]">#</span>{title}
        </p>
      </div>
      <div className="hidden md:block">
        <hr className="w-full border-[#C778DD] border-2" />
      </div>
    </header>
  );
};

export default TitleHeader;