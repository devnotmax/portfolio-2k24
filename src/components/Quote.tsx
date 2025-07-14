import Image from "next/image";

export const Quote = () => {
  return (
    <div className="container flex justify-center items-center py-8">
      <div className="relative w-full max-w-2xl border border-slate-400/30 rounded-md bg-transparent p-8">
        {/* Comillas de apertura */}
        <span className="absolute -top-6 left-4 text-5xl text-slate-400/60 select-none">
          “
        </span>
        <p className="text-white font-fira-code font-medium text-xl md:text-2xl leading-relaxed text-left">
          Sólo tú puedes decidir que hacer con el tiempo qué se te ha dado.
        </p>
        {/* Comillas de cierre */}
        <span className="absolute -bottom-6 right-4 text-5xl text-slate-400/60 select-none">
          ”
        </span>
        {/* Autor */}
        <div className="flex justify-end mt-6">
          <div className="border-t border-slate-400/30 px-4 pt-2">
            <span className="text-slate-300 font-fira-code text-base">
              • Gandalf
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
