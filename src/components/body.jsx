export default function(img){
    let imageData = img.imageData;
    //   console.log(img)
     return(
        <div>
        {
          imageData.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
        }
      </div>
    )
  }