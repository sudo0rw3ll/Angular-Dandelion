export interface ExtractedEntity {
    timestamp: string,
    time: number,
    lang: string,
    annotations: Array<Annotation>
}

export interface Annotation {
    id: number,
    title: string,
    start: number,
    categories: Array<string>,
    lod: Array<Lod>,
    label: string,
    types: Array<string>,
    image: ImageData,
    confidence: number,
    abstract: string,
    uri: string,
    end: number,
    spot: string
}

export interface Lod {
    wikipedia: string,
    dbpedia: string
}

export interface ImageData {
    full: string,
    thumbnail: string
}
