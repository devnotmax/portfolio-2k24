interface TitleHeaderProps {
  title: string;
  action?: React.ReactNode;
}

export const TitleHeader = ({ title, action }: TitleHeaderProps) => {
  return (
    <header className="grid grid-cols-2 md:grid-cols-[20%_80%] items-center w-full mb-10">
      <div className="text-center md:text-left">
        <p className="text-white text-2xl font-fira-code font-semibold">
          <span className="text-[#C778DD]">#</span>
          {title}
        </p>
      </div>
      <div className="flex justify-end items-center gap-2">
        <div className="hidden md:block w-full">
          <hr className="w-full border-[#C778DD] border-2" />
        </div>
        {action && <div className="ml-2 flex-shrink-0">{action}</div>}
      </div>
    </header>
  );
};

export default TitleHeader;
