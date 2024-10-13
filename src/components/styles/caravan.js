import styled from "styled-components";


export const Padding = styled.div`
padding: 37px;
`;

export const Background = styled.div`
h6{
    font-size: 16px;
}
h3{
    font-size: 27px;
}
h1{
    font-size: 80px;
}
`;
export const MainMotorCon = styled.div`
display: flex;
justify-content: center;
margin-top: 30px;
gap: 20px;
`;


export const Rightside = styled.div`
margin-top: 20px;
.mini-nav{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.mini-nav2{
    display: none;
}
.mini-nav-left{
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    margin-left:-70px
}
.mini-nav-right{
    display: flex;
    align-items: center;
    gap: 15px;
}
.sort-con{
    display: flex;
    align-items: center;
    gap: 10px;
}
.input-con{
    display: flex;
}
.select-input{
    width: 227px;
height: 30px;
border-radius: 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
padding: 8px 30px 8px 10px;
}
.down-con{
    width: 30px;
height: 30px;
border-radius: 0px 5px 5px 0px;
border: 1px solid rgba(55, 55, 55, 0.30);
margin-left: -30px;

}
.num-con{
    display: flex;
}
.num-input{
    width: 80px;
height: 30px;
border-radius: 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
padding: 8px 30px 8px 10px;
}
.down-con2{
    width: 30px;
height: 30px;
border-radius: 0px 5px 5px 0px;
border: 1px solid rgba(55, 55, 55, 0.30);
margin-left: -30px;
}
.menu-con{
    width: 41px;
height: 30px;
border-radius: 5px 0px 0px 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
}
.menu-con2{
    width: 41px;
height: 30px;
border-radius: 0px 5px 5px 0px;
border: 1px solid rgba(55, 55, 55, 0.30);
}
@media only screen and (max-width: 1200px){
    .mini-nav-left{
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    margin-left: 0px;

}
}
@media only screen and (max-width: 640px){
    .mini-nav{
        display: none;
    }
    .mini-nav2{
        display: grid;
        grid-template-areas: 'm m';
        justify-content: space-between;
    }
    .mini-nav-left{
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    margin-left: -150px;
}
}
`;
export const GridCaravan = styled.div`
display: grid;
grid-template-areas: 'a a a a';
gap: 20px;
margin-top: 30px;
@media only screen and (max-width: 960px){
    display: grid;
    grid-template-areas: 'a a a';
    justify-content: center;

}
@media only screen and (max-width: 700px){
    display: grid;
    grid-template-areas: 'a a';
}
@media only screen and (max-width: 470px){
    display: grid;
    grid-template-areas: 'a';
}
`;
export const Caravanmenu = styled.div`
width: 223px;
height: 307px;
padding: 10px;
border-radius: 20px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.50);
h5{
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
}
h2{
    margin-top: 18px;
}
.gap{
    display: flex;
    width: 100%;
    justify-content: space-between;
}
.order-but{
    width: 94px;
height: 35px;
font-size: 14px;
border-radius: 10px;
border: 1px solid var(--blue, #006DAB);
background-color: white;
color: #006DAB;
cursor: pointer;
margin-top: 13px;
}
.order-but:hover{
    background-color: #123b53;
}
`;
export const VmenuCaravan = styled.div`
`;
export const VmenuMenuCaravan = styled.div`
width: 955px;
height: 180px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.40);
border-radius: 18px;
margin-top: 20px;
padding: 18px;
display: flex;
.caravan-img{
    width: 280px;
    height: 143px;
    border-radius: 20px;
}
.right-side-caravan{
    width: 100%;
    
}
.name-of-car-caravan{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
   
}
h5{
    display: flex;
    justify-content: space-between;
}
.gap{
    display: flex;
    margin-top: 45px;
    gap: 14px;
}
.order-but-caravan{
  width: 100%;
height: 35px;
font-size: 14px;
border-radius: 10px;
border: 2px solid var(--blue, #006DAB);
background-color: white;
color: #006DAB;
cursor: pointer;
margin-top: 13px;
}
.order-but-caravan:hover{
    background-color: #123b53;
}
@media only screen and (max-width: 960px){
  width: 100%;
}
@media only screen and (max-width: 560px){
    .caravan-img{
        width: 200px;
    }
}
@media only screen and (max-width: 500px){
    .caravan-img{
        width: 150px;
    }
}
@media only screen and (max-width: 440px){
    .caravan-img{
        width: 100px;
    }
}
`;
export const Caravandetails = styled.div`
.add-but{
    padding: 15px;
    width: 181.5px;
height: 50.014px;
background: none;
border-radius: 10px;
border: 2px solid white;
color: white;
font-weight: bold;
cursor: pointer;
}
.add-but:hover{
    background-color: #006DAB;
}
div{
    display: flex;
    margin-top: 30px;
    gap: 12px;
}
`;
export const CaravandetailsMenu = styled.div`
.detailsmenu{
    display: flex;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
}
.first-car-img{
    max-width: 626px ;
    width: 90vmin;
height: 381px;


}
.right-detail{
    max-width: 600px;
    width: 90vmin;
height: 360px;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
padding: 30px 25px;

.name-cost{
    display: flex;
    justify-content: space-between;
}
.line-grey{
    margin-top: 10px;
    border: 1px solid grey;
}
.Company{
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
}
}
.container1{
    display: flex;
    align-items: center;
    justify-content: center;  
    margin-top :70px ;
}
.left-con-inside{
    width: 683px;
    padding: 70px;
}
.image-con-in{
    width: 683px;
height: 477px;
}
.cart-but-con{
    display: flex;
    gap: 12px;
    margin-top: 100px;
    button{
        width: 180px;
        height: 50px;
        border-radius: 10px;
        color: #006DAB;
        background-color: #FFF;
        border: 2px solid #006DAB;
        cursor: pointer;
    }
    button:hover{
        background-color: #006DAB;
        color: #FFF;
    }

}

.container2{
    display: flex;
    align-items: center;
    justify-content: center; 
    .image-con-in2{
    width: 683px;
height: 477px;
}
.left-con-inside2{
    width: 683px;
    padding: 70px;
}

}
@media only screen and (max-width: 1300px){
    .detailsmenu{
        display: flex;
        flex-direction: column;
    }
    .container1{
        display: flex;
        flex-direction:column-reverse;
    }
    .left-con-inside{
        padding: 0;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .container2{
        display: flex;
        flex-direction:column;
        .left-con-inside2{
        padding: 0;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    }
}
@media only screen and (max-width: 680px){
    .left-con-inside{
        max-width: 683px;
        width: 90vmin;
    }
    .image-con-in{
    max-width: 683px;
    width: 90vmin;
    height: 477px;
    }
    .container2{
    display: flex;
    align-items: center;
    justify-content: center; 
    .image-con-in2{
    max-width: 683px;
    width: 90vmin;
    height: 477px;
    }
    .left-con-inside2{
    width: 683px;
    width: 90vmin;
    }
    

}
}
`;
export const VanContainer = styled.div`
`;


