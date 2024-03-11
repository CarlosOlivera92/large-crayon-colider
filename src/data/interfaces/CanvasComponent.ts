export interface Box {
    box: {
        topX: number;
        topY: number;
        bottomX: number;
        bottomY: number;
    };
    label: string;
    score: number;
    polygon: number[][];
}
export interface ICanvasProps {
    imageUrl: string;
    jsonData: {
        boxes: Box[]
    }
}
