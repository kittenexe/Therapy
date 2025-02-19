import therapist from '../assets/TherapistPhotoTemp.jpg';
import poke from '../assets/poke2.png';
import titan from  '../assets/TitanSlain.PNG';

// Code me something that renders an image
function PictureRender(){
    return(
        <div>
            <img src={therapist} alt= "" width= "400px" />
        </div>
    );
}

//render an array of images (placeholder for client images)
function MultiPic(){
    const imgData = [
        therapist,
        poke,
        titan
    ];
    const imgDataArray = imgData.map((x, key) =>(
            <li key={`image-${x}`}>
                <img src= {x} alt= {`number ${key + 1}`} width= "800px"/>
            </li>
        )
    );

    return(
        <ul>{imgDataArray}</ul>
    );
}

//Render an array of images lazily*/ Might not need since sample size is small

function LazyPicLoad(){
    const imgData= [
        {
            id: '1',
            pic: therapist
        },
        {
            id: '2',
            pic: therapist
        },
        {
            id: '3',
            pic: therapist
        }
    ];

    const imgs = imgData.map((x, key) =>(
        <div key={`lazyImage-${x.id}`}>
            <img loading='lazy' src={x.pic} alt={key} width='700px' height='500px'/>
        </div> 
    ));

    return(
        <div>{imgs}</div>
    );
}

export default PictureRender;
export {MultiPic};
export {LazyPicLoad};