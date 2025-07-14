export interface Iproyect {
    title: string;
    technologies: string[];
    description: string;
    workingOn?: boolean;
    img: string;
    live: string;
    github: string;
    slug: string;
    content?: {
        overview: string;
        challenges: string[];
        solutions: string[];
        features: string[];
        images: {
            url: string;
            alt: string;
        }[];
    };
}

export default Iproyect;