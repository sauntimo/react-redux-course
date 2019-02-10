import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning</h4>
                <span>Are you sure you want to do this?</span>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatar={faker.image.avatar()}
                    author={faker.name.firstName()}
                    content={faker.lorem.sentence()}
                    time="Today at 4:45pm"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatar={faker.image.avatar()}
                    author={faker.name.firstName()}
                    content={faker.lorem.sentence()}
                    time="Today at 4:45pm"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatar={faker.image.avatar()}
                    author={faker.name.firstName()}
                    content={faker.lorem.sentence()}
                    time="Today at 4:45pm"
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));