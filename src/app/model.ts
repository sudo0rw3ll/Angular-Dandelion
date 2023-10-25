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

export interface SimilarityData {
    timestamp: string,
    time: number,
    lang: string,
    langConfidence: number,
    text1: string,
    text2: string,
    similarity: number
}

export interface LanguageDetectionData {
    timestamp: string,
    time: number,
    text: string,
    detectedLangs: Array<LanguageData>
}

export interface LanguageData {
    lang: string,
    confidence: number
}

export interface SentimentAnalysisData {
    timestamp: string,
    time: number,
    lang: string,
    sentiment: SentimentData
}

export interface SentimentData {
    score: number,
    type: string
}