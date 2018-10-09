import React from 'react'
import widgetStyle from './widgetStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class UploadImages extends React.Component{

	uploadWidget = () => {
        
        window.cloudinary.openUploadWidget({ 
        	cloud_name: 'czingc', 
        	upload_preset: 'wy0yfeog', 
			tags:['user'],
			stylesheet:widgetStyle
        },
            (error, result)=> {
				
                if(error){
					
                }else{
					// 
					fetch('http://localhost:3010/artworks/update', {
						method: 'POST',
						headers: {
						  Accept: 'application/json',
						  'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							_id:this.props._id,
							imgurl:result[0].secure_url, 
							public_id:result[0].public_id,
							alt: result[0].original_filename
						}),
						}).then((response) => response.json())
							.then((responseJson) => {
                                
								console.log("cloudinary response:",responseJson)
						}).catch((e)=>{
                            
                            alert(e);
						})
							  
                }
            });
    }

	render(){
		// 
		return (
			<div className="flex_upload" style = {styles.item2}>
                <div className="upload"  style = {styles.item2}>
                    <div style = {styles.item}
                    	onClick={this.uploadWidget} > <FontAwesomeIcon icon="image"></FontAwesomeIcon>
                        </div>
                </div>
            </div>
		)
	}


}
let styles = {
    item: {
        backgroundColor: "white",
        padding: "0 5px"
    },
    item2: {
        backgroundColor: "white"
    }
}

