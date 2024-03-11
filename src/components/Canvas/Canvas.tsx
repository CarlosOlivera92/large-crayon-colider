import { useState, useEffect } from 'react';
import { Stage, Layer, Image as KonvaImage, Line } from 'react-konva';
import { Box, ICanvasProps } from '../../data/interfaces/CanvasComponent';
import styles from './Canva.module.css';

const Canvas = ({ imageUrl, jsonData }: ICanvasProps) => {
    const [image, setImage] = useState<HTMLImageElement | null>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [boxes, setBoxes] = useState<Box[]>([]);

    useEffect(() => {
        // Load image and set dimensions when imageUrl changes
        const img = new window.Image();
        img.src = imageUrl;
        img.onload = () => {
            setImage(img);
            setDimensions({ width: img.width, height: img.height });
        };
    }, [imageUrl]);

    useEffect(() => {
        // Update boxes with values from the current JSON data
        setBoxes(jsonData.boxes || []);
    }, [jsonData]);

    if (!image) {
        return null; // Return null if image is not loaded yet
    }

    return (
        <div className={styles.canvaContainer}>
            <Stage width={dimensions.width} height={dimensions.height}>
                <Layer>
                    <KonvaImage image={image}  />
                    {/* Render lines for each box */}
                    {boxes.map((box, acc) => (
                        <Line
                            key={`box-${acc}`}
                            points={box.polygon.flat()} // Flatten the polygon points
                            fill="rgba(239, 83, 80, 0.5)" 
                            closed // Close the line
                            scaleX={dimensions.width} // Scale line width with image width
                            scaleY={dimensions.height} // Scale line height with image height
                        />
                    ))}
                </Layer>
            </Stage>
        </div>
    );
};

export default Canvas;
