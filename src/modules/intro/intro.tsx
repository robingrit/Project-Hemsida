import './intro.scss'

const videoURL = 'https://player.vimeo.com/video/1016456464';

function Intro() {
  
    return (
      <>
        <div className="intro_wrapper">
            <div id="intro_text">
                <div id="intro_left">
                    <h1>Lokal mat på allas villkor</h1>
                    <h2>Med människor och miljön i fokus</h2>
                </div>
                <div id="intro_right">
                    <p>
                        En God Granne är länken i den hållbara livsmedelskedjan för livsmedelsföretag, offentliga måltider, dagligvaruhandeln samt hotell- och restaurangsektorn.
                    </p>
                </div>
            </div>
            <div id="intro_video">
            <iframe
                src= {videoURL}
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Vimeo Video"
            ></iframe>
            </div>
        </div>
      </>
    )
  }
  
  export default Intro