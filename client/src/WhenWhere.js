import React from 'react'

export default ( ) =>(
    <div style = {styles.mainBlock}>
        <h1>When-Where:</h1>   
    
        <div id = "layout2ColResp">
            <div style = {styles.half}>
                <h3>art exhibits:</h3>
                <ul>
                    <li>open studios, 6 vernon street studios, somerville, ma, 2012,2013,2014,2015,2016,2017</li>
                    <li>kitchen on common, belmont, ma, solo show, 2014</li>
                    <li>new member show, cambridge art association, cambridge, ma, 2014</li>
                    <li>uncommon finds, 2 artist show in belmont art association space, belmont, ma, 2014</li>
                    <li>belmont seen: meet the belmont art association, belmont gallery of art, belmont, ma, 2014</li>
                    <li>boston biennial, boston, ma, 2012</li>
                    <li>restaurant parenthese, paris, france, solo show, 2012</li>
                    <li>restaurant la veraison, paris, france, solo show 2011</li>
                    <li>belmont gallery of art, belmont, ma, “from garden to kitchen to table”, 2009</li>
                    <li>belmont gallery of art, belmont, ma, “glimpses of spring”, 2009</li>
                    <li>powers music school, belmont, ma, 2007</li>
                    <li>arlington open studios, arlington, ma 2006</li>
                    <li>southern exposure annual juried exhibition of northern cal. artists, “landing”, 2003</li>
                    <li>“chair-ity” exhibit, cfi auction, limn gallery, san francisco, 2003.</li>
                    <li>san francisco open studios, 657 28th street, san srancisco, 2003.</li>
                    <li>“the art of life” exhibit, cfi auction, canvas cafe, san francisco, 2002.</li>
                    <li>self exhibit, 163 corbett, san francisco, ca 2002.</li>
                </ul>
                <h3>other art exhibits :</h3>
                <ul>
                    <li>marché d’art, paris ;</li>
                    <li>self exposition, paris ;</li>
                    <li>kennedy gallery exhibit, dublin, ireland;</li>
                    <li>royal hibernian academy, dublin, ireland;</li>
                    <li>mystic annual exhibit, mystic, ct;</li>
                    <li>riverside annual exhibit, new york, ny;</li>
                    <li>carl schurtz annual exhibit, ny;</li>
                    <li>greenwich village annual exhibit, ny;</li>
                </ul>
                <h3>education:</h3>
                <ul>
                    <li>ateliers de marie de paris, paris, france.</li>
                    <li>plum jade studio, with master zhang shou cheng, new york, ny.</li>
                    <li>art students league, new york, ny.</li>
                </ul>
                <h3>art films:</h3>

                <ul>
                <li>esquisses, computer generated abstract film, director, paris, 1995;</li>
                <li>de anima, computer generated abstract film, animator in cooperation with
    artist/director, karl lerch and arscimed inc., paris, 1995;</li>
    
                </ul>
                <h3>films shown at:</h3>
                <ul>
                    <li>siggraph 96, new orleans, la;</li>
                    <li>canal plus, television channel, france;</li>
                    <li>intl short film festival, 96, oberhausen, germany;</li>
                    <li>digitale festival 95, cologne, germany;</li>
                    <li>siggraph, 95, la, ca;</li>
                    <li>imagina 95, monte carlo;</li>
                    <li>digitale festival 95, speaker/panelist.</li>
                </ul>
            </div>
            <div style = {styles.half}>
                <img width = "100%" 
                    src = "https://res.cloudinary.com/czingc/image/upload/c_scale,w_600/v1541205618/samples/czingcWebsite/memphisFIN1crop.jpg">
                </img>        
                <img width = "100%"
                    src = "https://res.cloudinary.com/czingc/image/upload/c_scale,w_600/v1541205486/czingcAssets/fiveBrdsFIN.jpg">
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
