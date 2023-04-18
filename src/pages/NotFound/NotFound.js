import React from 'react';
import './notfound.css';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div class="o-404">
            <h1 class="a-title">404</h1>
            <p class="a-message">
                Algo deu errado...
            </p>
            <div class="o-cat">
                <div class="m-ears">
                    <div class="m-ear -right"></div>
                    <div class="m-ear -left"></div>

                </div>
                <div class="m-face">
                    <div class="m-eyes">
                        <div class="m-eye -left">
                            <div class="a-eyePupil"></div>
                        </div>
                        <div class="m-eye -right">
                            <div class="a-eyePupil"></div>
                        </div>
                    </div>
                    <div class="m-nose"></div>
                </div>

            </div>

            <button className='btn_error'>
                <Link to="/">Voltar</Link>
            </button>
        </div>
    )
}

export default NotFound