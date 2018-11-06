import React from 'react'

export default ( ) =>(
    <div style = {styles.mainBlock}>
        <h1>Why:</h1>   
    
        <div id ="layout2ColResp">
            <div style = {styles.half}>
                <p>c. zing chang has painted with both oils and acrylics on canvas, but for now, is focusing on acrylics. in addition, some work is done with pastels on paper.</p>
                <p>current favorite subjects are paris life, pet paintings and portraits.</p>
                <p><span style = {styles.bold}>paris life</span> includes landscapes of the distinctive parisian chimneys and rooftops and still lives of the beautiful market produce.</p>
                <p><span style = {styles.bold}>pet paintings</span>, done on commission, are viewed by the artist as more than merely pet portraits. they are consciously created compositions with well loved pets in them.</p>
                <p>lastly, the <span style = {styles.bold}>portraits</span> are “customized” copies of well known portraits.</p>    

                <p>photography has influenced the artist’s compositions in several ways. firstly, the aesthetic of harshly cropped images is used. this brings focus to shapes, which, in turn, leads to a sort of abstraction in reality. in addition, by framing everyday objects, the paintings elevate the mundane and draws attention to its beauty.</p>
                <p>though the style of the paintings is realistic, there is no interest in hyper-realism. in fact, the textures given by brushwork on canvas and pastel strokes on paper are always cherished.</p>

            </div>
            <div style = {styles.half}>
                <img width = "100%" 
                    src = "https://res.cloudinary.com/czingc/image/upload/c_scale,w_600/v1541207046/czingcAssets/2013-12-purpl4BirdsCgd.jpg">
                </img>        
            </div>
        </div>
    </div>
)

let styles = {
    mainBlock: {
        padding: "10px 40px"
    },
    half: {
        border: "1px grey solid",
        borderRadius: 5,
        padding: 20
    },
    bold: {
        fontWeight: "bold"
    }
}
