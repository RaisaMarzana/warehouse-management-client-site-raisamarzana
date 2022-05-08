import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center mt-10">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;