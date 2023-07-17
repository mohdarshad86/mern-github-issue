import React from 'react';
import IssueItem from './IssueItem';

const IssueList = ({ issues }) => {
    return (
        <div className="issue-list">
            {
                issues.map((issue) => (
                    <IssueItem key={issue.id} issue={issue} />
                ))}
        </div>
    );
};

export default IssueList;