export const DownloadCV = () => {
    return (
        // <a href="/Resume.pdf" download="MaximilianoCV.pdf" className="border-2 border-[#C778DD] p-2 text-sm hover:border-white hover:text-[#C778DD]">Descargar CV</a>
        <button className="border-2 border-[#C778DD] p-2 text-sm hover:border-white hover:text-[#C778DD]">
            <a href="/Resume.pdf" download="MaximilianoCV.pdf">Descargar CV</a>
            {/* Cambiar luego por Links */}
        </button>
    )
}

export default DownloadCV;
