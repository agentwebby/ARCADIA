import axios from 'axios';
import apiConfig from '../configs/api-config.json';
export interface UploadFile {
    schema: string;
    file: File;
}

class UploadService {

    async uploadFile(file: UploadFile): Promise<void> {
        const formData = new FormData();
        const baseUrl = apiConfig.url.file['schema'];
        formData.append('file', file.file);
        formData.append('schema', file.schema);
        try {
            await axios.post(`${baseUrl}/api/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        } catch (error) {
            console.error('File upload failed:', error);
            throw error;
        }
    }
}

export default UploadService;