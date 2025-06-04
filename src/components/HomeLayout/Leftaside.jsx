import React, { Suspense } from 'react';
import Category from '../category';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback ={<span className="loading loading-ball loading-xl"></span>}>
            <Category></Category>
            </Suspense>
            
        </div>
    );
};

export default LeftAside;