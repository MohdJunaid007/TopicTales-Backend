import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: `mongodb://blog:blog@ac-npngtts-shard-00-00.rf5z8cf.mongodb.net:27017,ac-npngtts-shard-00-01.rf5z8cf.mongodb.net:27017,ac-npngtts-shard-00-02.rf5z8cf.mongodb.net:27017/?ssl=true&replicaSet=atlas-bp3g0y-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if (match.indexOf(file.memeType) === -1)
            return `${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({ storage }); 