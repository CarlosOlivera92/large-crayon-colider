import React, { useState } from 'react';
import { ChangeEvent } from 'react';
import Input from '@components/Input/Input';
import styles from './ImageUploader.module.css';

interface ImageUploaderProps {
    setImageSrc: React.Dispatch<React.SetStateAction<string | null>>;
}

const ImageUploader = ({ setImageSrc }: ImageUploaderProps) => {
    const [imageFile, setImageFile] = useState<string | null>(null);
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            const reader = new FileReader();
            // Read the uploaded image file
            reader.onload = () => {
                if (typeof reader.result === 'string') {
                    // Create an image element
                    const img = new Image();
                    img.src = reader.result;
                    // Set the width and height
                    const newWidth = 300; // Example width
                    const newHeight = 200; // Example height
                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        canvas.width = newWidth;
                        canvas.height = newHeight;
                        const ctx = canvas.getContext('2d');
                        if (ctx) {
                            ctx.drawImage(img, 0, 0, newWidth, newHeight);
                            const resizedImage = canvas.toDataURL('image/jpeg');
                            setImageSrc(resizedImage); // Set the image source
                            setImageFile(resizedImage); // Store image in local state
                        }
                    };
                }
            };
            reader.readAsDataURL(file); // Convert file to data URL
        }
    };

    return (
        <div className={styles.imageUploaderWrapper}>
            {/* Input field for uploading image */}
            <Input label='Upload Image' id='imagePicker' type={"file"} accept='image/*' onChange={handleImageChange}/>
        </div>
    );
};

export default ImageUploader;


