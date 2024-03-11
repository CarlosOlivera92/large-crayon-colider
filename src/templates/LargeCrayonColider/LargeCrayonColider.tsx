import ImageUploader from "@components/ImageUploader/ImageUploader"
import styles from './LargeCrayonColider.module.css';
import JsonUploader from "@components/JsonUploader/JsonUploader";
import Canvas from "@components/Canvas/Canvas";
import { useState } from "react";
const LargeCrayonColider = () => {
    //States for storage the image source and the JSON data
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [jsonData, setJsonData] = useState<any | null>(null);

    return (
        <div className={styles.largeCrayonContainer}>
            <h1 className={styles.sectionTitle}>LCC: The Large Crayon Colider</h1>
            <div className={styles.largeCrayonWrapper}>
                <div className={styles.imageUploaderContainer}>
                    {/* Render ImageUploader component */}
                    <ImageUploader setImageSrc={setImageSrc} />
                    {/* Display uploaded image if available */}
                    {imageSrc && (
                        <div className={styles.imgWrapper}>
                            <img src={imageSrc} alt="Uploaded" />
                        </div>
                    )}
                </div>

                <div className={styles.jsonUploaderContainer}>
                    {/* Render JsonUploader component */}
                    <JsonUploader setJsonData={setJsonData} />
                    {/* Render Canvas component */}
                    {imageSrc && jsonData && <Canvas imageUrl={imageSrc} jsonData={jsonData} />}
                </div>
            </div>
        </div>
    );
};
export default LargeCrayonColider;