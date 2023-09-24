    
     function replaceimage(imagedata){
          return imagedata.map((data)=>{
              const img = new Image();
              img.src = data.src;
              img.alt = data.alt;
              img.title = data.title;
              return img;
          });
      };

     const newimagedata=[
          {src:"img/desktop_1_603508bf202d8_img_st_food.png" , alt:"resturan" , title:"رستوران"},
          {src:"img/desktop_4_603508a14ab73_img_st_supermarket.png" , alt:"supermarket" , title:"سوپرمارکت<"},
          {src:"img/desktop_2_603508b330711_img_st_cafe.png" , alt:"cofee" , title:"کافه"},
          {src:"img/desktop_3_603508a95b9be_img_st_sweet.png" , alt:"شیرینی" , title:"شیرینی"},
     ];

     let newreplaceimage=replaceimage(newimagedata);



