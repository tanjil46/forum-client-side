import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from "react-share";
import Hadlines from "../general componets/Hadlines";
import { useParams } from "react-router-dom";


const SharePost = () => {
const {id}=useParams()
    const shareUrl=`http://localhost:5173/detail/${id}`
    return (
        <div>
            <Hadlines title={'Share Your Post'}></Hadlines>

           <div className="flex justify-center gap-4 border-4 border-green-600 p-4">
            <FacebookShareButton url={shareUrl}>

            <FacebookIcon size={50}>

            </FacebookIcon>
            </FacebookShareButton>



           <TwitterShareButton url={shareUrl}>
             <TwitterIcon size={50}></TwitterIcon>
           </TwitterShareButton>









           </div>



        </div>
    );
};

export default SharePost;