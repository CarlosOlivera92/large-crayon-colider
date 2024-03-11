import React from 'react';
import { useState, ChangeEvent, useEffect } from 'react';
import Input from '@components/Input/Input';
import styles from './JsonUploader.module.css';

interface IJsonUploaderProps {
    setJsonData: React.Dispatch<React.SetStateAction<any | null>>;
}

const JsonUploader = ({ setJsonData } : IJsonUploaderProps) => {
    const [jsonData, setJsonDataLocal] = useState<any | null>(null); // Change the type to a more specific type if you know the exact structure of the JSON

    // Function to handle JSON file upload
    const handleJsonChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            const reader = new FileReader();
            // Read the uploaded JSON file
            reader.onload = () => {
                if (typeof reader.result === 'string') {
                    const parsedJson = JSON.parse(reader.result); // Parse JSON data
                    setJsonDataLocal(parsedJson); // Set the local JSON data
                    setJsonData(parsedJson); // Set the JSON data in the parent component
                }
            };
            reader.readAsText(file); // Read file as text
        }
    };
    
    // useEffect hook to log JSON data when it changes
    useEffect(() => {
        console.log(jsonData);
    }, [jsonData]);

    return (
        <div className={styles.jsonUploaderWrapper}>
             {/* Input field for uploading JSON file */}
             <Input label='Upload your JSON file' id='jsonFilePicker' type={"file"} accept='.json' onChange={handleJsonChange}/>
        </div>
    );
};

export default JsonUploader;
