import profilePic from "./assets/profile_pic.jpg"
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">About my self</h2>
            <p className="card-text">I am a research asistance at Neuroscience Center and Human Computer Interface Lab at KMUTT</p>
        </div>
    )
}

export default Card