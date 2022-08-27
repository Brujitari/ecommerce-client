import './styles.scss'
import React from 'react'
import { Link } from "react-router-dom";

/* const mouseMoveHandler = (e) => {
    const eye = document.querySelectorAll(".eye");
    eye.forEach(function (eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        const y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        const radian = Math.atan2(e.pageX - x, e.pageY - y)
        const rot = (radian * (180 / Math.PI) * -1) + 270
        eye.style.transform = "rotate(" + rot +"deg)"
    })
} */
/* 
const mouseMoveHandler = (event) => {
    //var pageX = $(document).width();
    //var pageY = $(document).height();
    var mouseY=0;
    var mouseX=0;
        
      //verticalAxis
      mouseY = event.pageY;
      yAxis = (pageY/2-mouseY)/pageY*300; 
      //horizontalAxis
      mouseX = event.pageX / -pageX;
      xAxis = -mouseX * 100 - 100;
    
      $('.box__ghost-eyes').css({ 'transform': 'translate('+ xAxis +'%,-'+ yAxis +'%)' }); 
    
      //console.log('X: ' + xAxis);
} */

function routeNotFound() {
    return (
        <div className='NotFoundPage'>
            <div className="box">
                <div className="box__ghost">
                    <div className="symbol"></div>
                    <div className="symbol"></div>
                    <div className="symbol"></div>
                    <div className="symbol"></div>
                    <div className="symbol"></div>
                    <div className="symbol"></div>

                    <div className="box__ghost-container">
                        <div className="box__ghost-eyes">
                            <div className="box__eye-left"></div>
                            <div className="box__eye-right"></div>
                        </div>
                        <div className="box__ghost-bottom">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="box__ghost-shadow"></div>
                </div>

                <div className="box__description">
                    <div className="box__description-container">
                        <div className="box__description-title">Whoops!</div>
                        <div className="box__description-text">We couldn't find the page you were looking for</div>
                    </div>

                    <Link className="box__button" to="/homepage">Go back Home</Link>
                </div>
            </div>
        </div>
    )
}

export default routeNotFound