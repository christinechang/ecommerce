import React from 'react'

export default ( ) =>(
    <div style = {styles.mainBlock}>
        <h1>Who:</h1>   
    
        <div id = "layout2ColResp">
            <div style = {styles.half}>
                <p>- born in new york city, grew up in the suburbs</p>
                <p>- studied mathematics and art as a double major in a small new england liberal arts college.</p>
                <p>- was a programmer, designer, technical artist and animator in computer animation for films and games</p>
                <p>- has lived, worked, and exhibited in new york, boston, san francisco, dublin, paris, barcelona</p>
                <p>- paints with acrylics or oils or pastels</p>
                <p>- currently living in barcelona, spain</p>
            </div>
            <div style = {styles.half}>
                <img width = "100%" 
                    src = "https://res.cloudinary.com/czingc/image/upload/c_scale,w_600/v1541199326/czingcAssets/2011-09EiffelTower.jpg">
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
    }
}
