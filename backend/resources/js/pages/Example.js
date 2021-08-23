import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">pagesディレクトリに移動</div>
                        
                        <Button color="secondary" variant="contained" hred={`home`}>HOMEに戻る</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;